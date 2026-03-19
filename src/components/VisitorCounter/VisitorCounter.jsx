import { useEffect, useState } from "react";

function VisitorCounter({ page = "home" }) {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const res = await fetch(`/api/counter?page=${page}`, {
          method: "POST",
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }

        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Counter error:", err);
        setError("Counter unavailable");
      }
    };

    trackVisit();
  }, [page]);

  if (error) {
    return <p>{error}</p>;
  }

  return <p>{count !== null ? `Visitors: ${count} ` : "Loading..."}</p>;
}

export default VisitorCounter;