import Link from "next/link";
import { profile } from "@/lib/data";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta reveal">
          <h2>Have a project in mind? <span className="grad-text">Let's build it.</span></h2>
          <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
        </div>
        <div className="footer-inner">
          <div>
            <Link href="/" className="logo"><span className="logo-mark">S</span>{profile.firstName}<span className="grad-text">.dev</span></Link>
            <p>{profile.designation} · {profile.location}</p>
          </div>
          <div className="footer-links">
            {["about", "services", "skills", "education", "projects", "contact"].map((l) => (
              <Link key={l} href={`/${l}`}>{l[0].toUpperCase() + l.slice(1)}</Link>
            ))}
          </div>
          <Socials />
        </div>
        <p className="copy">© {new Date().getFullYear()} {profile.name}. Crafted with Next.js & care.</p>
      </div>
    </footer>
  );
}
