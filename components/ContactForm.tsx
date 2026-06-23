"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/dict";

const WA_NAJIHA = "60193428981";

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
    submit: "Send my details",
    submitting: "Sending…",
    errorReq: "Please fill in your name, phone and what you're looking for.",
    success:
      "Thanks — we've got your details and will reply within one working day. For anything urgent, WhatsApp us directly.",
    fallbackLead:
      "We couldn't submit the form just now. Tap below to send the same details to us on WhatsApp instead — nothing is lost.",
    fallbackLink: "Send via WhatsApp →",
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
    submit: "Hantar butiran saya",
    submitting: "Menghantar…",
    errorReq: "Sila isi nama, telefon dan apa yang anda cari.",
    success:
      "Terima kasih — kami dah terima butiran anda dan akan balas dalam satu hari bekerja. Kalau ada hal segera, WhatsApp kami terus.",
    fallbackLead:
      "Borang tak dapat dihantar buat masa ini. Tekan di bawah untuk hantar butiran yang sama melalui WhatsApp — tiada apa yang hilang.",
    fallbackLink: "Hantar melalui WhatsApp →",
  },
} as const;

// Map a package code (?package=BINA START) to the matching "interest" option.
function interestForPackage(pkg: string, locale: Locale): string {
  const opts = COPY[locale].interestOpts;
  if (/^BINA/i.test(pkg)) return opts[0];
  if (/^RENO/i.test(pkg)) return opts[1];
  if (/^ID/i.test(pkg)) return opts[2];
  return "";
}

export default function ContactForm({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fallback" | "err">("idle");
  const [waUrl, setWaUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // Context carried from the page that sent the visitor here.
  const [presetInterest, setPresetInterest] = useState("");
  const [presetMessage, setPresetMessage] = useState("");
  const [source, setSource] = useState("Contact page");
  const [page, setPage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get("package");
    const project = params.get("project");

    if (pkg) {
      setPresetInterest(interestForPackage(pkg, locale));
      setPresetMessage(
        locale === "ms"
          ? `Saya berminat dengan pakej ${pkg}.`
          : `I'm interested in the ${pkg} package.`
      );
      setSource(`Package: ${pkg}`);
    } else if (project) {
      setPresetMessage(
        locale === "ms"
          ? `Saya nak projek seumpama "${project}".`
          : `I'd like a similar-scope project to "${project}".`
      );
      setSource(`Project: ${project}`);
    }
    setPage(document.referrer || window.location.pathname);
  }, [locale]);

  // Build a WhatsApp deep link from the form values (used as a fallback only).
  const composeWa = (fd: FormData) => {
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const interest = String(fd.get("interest") || "");
    const area = String(fd.get("area") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const intro =
      locale === "ms"
        ? "Hai BINA+! Saya hubungi melalui borang kenalan."
        : "Hi BINA+! I'm reaching out via the contact form.";
    const L =
      locale === "ms"
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
    return `https://wa.me/${WA_NAJIHA}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if (fd.get("website")) return;

    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const interest = String(fd.get("interest") || "");

    if (!name || !phone || !interest) {
      setState("err");
      setErrMsg(c.errorReq);
      return;
    }

    setState("sending");

    const payload = {
      name,
      phone,
      email: String(fd.get("email") || "").trim(),
      interest,
      area: String(fd.get("area") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      source: String(fd.get("source") || "").trim(),
      page: String(fd.get("page") || "").trim(),
      website: "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.ok) {
        setState("ok");
        form.reset();
        return;
      }
      // Anything else → WhatsApp fallback so the lead isn't lost.
      setWaUrl(composeWa(fd));
      setState("fallback");
    } catch {
      setWaUrl(composeWa(fd));
      setState("fallback");
    }
  };

  if (state === "ok") {
    return (
      <div className="contact-form">
        <div className="contact-form__msg contact-form__msg--ok" role="status" aria-live="polite">
          {c.success}
        </div>
      </div>
    );
  }

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
      {/* Context carried from the referring page */}
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="page" value={page} />

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
          <select
            id="cf-interest"
            name="interest"
            required
            defaultValue={presetInterest}
            key={presetInterest}
          >
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
          defaultValue={presetMessage}
          key={presetMessage}
        />
      </div>

      <button type="submit" className="btn contact-form__submit" disabled={state === "sending"}>
        {state === "sending" ? c.submitting : c.submit}
      </button>

      {state === "fallback" && (
        <div className="contact-form__msg contact-form__msg--err" role="status" aria-live="polite">
          {c.fallbackLead}{" "}
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            {c.fallbackLink}
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
