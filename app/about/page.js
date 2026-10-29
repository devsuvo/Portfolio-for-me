import Link from "next/link";
import { FiMapPin, FiDownload, FiCode, FiHeart, FiZap } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import Counter from "@/components/Counter";
import { profile, about } from "@/lib/data";
import SectionHead from "@/components/SectionHead";
import NowAndLanguages from "@/components/sections/NowAndLanguages";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = { title: "About" };
const icons = [FiCode, FiZap, FiHeart, FiHeart];
const titles = ["My journey", "Experience", "What I enjoy", "Beyond code"];

export default function About() {
  return (
    <main>
      <PageHeader eyebrow="About" title={<>Get to know <span className="grad-text">me</span></>} sub="A developer who cares about the details — and the people using what I build." />
      <section className="section pt-0">
        <div className="container about-grid">
          <div className="about-photo reveal">
            <div className="about-photo-frame card"><img src={profile.photo} alt={profile.name} /></div>
            <div className="about-meta card">
              <p><FiMapPin /> {profile.location}</p>
              <a href={profile.resume} download className="btn btn-primary w-full"><FiDownload /> Download Resume</a>
            </div>
          </div>
          <div className="about-story">
            {about.paragraphs.map((p, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="story card reveal" style={{ "--d": `${i * 90}ms` }}>
                  <span className="skill-icon"><Icon /></span>
                  <div><h3>{titles[i]}</h3><p>{p}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          <div className="stats-row">
            {about.stats.map((s, i) => (
              <div key={s.label} className="stat card reveal" style={{ "--d": `${i * 100}ms` }}>
                <strong className="grad-text"><Counter value={s.value} /></strong><span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hobbies card reveal">
            <h3>When I'm not coding</h3>
            <div className="tags">{about.hobbies.map((h, i) => <span key={h} className="tag pop" style={{ "--d": `${i * 70}ms` }}>{h}</span>)}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Right now" title={<>Always learning, <span className="grad-text">always building</span></>} />
          <NowAndLanguages />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title={<>What clients <span className="grad-text">say</span></>} />
          <Testimonials />
          <div className="center reveal"><Link href="/skills" className="btn btn-ghost">Next: My Skills →</Link></div>
        </div>
      </section>
    </main>
  );
}
