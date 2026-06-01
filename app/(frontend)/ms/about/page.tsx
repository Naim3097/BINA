import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Tentang BINA+ — Studio Reka & Bina Malaysia",
  description:
    "Diasaskan di Shah Alam, BINA+ ialah usaha sama Boxup yang menggabungkan reka bentuk seni bina dengan pasukan binaan praktikal. Kenali orang-orang yang membina rumah moden Malaysia.",
  alternates: {
    canonical: "/ms/about",
    languages: {
      "en-MY": "/about",
      "ms-MY": "/ms/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Tentang BINA+ Reka & Bina",
    description: "Studio reka-dan-bina berpangkalan di Shah Alam.",
    url: "/ms/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang BINA+ Reka & Bina",
  url: "https://bina.designbuild/ms/about",
  mainEntity: {
    "@type": "Organization",
    name: "BINA+ Reka & Bina",
    foundingLocation: "Shah Alam, Selangor, Malaysia",
    parentOrganization: { "@type": "Organization", name: "Boxup" },
  },
};

export default function AboutMs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LangSetter locale="ms" />
      <Header locale="ms" current="about" altHref="/about" selfHref="/ms/about" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/ms">Utama</Link>
              <span>/</span> Tentang Kami
            </div>
            <span className="eyebrow">Kisah kami</span>
            <h1>
              Studio kecil dengan satu pegangan jelas:{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>
                reka dan bina sememangnya seiring.
              </em>
            </h1>
            <p className="lead">
              BINA+ bermula sebagai usaha sampingan dalam Boxup — sebuah studio produk Malaysia —
              apabila pasukan kami terus melihat pemilik rumah terperangkap antara arkitek yang
              enggan membina, dan kontraktor yang enggan mereka bentuk. Maka kami bina pengantaranya.
            </p>
          </Reveal>
          <Reveal delay={1} className="page-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/assets/team photo.png" alt="Pasukan BINA+" loading="eager" />
          </Reveal>
        </section>

        <section className="section">
          <div className="container about-grid">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/assets/cement.png" alt="Kualiti binaan BINA+" loading="lazy" />
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">Mengapa kami wujud</span>
              <h2 style={{ margin: "14px 0 22px" }}>Dua tahun beroperasi, 85 binaan disiapkan, satu falsafah.</h2>
              <p>
                Kami percaya rumah terbaik berlaku apabila orang yang melukis pelan adalah pasukan
                yang sama berdiri di atas slab. Itulah sebabnya setiap projek BINA+ bergerak melalui
                satu studio, satu pengurus projek, dan satu kontrak tetap.
              </p>
              <p>
                Studio kami diketuai oleh Syafiq (prinsipal) — kelahiran Selangor dan keras kepala
                tentang kualiti. Kami bekerja pada bilangan projek yang terhad sengaja setiap tahun
                supaya setiap binaan mendapat perhatian yang sewajarnya.
              </p>
              <p>
                BINA+ didaftarkan sebagai entiti SSM berasingan daripada jenama induk Boxup, tetapi
                kami berkongsi DNA operasi yang sama: skop yang jelas, kemas kini mingguan, dan zero
                kejutan &ldquo;nanti tengoklah&rdquo;.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Pegangan kami</span>
              <h2>Tiga peraturan yang kami tidak langgar.</h2>
            </Reveal>
            <div className="values">
              <Reveal as="article" className="value">
                <span className="value__num">01 · Harga</span>
                <h3>Skop tetap, harga tetap</h3>
                <p>Setiap sebut harga dipecahkan mengikut item. Jika kami terlepas sesuatu, itu kos kami — bukan kos anda. Arahan ubah suai hanya berlaku apabila anda meminta.</p>
              </Reveal>
              <Reveal as="article" delay={1} className="value">
                <span className="value__num">02 · Iklim</span>
                <h3>Dibina untuk iklim</h3>
                <p>Direka untuk haba, kelembapan dan musim tengkujuh Malaysia. Pengudaraan silang, cucur atap dalam dan kalis air sempurna bukan upgrade di sini — ia lalai.</p>
              </Reveal>
              <Reveal as="article" delay={2} className="value">
                <span className="value__num">03 · Manusia</span>
                <h3>Satu pasukan, sehingga akhir</h3>
                <p>Pengurus projek yang sama dari hari pertama hingga serahan. Tiada tuding-menuding subkontraktor, tiada &ldquo;itu bukan skop kami&rdquo;. Akauntabiliti adalah lalai.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Studio</span>
              <h2>Orang yang anda akan berurusan.</h2>
            </Reveal>

            <Reveal className="team-principal">
              <div className="team-principal__body">
                <span className="eyebrow">Prinsipal</span>
                <h2 className="team-principal__name">Syafiq</h2>
                <p className="team-principal__role">Pengarah (Pemasaran &amp; Strategi)</p>
                <p className="team-principal__bio">
                  Syafiq mengetuai setiap projek dari konsep hingga serahan. Dengan latar belakang
                  reka-bina, dialah orangnya yang memastikan apa yang dibina benar-benar sepadan
                  dengan apa yang dijanjikan — turut serta dalam setiap taklimat dan melawat tapak
                  ketika konkrit dituang. Pendekatannya: satu studio, satu pengurus, tiada kejutan.
                </p>
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya ingin berhubung mengenai projek yang berpotensi.")}`}
                  className="team-principal__cta"
                >
                  Hubungi kami →
                </a>
              </div>
              <div className="team-principal__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/syafiq%20bina.jpeg"
                  alt="Syafiq — Pengarah (Pemasaran & Strategi)"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="team-subhead">
              <span className="eyebrow">Pasukan</span>
              <h3>Pasukan kami</h3>
            </Reveal>
            <div className="team-row">
              <Reveal as="article" className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/zulma%27arif%20bina.jpeg"
                  alt="Zulma'Arif — Pengarah (Projek & Operasi)"
                  loading="lazy"
                />
                <div>
                  <h3>Zulma&apos;Arif</h3>
                  <span>Pengarah (Projek &amp; Operasi)</span>
                </div>
              </Reveal>
              <Reveal as="article" delay={1} className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/muhaimin%20bina.jpeg"
                  alt="Muhaimin — Pengarah (Penyelarasan & Sokongan)"
                  loading="lazy"
                />
                <div>
                  <h3>Muhaimin</h3>
                  <span>Pengarah (Penyelarasan &amp; Sokongan)</span>
                </div>
              </Reveal>
              <Reveal as="article" delay={2} className="team__card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/syahmi%20bina.jpeg"
                  alt="Syahmi — Pengarah (Reka Bentuk & Kreatif)"
                  loading="lazy"
                />
                <div>
                  <h3>Syahmi</h3>
                  <span>Pengarah (Reka Bentuk &amp; Kreatif)</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>
                  Lawati studio
                </span>
                <h2 style={{ marginTop: 14 }}>Singgah di Pinggiran Subang.</h2>
                <p>
                  Lihat sampel bahan 1:1, model berskala dan proses binaan kami — kopi atas kami.
                  Isnin–Jumaat 9:00–17:30, Sabtu 9:00–13:00.
                </p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href="https://maps.google.com/?q=24-1+Jalan+Matahari+Aa+U5+Pinggiran+Subang+40150+Shah+Alam"
                  className="btn btn--primary"
                >
                  Dapatkan arah
                </a>
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya ingin melawat studio — boleh sahkan masa yang sesuai?")}`}
                  className="btn btn--ghost"
                >
                  Hantar mesej
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
