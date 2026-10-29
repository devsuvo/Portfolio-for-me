import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import { profile } from "@/lib/data";

const icons = { github: FaGithub, linkedin: FaLinkedinIn, fiverr: SiFiverr, website: FiGlobe, whatsapp: FaWhatsapp };

export default function Socials() {
  return (
    <div className="socials">
      {Object.entries(profile.socials).map(([k, url]) => {
        const Icon = icons[k] || FiGlobe;
        return (
          <a key={k} href={url} target="_blank" rel="noopener noreferrer" className="social" aria-label={k} title={k}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
