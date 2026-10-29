import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import { profile } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    { href: `mailto:${profile.email}`, icon: FiMail, label: "Email", value: profile.email },
    { href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: FiPhone, label: "Phone", value: profile.phone },
    { href: `https://wa.me/${profile.whatsapp}`, icon: FaWhatsapp, label: "WhatsApp", value: `+${profile.whatsapp}`, wa: true, ext: true },
  ];
  return (
    <main>
      <PageHeader eyebrow="Contact" title={<>Let's <span className="grad-text">work together</span></>} sub="Have a project or an opportunity? Tell me what you're building — I'll reply within 24 hours." />
      <section className="section pt-0">
        <div className="container contact-grid">
          <div className="contact-list">
            {items.map((c, i) => (
              <a key={c.label} href={c.href} {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="contact-item card reveal" style={{ "--d": `${i * 90}ms` }}>
                <span className={`c-icon ${c.wa ? "wa" : ""}`}><c.icon /></span>
                <div><small>{c.label}</small><strong>{c.value}</strong></div>
              </a>
            ))}
            <div className="contact-item card reveal" style={{ "--d": "270ms" }}>
              <span className="c-icon"><FiMapPin /></span>
              <div><small>Location</small><strong>{profile.location}</strong></div>
            </div>
            <div className="contact-note card reveal" style={{ "--d": "360ms" }}>
              <p><FiClock /> Usually replies within 24 hours (GMT+6)</p>
              <Socials />
            </div>
          </div>
          <div className="reveal" style={{ "--d": "150ms" }}><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
