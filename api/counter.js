import { Redis } from "@upstash/redis";
import crypto from "node:crypto";

const redis = Redis.fromEnv();

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const hash = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

const getClientIp = (request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
};

export async function GET(request) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "home";

  const count = Number((await redis.get(`count:${page}`)) || 0);

  return json({ count, page });
}

export async function POST(request) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "home";

  const ip = getClientIp(request);
  const visitorKey = hash(`${ip}:${page}`);

  const exists = await redis.get(`visitor:${visitorKey}`);

  if (!exists) {
    const current = Number((await redis.get(`count:${page}`)) || 0);
    const next = current + 1;

    await redis.set(`visitor:${visitorKey}`, "1");
    await redis.set(`count:${page}`, next);

    return json({
      count: next,
      counted: true,
      page,
    });
  }

  const count = Number((await redis.get(`count:${page}`)) || 0);

  return json({
    count,
    counted: false,
    page,
  });
}