"use client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

// Sends the message straight to my inbox through Web3Forms.
// The access key is public by design (it only allows sending to my email).
const ACCESS_KEY = "3e3eec65-19a3-490d-b16a-904546d22af2";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: f.subject || `Portfolio message from ${f.name}`,
          from_name: "Suvo Dev Portfolio",
          name: f.name,
          email: f.email,
          message: f.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      setF({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (k, label, type = "text") => (
    <div className="field">
      <input id={k} name={k} required={k !== "subject"} type={type} placeholder=" " value={f[k]} onChange={set(k)} />
      <label htmlFor={k}>{label}</label>
    </div>
  );

  return (
    <form className="form card" onSubmit={submit}>
      <h3>Send me a message</h3>
      <p>Fill this in and I&apos;ll get your message straight in my inbox.</p>
      <div className="form-row">{field("name", "Your name")}{field("email", "Your email", "email")}</div>
      {field("subject", "Subject (optional)")}
      <div className="field">
        <textarea id="message" name="message" required placeholder=" " value={f.message} onChange={set("message")} />
        <label htmlFor="message">Tell me about your project…</label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        <FiSend /> {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && <span className="sent">✓ Thanks! Your message has been sent. I&apos;ll reply within 24 hours.</span>}
      {status === "error" && <span className="sent" style={{ color: "#f87171" }}>Something went wrong. Please email or WhatsApp me instead.</span>}
    </form>
  );
}
