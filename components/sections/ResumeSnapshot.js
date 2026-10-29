import { FiDownload } from "react-icons/fi";
import { profile, experience, education } from "@/lib/data";

// One-glance summary of the resume, with a download button.
export default function ResumeSnapshot() {
  const schools = education.filter((e) => e.degree.includes("Certificate ("));
  const certs = education.find((e) => e.degree === "Certifications");
  return (
    <div className="snapshot card reveal">
      <div className="snapshot-top">
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.designation} · {profile.location}</p>
        </div>
        <a href={profile.resume} download="Suvo-Dev-Resume.pdf" className="btn btn-primary"><FiDownload /> Download PDF</a>
      </div>
      <div className="snapshot-grid">
        <div>
          <h4>Experience</h4>
          {experience.map((e) => (
            <div key={e.role + e.company} className="snap-row">
              <b>{e.role}</b>
              <span>{e.company.split(" · ")[0]} · {e.period}</span>
            </div>
          ))}
        </div>
        <div>
          <h4>Education</h4>
          {schools.map((e) => (
            <div key={e.degree} className="snap-row"><b>{e.degree}</b><span>{e.period}</span></div>
          ))}
          {certs && (
            <>
              <h4>Certifications</h4>
              <p className="snap-cert">{certs.details}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
