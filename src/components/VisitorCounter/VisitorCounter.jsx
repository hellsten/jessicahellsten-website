import { useEffect, useState } from "react";

function VisitorCounter({ page = "home" }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const key = `visitor-count:${page}`;
    const seenKey = `visitor-seen:${page}`;

    const current = Number(localStorage.getItem(key) || "0");
    const alreadySeen = localStorage.getItem(seenKey) === "1";

    if (!alreadySeen) {
      const next = current + 1;
      localStorage.setItem(key, String(next));
      localStorage.setItem(seenKey, "1");
      setCount(next);
    } else {
      setCount(current);
    }
  }, [page]);

  return <p>{count !== null ? `Visitors: ${count}` : "Loading..."}</p>;
}

export default VisitorCounter;