import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact BINA+ — Talk to Us, Email, or Visit the Studio",
  description:
    "Get in touch with BINA+ Design & Build. Message Najiha on WhatsApp for renovation, extension, interior and new design & build projects, email, or visit our Shah Alam studio.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-MY": "/contact",
      "ms-MY": "/ms/contact",
    },
  },
  openGraph: {
    type: "website",
    title: "Contact BINA+ Design & Build",
    description: "WhatsApp, email, or visit our Shah Alam studio.",
    url: "/contact",
  },
};

const NAJIHA_WA = `https://wa.me/60193428981?text=${encodeURIComponent(
  "Hi BINA+! I have a quick question."
)}`;
const MAPS_URL =
  "https://maps.google.com/?q=24-1+Jalan+Matahari+Aa+U5+Pinggiran+Subang+40150+Shah+Alam";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact BINA+ Design & Build",
  url: "https://bina.designbuild/contact",
};

export default function ContactEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="contact" altHref="/ms/contact" selfHref="/contact" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span>/</span> Contact
            </div>
            <span className="eyebrow">Contact</span>
            <h1>
              Tell us what you&apos;re{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>building.</em>
            </h1>
            <p className="lead">
              Get in touch and we&apos;ll be back to you within 30 minutes during business hours.
              Pick whichever channel works for you.
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
                <span className="eyebrow">Prefer WhatsApp?</span>
                <h3>Quick questions</h3>
                <p>
                  For a fast one-off question, message Najiha directly. For a project enquiry,
                  the form below gets you a proper itemised reply within one working day.
                </p>
                <a
                  href={NAJIHA_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method__cta"
                >
                  Start a chat →
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
                <span className="eyebrow">For longer threads</span>
                <h3>Email us</h3>
                <p>
                  Best for sharing larger files, floor plans or PDFs. We reply within one working
                  day.
                </p>
                <a
                  href="mailto:bina.designbuild@gmail.com?subject=Project%20enquiry"
                  className="contact-method__cta"
                >
                  Send email →
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
                <span className="eyebrow">In person</span>
                <h3>Visit our studio</h3>
                <p>
                  Walk through 1:1 material samples, scaled models, and our build process. Coffee
                  on us.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method__cta"
                >
                  Get directions →
                </a>
                <span className="contact-method__sub">Mon–Fri 9:00–17:30, Sat 9:00–13:00</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--surface" id="form">
          <div className="container">
            <div className="contact-form-wrap">
              <Reveal className="contact-form-intro">
                <span className="eyebrow">Or use the form</span>
                <h2>Send your details, we&apos;ll reply fast.</h2>
                <p>
                  Fill it out and one of our directors will reach out within 30 minutes during
                  business hours. Najiha handles all enquiries — renovation, extension, interior
                  and new builds.
                </p>
                <ul className="contact-form-perks">
                  <li>Free 60-minute consultation on site or at the studio</li>
                  <li>Itemised quote within 48 hours of the site visit</li>
                  <li>No obligation to proceed after the quote</li>
                </ul>
              </Reveal>
              <Reveal delay={1}>
                <ContactForm locale="en" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Visit the studio
                </span>
                <h2 style={{ marginTop: 14 }}>24-1, Jalan Matahari Aa U5/Aa</h2>
                <p>
                  Pinggiran Subang, 40150 Shah Alam, Selangor. Mon–Fri 9:00–17:30, Sat 9:00–13:00.
                  Closed Sunday.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Get directions
                </a>
                <a href="#form" className="btn btn--ghost">
                  Use the form
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </>
  );
}
