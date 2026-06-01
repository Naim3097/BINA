"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/dict";

const WA_NAJIHA = "60193428981";
const WA_SYAFIQ = "60134315051";

const COPY = {
  en: {
    name: "Your name",
    namePh: "How should we address you?",
    phone: "Phone or WhatsApp",
    phonePh: "+60 12-345 6789",
    email: "Email",
    emailPh: "Optional",
    interest: "What are you looking for?",
    interestPh: "Pick the closest fit",
    interestOpts: [
      "Design & Build (new home)",
      "Renovation or extension",
      "Interior fit-out",
      "Not sure yet",
    ],
    area: "Property area",
    areaPh: "Shah Alam, Subang Jaya, PJ, etc.",
    message: "Brief description",
    messagePh: "Floor plan link, scope, anything useful.",
    submit: "Send message",
    errorReq: "Please fill in your name, phone and what you're looking for.",
    successPrefix: "Thanks. We're opening a chat with your details now. If nothing happens, ",
    successLink: "tap here →",
  },
  ms: {
    name: "Nama anda",
    namePh: "Apa nama anda?",
    phone: "Telefon atau WhatsApp",
    phonePh: "+60 12-345 6789",
    email: "E-mel",
    emailPh: "Pilihan",
    interest: "Apa yang anda cari?",
    interestPh: "Pilih yang paling sesuai",
    interestOpts: [
      "Reka & Bina (rumah baru)",
      "Renovasi atau sambungan",
      "Pemasangan dalaman",
      "Belum pasti",
    ],
    area: "Kawasan hartanah",
    areaPh: "Shah Alam, Subang Jaya, PJ, dll.",
    message: "Penerangan ringkas",
    messagePh: "Link pelan lantai, skop, apa-apa yang berguna.",
    submit: "Hantar mesej",
    errorReq: "Sila isi nama, telefon dan apa yang anda cari.",
    successPrefix: "Terima kasih. Kami sedang buka sembang dengan butiran anda. Kalau tak terbuka, ",
    successLink: "tekan sini →",
  },
} as const;

export default function ContactForm({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const [waUrl, setWaUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if (fd.get("website")) return;

    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const interest = String(fd.get("interest") || "");
    const area = String(fd.get("area") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !phone || !interest) {
      setState("err");
      setErrMsg(c.errorReq);
      return;
    }

    // Compose WhatsApp message
    const intro = locale === "ms"
      ? "Hai BINA+! Saya hubungi melalui borang kenalan."
      : "Hi BINA+! I'm reaching out via the contact form.";
    const L = locale === "ms"
      ? { name: "Nama", phone: "Telefon", email: "E-mel", interest: "Cari", area: "Kawasan", note: "Nota" }
      : { name: "Name", phone: "Phone", email: "Email", interest: "Looking for", area: "Area", note: "Notes" };

    const lines = [intro, "", `${L.name}: ${name}`, `${L.phone}: ${phone}`];
    if (email) lines.push(`${L.email}: ${email}`);
    lines.push(`${L.interest}: ${interest}`);
    if (area) lines.push(`${L.area}: ${area}`);
    if (message) {
      lines.push("");
      lines.push(`${L.note}: ${message}`);
    }
    const text = lines.join("\n");

    // Route new-build leads to Syafiq, everything else to Najiha
    const isNewBuild = /design.*build|reka.*bina/i.test(interest);
    const phoneNo = isNewBuild ? WA_SYAFIQ : WA_NAJIHA;
    const url = `https://wa.me/${phoneNo}?text=${encodeURIComponent(text)}`;

    setState("ok");
    setWaUrl(url);
    window.open(url, "_blank", "noopener");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {/* Honeypot field — hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-form__hp"
      />

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-name">
            {c.name} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={c.namePh}
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-phone">
            {c.phone} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={c.phonePh}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-email">{c.email}</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={c.emailPh}
        />
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-interest">
            {c.interest} <span aria-hidden="true">*</span>
          </label>
          <select id="cf-interest" name="interest" required defaultValue="">
            <option value="" disabled>
              {c.interestPh}
            </option>
            {c.interestOpts.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-area">{c.area}</label>
          <input
            id="cf-area"
            name="area"
            type="text"
            autoComplete="address-level2"
            placeholder={c.areaPh}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">{c.message}</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder={c.messagePh}
        />
      </div>

      <button type="submit" className="btn contact-form__submit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5L9.4 7c-.2-.5-.4-.4-.6-.4H8.3c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        {c.submit}
      </button>

      {state === "ok" && (
        <div className="contact-form__msg contact-form__msg--ok" role="status" aria-live="polite">
          {c.successPrefix}
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            {c.successLink}
          </a>
        </div>
      )}
      {state === "err" && (
        <div className="contact-form__msg contact-form__msg--err" role="status" aria-live="polite">
          {errMsg}
        </div>
      )}
    </form>
  );
}
