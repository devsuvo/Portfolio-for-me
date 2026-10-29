import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "@/lib/data";

export default function CtaBanner() {
  return (
    <div className="cta reveal">
      <div>
        <h2>Have a project in mind?<br />Let&apos;s talk.</h2>
        <p>Tell me what you&apos;re building. I reply within 24 hours with honest thoughts and a plan.</p>
        <Link href="/contact" className="btn btn-dark">Start a project <FiArrowRight /></Link>
      </div>
      <div className="cta-links">
        <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
        <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> {profile.phone}</a>
      </div>
    </div>
  );
}
