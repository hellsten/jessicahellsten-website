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

  if (req.method === "GET") {
    const count = (await store.get(`count:${page}`, { type: "json" })) || 0;
    return json({ count, page });
  }

  if (req.method === "POST") {
    const ip = context.ip || "unknown";

    // all-time unique visitor key per page
    const visitorKey = hash(`${ip}:${page}`);

    const exists = await store.get(`visitor:${visitorKey}`);

    if (!exists) {
      const current = (await store.get(`count:${page}`, { type: "json" })) || 0;

      await store.set(`visitor:${visitorKey}`, "1");
      await store.set(`count:${page}`, current + 1);

      return json({
        count: current + 1,
        counted: true,
        page,
      });
    }

    const count = (await store.get(`count:${page}`, { type: "json" })) || 0;

    return json({
      count,
      counted: false,
      page,
    });
  }

  return json({ error: "Method not allowed" }, 405);
};