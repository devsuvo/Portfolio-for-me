import Link from "next/link";

export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="crumbs reveal"><Link href="/">Home</Link><span>/</span>{eyebrow}</div>
        <h1 className="reveal" style={{ "--d": "80ms" }}>{title}</h1>
        {sub && <p className="reveal" style={{ "--d": "160ms" }}>{sub}</p>}
      </div>
    </header>
  );
}
