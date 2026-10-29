"use client";
import { useEffect, useRef, useState } from "react";

// Counts up from 0 when scrolled into view. Accepts values like "110+" or "99%".
export default function Counter({ value }) {
  const num = parseInt(value, 10) || 0;
  const suffix = value.replace(/^\d+/, "");
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(num * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [num]);
  return <span ref={ref}>{n}{suffix}</span>;
}
