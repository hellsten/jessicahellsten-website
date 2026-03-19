import { getStore } from "@netlify/blobs";
import crypto from "node:crypto";

const store = getStore("portfolio-counters");

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const hash = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

export default async (req, context) => {
  const url = new URL(req.url);
  const page = url.searchParams.get("page") || "home";

  try {
    if (req.method === "GET") {
      const count = (await store.get(`count:${page}`, { type: "json" })) || 0;
      return json({ count, page });
    }

    if (req.method === "POST") {
      const ip =
        context.ip ||
        req.headers.get("x-forwarded-for") ||
        "unknown";

      const visitorKey = `visitor:${page}:${hash(ip)}`;
      const alreadyCounted = await store.get(visitorKey, { type: "json" });

      let count = (await store.get(`count:${page}`, { type: "json" })) || 0;

      if (!alreadyCounted) {
        count += 1;
        await store.set(`count:${page}`, count);
        await store.set(visitorKey, true);
      }

      return json({ count, page });
    }

    return json({ error: "Method not allowed" }, 405);
  } catch (error) {
    console.error("Counter function failed:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
};