import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Perkhidmatan & Pakej — BINA+ Reka & Bina",
  description:
    "Pakej reka-dan-bina, renovasi dan reka bentuk dalaman daripada BINA+. Rumah setingkat dari RM200k, dua tingkat dari RM460k, renovasi dari RM100k.",
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
    description: "Pakej siap kunci dari RM100k. Skop tetap, harga tetap, jadual tetap.",
    url: "/ms/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "Service", position: 1, name: "Pakej Reka dan Bina", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "200000", priceCurrency: "MYR" } },
    { "@type": "Service", position: 2, name: "Pakej Renovasi", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "100000", priceCurrency: "MYR" } },
    { "@type": "Service", position: 3, name: "Pakej Reka Bentuk Dalaman", provider: { "@type": "Organization", name: "BINA+ Reka & Bina" }, offers: { "@type": "Offer", price: "19999", priceCurrency: "MYR" } },
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
      <a href="#main" className="skip">Langkau ke kandungan</a>
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
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1100&q=80&auto=format&fit=crop"
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
                    <div className="tier__head"><span className="tier__name">BINA START</span><p className="tier__tag">Untuk rumah lebih kecil.</p></div>
                    <div className="tier__spec">~1,200 kps · Setingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM200k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Reka &amp; bina</li><li>Perancangan susun atur</li><li>Binaan kos efisien</li></ul>
                    <p className="tier__note">Pemilik rumah kali pertama</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Paling Popular</div>
                    <div className="tier__head"><span className="tier__name">BINA PLUS</span><p className="tier__tag">Ruang, nilai &amp; keselesaan.</p></div>
                    <div className="tier__spec">~1,500 kps · Separuh-dua-tingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM350k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Perancangan ruang dipertingkat</li><li>Bahan premium</li><li>Pengurusan keutamaan</li></ul>
                    <p className="tier__note">Pilihan utama keluarga</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">BINA MAX</span><p className="tier__tag">Mewah, dimaksimumkan sepenuhnya.</p></div>
                    <div className="tier__spec">~2,000 kps · Dua tingkat</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM460k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Reka bentuk tersuai</li><li>Kemasan high-end</li><li>Perunding khusus</li></ul>
                    <p className="tier__note">Untuk yang inginkan terbaik</p>
                  </div>
                </div>
                <div className="tier-footer">
                  <div className="tier-footer__stat"><span className="tier-footer__num">50+</span><span>Rumah dibina</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Disahkan</span><span>jurutera &amp; kontraktor</span></div>
                  <div className="tier-footer__stat"><span className="tier-footer__num">Mingguan</span><span>kemas kini &amp; foto tapak</span></div>
                </div>
                <div className="gifts-strip">
                  <strong>Hadiah percuma untuk setiap pakej:</strong>
                  Reka bentuk 3D · pendawaian pemasangan · sebut harga · meja atas 8 kaki · pemasangan downlight · pemasangan sinki &amp; hud · smart lock · pemasangan kipas · pintu keselamatan · lawatan tapak
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
                <h2>Naik taraf apa yang sudah anda miliki.</h2>
                <div className="svc__price"><small>Bermula</small>RM100,000</div>
                <p className="lead">Daripada penyegaran satu bilik hingga transformasi rumah penuh. Tiga peringkat, setiap satu dengan skop yang ditakrif supaya anda tahu apa yang dijangka.</p>

                <div className="tier-grid">
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">RM100k</span><p className="tier__tag">Penyegaran berfokus.</p></div>
                    <div className="tier__spec">Renovasi 1–2 ruang</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM100k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Kemasan asas &amp; kerja kayu</li><li>1 ruang basah atau kering</li><li>Bahan standard</li></ul>
                    <p className="tier__note">Naik taraf bilik</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Paling Popular</div>
                    <div className="tier__head"><span className="tier__name">RM200k</span><p className="tier__tag">Naik taraf hidup moden.</p></div>
                    <div className="tier__spec">Dapur + ruang tamu + kerja kayu</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM200k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Dapur &amp; ruang tamu</li><li>Kerja kayu built-in</li><li>Paip &amp; M&amp;E</li></ul>
                    <p className="tier__note">Paling banyak dipilih</p>
                  </div>
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">RM300k</span><p className="tier__tag">Reset rumah penuh.</p></div>
                    <div className="tier__spec">Renovasi seluruh rumah</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM300k</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Perombakan dalaman lengkap</li><li>Kemasan premium</li><li>Kemas kini struktur</li></ul>
                    <p className="tier__note">Transformasi penuh</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="svc" delay={2}>
              <div className="svc__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format&fit=crop"
                  alt="Reka bentuk dalaman"
                  loading="lazy"
                />
              </div>
              <div className="svc__body" id="interior" style={{ marginTop: 24 }}>
                <span className="eyebrow">03 · Reka Bentuk Dalaman</span>
                <h2>Reka sahaja, jika itu yang anda perlukan.</h2>
                <div className="svc__price"><small>Bermula</small>RM19,999</div>
                <p className="lead">Untuk pemilik rumah yang inginkan pakej reka bentuk yang halus untuk diserahkan kepada kontraktor sendiri — atau hanya untuk visualisasi sebelum membuat keputusan.</p>
                <ul className="svc__list">
                  <li>Perancangan susun atur &amp; pengoptimuman ruang</li>
                  <li>Moodboard &amp; arah konsep</li>
                </ul>

                <div className="tier-grid tier-grid--2">
                  <div className="tier">
                    <div className="tier__head"><span className="tier__name">7-dalam-1</span><p className="tier__tag">Permulaan reka bentuk.</p></div>
                    <div className="tier__spec">Bilik utama disertakan</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM49,999</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Visualisasi 3D</li><li>Lukisan teknikal</li><li>Pemilihan bahan &amp; warna</li></ul>
                    <p className="tier__note">Pemilik rumah baharu</p>
                  </div>
                  <div className="tier tier--featured">
                    <div className="tier__badge">Nilai Terbaik</div>
                    <div className="tier__head"><span className="tier__name">9-dalam-1</span><p className="tier__tag">Penyelesaian dalaman penuh.</p></div>
                    <div className="tier__spec">Liputan rumah lengkap</div>
                    <div className="tier__price"><small>BERMULA</small><strong>RM59,999</strong></div>
                    <a href="https://wa.me/60193428981" className="tier__cta">Tanya →</a>
                    <ul className="tier__feats"><li>Semua dalam 7-dalam-1</li><li>Set dokumentasi penuh</li><li>Sokongan penyelarasan tapak</li><li>9 kategori reka bentuk dilindungi</li></ul>
                    <p className="tier__note">Termasuk pek serahan kontraktor</p>
                  </div>
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
                <a href="https://wa.me/60193428981" className="btn btn--primary">WhatsApp Syafiq</a>
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
