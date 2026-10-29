"use client";
import { useEffect, useRef } from "react";

// Soft light that follows the mouse (desktop only).
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e) => {
      if (ref.current) ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      const card = e.target.closest?.(".card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--sx", `${e.clientX - r.left}px`);
        card.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}
