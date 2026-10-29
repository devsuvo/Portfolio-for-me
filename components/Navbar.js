"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  useEffect(() => setOpen(false), [path]);

  const isActive = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <nav className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">S</span>{profile.firstName}<span className="grad-text">.dev</span>
        </Link>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>{l.label}</Link>
          ))}
          <Link href="/contact" className={`nav-cta ${isActive("/contact") ? "on" : ""}`}>Contact Me</Link>
        </div>
      </div>
      <div className="progress" style={{ width: `${progress}%` }} />
    </nav>
  );
}
