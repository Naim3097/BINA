import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — BINA+",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/BINA LOGO 1.png"
          alt="BINA+"
          style={{ height: 56, margin: "0 auto 32px" }}
        />
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Error 404
        </span>
        <h1 style={{ margin: "14px 0 18px" }}>This page is still under construction.</h1>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          The page you were looking for either moved, was renamed, or never existed in the first
          place. Let&apos;s get you back on solid ground.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--primary">
            Back to home
          </Link>
          <Link href="/services" className="btn btn--secondary">
            View services
          </Link>
          <Link href="/case-studies" className="btn btn--secondary">
            See projects
          </Link>
        </div>
      </div>
    </main>
  );
}
