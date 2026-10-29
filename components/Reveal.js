"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds "in" to .reveal elements as they scroll into view. Re-runs on every page change.
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      if (!("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("in"));
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      window.__revealIO?.disconnect();
      window.__revealIO = io;
    }, 30);
    return () => clearTimeout(t);
  }, [path]);
  return null;
}
