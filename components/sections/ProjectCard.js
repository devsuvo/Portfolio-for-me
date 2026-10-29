import Link from "next/link";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import Tilt from "@/components/Tilt";

export default function ProjectCard({ p, i }) {
  return (
    <div className="reveal" style={{ "--d": `${(i % 2) * 120}ms` }}>
      <Tilt className="project-card card">
        <div className="project-img">
          <img src={p.image} alt={p.name} loading="lazy" />
          <span className="project-num">0{i + 1}</span>
        </div>
        <div className="project-body">
          <h3>{p.name}</h3>
          <p>{p.short}</p>
          <div className="mini-tags">{p.stack.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
          <div className="project-actions">
            <Link href={`/projects/${p.slug}`} className="btn btn-primary">View Details <FiArrowUpRight /></Link>
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live site"><FiExternalLink /></a>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
