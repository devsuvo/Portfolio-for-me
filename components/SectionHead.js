export default function SectionHead({ eyebrow, title, sub, left }) {
  return (
    <div className={`section-head reveal ${left ? "left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
