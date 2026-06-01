import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/BlogIndex";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Blog — Panduan Bina & Renovasi | BINA+ Reka & Bina",
  description:
    "Panduan jujur dan praktikal tentang kos renovasi, kontraktor, reka bentuk dan perjalanan pemilik rumah di seluruh Lembah Klang — daripada pasukan reka-dan-bina BINA+.",
  alternates: {
    canonical: "/ms/blog",
    languages: { "en-MY": "/blog", "ms-MY": "/ms/blog", "x-default": "/blog" },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Blog BINA+ — Panduan Bina & Renovasi",
    description: "Kos, kontraktor, reka bentuk dan perjalanan pemilik rumah di Lembah Klang.",
    url: "/ms/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Jurnal BINA+",
  url: "https://bina.designbuild/ms/blog",
  publisher: { "@type": "Organization", name: "BINA+ Reka & Bina" },
};

export default function BlogMs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LangSetter locale="ms" />
      <a href="#main" className="skip">Langkau ke kandungan</a>
      <Header locale="ms" current="blog" altHref="/blog" selfHref="/ms/blog" />
      <main id="main">
        <BlogIndex locale="ms" />
      </main>
      <Footer locale="ms" />
    </>
  );
}
