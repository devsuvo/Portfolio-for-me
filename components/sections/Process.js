import { process } from "@/lib/data";

export default function Process() {
  return (
    <div className="process">
      {process.map((p, i) => (
        <div key={p.step} className="process-step reveal" style={{ "--d": `${i * 120}ms` }}>
          <div className="process-dot"><span>{p.step}</span></div>
          <div className="process-body card">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
