import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <main>
      <PageHeader eyebrow="Projects" title={<>Featured <span className="grad-text">projects</span></>} sub="Real products I've designed, built and shipped live." />
      <section className="section pt-0">
        <div className="container projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>
      </section>
    </main>
  );
}
