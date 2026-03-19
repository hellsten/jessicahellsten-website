import { Redis } from "@upstash/redis";
import crypto from "node:crypto";

const redis = Redis.fromEnv();

const hash = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

const getClientIp = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
};

export default async function handler(req, res) {
  try {
    const page = req.query.page || "home";

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");

    if (req.method === "GET") {
      const count = Number((await redis.get(`count:${page}`)) || 0);
      return res.status(200).json({ count, page });
    }

    if (req.method === "POST") {
      const ip = getClientIp(req);
      const visitorKey = hash(`${ip}:${page}`);

      const exists = await redis.get(`visitor:${visitorKey}`);

      if (!exists) {
        const next = await redis.incr(`count:${page}`);
        await redis.set(`visitor:${visitorKey}`, "1");

        return res.status(200).json({
          count: Number(next),
          counted: true,
          page,
        });
      }

      const count = Number((await redis.get(`count:${page}`)) || 0);

      return res.status(200).json({
        count,
        counted: false,
        page,
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Counter API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}