import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((t, i) => (
        <figure key={t.name} className="quote card reveal" style={{ "--d": `${i * 110}ms` }}>
          <div className="stars">★★★★★</div>
          <blockquote>“{t.quote}”</blockquote>
          <figcaption>
            <span className="avatar">{t.name[0]}</span>
            <div><strong>{t.name}</strong><small>{t.role} · {t.country}</small></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
