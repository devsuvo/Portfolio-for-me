import { aiWork } from "@/lib/data";

export default function AiWork() {
  return (
    <div className="ai-box card reveal">
      <p className="ai-intro">{aiWork.intro}</p>
      <div className="ai-grid">
        {aiWork.items.map((a) => (
          <div key={a.title} className="ai-item">
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
      <div className="ai-tools">
        <span>In practice:</span>
        {aiWork.tools.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}
