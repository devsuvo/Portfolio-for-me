import Link from "next/link";
import { FiDownload, FiArrowRight, FiMapPin, FiCheck } from "react-icons/fi";
import Typewriter from "@/components/Typewriter";
import Socials from "@/components/Socials";
import Counter from "@/components/Counter";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/sections/ProjectCard";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import NowAndLanguages from "@/components/sections/NowAndLanguages";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import Faq from "@/components/sections/Faq";
import Principles from "@/components/sections/Principles";
import AiWork from "@/components/sections/AiWork";
import Toolbox from "@/components/sections/Toolbox";
import ResumeSnapshot from "@/components/sections/ResumeSnapshot";
import CtaBanner from "@/components/sections/CtaBanner";
import { profile, about, skills, projects } from "@/lib/data";

export default function Home() {
  const tech = skills.flatMap((g) => g.items.map((s) => s.name));
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="badge reveal"><span className="dot" /> Available for freelance & full-time work</span>
            <h1 className="reveal" style={{ "--d": "80ms" }}>Hi, I'm <span className="grad-text shine">{profile.name}</span></h1>
            <div className="role reveal" style={{ "--d": "160ms" }}><Typewriter words={profile.roles} /></div>
            <p className="lead reveal" style={{ "--d": "240ms" }}>{profile.tagline}</p>
            <div className="hero-actions reveal" style={{ "--d": "320ms" }}>
              <a href={profile.resume} download="Suvo-Dev-Resume.pdf" className="btn btn-primary"><FiDownload /> Download Resume</a>
              <Link href="/projects" className="btn btn-ghost">View My Work <FiArrowRight /></Link>
            </div>
            <div className="hero-foot reveal" style={{ "--d": "400ms" }}>
              <Socials />
              <span className="hero-loc"><FiMapPin /> {profile.location}</span>
            </div>
          </div>
          <div className="reveal" style={{ "--d": "200ms" }}>
            <div className="photo-wrap">
              <div className="photo-ring" />
              <div className="orbit"><span /></div>
              <img src={profile.photo} alt={profile.name} className="photo" />
              <div className="float-chip chip-1">⚛️ React / Next.js</div>
              <div className="float-chip chip-2">🚀 5+ Years Experience</div>
              <div className="float-chip chip-3">⭐ 99% Satisfaction</div>
            </div>
          </div>
        </div>
        <a href="#stats" className="scroll-hint" aria-label="Scroll down"><span /></a>
      </section>

      <div className="container trusted reveal">
        <span>Trusted by teams & clients at</span>
        <div className="trusted-logos">
          {["Hexa's Zindabazar", "GreatestDeals LLC", "MetaTechDesk", "Fiverr Pro Clients", "codersd.com"].map((n) => <b key={n}>{n}</b>)}
        </div>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">{[...tech, ...tech].map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div>
      </div>

      {/* Stats */}
      <section id="stats" className="section">
        <div className="container stats-row">
          {[...about.stats, { value: "20+", label: "Technologies" }].map((s, i) => (
            <div key={s.label} className="stat card reveal" style={{ "--d": `${i * 100}ms` }}>
              <strong className="grad-text"><Counter value={s.value} /></strong><span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section pt-0">
        <div className="container about-preview">
          <div className="reveal">
            <SectionHead left eyebrow="About me" title={<>Turning ideas into <span className="grad-text">fast, beautiful</span> websites</>} />
            <p className="muted">{about.paragraphs[0]}</p>
            <ul className="checks">
              {["110+ projects for clients in the US, Europe & Bangladesh", "Full stack: React, Next.js, TypeScript, PHP & Laravel", "WordPress, Shopify, Wix & Webflow expert", "UI/UX and SEO built into every project"].map((c) => (
                <li key={c}><FiCheck /> {c}</li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-ghost">More about me <FiArrowRight /></Link>
          </div>
          <div className="about-collage reveal" style={{ "--d": "150ms" }}>
            <div className="collage-main card"><img src={profile.photo} alt={profile.name} /></div>
            <div className="collage-badge ba card"><strong className="grad-text"><Counter value="5+" /></strong><span>Years of<br />experience</span></div>
            <div className="collage-badge bb card"><strong className="grad-text"><Counter value="99%" /></strong><span>Happy<br />clients</span></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Services" title={<>What I can <span className="grad-text">do for you</span></>} sub="Everything you need to launch, grow and maintain your online presence." />
          <Services />
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Portfolio" title={<>Featured <span className="grad-text">projects</span></>} sub="Real products I've designed, built and shipped live." />
          <div className="projects-grid">{projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Process" title={<>How I <span className="grad-text">work</span></>} sub="A simple, transparent process — from first message to launch day." />
          <Process />
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Principles" title={<>Principles I <span className="grad-text">build by</span></>} sub="The rules I follow on every project, big or small." />
          <Principles />
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Experience" title={<>Where I've <span className="grad-text">worked</span></>} />
          <ExperiencePreview />
          <div className="center reveal"><Link href="/education" className="btn btn-ghost">Education & full experience <FiArrowRight /></Link></div>
        </div>
      </section>

      {/* AI */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="AI in my workflow" title={<>Building with AI as a <span className="grad-text">collaborator</span></>} sub="AI helps me move faster. I stay responsible for quality." />
          <AiWork />
        </div>
      </section>

      {/* Toolbox */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Toolbox" title={<>The tools behind <span className="grad-text">the work</span></>} sub="What I open every day to design, build and ship." />
          <Toolbox />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title={<>What clients <span className="grad-text">say</span></>} sub="Consistent five-star reviews from clients around the world." />
          <Testimonials />
        </div>
      </section>

      {/* Now + Languages */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Right now" title={<>Always learning, <span className="grad-text">always building</span></>} />
          <NowAndLanguages />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title={<>Common <span className="grad-text">questions</span></>} />
          <Faq />
        </div>
      </section>

      {/* Resume */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Resume" title={<>The short version, <span className="grad-text">at a glance</span></>} sub="My experience and education in one place." />
          <ResumeSnapshot />
        </div>
      </section>

      {/* Call to action */}
      <section className="section">
        <div className="container">
          <CtaBanner />
        </div>
      </section>
    </main>
  );
}
