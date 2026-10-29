import { principles } from "@/lib/data";

export default function Principles() {
  return (
    <div className="principles">
      {principles.map((p, i) => (
        <div key={p.title} className="principle card reveal" style={{ "--d": `${(i % 4) * 80}ms` }}>
          <span className="principle-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}
