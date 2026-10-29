import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLayers, FiFileText, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";
import { projects, profile } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.name} | ${profile.name}` : "Project" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="detail">
        <div className="container">
          <Link href="/projects" className="back reveal"><FiArrowLeft /> Back to projects</Link>
          <h1 className="reveal" style={{ "--d": "60ms" }}>{p.name}</h1>
          <p className="detail-lead reveal" style={{ "--d": "120ms" }}>{p.short}</p>
          <div className="detail-actions reveal" style={{ "--d": "180ms" }}>
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FiExternalLink /> Live Site</a>
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><FiGithub /> GitHub (Client)</a>}
          </div>
          <div className="detail-img card reveal zoom-in"><img src={p.image} alt={p.name} /></div>
          <div className="detail-grid">
            <section className="detail-block card full reveal">
              <h2><span className="skill-icon"><FiLayers /></span>Technology Stack</h2>
              <div className="stack-tags">{p.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </section>
            <section className="detail-block card full reveal">
              <h2><span className="skill-icon"><FiFileText /></span>Description</h2>
              <p>{p.description}</p>
            </section>
            <section className="detail-block card reveal">
              <h2><span className="skill-icon"><FiAlertTriangle /></span>Challenges Faced</h2>
              <ul>{p.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
            </section>
            <section className="detail-block card reveal">
              <h2><span className="skill-icon"><FiTrendingUp /></span>Improvements & Future Plans</h2>
              <ul>{p.future.map((c) => <li key={c}>{c}</li>)}</ul>
            </section>
          </div>
        </div>
      </main>
  );
}
