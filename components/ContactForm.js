"use client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { profile } from "@/lib/data";

// Opens the visitor's email app with the message pre-filled (no backend needed).
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(f.subject || `Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const field = (k, label, type = "text") => (
    <div className="field">
      <input id={k} required={k !== "subject"} type={type} placeholder=" " value={f[k]} onChange={set(k)} />
      <label htmlFor={k}>{label}</label>
    </div>
  );
  return (
    <form className="form card" onSubmit={submit}>
      <h3>Send me a message</h3>
      <p>Fill this in and your email app will open with everything ready to send.</p>
      <div className="form-row">{field("name", "Your name")}{field("email", "Your email", "email")}</div>
      {field("subject", "Subject (optional)")}
      <div className="field">
        <textarea id="message" required placeholder=" " value={f.message} onChange={set("message")} />
        <label htmlFor="message">Tell me about your project…</label>
      </div>
      <button className="btn btn-primary" type="submit"><FiSend /> Send Message</button>
      {sent && <span className="sent">✓ Opening your email app…</span>}
    </form>
  );
}
