import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CaseGrid from "@/components/CaseGrid";
import LangSetter from "@/components/LangSetter";
import { MS_FILTER_LABELS } from "@/lib/projects.ms";
import { getProjects } from "@/lib/getProjects";

// Revalidate every 60s so admin edits show up within a minute.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Portfolio — Projek Reka & Bina BINA+ di Selangor",
  description:
    "Lihat projek reka-dan-bina BINA+ di seluruh Selangor — daripada rumah setingkat padat di Bandar Saujana hingga binaan tersuai dua tingkat penuh di Shah Alam.",
  alternates: {
    canonical: "/ms/case-studies",
    languages: {
      "en-MY": "/case-studies",
      "ms-MY": "/ms/case-studies",
      "x-default": "/case-studies",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Portfolio BINA+",
    description: "Projek sebenar, bajet sebenar, jadual sebenar.",
    url: "/ms/case-studies",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio BINA+",
  url: "https://bina.designbuild/ms/case-studies",
};

export default async function CaseStudiesMs() {
  const { cards, projects } = await getProjects("ms");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LangSetter locale="ms" />
      <Header locale="ms" current="caseStudies" altHref="/case-studies" selfHref="/ms/case-studies" />

      <main id="main">
        <Reveal as="section" className="cs-hero">
          <div className="cs-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/assets/ervina 7.png"
              alt="Projek BINA+ pilihan"
              loading="eager"
            />
            <div className="cs-hero__scrim" aria-hidden="true" />
            <div className="cs-hero__content">
              <div className="crumbs">
                <Link href="/ms">Utama</Link>
                <span>/</span> Portfolio
              </div>
              <span className="eyebrow eyebrow--light">Hasil kerja terpilih</span>
              <h1>
                Rumah sebenar.
                <br />
                <em>Bajet sebenar.</em>
                <br />
                Serahan sebenar.
              </h1>
              <p className="lead">
                Setiap projek di bawah telah diskop, direka, dibina dan diserahkan oleh pasukan
                BINA+ yang sama — di seluruh Selangor dan Lembah Klang.
              </p>
              <div className="cs-hero__cta">
                <a href="#projects" className="btn btn--primary">Lihat projek</a>
                <a
                  href="/ms/contact#form"
                  className="btn btn--ghost btn--ghost-light"
                >
                  Mulakan projek
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="section">
          <div className="container cs-stats">
            <Reveal className="cs-stats__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/assets/construction.png"
                alt="Rumah disiapkan BINA+"
              />
              <span className="cs-stats__chip">Mengapa pelanggan pilih kami</span>
            </Reveal>
            <div className="cs-stats__grid">
              <Reveal className="cs-stat">
                <span className="cs-stat__num">500<sup>+</sup></span>
                <span className="cs-stat__label">Projek diskop &amp; disiapkan di seluruh Selangor.</span>
              </Reveal>
              <Reveal delay={1} className="cs-stat">
                <span className="cs-stat__num">15</span>
                <span className="cs-stat__label">Tahun pengalaman gabungan reka &amp; bina.</span>
              </Reveal>
              <Reveal delay={1} className="cs-stat">
                <span className="cs-stat__num">98<sup>%</sup></span>
                <span className="cs-stat__label">Pelanggan yang merujuk BINA+ kepada keluarga atau rakan.</span>
              </Reveal>
              <Reveal delay={2} className="cs-stat">
                <span className="cs-stat__num">100<sup>+</sup></span>
                <span className="cs-stat__label">Tukang, perunding &amp; rakan kongsi tersedia.</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <Reveal className="cs-head">
              <div>
                <span className="eyebrow">Projek kami</span>
                <h2>
                  Daripada perolehan tanah
                  <br />
                  hingga serahan — semua dilindungi.
                </h2>
              </div>
              <p>
                Tapis mengikut skop untuk melihat apa yang sesuai dengan ringkasan anda. Setiap
                projek diserahkan dengan kontrak tetap dan satu titik akauntabiliti.
              </p>
            </Reveal>

            <CaseGrid
              locale="ms"
              cards={cards}
              projects={projects}
              filterLabels={MS_FILTER_LABELS}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Anda boleh menjadi yang seterusnya
                </span>
                <h2 style={{ marginTop: 14 }}>Nampak diri anda dalam mana-mana ini?</h2>
                <p>
                  Beritahu kami projek mana yang menarik dan apa yang anda ada. Kami akan kembali
                  dengan nota kebolehlaksanaan skop serupa dalam satu hari bekerja.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href="/ms/contact#form"
                  className="btn btn--primary"
                >
                  Mulakan projek
                </a>
                <Link href="/ms/services" className="btn btn--ghost">Lihat pakej</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="ms" />
    </>
  );
}
