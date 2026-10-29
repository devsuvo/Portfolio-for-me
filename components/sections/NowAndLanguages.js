import { now, languages } from "@/lib/data";

export default function NowAndLanguages() {
  return (
    <div className="now-grid">
      <div className="now card reveal">
        <div className="now-head"><span className="live-dot" /> What I'm up to right now</div>
        <ul>{now.map((n, i) => <li key={i}><span>{n.emoji}</span>{n.text}</li>)}</ul>
      </div>
      <div className="langs card reveal" style={{ "--d": "120ms" }}>
        <div className="now-head">🌐 Languages I speak</div>
        {languages.map((l) => (
          <div key={l.name} className="skill">
            <div className="skill-top"><span>{l.flag} {l.name}</span><span>{l.level}</span></div>
            <div className="bar"><div className="bar-fill" style={{ "--w": `${l.value}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
