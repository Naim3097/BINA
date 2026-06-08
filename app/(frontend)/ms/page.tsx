import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import Catalog from "@/components/Catalog";
import Reveal from "@/components/Reveal";
import LangSetter from "@/components/LangSetter";

const siteUrl = "https://bina.designbuild";

export const metadata: Metadata = {
  title: "BINA+ Reka & Bina — Rumah Sedia Masuk & Renovasi di Selangor",
  description:
    "BINA+ ialah studio reka-dan-bina Malaysia yang membina rumah sedia masuk, renovasi dan reka bentuk dalaman di seluruh Lembah Klang. Bermula RM200k. Setingkat hingga dua tingkat, pengurusan projek penuh disertakan.",
  alternates: {
    canonical: "/ms",
    languages: {
      "en-MY": "/",
      "ms-MY": "/ms",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "BINA+ Reka & Bina — Rumah Sedia Masuk & Renovasi",
    description: "Reka, bina dan renovasi hujung-ke-hujung di Shah Alam, Selangor. Bermula RM200k.",
    url: "/ms",
    images: [
      {
        url: "/og-bina.jpg",
        width: 1200,
        height: 630,
        alt: "BINA+ Reka & Bina — Sawah & Teduh, rumah siap di Sekinchan, Selangor",
        type: "image/jpeg",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "BINA+ Reka & Bina",
  alternateName: "bina.byboxup",
  image: "/BINA LOGO 1.png",
  url: siteUrl + "/ms",
  telephone: "+60193428981",
  email: "bina.designbuild@gmail.com",
  priceRange: "RM100,000 – RM460,000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24-1, Jalan Matahari Aa U5/Aa, Pinggiran Subang",
    addressLocality: "Shah Alam",
    addressRegion: "Selangor",
    postalCode: "40150",
    addressCountry: "MY",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  sameAs: [
    "https://www.instagram.com/bina.byboxup/",
    "https://www.facebook.com/share/1CiR3MgS5e/",
    "https://www.tiktok.com/@bina.byboxup",
  ],
};

export default function HomeMs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LangSetter locale="ms" />
      <Header locale="ms" current="home" altHref="/" selfHref="/ms" />

      <main id="main">
        <VideoHero
          copy={{
            ariaLabel: "Showreel reka & bina BINA+",
            eyebrow: "Reka & Bina · Shah Alam",
            titleLine1: "Rumah dibina",
            titleLine2: "dengan tujuan.",
            lead:
              "Dari lakaran pertama sehingga serahan kunci, BINA+ mereka dan membina rumah Malaysia moden — mengikut jadual, mengikut bajet, dalam satu kontrak yang bertanggungjawab.",
            primaryCta: "Mulakan binaan anda",
            primaryHref: "#contact",
            secondaryCta: "Lihat hasil kerja kami",
            secondaryHref: "/ms/case-studies",
          }}
        />

        <section className="hero" id="main-hero">
          <div className="container hero__grid">
            <Reveal className="hero__copy">
              <span className="eyebrow">Reka · Bina · Tinggal</span>
              <h1>
                Rumah sedia masuk dari <em>RM200k</em>, direka dan dibina{" "}
                <em>dalam 6 bulan</em>.
              </h1>
              <p className="lead">
                BINA+ ialah studio reka-dan-bina berpangkalan di Shah Alam. Kami merancang, mereka
                dan membina rumah setingkat, separuh-dua-tingkat dan dua tingkat yang halus — dengan
                satu pasukan yang bertanggungjawab dari lakaran sehingga serahan.
              </p>
              <div className="hero__cta">
                <a href="#contact" className="btn btn--primary">Hantar permintaan</a>
                <Link href="/ms/services" className="btn btn--secondary">Terokai pakej</Link>
              </div>
              <div className="hero__stats">
                <Reveal delay={1} className="stat">
                  <span className="stat__num">12+</span>
                  <span className="stat__lbl">tahun pengalaman gabungan</span>
                </Reveal>
                <Reveal delay={2} className="stat">
                  <span className="stat__num">85+</span>
                  <span className="stat__lbl">rumah disiapkan di seluruh Selangor</span>
                </Reveal>
                <Reveal delay={3} className="stat">
                  <span className="stat__num">100%</span>
                  <span className="stat__lbl">siap tepat pada masanya, skop tetap</span>
                </Reveal>
              </div>
            </Reveal>

            <Reveal delay={1} className="hero__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/assets/inear grey house 6.png"
                alt="Rumah reka-dan-bina dua tingkat moden dengan sentuhan kayu hangat"
                fetchPriority="high"
              />
              <a href="tel:+60193428981" className="hero__chip">+60 19-342 8981</a>
              <div className="hero__badge">
                <strong>BINA MAX</strong>
                <span>Dua tingkat · lebih kurang 2,000 kps · dari RM460k</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container features">
            <Reveal className="features__visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/assets/bina close up.png" alt="Pandangan dekat butiran binaan BINA+" loading="lazy" />
            </Reveal>
            <div>
              <span className="eyebrow">Mengapa BINA+</span>
              <h2 style={{ margin: "14px 0 28px" }}>
                Satu pasukan, satu kontrak,
                <br />
                satu binaan yang bertanggungjawab.
              </h2>
              <div className="features__list">
                <Reveal as="article" delay={1} className="dark-card">
                  <span className="dark-card__num">01</span>
                  <div>
                    <h3>Integriti struktur, melalui reka bentuk</h3>
                    <p>Asas direka oleh jurutera dan rangka yang diuji beban dibina mengikut piawaian JKR &amp; MS.</p>
                  </div>
                </Reveal>
                <Reveal as="article" delay={2} className="dark-card">
                  <span className="dark-card__num">02</span>
                  <div>
                    <h3>Keselesaan terma sesuai tropika</h3>
                    <p>Pengudaraan silang, penebatan dan teduhan matahari dirancang dalam setiap rupa bangunan.</p>
                  </div>
                </Reveal>
                <Reveal as="article" delay={3} className="dark-card">
                  <span className="dark-card__num">03</span>
                  <div>
                    <h3>Tiada kejutan semasa serahan</h3>
                    <p>Skop tetap, jadual tetap. Arahan ubah suai ditandatangan secara bertulis — bukan di tapak.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Catalog
          ariaLabel="Hasil kerja terkini"
          intro={{
            years: "2025 — Kini",
            eyebrow: "Hasil kerja terkini",
            titleLine1: "Katalog",
            titleLine2: "2025 kami.",
            sub: "Projek reka-dan-bina disiapkan di seluruh Lembah Klang — tatal untuk meneroka.",
          }}
          mhead={{
            eyebrow: "2025 — Kini",
            titleLine1: "Katalog",
            titleLine2: "2025 kami.",
            sub: "Projek reka-dan-bina di seluruh Lembah Klang. Leret untuk meneroka.",
          }}
          cards={[
            { href: "/ms/case-studies", img: "/assets/assets/house 1.jpg", alt: "Rumah setingkat, 1,200 kps", year: "01 · Batu Muda, Gombak", title: "Linear Grey House" },
            { href: "/ms/case-studies", img: "/assets/assets/sekinchan.png", alt: "Rumah Ladang Sekinchan", year: "02 · Sekinchan, Selangor", title: "Sawah & Teduh, Rumah Kecil Makngah" },
            { href: "/ms/case-studies", img: "/assets/assets/courtyard renewal.png", alt: "Renovasi Pembaharuan Halaman Moden", year: "03 · Taman Andalas, Klang", title: "Rumah Re:Putih" },
            { href: "/ms/case-studies", img: "/assets/assets/ervina 6.png", alt: "Renovasi dapur Ervina", year: "04 · Ara Sendayan, Negeri Sembilan", title: "The Horizon" },
          ]}
          cta={{ eyebrow: "12+ projek disiapkan", title: "Lihat portfolio penuh.", href: "/ms/case-studies", btn: "Lihat semua projek" }}
          mfoot={{ eyebrow: "12+ projek disiapkan", title: "Lihat portfolio penuh.", href: "/ms/case-studies", btn: "Lihat semua projek" }}
        />

        <section className="section">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Pembiayaan fleksibel</span>
              <h2>Kami terima cara bayaran anda.</h2>
            </Reveal>
            <div className="method-grid">
              <Reveal className="method method--light">
                <span className="method__num">01 · Pinjaman</span>
                <h3>Pembiayaan bank</h3>
                <p>Kami bekerjasama dengan bank Malaysia untuk pinjaman perumahan sehingga 90% LVR dengan pengeluaran berperingkat.</p>
              </Reveal>
              <Reveal delay={1} className="method method--dark">
                <span className="method__num">02 · Berperingkat</span>
                <h3>Bayaran berperingkat</h3>
                <p>Bayar mengikut peringkat berdasarkan kemajuan kerja yang disahkan oleh pasukan QS kami.</p>
              </Reveal>
              <Reveal delay={2} className="method method--dark">
                <span className="method__num">03 · KWSP</span>
                <h3>Pengeluaran Akaun 2 KWSP</h3>
                <p>Kami uruskan dokumen pengeluaran KWSP untuk membiayai deposit binaan anda.</p>
              </Reveal>
              <Reveal delay={3} className="method method--brand">
                <span className="method__num">04 · Terus</span>
                <h3>Pindahan terus</h3>
                <p>Akaun korporat dialu-alukan — invois dan resit cukai patuh SST sepenuhnya.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--surface">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Cara ia berfungsi</span>
              <h2>Empat langkah ke rumah baharu anda.</h2>
            </Reveal>
            <div className="steps">
              <Reveal className="step">
                <span className="step__num">01</span>
                <h3>Lawatan tapak</h3>
                <p>Kami datang ke tanah atau hartanah sedia ada anda, menilai keadaan plot, orientasi dan akses, lalu memberi pandangan kebolehlaksanaan secara jujur di tapak.</p>
              </Reveal>
              <Reveal delay={1} className="step">
                <span className="step__num">02</span>
                <h3>Konsultasi &amp; reka bentuk</h3>
                <p>Berdasarkan data tapak, kami kembangkan ringkasan anda menjadi moodboard, susun atur ruang dan visual 3D — reka bentuk yang anda boleh tinjau sebelum sebutir bata diletakkan.</p>
              </Reveal>
              <Reveal delay={2} className="step">
                <span className="step__num">03</span>
                <h3>Pembinaan</h3>
                <p>Pasukan binaan dalaman kami mengambil alih dengan kemas kini foto mingguan, penyeliaan tapak yang disahkan dan tiada kekeliruan subkontraktor.</p>
              </Reveal>
              <Reveal delay={3} className="step">
                <span className="step__num">04</span>
                <h3>Kemasan &amp; serahan</h3>
                <p>Kami menyerahkan rumah yang siap sepenuhnya dengan senarai snag ditutup, waranti didokumenkan dan tempoh tanggungan kecacatan 12 bulan.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>Mari bina</span>
                <h2 style={{ marginTop: 14 }}>Ada tanah, idea, atau renovasi dalam fikiran?</h2>
                <p>Beritahu kami plot, bajet dan ringkasan kasar — kami akan kembali dalam satu hari bekerja dengan nota kebolehlaksanaan dan jangkaan kos kasar.</p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya ingin dapatkan nota kebolehlaksanaan — saya ada plot/ringkasan untuk dibincangkan.")}`}
                  className="btn btn--primary"
                >
                  Hantar mesej
                </a>
                <a href="mailto:bina.designbuild@gmail.com" className="btn btn--ghost">E-mel kami</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale="ms" />
    </>
  );
}
