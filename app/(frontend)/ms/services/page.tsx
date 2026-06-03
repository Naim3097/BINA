import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Perkhidmatan & Pakej — BINA+ Reka & Bina",
  description:
    "Pakej reka-dan-bina, renovasi dan reka bentuk dalaman daripada BINA+. Rumah setingkat dari RM200k, dua tingkat dari RM460k, sambungan dari RM100k, reka bentuk dalaman dari RM39k.",
  alternates: {
    canonical: "/ms/services",
    languages: {
      "en-MY": "/services",
      "ms-MY": "/ms/services",
      "x-default": "/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Perkhidmatan BINA+ — Reka, Bina, Renovasi",
    description: "Pakej sedia masuk dari RM100k. Skop tetap, harga tetap, jadual tetap.",
    url: "/ms/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "Service", position: 1, name: "Pakej Reka dan Bina", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "200000", priceCurrency: "MYR" } },
    { "@type": "Service", position: 2, name: "Pakej Renovasi", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "100000", priceCurrency: "MYR" } },
    { "@type": "Service", position: 3, name: "Pakej Reka Bentuk Dalaman", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "39000", priceCurrency: "MYR" } },
  ],
};

export default function ServicesMs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LangSetter locale="ms" />
      <Header locale="ms" current="services" altHref="/services" selfHref="/ms/services" />

      <main id="main">
        <section className="container page-hero">
          <Reveal>
            <div className="crumbs">
              <Link href="/ms">Utama</Link>
              <span>/</span> Perkhidmatan
            </div>
            <span className="eyebrow">Pakej</span>
            <h1>
              Pakej fleksibel,{" "}
              <em style={{ color: "var(--brand)", fontStyle: "normal" }}>harga jujur</em>.
            </h1>
            <p className="lead">
              Tiga teras perkhidmatan — reka dan bina, renovasi, dan reka bentuk dalaman — setiap
              satu dengan jangkaan harga yang jelas supaya anda tahu apa yang ringgit anda perolehi
              sebelum kita menandatangani apa-apa.
            </p>
          </Reveal>
          <Reveal delay={1} className="page-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/assets/sekinchan%201.png"
              alt="Reka bentuk dalaman moden"
              loading="eager"
            />
          </Reveal>
        </section>

        <section className="section">
          <div className="container">
            <Reveal as="article" className="svc">
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/assets/contractor.png" alt="Reka dan bina" loading="lazy" />
              </div>
              <div className="svc__body" id="design-build">
                <span className="eyebrow">01 · Reka &amp; Bina</span>
                <h2>Hujung-ke-hujung, dari tanah kosong hingga serahan.</h2>
                <div className="svc__price"><small>Bermula</small>RM200,000</div>
                <p className="lead">Penyelesaian lengkap merangkumi perancangan seni bina, kejuruteraan struktur, pengurusan projek penuh dan pelaksanaan di tapak. Disesuaikan untuk binaan baharu dan transformasi besar.</p>
                <ul className="svc__list">
                  <li>Perancangan seni bina &amp; reka bentuk 3D</li>
                  <li>Pengurusan projek penuh dengan kemas kini mingguan</li>
                  <li>Pembinaan &amp; penyeliaan tapak yang disahkan</li>
                  <li>Penyelarasan bahan &amp; perincian hujung-ke-hujung</li>
                </ul>

                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">BINA START</span><p className="tier__tag">Rumah keluarga setingkat.</p></div>
                    <div className="tier__spec">1,200 kps · 3 bilik · 2 bilik air · Setingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM200k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej BINA START (Reka & Bina · setingkat, 1,200 kps, 3 bilik / 2 bilik air, mula RM200k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Rumah setingkat, ~1,200 kps</li>
                      <li>3 bilik tidur · 2 bilik air</li>
                      <li>Penyerahan reka &amp; bina penuh</li>
                    </ul>
                    <p className="tier__note">Pemilik rumah kali pertama</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Paling Popular</div>
                    <div className="tier__head"><span className="tier__name">BINA PLUS</span><p className="tier__tag">1.5 tingkat, ruang untuk berkembang.</p></div>
                    <div className="tier__spec">1,500 kps · 3 bilik · 2 bilik air · 1.5 tingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM350k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej BINA PLUS (Reka & Bina · 1.5 tingkat, 1,500 kps, 3 bilik / 2 bilik air, mula RM350k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Rumah 1.5 tingkat, ~1,500 kps</li>
                      <li>3 bilik tidur · 2 bilik air</li>
                      <li>Kemasan pertengahan, spec boleh dinaik taraf</li>
                    </ul>
                    <p className="tier__note">Nilai terbaik untuk keluarga berkembang</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">BINA MAX</span><p className="tier__tag">Dua tingkat, dimaksimumkan.</p></div>
                    <div className="tier__spec">2,000 kps · 4 bilik · 3 bilik air · Dua tingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM460k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej BINA MAX (Reka & Bina · dua tingkat, 2,000 kps, 4 bilik / 3 bilik air, mula RM460k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Rumah dua tingkat, ~2,000 kps</li>
                      <li>4 bilik tidur · 3 bilik air</li>
                      <li>Kemasan premium menyeluruh</li>
                    </ul>
                    <p className="tier__note">Keluarga mahukan ruang lebih</p>
                  </div>
                </div>
                <div className="tier-footer">
                  <div className="tier-footer__stat"><span className="tier-footer__num">50+</span><span>Rumah dibina</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Disahkan</span><span>jurutera &amp; kontraktor</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Mingguan</span><span>kemas kini &amp; foto tapak</span></div>
                </div>
                <div className="gifts-strip">
                  <strong>Hadiah percuma untuk setiap pakej:</strong>{" "}
                  Reka bentuk 3D · meja atas 8 kaki · smart lock · pintu belakang keselamatan
                  · pendawaian pemasangan · pemasangan downlight · pemasangan kipas · lawatan tapak
                  · sebut harga · sinki · pemasangan hud &amp; dapur
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={1}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/assets/contractor 2.png" alt="Renovasi" loading="lazy" />
              </div>
              <div className="svc__body" id="renovation" style={{ marginTop: 24 }}>
                <span className="eyebrow">02 · Renovasi</span>
                <h2>Tambah ruang pada rumah anda.</h2>
                <div className="svc__price"><small>Bermula</small>RM100,000</div>
                <p className="lead">Tambah keluasan rumah sedia ada — sambungan belakang, bina-naik dua tingkat penuh, atau sambungan lot bucu. Tiga peringkat, skop ditakrif, harga tetap.</p>

                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">RENO START</span><p className="tier__tag">Sambungan belakang.</p></div>
                    <div className="tier__spec">Sambungan setingkat di belakang</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM100k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej RENO START (sambungan setingkat di belakang, mula RM100k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Sambungan setingkat di belakang</li>
                      <li>Kerja struktur &amp; kemasan</li>
                      <li>Permit &amp; pelan disertakan</li>
                    </ul>
                    <p className="tier__note">Tambah ruang hidup di belakang</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Paling Popular</div>
                    <div className="tier__head"><span className="tier__name">RENO PLUS</span><p className="tier__tag">Sambungan 2 tingkat.</p></div>
                    <div className="tier__spec">Sambungan dua tingkat penuh</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM200k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej RENO PLUS (sambungan dua tingkat penuh, mula RM200k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Sambungan dua tingkat penuh</li>
                      <li>Struktur &amp; bumbung direka jurutera</li>
                      <li>Kemasan &amp; permit</li>
                    </ul>
                    <p className="tier__note">Maksimumkan keluasan</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">RENO MAX</span><p className="tier__tag">Sambungan lot bucu 2 tingkat.</p></div>
                    <div className="tier__spec">Sambungan dua tingkat untuk lot bucu</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM300k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej RENO MAX (sambungan lot bucu dua tingkat, mula RM300k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Sambungan lot bucu, dua tingkat</li>
                      <li>Envelope lebih luas, struktur direka jurutera</li>
                      <li>Penyerahan majlis diuruskan</li>
                    </ul>
                    <p className="tier__note">Untuk lot bucu yang ada ruang luas</p>
                  </div>
                </div>
                <div className="gifts-strip">
                  <strong>Hadiah percuma untuk setiap pakej:</strong>{" "}
                  Reka bentuk 3D · meja atas 8 kaki · smart lock · pintu belakang keselamatan
                  · pendawaian pemasangan · pemasangan downlight · pemasangan kipas · lawatan tapak
                  · sebut harga · sinki · pemasangan hud &amp; dapur
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={2}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/assets/ervina 16.png"
                  alt="Reka bentuk dalaman"
                  loading="lazy"
                />
              </div>
              <div className="svc__body" id="interior" style={{ marginTop: 24 }}>
                <span className="eyebrow">03 · Reka Bentuk Dalaman</span>
                <h2>Kerja kayu &amp; kemasan dibina dalam rumah anda.</h2>
                <div className="svc__price"><small>Bermula</small>RM39,000</div>
                <p className="lead">Pakej binaan dalaman penuh meliputi dapur, almari pakaian, kabinet TV, siling dan lantai. Tiga siri bahan — pilih yang sesuai dengan bajet dan kemasan anda.</p>
                <ul className="svc__list">
                  <li>Siling plaster &amp; lantai SPC</li>
                  <li>Dapur, almari, kabinet TV, tall unit tersuai</li>
                  <li>Tiga siri bahan: melamine, laminated, shaker</li>
                </ul>

                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">ID START</span><p className="tier__tag">Siri melamine.</p></div>
                    <div className="tier__spec">~650 kps · Asas</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM39k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej ID START (Reka Bentuk Dalaman · siri melamine, mula RM39k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Siling plaster &amp; lantai SPC (~650 kps)</li>
                      <li>Unit dapur bawah + atas · backsplash</li>
                      <li>Kabinet TV · kabinet kasut · 2 almari</li>
                    </ul>
                    <p className="tier__note">Pemilik rumah kali pertama</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Paling Popular</div>
                    <div className="tier__head"><span className="tier__name">ID PLUS</span><p className="tier__tag">Siri laminated.</p></div>
                    <div className="tier__spec">~1,000 kps · Sesuai keluarga</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM59k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej ID PLUS (Reka Bentuk Dalaman · siri laminated, mula RM59k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Siling plaster &amp; lantai SPC (~1,000 kps)</li>
                      <li>Island table + meja belajar + 3 almari</li>
                      <li>Tall unit (peti sejuk + ketuhar) disertakan</li>
                    </ul>
                    <p className="tier__note">Paling banyak dipilih</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">ID MAX</span><p className="tier__tag">Siri shaker design.</p></div>
                    <div className="tier__spec">~1,300 kps · Kemasan premium</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM79k</strong></div>
                    <a
                      href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya berminat dengan pakej ID MAX (Reka Bentuk Dalaman · siri shaker design, mula RM79k).")}`}
                      className="tier__cta"
                    >
                      Tanya →
                    </a>
                    <ul className="tier__feats">
                      <li>Lantai SPC sehingga ~1,300 kps</li>
                      <li>Island table besar 8ft × 4ft</li>
                      <li>3 almari termasuk master 10ft</li>
                    </ul>
                    <p className="tier__note">Binaan premium penuh</p>
                  </div>
                </div>
                <div className="gifts-strip">
                  <strong>Hadiah percuma untuk setiap pakej ID:</strong>{" "}
                  Reka bentuk 3D · rak pinggan · rak botol · set laci · mekanisme tutup perlahan
                  · perlindungan undersink · pemasangan dapur &amp; hud · pemegang kabinet (atas permintaan)
                  · pendawaian &amp; paip ringkas
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section--surface">
          <div className="container">
            <Reveal className="center-head">
              <span className="eyebrow">Proses kami</span>
              <h2>Bagaimana projek BINA+ sebenarnya berjalan.</h2>
            </Reveal>
            <div className="steps">
              <Reveal className="step">
                <span className="step__num">01</span>
                <h3>Penemuan &amp; lawatan tapak</h3>
                <p>Konsultasi 60 minit percuma. Kami melawat tanah atau rumah sedia ada anda, mengambil ukuran, membincangkan bajet dan gaya hidup.</p>
              </Reveal>
              <Reveal delay={1} className="step">
                <span className="step__num">02</span>
                <h3>Reka bentuk &amp; visualisasi 3D</h3>
                <p>Draf susun atur, moodboard dan tinjauan 3D supaya anda boleh melihat rumah sebelum sebutir bata diletakkan.</p>
              </Reveal>
              <Reveal delay={2} className="step">
                <span className="step__num">03</span>
                <h3>Sebut harga skop tetap</h3>
                <p>Sebut harga terperinci dengan bahan, buruh, jadual dan pembayaran berperingkat — ditandatangani sebelum kerja dimulakan.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="cta-strip">
              <div>
                <span className="eyebrow" style={{ color: "rgba(246,239,234,.7)" }}>Sedia bila anda sedia</span>
                <h2 style={{ marginTop: 14 }}>Dapatkan nota kebolehlaksanaan percuma.</h2>
                <p>Hantar geran tanah atau pelan lantai anda berserta bajet kasar. Kami akan kembali dalam satu hari bekerja dengan nota kebolehlaksanaan dan jangkaan harga — tiada komitmen.</p>
              </div>
              <div className="cta-strip__actions">
                <a
                  href={`https://wa.me/60193428981?text=${encodeURIComponent("Hai BINA+! Saya ingin dapatkan nota kebolehlaksanaan percuma — saya sedang melihat pakej anda dan ingin bincang projek saya.")}`}
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
