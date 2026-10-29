import { experience } from "@/lib/data";

export default function ExperiencePreview() {
  return (
    <div className="exp-list">
      {experience.map((x, i) => (
        <div key={x.role} className="exp-row card reveal" style={{ "--d": `${i * 90}ms` }}>
          <span className="exp-period">{x.period}</span>
          <div className="exp-main"><h3>{x.role}</h3><span>{x.company}</span></div>
          <p>{x.points[0]}</p>
        </div>
      ))}
    </div>
  );
}
