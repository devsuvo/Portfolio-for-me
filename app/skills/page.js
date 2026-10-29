import Link from "next/link";
import { FiMonitor, FiServer, FiLayout, FiPenTool } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import { skills } from "@/lib/data";

export const metadata = { title: "Skills" };
const icons = { Frontend: FiMonitor, Backend: FiServer, "CMS & Platforms": FiLayout, "Design & Tools": FiPenTool };
const top = [["WordPress", 97], ["React", 88], ["Next.js", 85], ["Laravel", 78]];

export default function Skills() {
  return (
    <main>
      <PageHeader eyebrow="Skills" title={<>My <span className="grad-text">tech stack</span></>} sub="The tools and technologies I use to bring ideas to life." />
      <section className="section pt-0">
        <div className="container">
          <div className="rings">
            {top.map(([n, v], i) => (
              <div key={n} className="ring-card card reveal" style={{ "--d": `${i * 100}ms`, "--v": v }}>
                <div className="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" className="ring-fill" pathLength="100" /></svg><strong>{v}%</strong></div>
                <span>{n}</span>
              </div>
            ))}
          </div>
          <div className="skills-grid">
            {skills.map((g, gi) => {
              const Icon = icons[g.category] || FiMonitor;
              return (
                <div key={g.category} className="skill-card card reveal" style={{ "--d": `${(gi % 2) * 120}ms` }}>
                  <h3><span className="skill-icon"><Icon /></span>{g.category}</h3>
                  {g.items.map((s) => (
                    <div key={s.name} className="skill">
                      <div className="skill-top"><span>{s.name}</span><span>{s.level}%</span></div>
                      <div className="bar"><div className="bar-fill" style={{ "--w": `${s.level}%` }} /></div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="center reveal"><Link href="/education" className="btn btn-ghost">Next: Education & Experience →</Link></div>
        </div>
      </section>
    </main>
  );
}
