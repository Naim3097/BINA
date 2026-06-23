import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Hubungi BINA+ — Sembang, E-mel, atau Lawat Studio",
  description:
    "Hubungi BINA+ Reka & Bina. Hantar mesej kepada Najiha melalui WhatsApp untuk renovasi, sambungan, dalaman dan reka & bina baru, e-mel, atau lawat studio kami di Shah Alam.",
  alternates: {
    canonical: "/ms/contact",
    languages: {
      "en-MY": "/contact",
      "ms-MY": "/ms/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Hubungi BINA+ Reka & Bina",
    description: "WhatsApp, e-mel, atau lawat studio kami di Shah Alam.",
    url: "/ms/contact",
  },
};

const NAJIHA_WA = `https://wa.me/60193428981?text=${encodeURIComponent(
  "Hai BINA+! Saya ada soalan ringkas."
)}`;
const MAPS_URL =
  "https://maps.google.com/?q=24-1+Jalan+Matahari+Aa+U5+Pinggiran+Subang+40150+Shah+Alam";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Hubungi BINA+ Reka & Bina",
  url: "https://bina.designbuild/ms/contact",
};

export default function ContactMs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LangSetter locale="ms" />
      <a href="#main" className="skip">Langkau ke kandungan</a>
      <Header locale="ms" current="contact" altHref="/contact" selfHref="/ms/contact" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/ms">Utama</Link>
              <span>/</span> Hubungi
            </div>
            <span className="eyebrow">Hubungi</span>
            <h1>
              Beritahu kami apa yang anda{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>nak bina.</em>
            </h1>
            <p className="lead">
              Hubungi kami dan kami akan balas dalam 30 minit waktu kerja. Pilih saluran yang
              paling sesuai untuk anda.
            </p>
          </Reveal>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-methods">
              <Reveal as="article" className="contact-method">
                <div className="contact-method__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5L9.4 7c-.2-.5-.4-.4-.6-.4H8.3c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                </div>
                <span className="eyebrow">Lebih suka WhatsApp?</span>
                <h3>Soalan ringkas</h3>
                <p>
                  Untuk soalan ringkas, WhatsApp Najiha terus. Untuk pertanyaan projek, borang
                  di bawah beri anda balasan terperinci dalam satu hari bekerja.
                </p>
                <a
                  href={NAJIHA_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method__cta"
                >
                  Mulakan sembang →
                </a>
                <span className="contact-method__sub">+60 19-342 8981</span>
              </Reveal>

              <Reveal as="article" delay={1} className="contact-method">
                <div className="contact-method__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                </div>
                <span className="eyebrow">Untuk perbualan lebih panjang</span>
                <h3>E-mel kami</h3>
                <p>
                  Sesuai untuk hantar fail besar, pelan lantai atau PDF. Kami balas dalam satu hari
                  bekerja.
                </p>
                <a
                  href="mailto:bina.designbuild@gmail.com?subject=Pertanyaan%20projek"
                  className="contact-method__cta"
                >
                  Hantar e-mel →
                </a>
                <span className="contact-method__sub">bina.designbuild@gmail.com</span>
              </Reveal>

              <Reveal as="article" delay={3} className="contact-method">
                <div className="contact-method__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="eyebrow">Secara langsung</span>
                <h3>Lawat studio kami</h3>
                <p>
                  Jalan-jalan tengok sampel bahan 1:1, model berskala, dan proses binaan kami.
                  Kopi atas kami.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method__cta"
                >
                  Dapatkan arah →
                </a>
                <span className="contact-method__sub">Isnin–Jumaat 9:00–17:30, Sabtu 9:00–13:00</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--surface" id="form">
          <div className="container">
            <div className="contact-form-wrap">
              <Reveal className="contact-form-intro">
                <span className="eyebrow">Atau guna borang</span>
                <h2>Hantar butiran, kami balas dengan cepat.</h2>
                <p>
                  Isi borang ini dan salah seorang pengarah kami akan hubungi anda dalam 30 minit
                  waktu kerja. Najiha uruskan semua pertanyaan — renovasi, sambungan, dalaman
                  dan binaan baru.
                </p>
                <ul className="contact-form-perks">
                  <li>Konsultasi 60 minit percuma di tapak atau studio</li>
                  <li>Quote terperinci dalam 48 jam selepas lawatan tapak</li>
                  <li>Tiada obligasi untuk teruskan selepas quote</li>
                </ul>
              </Reveal>
              <Reveal delay={1}>
                <ContactForm locale="ms" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Lawat studio
                </span>
                <h2 style={{ marginTop: 14 }}>24-1, Jalan Matahari Aa U5/Aa</h2>
                <p>
                  Pinggiran Subang, 40150 Shah Alam, Selangor. Isnin–Jumaat 9:00–17:30, Sabtu
                  9:00–13:00. Tutup hari Ahad.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Dapatkan arah
                </a>
                <a href="#form" className="btn btn--ghost">
                  Guna borang
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="ms" />
    </>
  );
}
