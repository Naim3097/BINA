import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog — Building & Renovation Guides | BINA+ Design & Build",
  description:
    "Honest, practical guides on renovation cost, contractors, design and the homeowner journey across the Klang Valley — from the BINA+ design-and-build team.",
  alternates: {
    canonical: "/blog",
    languages: { "en-MY": "/blog", "ms-MY": "/ms/blog" },
  },
  openGraph: {
    type: "website",
    title: "BINA+ Blog — Building & Renovation Guides",
    description: "Costs, contractors, design and the homeowner journey in the Klang Valley.",
    url: "/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "BINA+ Journal",
  url: "https://bina.designbuild/blog",
  publisher: { "@type": "Organization", name: "BINA+ Design & Build" },
};

export default function BlogEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="blog" altHref="/ms/blog" selfHref="/blog" />
      <main id="main">
        <BlogIndex locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
