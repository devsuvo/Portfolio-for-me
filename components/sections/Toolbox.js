import { toolbox } from "@/lib/data";

export default function Toolbox() {
  return (
    <div className="toolbox">
      {toolbox.map((g, i) => (
        <div key={g.group} className="tool-col reveal" style={{ "--d": `${i * 80}ms` }}>
          <h3>{g.group}</h3>
          <ul>{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
