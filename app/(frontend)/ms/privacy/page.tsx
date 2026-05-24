import type { Metadata } from "next";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Notis Privasi — BINA+ Reka & Bina",
  description: "Cara BINA+ Reka & Bina mengumpul, menggunakan dan melindungi maklumat peribadi anda.",
  alternates: {
    canonical: "/ms/privacy",
    languages: {
      "en-MY": "/privacy",
      "ms-MY": "/ms/privacy",
    },
  },
  robots: { index: false, follow: true },
};

export default function PrivacyMs() {
  return (
    <main className="legal">
      <LangSetter locale="ms" />
      <p>
        <Link href="/ms" style={{ color: "var(--muted)", fontSize: ".875rem" }}>
          ← Kembali ke BINA+
        </Link>
      </p>

      <LangSwitcher locale="ms" selfHref="/ms/privacy" altHref="/privacy" variant="full" />

      <h1>Notis Privasi</h1>
      <p className="updated">Kemas kini terakhir: April 2026</p>

      <p>
        BINA+ Reka &amp; Bina (&ldquo;kami&rdquo;) menghormati privasi anda. Notis ini menjelaskan
        maklumat peribadi yang kami kumpul apabila anda menghubungi kami, cara kami menggunakannya,
        dan hak anda di bawah Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.
      </p>

      <h2>1. Apa yang kami kumpul</h2>
      <p>
        Apabila anda menghantar borang pertanyaan kami, menghantar mesej kepada kami di WhatsApp,
        menelefon, atau menghantar e-mel kepada kami, kami mengumpul:
      </p>
      <ul>
        <li>Nama dan butiran perhubungan anda (telefon, nombor WhatsApp, e-mel)</li>
        <li>Lokasi hartanah anda (kawasan / poskod)</li>
        <li>Maklumat yang anda kongsi tentang projek anda (pelan lantai, foto, skop, bajet)</li>
        <li>
          Data sumber pemasaran (iklan atau rujukan yang membawa anda kepada kami — parameter utm,
          perujuk halaman)
        </li>
      </ul>

      <h2>2. Cara kami menggunakannya</h2>
      <p>Kami menggunakan maklumat anda semata-mata untuk:</p>
      <ul>
        <li>Membalas pertanyaan anda dan menyebut harga projek anda</li>
        <li>Menjadualkan dan menjalankan lawatan tapak</li>
        <li>Mengeluarkan kontrak dan invois jika anda melibatkan kami</li>
        <li>Menghantar kemas kini projek dan log foto semasa pembinaan</li>
        <li>Meningkatkan keberkesanan pengiklanan kami (agregat, dianonimkan)</li>
      </ul>
      <p>
        Kami tidak menjual maklumat anda kepada pihak ketiga. Kami tidak melanggankan anda kepada
        surat berita tanpa kebenaran berasingan anda.
      </p>

      <h2>3. Dengan siapa kami berkongsi</h2>
      <p>Terhad kepada:</p>
      <ul>
        <li>Pasukan dalaman kami (Najiha, Syafiq, dan penyelia tapak yang ditugaskan)</li>
        <li>
          Pembekal pengendalian e-mel dan borang (Formspree, Google Workspace) — untuk menerima
          pertanyaan anda
        </li>
        <li>WhatsApp Business (Meta) — apabila anda menghantar mesej kepada kami</li>
        <li>Pembekal analitis (Plausible) — kiraan paparan halaman sahaja, tiada maklumat peribadi</li>
        <li>
          Platform pengiklanan (Meta, Google) — peristiwa penukaran dianonimkan sahaja, tidak pernah
          nama atau telefon anda
        </li>
      </ul>

      <h2>4. Berapa lama kami menyimpannya</h2>
      <p>
        Data projek aktif disimpan untuk tempoh penglibatan ditambah 7 tahun untuk tujuan
        perakaunan dan waranti. Pertanyaan yang tidak diteruskan kepada projek dipadamkan daripada
        CRM aktif kami selepas 18 bulan.
      </p>

      <h2>5. Hak anda</h2>
      <p>Di bawah PDPA, anda boleh, pada bila-bila masa:</p>
      <ul>
        <li>Memohon salinan maklumat peribadi yang kami simpan tentang anda</li>
        <li>Meminta kami membetulkan maklumat yang tidak tepat</li>
        <li>Menarik balik kebenaran untuk pemprosesan berkaitan pemasaran</li>
        <li>
          Memohon pemadaman (tertakluk kepada kewajipan undang-undang kami untuk mengekalkan rekod
          transaksi)
        </li>
      </ul>
      <p>
        Untuk melaksanakan mana-mana ini, e-mel{" "}
        <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a> dengan baris
        subjek &ldquo;Permintaan PDPA&rdquo;.
      </p>

      <h2>6. Kuki dan penjejakan</h2>
      <p>
        Halaman pendaratan ini menggunakan storan pihak pertama yang minimum untuk mengingati iklan
        yang membawa anda ke sini (supaya kami boleh mengaitkan petunjuk dengan betul). Kami
        menggunakan Plausible untuk analitis paparan halaman yang menghormati privasi — tiada kuki
        peribadi ditetapkan oleh Plausible. Jika anda tiba melalui iklan Meta atau Google,
        platform-platform tersebut mungkin menetapkan kuki mereka sendiri untuk pengukuran
        penukaran iklan.
      </p>

      <h2>7. Hubungi</h2>
      <p>
        BINA+ Reka &amp; Bina
        <br />
        24-1, Jalan Matahari Aa U5/Aa, Pinggiran Subang, 40150 Shah Alam, Selangor
        <br />
        <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a> ·{" "}
        <a href="tel:+60193428981">+60 19-342 8981</a>
      </p>
    </main>
  );
}
