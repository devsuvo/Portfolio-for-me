import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main>
      <PageHeader eyebrow="Services" title={<>What I <span className="grad-text">do</span></>} sub="From WordPress marketing sites to full-stack React apps — everything you need to launch and grow online." />
      <section className="section pt-0"><div className="container"><Services /></div></section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Process" title={<>How I <span className="grad-text">work</span></>} sub="A simple, transparent process — no surprises." />
          <Process />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title={<>Common <span className="grad-text">questions</span></>} />
          <Faq />
          <div className="center reveal"><Link href="/contact" className="btn btn-primary">Start your project →</Link></div>
        </div>
      </section>
    </main>
  );
}
