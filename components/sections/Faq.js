"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item card reveal ${open === i ? "open" : ""}`} style={{ "--d": `${i * 70}ms` }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span><FiPlus className="faq-icon" />
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
