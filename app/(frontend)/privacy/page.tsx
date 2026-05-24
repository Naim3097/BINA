import type { Metadata } from "next";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";

export const metadata: Metadata = {
  title: "Privacy Notice — BINA+ Design & Build",
  description: "How BINA+ Design & Build collects, uses and protects your personal information.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-MY": "/privacy",
      "ms-MY": "/ms/privacy",
    },
  },
  robots: { index: false, follow: true },
};

export default function PrivacyEn() {
  return (
    <main className="legal">
      <p>
        <Link href="/" style={{ color: "var(--muted)", fontSize: ".875rem" }}>
          ← Back to BINA+
        </Link>
      </p>

      <LangSwitcher locale="en" selfHref="/privacy" altHref="/ms/privacy" variant="full" />

      <h1>Privacy Notice</h1>
      <p className="updated">Last updated: April 2026</p>

      <p>
        BINA+ Design &amp; Build (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
        notice explains what personal information we collect when you contact us, how we use it,
        and your rights under Malaysia&apos;s Personal Data Protection Act 2010 (PDPA).
      </p>

      <h2>1. What we collect</h2>
      <p>When you submit our enquiry form, message us on WhatsApp, call, or email us, we collect:</p>
      <ul>
        <li>Your name and contact details (phone, WhatsApp number, email)</li>
        <li>Your property location (area / postcode)</li>
        <li>Information you share about your project (floor plans, photos, scope, budget)</li>
        <li>
          Marketing source data (which advertisement or referral brought you to us — utm
          parameters, page referrer)
        </li>
      </ul>

      <h2>2. How we use it</h2>
      <p>We use your information solely to:</p>
      <ul>
        <li>Reply to your enquiry and quote your project</li>
        <li>Schedule and conduct site visits</li>
        <li>Issue contracts and invoices if you engage us</li>
        <li>Send you project updates and photo logs during the build</li>
        <li>Improve our advertising effectiveness (aggregated, anonymised)</li>
      </ul>
      <p>
        We do not sell your information to third parties. We do not subscribe you to a newsletter
        without your separate consent.
      </p>

      <h2>3. Who we share it with</h2>
      <p>Limited to:</p>
      <ul>
        <li>Our internal team (Najiha, Syafiq, and assigned site supervisors)</li>
        <li>
          Email and form-handling providers (Formspree, Google Workspace) — to receive your
          enquiry
        </li>
        <li>WhatsApp Business (Meta) — when you message us</li>
        <li>Analytics providers (Plausible) — page-view counts only, no personal information</li>
        <li>
          Advertising platforms (Meta, Google) — anonymised conversion events only, never your name
          or phone
        </li>
      </ul>

      <h2>4. How long we keep it</h2>
      <p>
        Active project data is kept for the duration of the engagement plus 7 years for accounting
        and warranty purposes. Enquiries that don&apos;t progress to a project are deleted from our
        active CRM after 18 months.
      </p>

      <h2>5. Your rights</h2>
      <p>Under the PDPA you may, at any time:</p>
      <ul>
        <li>Request a copy of the personal information we hold about you</li>
        <li>Ask us to correct inaccurate information</li>
        <li>Withdraw consent for marketing-related processing</li>
        <li>Request deletion (subject to our legal obligation to retain transactional records)</li>
      </ul>
      <p>
        To exercise any of these, email{" "}
        <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a> with the subject
        line &ldquo;PDPA request&rdquo;.
      </p>

      <h2>6. Cookies and tracking</h2>
      <p>
        This landing page uses minimal first-party storage to remember which advertisement brought
        you here (so we can attribute leads correctly). We use Plausible for privacy-respecting
        page-view analytics — no personal cookies are set by Plausible. If you arrive via a Meta or
        Google ad, those platforms may set their own cookies for ad-conversion measurement.
      </p>

      <h2>7. Contact</h2>
      <p>
        BINA+ Design &amp; Build
        <br />
        24-1, Jalan Matahari Aa U5/Aa, Pinggiran Subang, 40150 Shah Alam, Selangor
        <br />
        <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a> ·{" "}
        <a href="tel:+60193428981">+60 19-342 8981</a>
      </p>
    </main>
  );
}
