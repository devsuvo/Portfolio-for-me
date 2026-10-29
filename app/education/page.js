import Link from "next/link";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import { education, experience } from "@/lib/data";

export const metadata = { title: "Education & Experience" };

export default function Education() {
  return (
    <main>
      <PageHeader eyebrow="Education" title={<>Education & <span className="grad-text">Experience</span></>} sub="Where I learned, and where I've put it to work." />
      <section className="section pt-0">
        <div className="container two-col">
          <div>
            <h2 className="col-title reveal"><span className="skill-icon"><FiBookOpen /></span>Education</h2>
            <div className="timeline">
              {education.map((e, i) => (
                <div key={e.degree} className="t-item card reveal" style={{ "--d": `${i * 100}ms` }}>
                  <span className="t-period">{e.period}</span>
                  <h4>{e.degree}</h4>
                  <div className="t-org">{e.school}</div>
                  <p>{e.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="col-title reveal"><span className="skill-icon"><FiBriefcase /></span>Experience</h2>
            <div className="timeline">
              {experience.map((x, i) => (
                <div key={x.role} className="t-item card reveal" style={{ "--d": `${i * 100}ms` }}>
                  <span className="t-period">{x.period}</span>
                  <h4>{x.role}</h4>
                  <div className="t-org">{x.company}</div>
                  <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="center reveal"><Link href="/projects" className="btn btn-ghost">Next: Projects →</Link></div>
      </section>
    </main>
  );
}
