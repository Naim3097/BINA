import type { Locale } from "./dict";

/** A string available in both site languages. */
export type Bi = { en: string; ms: string };

/** A content block inside an article body. Each block carries both languages. */
export type BlogBlock =
  | { type: "p"; text: Bi }
  | { type: "h2"; text: Bi }
  | { type: "h3"; text: Bi }
  | { type: "ul"; items: Bi[] }
  | { type: "ol"; items: Bi[] }
  | { type: "quote"; text: Bi };

export type BlogFaq = { q: Bi; a: Bi };

export type BlogCategory =
  | "renovation-cost"
  | "local-guides"
  | "new-home"
  | "design-ideas"
  | "design-build";

/** CTA that ties a post to a specific BINA+ package, with a pre-filled WhatsApp message. */
export type BlogCta = {
  label: Bi;
  /** Pre-fill text for the WhatsApp link (per language). */
  waText: Bi;
  /** Secondary link target (usually a /services anchor). */
  href: string;
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: Bi;
  excerpt: Bi;
  metaDescription: Bi;
  hero: string;
  heroAlt: Bi;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readMins: number;
  keywords: string[];
  cta: BlogCta;
  body: BlogBlock[];
  faqs: BlogFaq[];
  /** Slugs of related posts (internal linking). */
  related: string[];
};

export const WA_PHONE = "60193428981";

export function waLink(text: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

export const CATEGORY_LABELS: Record<BlogCategory, Bi> = {
  "renovation-cost": { en: "Renovation Cost", ms: "Kos Renovasi" },
  "local-guides": { en: "Local Guides", ms: "Panduan Tempatan" },
  "new-home": { en: "New Home", ms: "Rumah Baharu" },
  "design-ideas": { en: "Design Ideas", ms: "Idea Reka Bentuk" },
  "design-build": { en: "Design & Build", ms: "Reka & Bina" },
};

export const BLOG_INTRO = {
  en: {
    eyebrow: "BINA+ Journal",
    title: "Notes from a Shah Alam design & build studio.",
    sub: "How much things actually cost, where contractors go wrong, and what we've learned building homes across the Klang Valley.",
    readMore: "Read article",
    minRead: "min read",
    allPosts: "All posts",
    related: "Related reading",
    faqTitle: "Frequently asked questions",
    backToBlog: "All articles",
    tocLabel: "Published",
  },
  ms: {
    eyebrow: "Jurnal BINA+",
    title: "Catatan dari sebuah studio reka & bina di Shah Alam.",
    sub: "Berapa kos sebenar, di mana kontraktor selalu silap, dan apa yang kami belajar dari setiap rumah yang kami bina di Lembah Klang.",
    readMore: "Baca artikel",
    minRead: "min bacaan",
    allPosts: "Semua artikel",
    related: "Bacaan berkaitan",
    faqTitle: "Soalan lazim",
    backToBlog: "Semua artikel",
    tocLabel: "Diterbitkan",
  },
} as const;

// ---------------------------------------------------------------------------
// Posts
// 24 cornerstone articles. Mixed shapes on purpose: some opinion pieces, some
// case studies, some short utility listicles, some Q&As. EN + BM written to
// read like a person, not a template.
// ---------------------------------------------------------------------------

export const POSTS: BlogPost[] = [
  // 01 — Standard guide (anchor post)
  {
    slug: "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
    category: "renovation-cost",
    title: {
      en: "Renovation Cost in Malaysia: What You Actually Pay in 2026",
      ms: "Kos Renovasi di Malaysia: Berapa Sebenar Yang Anda Bayar Pada 2026",
    },
    excerpt: {
      en: "Real Klang Valley price bands by scope and by room, plus the line items that quietly blow most renovation budgets.",
      ms: "Julat harga sebenar di Lembah Klang ikut skop dan bilik, dan item yang selalu buat bajet renovasi tersasar.",
    },
    metaDescription: {
      en: "Real 2026 renovation cost ranges in Malaysia by scope and by room, written by a Shah Alam design and build studio. Plus the line items that quietly inflate your quote.",
      ms: "Julat kos renovasi sebenar 2026 di Malaysia ikut skop dan bilik, ditulis oleh studio reka dan bina di Shah Alam. Termasuk item yang selalu naikkan quote anda.",
    },
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Home renovation in progress with tools and materials",
      ms: "Renovasi rumah dalam perjalanan dengan alat dan bahan",
    },
    date: "2026-01-12",
    readMins: 11,
    keywords: ["kos renovate rumah", "renovation cost malaysia", "klang valley renovation", "harga renovasi 2026"],
    cta: {
      label: { en: "Get a real, itemised quote", ms: "Dapatkan quote terperinci, betul-betul" },
      waText: {
        en: "Hi BINA+, I read your renovation cost guide and want an itemised quote for my home.",
        ms: "Hai BINA+, saya baca artikel kos renovasi anda dan nak quote terperinci untuk rumah saya.",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "The honest answer to \"how much does it cost to renovate a house in Malaysia\" is a range, not a number. What you spend depends on whether you're refreshing one room or rebuilding the slab. Below are the bands we see every month from real quotes around the Klang Valley.",
          ms: "Jawapan jujur untuk \"berapa kos renovasi rumah di Malaysia\" adalah satu julat, bukan satu angka. Berapa anda belanja bergantung pada sama ada anda nak segar semula satu bilik atau rombak sampai ke slab. Berikut adalah julat yang kami nampak setiap bulan dari quote sebenar di sekitar Lembah Klang.",
        },
      },
      {
        type: "h2",
        text: { en: "Price by scope", ms: "Harga ikut skop" },
      },
      {
        type: "ul",
        items: [
          { en: "Light refresh (paint, minor carpentry, one room): RM15k to RM40k", ms: "Penyegaran ringan (cat, kerja kayu kecil, satu bilik): RM15k hingga RM40k" },
          { en: "Kitchen + living fit-out with built-ins: RM40k to RM120k", ms: "Pemasangan dapur + ruang tamu dengan built-in: RM40k hingga RM120k" },
          { en: "Single-storey back extension: from RM100k", ms: "Sambungan setingkat di belakang: dari RM100k" },
          { en: "Full two-storey extension: from RM200k", ms: "Sambungan dua tingkat penuh: dari RM200k" },
          { en: "Whole-home gut and rebuild: RM250k and up", ms: "Rombakan dan bina semula seluruh rumah: RM250k ke atas" },
        ],
      },
      {
        type: "p",
        text: {
          en: "These are starting points, not quotes. A terrace in Subang Jaya and a bungalow in Shah Alam can carry the same scope but different numbers once structure, access and finishes are factored in.",
          ms: "Ini titik permulaan, bukan quote. Rumah teres di Subang Jaya dan banglo di Shah Alam boleh ada skop sama tapi nombor berbeza bila struktur, akses dan kemasan diambil kira.",
        },
      },
      {
        type: "h2",
        text: { en: "Price by house type", ms: "Harga ikut jenis rumah" },
      },
      {
        type: "p",
        text: {
          en: "Same scope, very different price depending on what you're working with. The bands below are for a full mid-tier renovation, not a refresh.",
          ms: "Skop yang sama, harga sangat berbeza ikut apa yang anda kerjakan. Julat di bawah adalah untuk renovasi pertengahan penuh, bukan penyegaran.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Condo or serviced apartment (~900 to 1,300 sqft): RM30k to RM90k for a fit-out, RM90k to RM180k for a full renovation", ms: "Kondo atau apartmen servis (~900 hingga 1,300 kp): RM30k hingga RM90k untuk pemasangan, RM90k hingga RM180k untuk renovasi penuh" },
          { en: "Single-storey terrace (~1,100 to 1,400 sqft): RM60k to RM150k typical mid-range", ms: "Teres setingkat (~1,100 hingga 1,400 kp): RM60k hingga RM150k untuk pertengahan biasa" },
          { en: "Double-storey terrace (~1,700 to 2,100 sqft): RM100k to RM280k typical mid-range", ms: "Teres dua tingkat (~1,700 hingga 2,100 kp): RM100k hingga RM280k untuk pertengahan biasa" },
          { en: "Semi-D (~2,200 to 3,000 sqft): RM180k to RM450k for a full renovation", ms: "Semi-D (~2,200 hingga 3,000 kp): RM180k hingga RM450k untuk renovasi penuh" },
          { en: "Bungalow (3,000+ sqft): RM300k upward, very dependent on spec", ms: "Banglo (3,000+ kp): RM300k ke atas, sangat bergantung pada spec" },
        ],
      },
      {
        type: "h2",
        text: { en: "Price by room", ms: "Harga ikut bilik" },
      },
      {
        type: "p",
        text: {
          en: "If you're renovating part of the house, work room by room. The bands below assume mid-tier finishes (laminated carpentry, quartz-look worktops, SPC flooring) and reasonable layout changes only.",
          ms: "Kalau anda renovate sebahagian rumah, kerja bilik demi bilik. Julat di bawah anggap kemasan pertengahan (kerja kayu laminated, meja kerja rupa kuarza, lantai SPC) dan perubahan layout yang munasabah sahaja.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Master bedroom with built-in wardrobe (~120 sqft): RM12k to RM30k", ms: "Bilik tidur utama dengan almari built-in (~120 kp): RM12k hingga RM30k" },
          { en: "Common bedroom with wardrobe (~90 sqft): RM8k to RM18k", ms: "Bilik tidur biasa dengan almari (~90 kp): RM8k hingga RM18k" },
          { en: "Master bathroom (60 to 80 sqft): RM12k to RM30k", ms: "Bilik air utama (60 hingga 80 kp): RM12k hingga RM30k" },
          { en: "Common bathroom (40 to 60 sqft): RM6k to RM15k", ms: "Bilik air biasa (40 hingga 60 kp): RM6k hingga RM15k" },
          { en: "Kitchen + dapur kering (16 to 20 lf cabinetry): RM20k to RM60k", ms: "Dapur + dapur kering (16 hingga 20 kaki larian kabinet): RM20k hingga RM60k" },
          { en: "Wet kitchen or yard enclosure: RM8k to RM25k", ms: "Dapur basah atau halaman tertutup: RM8k hingga RM25k" },
          { en: "Living + dining (TV cabinet, ceiling, flooring): RM18k to RM45k", ms: "Ruang tamu + makan (kabinet TV, siling, lantai): RM18k hingga RM45k" },
          { en: "Study or family hall: RM10k to RM25k", ms: "Bilik belajar atau ruang keluarga: RM10k hingga RM25k" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Numbers stack. A full-home renovation isn't just the sum of room ranges because shared scopes (rewiring, replumbing, full painting, common-area flooring) get charged once but apply across rooms.",
          ms: "Nombor ini boleh ditambah. Renovasi seluruh rumah bukan setakat jumlah julat bilik, sebab skop kongsi (pendawaian semula, paip semula, cat penuh, lantai kawasan umum) dicaj sekali tapi terpakai untuk semua bilik.",
        },
      },
      {
        type: "h2",
        text: { en: "What actually moves the price", ms: "Apa yang sebenarnya naikkan harga" },
      },
      {
        type: "ol",
        items: [
          { en: "Structural work. Moving walls, beams, or adding a floor brings in an engineer and inflates cost fastest.", ms: "Kerja struktur. Mengalihkan dinding, rasuk atau menambah tingkat akan libatkan jurutera dan naikkan kos paling cepat." },
          { en: "Wet works. Kitchens and bathrooms carry plumbing, waterproofing and tiling, all labour-heavy.", ms: "Kerja basah. Dapur dan bilik air ada paip, kalis air dan jubin. Semua memerlukan banyak buruh." },
          { en: "Material tier. Laminate vs solid surface, SPC vs tile. The same layout can swing 30 to 50 percent.", ms: "Tahap bahan. Laminate vs solid surface, SPC vs jubin. Susun atur yang sama boleh berbeza 30 hingga 50 peratus." },
          { en: "Carpentry volume. Built-in wardrobes, TV cabinets and kitchen cabinets are priced per foot run.", ms: "Jumlah kerja kayu. Almari built-in, kabinet TV dan kabinet dapur dikira ikut kaki larian." },
        ],
      },
      {
        type: "h2",
        text: { en: "A worked example: 1,500 sqft semi-double, mid-tier renovation", ms: "Contoh sebenar: separuh dua tingkat 1,500 kp, renovasi pertengahan" },
      },
      {
        type: "p",
        text: {
          en: "An illustrative scope: client took possession of a 4-year-old terrace, wants a full refresh before moving in. No structural changes, just M&E refresh, full carpentry, new tiling in wet zones, SPC across dry zones, mid-tier finishes throughout.",
          ms: "Skop ilustrasi: pelanggan ambil milik teres 4 tahun, nak segar penuh sebelum pindah masuk. Tiada perubahan struktur, sekadar M&E refresh, kerja kayu penuh, jubin baru di kawasan basah, SPC untuk kawasan kering, kemasan pertengahan menyeluruh.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Hacking and disposal: RM6,000", ms: "Pemecahan dan pelupusan: RM6,000" },
          { en: "Wiring upgrade (DB rewire + extra points): RM18,000", ms: "Naik taraf pendawaian (DB rewire + titik tambahan): RM18,000" },
          { en: "Plumbing rerouting (kitchen + 2 bathrooms): RM12,000", ms: "Pindahan paip (dapur + 2 bilik air): RM12,000" },
          { en: "Waterproofing (2 bathrooms + kitchen + yard): RM9,000", ms: "Kalis air (2 bilik air + dapur + halaman): RM9,000" },
          { en: "Tiling labour and grout (350 sqft of wet areas): RM4,200", ms: "Pemasangan jubin dan grout (350 kp kawasan basah): RM4,200" },
          { en: "SPC flooring across dry areas (~900 sqft installed): RM9,000", ms: "Lantai SPC kawasan kering (~900 kp dipasang): RM9,000" },
          { en: "Plaster ceiling (~600 sqft, cove lighting included): RM6,500", ms: "Siling plaster (~600 kp, dengan lampu cove): RM6,500" },
          { en: "Kitchen carpentry (16 lf laminated, soft-close, quartz top): RM22,000", ms: "Kerja kayu dapur (16 kaki larian laminated, soft-close, atas kuarza): RM22,000" },
          { en: "Master wardrobe (8 lf, sliding doors): RM7,500", ms: "Almari utama (8 kaki larian, pintu gelongsor): RM7,500" },
          { en: "Common bedroom wardrobes (4 lf x 2 rooms): RM7,000", ms: "Almari bilik tidur biasa (4 kaki larian x 2 bilik): RM7,000" },
          { en: "TV cabinet and feature wall: RM6,500", ms: "Kabinet TV dan dinding ciri: RM6,500" },
          { en: "Bathroom fittings (mid-range WC, basin, mixer, shower): RM7,000", ms: "Lekapan bilik air (WC, basin, mixer, shower pertengahan): RM7,000" },
          { en: "Interior paint (full home): RM5,500", ms: "Cat dalaman (seluruh rumah): RM5,500" },
          { en: "Doors (5 internal + 1 main, mid-range): RM6,800", ms: "Pintu (5 dalaman + 1 utama, pertengahan): RM6,800" },
          { en: "Lighting (downlights, fans, fittings): RM5,000", ms: "Lampu (downlight, kipas, lekapan): RM5,000" },
          { en: "Project management and site supervision: RM12,000", ms: "Pengurusan projek dan penyeliaan tapak: RM12,000" },
          { en: "Subtotal: ~RM144,000", ms: "Subtotal: ~RM144,000" },
          { en: "10 percent contingency for what's behind the walls: ~RM14,000", ms: "Kontingensi 10 peratus untuk apa yang ada di sebalik dinding: ~RM14,000" },
          { en: "All-in: ~RM158,000", ms: "Jumlah keseluruhan: ~RM158,000" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Same property, premium finishes (solid surface tops, shaker carpentry, brand-name sanitaryware) and the all-in climbs to RM200k+. Same property, budget-tier (melamine, basic fittings, no waterproofing redo) and a cowboy contractor will quote you RM85k. The latter is the quote you read about in horror stories six months later.",
          ms: "Hartanah yang sama, kemasan premium (atas solid surface, kerja kayu shaker, sanitari berjenama) jumlah naik RM200k+. Hartanah yang sama, tahap bajet (melamine, lekapan asas, tiada kalis air semula) dan kontraktor cincai akan quote anda RM85k. Yang kedua tu adalah quote yang anda baca dalam kisah ngeri enam bulan kemudian.",
        },
      },
      {
        type: "h2",
        text: { en: "Where most quotes hide cost", ms: "Di mana kebanyakan quote sembunyikan kos" },
      },
      {
        type: "p",
        text: {
          en: "If a quote is suspiciously cheap, look for what's missing. Hacking and disposal. Waterproofing. M&E (mechanical and electrical) upgrades. Tile screeding. Permits and management corp deposits. The cheap contractor often hasn't priced these. You pay for them later, in cash, with no leverage.",
          ms: "Kalau quote nampak murah pelik, tengok apa yang takda. Pemecahan dan pelupusan. Kalis air. Naik taraf M&E (mekanikal dan elektrikal). Screed jubin. Permit dan deposit badan pengurusan. Kontraktor murah selalunya tak masukkan benda ni. Lepas tu anda bayar sendiri, secara tunai, dan tiada bargaining power.",
        },
      },
      {
        type: "h2",
        text: { en: "How payments stage out", ms: "Bagaimana bayaran disusun" },
      },
      {
        type: "p",
        text: {
          en: "A proper renovation contract is paid in stages tied to certified work, not on a calendar. The shape we use, and what you should expect from any honest contractor:",
          ms: "Kontrak renovasi yang betul dibayar secara berperingkat, terikat pada kerja yang disahkan, bukan ikut tarikh. Susunan yang kami guna, dan apa yang anda patut harap dari mana-mana kontraktor jujur:",
        },
      },
      {
        type: "ol",
        items: [
          { en: "Booking and design deposit (5 to 10 percent): locks in your slot, pays for drawings", ms: "Deposit tempahan dan reka bentuk (5 hingga 10 peratus): pegang slot anda, bayar lukisan" },
          { en: "Mobilisation (15 to 20 percent): site protection, hacking, scaffold, initial materials", ms: "Mobilisasi (15 hingga 20 peratus): perlindungan tapak, pemecahan, perancah, bahan awal" },
          { en: "Structural and waterproofing (20 to 25 percent): the bones, before any nice work begins", ms: "Struktur dan kalis air (20 hingga 25 peratus): tulang belakang, sebelum kerja cantik bermula" },
          { en: "Carpentry and joinery (20 to 25 percent): wardrobes, kitchen, TV cabinet take their share", ms: "Kerja kayu (20 hingga 25 peratus): almari, dapur, kabinet TV ambil bahagian mereka" },
          { en: "Finishes (15 to 20 percent): tiling, painting, fittings, lighting", ms: "Kemasan (15 hingga 20 peratus): jubin, cat, lekapan, lampu" },
          { en: "Handover and snagging (5 to 10 percent): held back until the snag list is closed", ms: "Serahan dan snagging (5 hingga 10 peratus): tahan sampai senarai snag ditutup" },
        ],
      },
      {
        type: "p",
        text: {
          en: "We refuse to release the final 5 percent until the snag list is closed and signed. Most homeowners don't realise how much leverage that final tranche gives them. If a contractor wants 90 percent paid before handover, you're paying for nothing in return.",
          ms: "Kami tak akan lepaskan 5 peratus terakhir sampai senarai snag ditutup dan ditandatangan. Ramai pemilik rumah tak sedar berapa banyak kuasa tawar-menawar yang baki akhir tu beri pada mereka. Kalau kontraktor nak 90 peratus dibayar sebelum serahan, anda bayar untuk apa-apa sahaja yang dia nak buat selepas tu.",
        },
      },
      {
        type: "h2",
        text: { en: "What \"from\" prices actually assume", ms: "Apa yang harga \"dari\" sebenarnya andaikan" },
      },
      {
        type: "p",
        text: {
          en: "Every \"from RM200k\" headline carries assumptions. Here's what's usually baked in, and what flips the number upward fast.",
          ms: "Setiap tajuk \"dari RM200k\" ada andaian. Berikut apa yang biasanya dimasukkan, dan apa yang boleh naikkan nombor itu dengan cepat.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Existing structure is sound, no major settling or beam issues", ms: "Struktur sedia ada masih kukuh, tiada masalah enapan atau rasuk besar" },
          { en: "M&E is upgradable, not requiring a full strip-and-redo", ms: "M&E boleh dinaik taraf, bukan keseluruhan kena buka semula" },
          { en: "Lot has practical site access for materials and machinery", ms: "Lot ada akses tapak yang praktikal untuk bahan dan mesin" },
          { en: "Council approvals are achievable without unusual conditions", ms: "Kelulusan majlis boleh dicapai tanpa syarat luar biasa" },
          { en: "You make finish decisions within reasonable rounds (not redesigning mid-build)", ms: "Anda buat keputusan kemasan dalam pusingan yang munasabah (bukan reka semula pertengahan kerja)" },
        ],
      },
      {
        type: "p",
        text: {
          en: "If any of those flip, the \"from\" number is no longer your number. An honest contractor will tell you on day one that a problem exists. A bad one will discover it on day forty and bill you on day fifty.",
          ms: "Kalau mana-mana antara tu berubah, nombor \"dari\" tu bukan lagi nombor anda. Kontraktor jujur akan beritahu anda dari hari pertama yang ada masalah. Yang tak elok akan jumpa pada hari ke-40 dan bil anda pada hari ke-50.",
        },
      },
      {
        type: "h2",
        text: { en: "Sanity-check before you sign", ms: "Semak sebelum tandatangan" },
      },
      {
        type: "p",
        text: {
          en: "Insist on a line-by-line quotation before any deposit. A fixed-scope, fixed-price contract is what protects you from the mid-project variation orders that turn a RM120k job into RM180k. We do every BINA+ quote that way, and if we miss a line, that's our cost. Not yours.",
          ms: "Tegaskan quote terperinci, baris demi baris, sebelum bayar deposit. Kontrak skop tetap, harga tetap adalah benda yang lindungi anda dari arahan ubah suai pertengahan projek yang naikkan kerja RM120k jadi RM180k. Kami buat setiap quote BINA+ macam tu. Kalau kami terlepas satu baris, kos kami. Bukan anda.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "Is renovating cheaper than building new?", ms: "Renovasi lebih murah dari bina baru?" },
        a: {
          en: "If the existing structure is sound, yes. Once you start moving structural walls or adding floors, the gap closes and a fresh design and build can be better value.",
          ms: "Kalau struktur sedia ada masih kukuh, ya. Sebaik anda mula mengalihkan dinding struktur atau menambah tingkat, jurang itu mengecil dan reka dan bina baru boleh jadi lebih berbaloi.",
        },
      },
      {
        q: { en: "How much deposit is normal?", ms: "Berapa deposit yang normal?" },
        a: {
          en: "Staged payments tied to certified progress, usually 10 to 20 percent to start, then milestone draws. Walk away from anyone asking for most of the money upfront.",
          ms: "Bayaran berperingkat ikut kemajuan yang disahkan, biasanya 10 hingga 20 peratus untuk mula, kemudian bayaran ikut peringkat. Kalau ada kontraktor minta sebahagian besar di awal, tolak je.",
        },
      },
    ],
    related: [
      "single-storey-vs-double-storey-extension-cost-malaysia",
      "kitchen-renovation-cost-malaysia",
      "hidden-renovation-costs-malaysia",
    ],
  },

  // 02 — Utility listicle, no preamble, no FAQ
  {
    slug: "single-storey-vs-double-storey-extension-cost-malaysia",
    category: "renovation-cost",
    title: {
      en: "Single-Storey vs Double-Storey Extension: Side by Side",
      ms: "Sambungan Setingkat vs Dua Tingkat: Perbandingan Pantas",
    },
    excerpt: {
      en: "Two ways to add space without moving house. Costs, timelines, permits, and the one most homeowners regret picking wrong.",
      ms: "Dua cara nak tambah ruang tanpa pindah rumah. Kos, jadual, permit dan satu pilihan yang ramai pemilik rumah menyesal.",
    },
    metaDescription: {
      en: "Single-storey vs double-storey extension cost in Malaysia. Side-by-side comparison from a Shah Alam design and build team: price, time, permits, resale.",
      ms: "Kos sambungan setingkat vs dua tingkat di Malaysia. Perbandingan langsung dari pasukan reka dan bina Shah Alam: harga, masa, permit, nilai jualan semula.",
    },
    hero: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Two-storey house extension under construction",
      ms: "Sambungan rumah dua tingkat dalam pembinaan",
    },
    date: "2026-01-18",
    readMins: 9,
    keywords: ["extension cost malaysia", "kos sambungan rumah", "double storey extension", "RENO PLUS"],
    cta: {
      label: { en: "Quote me on a RENO extension", ms: "Quote saya untuk sambungan RENO" },
      waText: {
        en: "Hi BINA+, I'd like a quote for an extension (single or double storey).",
        ms: "Hai BINA+, saya nak quote untuk sambungan (setingkat atau dua tingkat).",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Two choices when your family outgrows the house but you love the lot. Single-storey back extension, or full two-storey build-up. Here's how they actually compare.",
          ms: "Dua pilihan bila keluarga membesar tapi anda sayangkan lot rumah tu. Sambungan setingkat di belakang, atau bina-naik dua tingkat penuh. Inilah perbandingan sebenarnya.",
        },
      },
      {
        type: "h2",
        text: { en: "Single-storey back extension", ms: "Sambungan setingkat di belakang" },
      },
      {
        type: "ul",
        items: [
          { en: "Cost: from RM100k (our RENO START)", ms: "Kos: dari RM100k (RENO START kami)" },
          { en: "Time: 2 to 3 months", ms: "Masa: 2 hingga 3 bulan" },
          { en: "Permits: lighter, single-level submission", ms: "Permit: lebih ringan, penyerahan satu aras" },
          { en: "Best for: a bigger kitchen, wet kitchen, family hall, or one extra room", ms: "Sesuai untuk: dapur lebih besar, dapur basah, ruang keluarga, atau satu bilik tambahan" },
          { en: "Catch: you're using up the back garden", ms: "Awas: anda guna habis taman belakang" },
        ],
      },
      {
        type: "h2",
        text: { en: "Full two-storey extension", ms: "Sambungan dua tingkat penuh" },
      },
      {
        type: "ul",
        items: [
          { en: "Cost: from RM200k (our RENO PLUS)", ms: "Kos: dari RM200k (RENO PLUS kami)" },
          { en: "Time: 3 to 6 months", ms: "Masa: 3 hingga 6 bulan" },
          { en: "Permits: full submission, engineer-endorsed", ms: "Permit: penyerahan penuh, disahkan jurutera" },
          { en: "Best for: 2 to 3 bedrooms, maximising small lots", ms: "Sesuai untuk: 2 hingga 3 bilik tidur, memaksimumkan lot kecil" },
          { en: "Catch: foundations may need strengthening", ms: "Awas: asas mungkin kena dikukuhkan" },
        ],
      },
      {
        type: "h2",
        text: { en: "Cost breakdown: where the money actually goes", ms: "Pecahan kos: ke mana wang itu sebenarnya pergi" },
      },
      {
        type: "p",
        text: {
          en: "An extension isn't just \"build the new bit.\" Every project carries the same set of items, just at different scales. Here's how a typical extension splits.",
          ms: "Sambungan bukan setakat \"bina bahagian baru.\" Setiap projek ada set item yang sama, cuma berbeza skala. Inilah pecahan sambungan biasa.",
        },
      },
      {
        type: "h3",
        text: { en: "Single-storey rear extension (~150 sqft footprint)", ms: "Sambungan setingkat di belakang (~150 kp tapak)" },
      },
      {
        type: "ul",
        items: [
          { en: "Demolition of existing rear wall + tiling: RM3,500", ms: "Perobohan dinding belakang sedia ada + jubin: RM3,500" },
          { en: "Foundation work (strip footing for single-storey): RM12,000", ms: "Kerja asas (strip footing untuk setingkat): RM12,000" },
          { en: "Structural shell (walls, beams, columns): RM28,000", ms: "Cangkang struktur (dinding, rasuk, tiang): RM28,000" },
          { en: "Roof structure and tiling (continuing existing pitch): RM14,000", ms: "Struktur bumbung dan jubin (sambung pic sedia ada): RM14,000" },
          { en: "Internal wall finishes, plaster, ceiling: RM9,000", ms: "Kemasan dinding dalam, plaster, siling: RM9,000" },
          { en: "Floor screed and tile or SPC: RM6,000", ms: "Screed lantai dan jubin atau SPC: RM6,000" },
          { en: "Electrical extension (lights, points, fan): RM4,500", ms: "Sambungan elektrik (lampu, titik, kipas): RM4,500" },
          { en: "Plumbing extension (if a new wet kitchen or bath): RM6,000 to RM12,000", ms: "Sambungan paip (kalau dapur basah atau bilik air baru): RM6,000 hingga RM12,000" },
          { en: "Engineer fees and council submission: RM4,500", ms: "Bayaran jurutera dan penyerahan majlis: RM4,500" },
          { en: "Doors, windows, glazing: RM6,000 to RM12,000", ms: "Pintu, tingkap, kaca: RM6,000 hingga RM12,000" },
          { en: "Project management: RM6,500", ms: "Pengurusan projek: RM6,500" },
          { en: "Subtotal: ~RM100k to RM118k", ms: "Subtotal: ~RM100k hingga RM118k" },
        ],
      },
      {
        type: "h3",
        text: { en: "Full two-storey extension (~300 sqft footprint, two floors)", ms: "Sambungan dua tingkat penuh (~300 kp tapak, dua tingkat)" },
      },
      {
        type: "ul",
        items: [
          { en: "Demolition and prep (more invasive, structural ties): RM6,500", ms: "Perobohan dan persiapan (lebih invasif, ikatan struktur): RM6,500" },
          { en: "Foundation work (deeper, often with pile cap if soil demands): RM22,000", ms: "Kerja asas (lebih dalam, selalunya dengan pile cap kalau tanah memerlukan): RM22,000" },
          { en: "Structural shell, both floors (heavier RC frame): RM65,000", ms: "Cangkang struktur, kedua-dua tingkat (kerangka RC lebih berat): RM65,000" },
          { en: "Roof structure and tiling (extending or replacing): RM22,000", ms: "Struktur bumbung dan jubin (sambung atau ganti): RM22,000" },
          { en: "Internal finishes, both floors: RM18,000", ms: "Kemasan dalam, kedua-dua tingkat: RM18,000" },
          { en: "Floor screed and finishes: RM12,000", ms: "Screed lantai dan kemasan: RM12,000" },
          { en: "Electrical, both floors (full M&E coordination): RM12,000", ms: "Elektrik, kedua-dua tingkat (penyelarasan M&E penuh): RM12,000" },
          { en: "Plumbing (new upstairs bathroom, kitchen extension): RM18,000", ms: "Paip (bilik air tingkat atas baru, sambungan dapur): RM18,000" },
          { en: "Engineer, architect (or design-build firm) and submissions: RM12,000", ms: "Jurutera, arkitek (atau firma reka-bina) dan penyerahan: RM12,000" },
          { en: "Doors, windows, balcony glazing: RM18,000", ms: "Pintu, tingkap, kaca balkoni: RM18,000" },
          { en: "Staircase (if new flow required): RM10,000", ms: "Tangga (kalau aliran baru diperlukan): RM10,000" },
          { en: "Project management: RM14,000", ms: "Pengurusan projek: RM14,000" },
          { en: "Subtotal: ~RM200k to RM230k", ms: "Subtotal: ~RM200k hingga RM230k" },
        ],
      },
      {
        type: "p",
        text: {
          en: "The line that surprises homeowners most: foundation. Adding a second floor on top of existing single-storey footings usually means demolishing and rebuilding the foundation along the extension zone. That single line can be RM15k to RM30k depending on soil and access.",
          ms: "Item yang paling mengejutkan pemilik rumah: asas. Tambah tingkat dua atas asas sedia ada untuk setingkat selalunya bermakna merobohkan dan membina semula asas di zon sambungan. Satu baris tu sahaja boleh kos RM15k hingga RM30k bergantung pada tanah dan akses.",
        },
      },
      {
        type: "h2",
        text: { en: "Why the upper floor is cheaper per sqft than the ground floor", ms: "Kenapa tingkat atas lebih murah per kp dari tingkat bawah" },
      },
      {
        type: "p",
        text: {
          en: "A common misconception: that adding a second floor doubles the cost. It doesn't. The expensive items in a build (foundations, services, roof, council submissions) only happen once. The second floor adds structure, finishes and a bit more M&E. That's why a 300 sqft two-storey extension at ~RM220k delivers 600 sqft of new space, while two separate single-storey extensions of 300 sqft each would cost RM200k to RM240k for half the space.",
          ms: "Salah faham biasa: tambah tingkat dua akan gandakan kos. Tidak. Item yang mahal dalam binaan (asas, servis, bumbung, penyerahan majlis) hanya berlaku sekali. Tingkat atas tambah struktur, kemasan, dan sedikit M&E. Sebab itu sambungan dua tingkat 300 kp pada ~RM220k beri 600 kp ruang baru, sedangkan dua sambungan setingkat 300 kp masing-masing akan kos RM200k hingga RM240k untuk separuh ruang.",
        },
      },
      {
        type: "h2",
        text: { en: "Timeline and permit reality", ms: "Realiti jadual dan permit" },
      },
      {
        type: "ul",
        items: [
          { en: "Single-storey rear extension: 2 to 3 months on site, 4 to 8 weeks for permits in most Selangor councils", ms: "Sambungan setingkat di belakang: 2 hingga 3 bulan di tapak, 4 hingga 8 minggu untuk permit di kebanyakan majlis Selangor" },
          { en: "Full two-storey extension: 3 to 6 months on site, 8 to 16 weeks for permits depending on engineer-endorsed drawings", ms: "Sambungan dua tingkat penuh: 3 hingga 6 bulan di tapak, 8 hingga 16 minggu untuk permit bergantung pada lukisan yang disahkan jurutera" },
          { en: "Both: budget 4 to 6 weeks extra for monsoon rain if the slab pour falls in November to January", ms: "Kedua-dua: peruntukkan 4 hingga 6 minggu tambahan untuk hujan tengkujuh kalau curah slab jatuh dalam November hingga Januari" },
        ],
      },
      {
        type: "h2",
        text: { en: "What the resale market actually rewards", ms: "Apa yang pasaran jualan semula sebenarnya hargakan" },
      },
      {
        type: "p",
        text: {
          en: "If resale is part of your logic, the numbers tilt toward double-storey for landed houses (more bedrooms = more buyers) and toward extra livable single-storey area for condos and bungalows where adding a second floor isn't structurally possible. Double-storey extensions on terraces in Subang Jaya, Petaling Jaya and Shah Alam usually recover 60 to 80 percent of build cost in resale within 5 years. Single-storey extensions recover less in resale but cost a lot less to enjoy in the meantime.",
          ms: "Kalau jualan semula sebahagian dari logik anda, nombor cenderung ke arah dua tingkat untuk rumah landed (lebih bilik tidur = lebih pembeli) dan ke arah ruang setingkat tambahan untuk kondo dan banglo di mana tambah tingkat dua tak boleh dilakukan dari segi struktur. Sambungan dua tingkat untuk teres di Subang Jaya, Petaling Jaya, dan Shah Alam biasanya pulih 60 hingga 80 peratus kos binaan dalam jualan semula dalam 5 tahun. Sambungan setingkat pulih kurang dalam jualan semula tapi kos jauh kurang untuk dinikmati sementara itu.",
        },
      },
      {
        type: "h2",
        text: { en: "When an extension doesn't make sense", ms: "Bila sambungan tak masuk akal" },
      },
      {
        type: "ul",
        items: [
          { en: "Lot is too small to leave any usable yard after extending", ms: "Lot terlalu kecil untuk biarkan halaman yang berguna selepas sambung" },
          { en: "Existing structure is older than 30 years and would need foundation rework anyway", ms: "Struktur sedia ada lebih 30 tahun dan akan perlukan kerja semula asas pun" },
          { en: "Council bylaws prohibit extending beyond a certain coverage ratio for your zoning", ms: "Undang-undang kecil majlis menghalang sambungan melebihi nisbah liputan tertentu untuk zoning anda" },
          { en: "Selling within 3 years and the catchment doesn't reward the spec you'd build", ms: "Akan menjual dalam 3 tahun dan kawasan tidak hargakan spec yang anda akan bina" },
          { en: "The budget is tight enough that a proper renovation of existing rooms gets you more livable comfort", ms: "Bajet ketat sampai renovasi yang betul untuk bilik sedia ada beri anda lebih banyak keselesaan untuk tinggal" },
        ],
      },
      {
        type: "h2",
        text: { en: "Pick by what you actually need", ms: "Pilih ikut apa yang anda betul-betul perlukan" },
      },
      {
        type: "p",
        text: {
          en: "If you want one more room and a real kitchen, single-storey wins on speed and price. If you need bedrooms and you're working a tight terrace lot, double-storey buys you the most space per ringgit. Don't go double-storey just because it looks bigger on Instagram. We've watched families spend RM200k on a second floor they barely use.",
          ms: "Kalau anda nak satu bilik tambahan dan dapur yang betul, setingkat menang dari segi kelajuan dan harga. Kalau anda perlukan bilik tidur dan lot teres anda kecil, dua tingkat beri ruang paling banyak per ringgit. Jangan pergi dua tingkat sebab nampak besar dalam Instagram. Kami pernah tengok keluarga belanja RM200k untuk tingkat dua yang jarang mereka guna.",
        },
      },
    ],
    faqs: [],
    related: [
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
      "building-a-house-in-selangor-permits-timeline",
      "hidden-renovation-costs-malaysia",
    ],
  },

  // 03 — Standard guide with opinions
  {
    slug: "kitchen-renovation-cost-malaysia",
    category: "renovation-cost",
    title: {
      en: "Kitchen Renovation Cost in Malaysia, By Tier",
      ms: "Kos Renovasi Dapur di Malaysia, Ikut Tahap",
    },
    excerpt: {
      en: "What a RM15k, RM30k and RM60k kitchen actually buys in 2026, and the line item we keep watching contractors quietly cut.",
      ms: "Apa yang dapur RM15k, RM30k dan RM60k sebenarnya beri pada 2026, dan satu item yang kontraktor selalu senyap-senyap potong.",
    },
    metaDescription: {
      en: "Kitchen renovation cost in Malaysia broken down by tier (RM15k, RM30k, RM60k). Cabinet pricing, worktops, wet kitchen and where the budget actually goes.",
      ms: "Kos renovasi dapur di Malaysia dipecahkan ikut tahap (RM15k, RM30k, RM60k). Harga kabinet, meja kerja, dapur basah dan ke mana bajet sebenarnya pergi.",
    },
    hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Modern renovated kitchen with island",
      ms: "Dapur moden yang direnovasi dengan island",
    },
    date: "2026-01-24",
    readMins: 10,
    keywords: ["kos renovate dapur", "kitchen renovation cost malaysia", "harga kabinet dapur", "kitchen cabinet price"],
    cta: {
      label: { en: "Quote me a proper kitchen", ms: "Quote saya untuk dapur yang betul" },
      waText: {
        en: "Hi BINA+, I'd like a quote for a kitchen renovation or fit-out.",
        ms: "Hai BINA+, saya nak quote untuk renovasi atau pemasangan dapur.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "The kitchen is the room where renovation budgets are won or lost. It carries cabinetry, worktops, plumbing, electrical and tiling all in one space, which is why a small kitchen can still cost as much as a much larger bedroom.",
          ms: "Dapur adalah bilik di mana bajet renovasi menang atau kalah. Ia ada kabinet, meja kerja, paip, elektrik dan jubin dalam satu ruang, sebab tu dapur kecil pun boleh kos sama dengan bilik tidur yang lagi besar.",
        },
      },
      {
        type: "h2",
        text: { en: "RM10k to RM20k: budget tier", ms: "RM10k hingga RM20k: tahap bajet" },
      },
      {
        type: "p",
        text: {
          en: "Melamine cabinets, a laminate or quartz-look worktop, basic tiling, reusing existing plumbing points. Good for a first home, or a quick refresh before moving in. This is what our ID START package gives you.",
          ms: "Kabinet melamine, meja kerja laminate atau rupa kuarza, jubin asas, guna semula titik paip sedia ada. Bagus untuk rumah pertama, atau penyegaran cepat sebelum pindah masuk. Ini yang pakej ID START kami beri.",
        },
      },
      {
        type: "h2",
        text: { en: "RM20k to RM40k: where most families land", ms: "RM20k hingga RM40k: di mana kebanyakan keluarga berhenti" },
      },
      {
        type: "p",
        text: {
          en: "Laminated or 4G-glass doors, solid-surface or quartz worktop, an island or a proper wet/dry split, soft-close hardware, relocated sink or hob. Real Klang Valley sweet spot. ID PLUS sits here.",
          ms: "Pintu laminated atau kaca 4G, meja kerja solid-surface atau kuarza, island atau pembahagian basah/kering yang betul, soft-close, sinki atau dapur yang dipindahkan. Sweet spot sebenar Lembah Klang. ID PLUS ada di sini.",
        },
      },
      {
        type: "h2",
        text: { en: "RM40k to RM60k+: premium build-out", ms: "RM40k hingga RM60k+: binaan premium" },
      },
      {
        type: "p",
        text: {
          en: "Shaker or aluminium-carcass cabinetry, full-height tall units, integrated appliances, stone worktops, designed wet kitchen. Built to last 15 years and to lift the home's resale value. ID MAX territory.",
          ms: "Kabinet shaker atau kerangka aluminium, unit tinggi penuh, peralatan bersepadu, meja kerja batu, dapur basah yang direka. Dibina untuk tahan 15 tahun dan menaikkan nilai jualan semula rumah. Ini wilayah ID MAX.",
        },
      },
      {
        type: "h2",
        text: { en: "Where the money goes", ms: "Ke mana wang itu pergi" },
      },
      {
        type: "ul",
        items: [
          { en: "Cabinetry, priced per foot run: usually 40 to 55 percent of the budget", ms: "Kabinet, dikira per kaki larian: biasanya 40 hingga 55 peratus bajet" },
          { en: "Worktop: laminate cheapest, quartz and sintered stone the dearest", ms: "Meja kerja: laminate paling murah, kuarza dan sintered stone paling mahal" },
          { en: "Wet works: moving the sink or adding a wet kitchen adds plumbing cost", ms: "Kerja basah: mengalihkan sinki atau tambah dapur basah naikkan kos paip" },
          { en: "Appliances: usually you supply, but coordinate sizes early", ms: "Peralatan: biasanya anda beli sendiri, tapi selaraskan saiz awal-awal" },
        ],
      },
      {
        type: "h2",
        text: { en: "Cabinet pricing: the per-foot reality", ms: "Harga kabinet: realiti per kaki" },
      },
      {
        type: "p",
        text: {
          en: "Kitchen cabinets are quoted by linear foot (lf). Top and bottom cabinets are usually priced separately. The numbers below are 2026 Klang Valley fabricator prices, before any markup a contractor adds.",
          ms: "Kabinet dapur diquote ikut kaki larian (lf). Kabinet atas dan bawah biasanya dihargakan berasingan. Angka di bawah adalah harga pengilang Lembah Klang 2026, sebelum markup yang kontraktor tambah.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Bottom cabinet, melamine door, plywood carcass: RM900 to RM1,200 per lf", ms: "Kabinet bawah, pintu melamine, carcass plywood: RM900 hingga RM1,200 per kaki larian" },
          { en: "Bottom cabinet, laminated or 4G glass, plywood carcass: RM1,300 to RM1,800 per lf", ms: "Kabinet bawah, laminated atau kaca 4G, carcass plywood: RM1,300 hingga RM1,800 per kaki larian" },
          { en: "Bottom cabinet, acrylic or shaker, plywood or aluminium carcass: RM1,800 to RM2,800 per lf", ms: "Kabinet bawah, akrilik atau shaker, carcass plywood atau aluminium: RM1,800 hingga RM2,800 per kaki larian" },
          { en: "Top cabinet, any material: roughly 60 to 70 percent of the matching bottom price", ms: "Kabinet atas, mana-mana bahan: lebih kurang 60 hingga 70 peratus harga kabinet bawah yang sepadan" },
          { en: "Tall unit (fridge or oven housing), per lf: 1.4x to 1.7x the bottom cabinet rate", ms: "Tall unit (untuk peti sejuk atau ketuhar), per kaki larian: 1.4x hingga 1.7x kadar kabinet bawah" },
        ],
      },
      {
        type: "p",
        text: {
          en: "A typical 16 lf kitchen with bottom + top + one tall unit (fridge): roughly 28 to 34 \"linear feet equivalent\" of carpentry. That's where the bulk of your kitchen budget goes.",
          ms: "Dapur biasa 16 kaki larian dengan kabinet bawah + atas + satu tall unit (peti sejuk): lebih kurang 28 hingga 34 \"kaki larian kabinet setara\" kerja kayu. Di situlah sebahagian besar bajet dapur anda pergi.",
        },
      },
      {
        type: "h2",
        text: { en: "Worktop costs by material", ms: "Kos meja kerja ikut bahan" },
      },
      {
        type: "ul",
        items: [
          { en: "Laminate (HPL on substrate): RM80 to RM150 per running foot", ms: "Laminate (HPL atas substrat): RM80 hingga RM150 per kaki larian" },
          { en: "Solid surface (Corian-type): RM350 to RM550 per running foot", ms: "Solid surface (jenis Corian): RM350 hingga RM550 per kaki larian" },
          { en: "Engineered quartz (Caesarstone, Silestone equivalents): RM450 to RM800 per running foot", ms: "Kuarza kejuruteraan (setara Caesarstone, Silestone): RM450 hingga RM800 per kaki larian" },
          { en: "Sintered stone (Dekton, Neolith equivalents): RM700 to RM1,200 per running foot", ms: "Sintered stone (setara Dekton, Neolith): RM700 hingga RM1,200 per kaki larian" },
          { en: "Natural granite or marble: hugely variable, RM300 to RM900+ depending on slab", ms: "Granit atau marmar asli: sangat berbeza, RM300 hingga RM900+ bergantung slab" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Quartz is the Klang Valley default for good reason. Durable, doesn't stain, won't crack under a hot pot, looks good for 10+ years. Sintered stone is the upgrade for clients who want a true matte stone look. Laminate is fine for budget kitchens but burns and chips at corners over time.",
          ms: "Kuarza adalah default Lembah Klang dengan alasan yang baik. Tahan lasak, tak kotor, tak retak bawah periuk panas, nampak elok sampai 10+ tahun. Sintered stone adalah upgrade untuk pelanggan yang nak rupa batu matte sebenar. Laminate boleh tahan untuk dapur bajet tapi terbakar dan terhakis di sudut lama-lama.",
        },
      },
      {
        type: "h2",
        text: { en: "Layout cost deltas", ms: "Perbezaan kos ikut layout" },
      },
      {
        type: "ul",
        items: [
          { en: "Galley (two parallel runs): baseline. Most efficient cost per useful storage.", ms: "Galley (dua larian selari): baseline. Paling cekap kos untuk simpanan berguna." },
          { en: "L-shape: 5 to 10 percent more than galley, mostly from corner carcass complexity.", ms: "Bentuk L: 5 hingga 10 peratus lebih dari galley, kebanyakannya dari kerumitan carcass sudut." },
          { en: "U-shape: 20 to 30 percent more. Two corners, more lf, often a tall pantry block.", ms: "Bentuk U: 20 hingga 30 peratus lebih. Dua sudut, lebih banyak kaki larian, selalunya ada blok pantri tinggi." },
          { en: "Galley + island: 30 to 50 percent more, since the island carries top and bottom + a worktop overhang.", ms: "Galley + island: 30 hingga 50 peratus lebih, sebab island ada kabinet atas-bawah + lebihan meja kerja." },
          { en: "Wet + dry kitchen split (separate enclosure for wet zone): add RM12k to RM30k beyond the main kitchen.", ms: "Pembahagian dapur basah + kering (ruang berasingan untuk zon basah): tambah RM12k hingga RM30k atas dapur utama." },
        ],
      },
      {
        type: "h2",
        text: { en: "A worked example: 18 lf mid-tier kitchen, no island, wet/dry split", ms: "Contoh sebenar: dapur 18 kaki larian pertengahan, tiada island, pembahagian basah/kering" },
      },
      {
        type: "p",
        text: {
          en: "Typical scope for a young family in a 1,500 sqft terrace. Galley layout in the main dry kitchen, small wet kitchen at the rear yard. Laminated cabinetry, quartz top, soft-close drawers, Blum hardware throughout.",
          ms: "Skop biasa untuk keluarga muda dalam teres 1,500 kp. Layout galley untuk dapur kering utama, dapur basah kecil di halaman belakang. Kabinet laminated, atas kuarza, laci soft-close, hardware Blum menyeluruh.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Hacking and disposal of existing kitchen: RM2,500", ms: "Pemecahan dan pelupusan dapur sedia ada: RM2,500" },
          { en: "Plumbing rerouting (sink + new wet kitchen): RM4,500", ms: "Pindahan paip (sinki + dapur basah baru): RM4,500" },
          { en: "Electrical (new points for hood, microwave, fridge, induction): RM3,500", ms: "Elektrik (titik baru untuk hud, microwave, peti sejuk, induksi): RM3,500" },
          { en: "Waterproofing (kitchen floor + wet kitchen + splashback): RM3,000", ms: "Kalis air (lantai dapur + dapur basah + splashback): RM3,000" },
          { en: "Floor tile and splashback (kitchen + wet kitchen, 110 sqft): RM4,200", ms: "Jubin lantai dan splashback (dapur + dapur basah, 110 kp): RM4,200" },
          { en: "Main cabinetry, 18 lf laminated, plywood carcass, soft-close (top + bottom + tall fridge unit): RM26,000", ms: "Kabinet utama, 18 kaki larian laminated, carcass plywood, soft-close (atas + bawah + tall unit peti sejuk): RM26,000" },
          { en: "Quartz worktop (~22 running feet incl. splashback): RM11,500", ms: "Meja kerja kuarza (~22 kaki larian termasuk splashback): RM11,500" },
          { en: "Wet kitchen cabinetry (4 lf, aluminium carcass): RM4,800", ms: "Kabinet dapur basah (4 kaki larian, carcass aluminium): RM4,800" },
          { en: "Sink, mixer, hood mounting and venting: RM1,800", ms: "Sinki, mixer, pemasangan dan ventilasi hud: RM1,800" },
          { en: "LED under-cabinet lighting and downlights: RM1,500", ms: "Lampu LED bawah kabinet dan downlight: RM1,500" },
          { en: "Project management and supervision: RM4,000", ms: "Pengurusan projek dan penyeliaan: RM4,000" },
          { en: "Subtotal: RM67,300", ms: "Subtotal: RM67,300" },
          { en: "Mid-tier all-in: ~RM67k", ms: "Pertengahan keseluruhan: ~RM67k" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Drop the wet kitchen and you save RM12k. Swap quartz for laminate worktop and you save another RM6k. Go to melamine cabinetry instead of laminated and you save RM7k. Three changes, the same kitchen now costs RM42k. That's how a budget tier and a mid tier kitchen can look identical on paper but feel different the day you move in.",
          ms: "Buang dapur basah, anda jimat RM12k. Tukar kuarza ke meja kerja laminate, jimat lagi RM6k. Pergi melamine bukan laminated, jimat RM7k. Tiga perubahan, dapur yang sama sekarang kos RM42k. Itulah sebab dapur tahap bajet dan pertengahan boleh nampak sama atas kertas tapi terasa berbeza hari anda pindah masuk.",
        },
      },
      {
        type: "h2",
        text: { en: "What gets quietly cut to make a quote cheap", ms: "Apa yang dipotong senyap-senyap untuk buat quote murah" },
      },
      {
        type: "ul",
        items: [
          { en: "Hardware: Blum drawer runners and hinges replaced with no-name OEM. Falls apart in 18 months.", ms: "Hardware: pelari laci dan engsel Blum diganti dengan OEM tanpa nama. Akan rosak dalam 18 bulan." },
          { en: "Carcass: plywood swapped for MDF. Swells the first time you spill water under the sink.", ms: "Carcass: plywood ditukar ke MDF. Akan kembang kali pertama anda tumpah air di bawah sinki." },
          { en: "Worktop edges: thin laminate edging instead of proper post-formed or stone edges. Lifts within a year.", ms: "Tepi meja kerja: laminate nipis dipasang bukan post-formed atau tepi batu yang betul. Akan terangkat dalam setahun." },
          { en: "Internal organisers: drawers come empty. No cutlery dividers, no soft-close on inner drawers.", ms: "Organiser dalaman: laci datang kosong. Tiada pembahagi sudu, tiada soft-close pada laci dalam." },
          { en: "Splashback: tiled with cheap ceramics instead of a single back-painted glass or proper splash material.", ms: "Splashback: dipasang dengan jubin seramik murah bukan satu kaca dicat belakang atau bahan splash yang betul." },
        ],
      },
      {
        type: "p",
        text: {
          en: "Always ask what's behind the doors. A pretty front face hides cheap carcasses faster than any other room in the house.",
          ms: "Sentiasa tanya apa yang ada di belakang pintu. Muka depan yang cantik boleh sembunyikan carcass murah lebih cepat dari mana-mana bilik lain dalam rumah.",
        },
      },
      {
        type: "h2",
        text: { en: "Timeline for a typical kitchen renovation", ms: "Jadual untuk renovasi dapur biasa" },
      },
      {
        type: "ul",
        items: [
          { en: "Week 1: hacking, disposal, plumbing and electrical rough-in", ms: "Minggu 1: pemecahan, pelupusan, paip dan elektrik asas" },
          { en: "Week 2: waterproofing, floor tile installation", ms: "Minggu 2: kalis air, pemasangan jubin lantai" },
          { en: "Week 3: ceiling, wall painting prep, splashback prep", ms: "Minggu 3: siling, persiapan cat dinding, persiapan splashback" },
          { en: "Week 4: cabinet installation (carcass + door)", ms: "Minggu 4: pemasangan kabinet (carcass + pintu)" },
          { en: "Week 5: worktop fabrication (off-site) and installation", ms: "Minggu 5: fabrikasi meja kerja (di luar tapak) dan pemasangan" },
          { en: "Week 6: appliances, sink, mixer, lighting, snag list close-out", ms: "Minggu 6: peralatan, sinki, mixer, lampu, tutup senarai snag" },
        ],
      },
      {
        type: "p",
        text: {
          en: "6 weeks is realistic for a kitchen-only renovation if the contractor sequences cleanly. We've seen the same scope drag to 12 weeks when the worktop is ordered late or the appliances arrive after the cabinetry is installed.",
          ms: "6 minggu adalah realistik untuk renovasi dapur sahaja kalau kontraktor susun kerja dengan kemas. Kami pernah lihat skop yang sama tarik sampai 12 minggu bila meja kerja diorder lewat atau peralatan sampai selepas kabinet sudah dipasang.",
        },
      },
      {
        type: "h2",
        text: { en: "The line we keep watching get cut", ms: "Satu item yang kami selalu nampak dipotong" },
      },
      {
        type: "p",
        text: {
          en: "Drawer interiors. A cheap contractor will quote nice door fronts and then put MDF carcasses behind them with no drawer organisers, no soft-close, no proper hardware. Two years later the drawers sag. Always ask what's behind the doors.",
          ms: "Bahagian dalam laci. Kontraktor murah akan quote pintu yang cantik tapi letak carcass MDF di belakangnya, tiada organiser laci, tiada soft-close, hardware murah. Dua tahun kemudian laci longgar. Selalu tanya apa yang ada di belakang pintu.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "Should I keep my existing kitchen layout?", ms: "Patut ke saya kekalkan layout dapur sekarang?" },
        a: {
          en: "Keeping the sink and hob in place saves on plumbing and wiring. If the layout works, spend the savings on better cabinet hardware instead.",
          ms: "Kekalkan sinki dan dapur di tempatnya jimat kos paip dan pendawaian. Kalau layout dah ok, lebih baik belanja penjimatan tu pada hardware kabinet yang lebih baik.",
        },
      },
    ],
    related: [
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
      "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
      "small-kitchen-layout-ideas-malaysia",
    ],
  },

  // 04 — Opinion piece (we are a Shah Alam D&B, so we have license)
  {
    slug: "design-build-contractor-shah-alam",
    category: "local-guides",
    title: {
      en: "Choosing a Design & Build Studio in Shah Alam (We're One, So Read Carefully)",
      ms: "Memilih Studio Reka & Bina di Shah Alam (Kami Salah Satunya, Jadi Baca Elok-Elok)",
    },
    excerpt: {
      en: "A biased view, openly biased. What separates a proper Shah Alam design and build team from the dozens of new ones popping up every year.",
      ms: "Pandangan berat sebelah, dan kami akui. Apa yang bezakan pasukan reka dan bina Shah Alam yang betul dari berpuluh-puluh yang baru muncul setiap tahun.",
    },
    metaDescription: {
      en: "How to choose a design and build studio in Shah Alam, written by one. The questions to ask, the red flags, and what local presence actually buys you.",
      ms: "Cara memilih studio reka dan bina di Shah Alam, ditulis oleh studio yang berpangkalan di sini. Soalan yang nak ditanya, tanda bahaya, dan apa erti sebenar studio tempatan.",
    },
    hero: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Contractor reviewing plans on a construction site",
      ms: "Kontraktor menyemak pelan di tapak pembinaan",
    },
    date: "2026-02-02",
    readMins: 5,
    keywords: ["contractor shah alam", "design and build selangor", "kontraktor shah alam", "renovation contractor klang valley"],
    cta: {
      label: { en: "Talk to BINA+, Shah Alam", ms: "Berbincang dengan BINA+, Shah Alam" },
      waText: {
        en: "Hi BINA+, I'm looking for a Shah Alam design and build studio. Can we chat?",
        ms: "Hai BINA+, saya cari studio reka dan bina di Shah Alam. Boleh kita borak?",
      },
      href: "/services",
    },
    body: [
      {
        type: "p",
        text: {
          en: "We're BINA+, based in Pinggiran Subang, Shah Alam. So consider the source. We obviously think a Shah Alam studio beats hiring an architect in KL and a contractor in Klang separately. The point of this piece is to give you the questions that would catch a bad studio, ours included.",
          ms: "Kami BINA+, berpangkalan di Pinggiran Subang, Shah Alam. Jadi ambil tahu sumber tulisan ni. Sudah tentu kami rasa studio Shah Alam lagi baik daripada upah arkitek di KL dan kontraktor di Klang secara berasingan. Tujuan artikel ni adalah untuk beri anda soalan yang boleh tangkap studio yang buruk, kami pun termasuk.",
        },
      },
      {
        type: "h2",
        text: { en: "Five questions that filter fast", ms: "Lima soalan yang menapis dengan cepat" },
      },
      {
        type: "ol",
        items: [
          { en: "Can I visit your office and a live job site this week?", ms: "Boleh saya lawat pejabat dan tapak kerja yang sedang berjalan minggu ni?" },
          { en: "Who is my single point of contact from first sketch to handover?", ms: "Siapa orang yang saya berurusan dari lakaran pertama sampai serahan?" },
          { en: "Show me a recent itemised quote and a signed contract template.", ms: "Tunjuk saya quote terperinci yang baru dan templat kontrak yang ditandatangan." },
          { en: "How are variation orders priced and approved during the build?", ms: "Bagaimana arahan ubah suai dihargakan dan diluluskan semasa pembinaan?" },
          { en: "What's your defect liability period and who handles the snag list?", ms: "Apa tempoh tanggungan kecacatan anda dan siapa uruskan senarai snag?" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Any studio that fumbles those is a studio that will fumble your build. We've fumbled before. The good ones learn and write the answer into their process.",
          ms: "Mana-mana studio yang tergagap-gagap dengan soalan tu adalah studio yang akan tergagap-gagap dengan binaan anda. Kami pun pernah silap. Yang bagus belajar dan masukkan jawapan tu dalam proses mereka.",
        },
      },
      {
        type: "h2",
        text: { en: "What being local actually buys you", ms: "Apa yang lokasi tempatan sebenarnya beri" },
      },
      {
        type: "p",
        text: {
          en: "Faster site visits. Direct knowledge of MBSA submissions. Familiarity with the standard floor plates in Setia Alam, Eco Ardence, and Bandar Rimbayu. The ability to send someone over the next day when a tile cracks six months after handover. A contractor two hours away rarely comes back.",
          ms: "Lawatan tapak yang lebih cepat. Tahu langsung pasal penyerahan MBSA. Biasa dengan pelan lantai standard di Setia Alam, Eco Ardence, dan Bandar Rimbayu. Boleh hantar seseorang esok bila jubin retak enam bulan selepas serahan. Kontraktor yang dua jam jauh jarang balik.",
        },
      },
      {
        type: "h2",
        text: { en: "Red flags worth walking away from", ms: "Tanda bahaya yang patut anda elakkan" },
      },
      {
        type: "ul",
        items: [
          { en: "Wants more than 30 percent upfront", ms: "Mahukan lebih 30 peratus di awal" },
          { en: "No written contract, only WhatsApp chat", ms: "Tiada kontrak bertulis, hanya WhatsApp" },
          { en: "Quote far below everyone else (something is missing)", ms: "Quote jauh lebih murah dari yang lain (mesti ada yang tak masuk)" },
          { en: "Can't show one verifiable completed project", ms: "Tak boleh tunjuk satu pun projek siap yang boleh disahkan" },
          { en: "Pressure to decide today for a discount", ms: "Tekanan supaya tandatangan hari ini untuk diskaun" },
        ],
      },
      {
        type: "p",
        text: {
          en: "If you ask us those five questions and we fumble any of them, you have permission to use this article against us.",
          ms: "Kalau anda tanya kami lima soalan tu dan kami tergagap-gagap mana-mana, anda dibenarkan guna artikel ni untuk lawan kami.",
        },
      },
    ],
    faqs: [],
    related: [
      "how-to-vet-a-renovation-contractor-red-flags",
      "design-build-vs-architect-and-contractor",
      "design-build-contractor-shah-alam",
    ],
  },

  // 05 — Utility checklist, minimal preamble
  {
    slug: "vacant-possession-checklist-new-homeowners",
    category: "new-home",
    title: {
      en: "Vacant Possession Checklist: The Two Weeks That Save You Thousands",
      ms: "Senarai Semak Penyerahan Kosong: Dua Minggu Yang Selamatkan Anda Ribuan",
    },
    excerpt: {
      en: "What to inspect, room by room, before you sign anything or start renovating. The developer fixes these free if you catch them.",
      ms: "Apa yang nak diperiksa, bilik demi bilik, sebelum tandatangan apa-apa atau mula renovate. Developer kena baiki percuma kalau anda tangkap awal.",
    },
    metaDescription: {
      en: "A room-by-room vacant possession (VP) checklist for new Malaysian homeowners. What to test, how to log defects, and how to use the DLP properly.",
      ms: "Senarai semak penyerahan kosong (VP) bilik demi bilik untuk pemilik rumah baru di Malaysia. Apa yang nak diuji, cara catat kecacatan, dan cara guna DLP dengan betul.",
    },
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "New homeowner receiving house keys",
      ms: "Pemilik rumah baru menerima kunci rumah",
    },
    date: "2026-02-08",
    readMins: 6,
    keywords: ["vacant possession checklist", "VP rumah", "defect inspection malaysia", "new home checklist"],
    cta: {
      label: { en: "Plan your fit-out after defects clear", ms: "Rancang pemasangan selepas kecacatan diselesaikan" },
      waText: {
        en: "Hi BINA+, I just took VP and want to plan the fit-out.",
        ms: "Hai BINA+, saya baru ambil VP dan nak rancang pemasangan.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Vacant possession is the moment the developer hands you the keys. The first two weeks are when you catch defects they must fix free. Skip this and you'll pay to fix their mistakes later.",
          ms: "Penyerahan kosong adalah saat developer serahkan kunci. Dua minggu pertama adalah masa anda tangkap kecacatan yang mereka kena baiki percuma. Lepas tu anda yang bayar untuk silap mereka.",
        },
      },
      {
        type: "h2",
        text: { en: "Bring these to the inspection", ms: "Bawa benda ni semasa pemeriksaan" },
      },
      {
        type: "ul",
        items: [
          { en: "Phone for photos and a charger to test sockets", ms: "Telefon untuk foto dan pengecas untuk uji soket" },
          { en: "Masking tape to mark defects", ms: "Pita pelekat untuk tanda kecacatan" },
          { en: "A marble or small ball to check floor levels", ms: "Guli atau bola kecil untuk semak aras lantai" },
          { en: "A notebook or a defect app to log everything in writing", ms: "Buku nota atau aplikasi kecacatan untuk catat semua secara bertulis" },
        ],
      },
      {
        type: "h2",
        text: { en: "Tile and floor", ms: "Jubin dan lantai" },
      },
      {
        type: "ul",
        items: [
          { en: "Tap every tile. A hollow sound means it's loose under the surface", ms: "Ketuk setiap jubin. Bunyi berongga bermakna ia longgar di bawah" },
          { en: "Check edges and corners for chips", ms: "Periksa tepi dan sudut untuk serpihan" },
          { en: "Roll a marble to spot floor that isn't level", ms: "Gelek guli untuk kesan lantai yang tak rata" },
        ],
      },
      {
        type: "h2",
        text: { en: "Walls and ceilings", ms: "Dinding dan siling" },
      },
      {
        type: "ul",
        items: [
          { en: "Hairline cracks, especially around windows and doors", ms: "Retak halus, terutama sekeliling tingkap dan pintu" },
          { en: "Damp patches at ceiling corners (always check after rain)", ms: "Tompok lembap di sudut siling (selalu semak selepas hujan)" },
          { en: "Uneven paint, runs, missed spots", ms: "Cat tak rata, leleh, terlepas" },
        ],
      },
      {
        type: "h2",
        text: { en: "Doors, windows, locks", ms: "Pintu, tingkap, kunci" },
      },
      {
        type: "ul",
        items: [
          { en: "Every door and window opens and closes smoothly", ms: "Setiap pintu dan tingkap buka tutup lancar" },
          { en: "All locks work with both keys provided", ms: "Semua kunci berfungsi dengan dua-dua anak kunci yang diberi" },
          { en: "Visible gaps when closed (a draft test in the morning helps)", ms: "Ada celah bila ditutup (ujian deria angin pagi hari boleh bantu)" },
        ],
      },
      {
        type: "h2",
        text: { en: "Bathrooms and wet areas", ms: "Bilik air dan kawasan basah" },
      },
      {
        type: "ul",
        items: [
          { en: "Run every tap, flush every toilet, check for leaks under sinks", ms: "Buka setiap paip, pam setiap tandas, periksa kebocoran di bawah sinki" },
          { en: "Drains slope properly (pour water, watch it move)", ms: "Saluran ada cerun yang betul (curah air, tengok ia mengalir)" },
          { en: "Silicone seals are clean and continuous", ms: "Kedap silikon bersih dan berterusan" },
        ],
      },
      {
        type: "h2",
        text: { en: "Electrical", ms: "Elektrik" },
      },
      {
        type: "ul",
        items: [
          { en: "Test every socket with your charger", ms: "Uji setiap soket dengan pengecas anda" },
          { en: "Flip every switch and confirm the right light responds", ms: "Tekan setiap suis dan pastikan lampu yang betul menyala" },
          { en: "Check the DB board labels match the rooms", ms: "Semak label papan DB padan dengan bilik" },
        ],
      },
      {
        type: "h2",
        text: { en: "How to log and submit", ms: "Cara catat dan serahkan" },
      },
      {
        type: "p",
        text: {
          en: "Photograph every defect with a location note. Compile the list, send it formally to the developer within the defect liability period (commonly 24 months). Keep a copy. Written, dated records are what get things actually fixed.",
          ms: "Foto setiap kecacatan dengan nota lokasi. Susun senarai, hantar secara rasmi kepada developer dalam tempoh tanggungan kecacatan (biasanya 24 bulan). Simpan salinan. Rekod bertulis dan bertarikh yang akan buat semua tu betul-betul dibaiki.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "How long do I have to report defects?", ms: "Berapa lama saya ada untuk lapor kecacatan?" },
        a: {
          en: "Within the defect liability period stated in your SPA, commonly 24 months from VP. Report early. Don't wait until the period nearly ends.",
          ms: "Dalam tempoh tanggungan kecacatan yang tertulis dalam SPA anda, biasanya 24 bulan dari VP. Lapor awal. Jangan tunggu sampai tempoh hampir habis.",
        },
      },
    ],
    related: [
      "new-house-defect-inspection-checklist",
      "first-90-days-new-home-fit-out-plan",
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
    ],
  },

  // 06 — Q&A only, no separate FAQ block
  {
    slug: "epf-account-2-withdrawal-for-home-renovation",
    category: "new-home",
    title: {
      en: "EPF Account 2 for Your Home: The Questions Everyone Asks",
      ms: "Akaun 2 KWSP untuk Rumah Anda: Soalan Yang Semua Orang Tanya",
    },
    excerpt: {
      en: "Plain answers on using KWSP Account 2 for buying, building or settling a home loan in Malaysia.",
      ms: "Jawapan terus-terang pasal guna Akaun 2 KWSP untuk beli, bina atau settle pinjaman rumah di Malaysia.",
    },
    metaDescription: {
      en: "EPF Account 2 for housing in Malaysia: what's eligible, what you'll need, how it pairs with a bank loan, and the rules that change over time.",
      ms: "Akaun 2 KWSP untuk perumahan di Malaysia: apa yang layak, apa yang anda perlukan, bagaimana ia digabungkan dengan pinjaman bank, dan peraturan yang berubah dari masa ke masa.",
    },
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Financial planning documents and calculator",
      ms: "Dokumen perancangan kewangan dan kalkulator",
    },
    date: "2026-02-14",
    readMins: 5,
    keywords: ["kwsp account 2 renovation", "epf withdrawal housing", "pengeluaran kwsp rumah", "renovation financing malaysia"],
    cta: {
      label: { en: "Talk about financing your build", ms: "Berbincang tentang pembiayaan binaan anda" },
      waText: {
        en: "Hi BINA+, I'm planning to finance a build or renovation. Can we talk through options?",
        ms: "Hai BINA+, saya merancang biayai binaan atau renovasi. Boleh kita borak pasal pilihan?",
      },
      href: "/services",
    },
    body: [
      {
        type: "p",
        text: {
          en: "We get asked about EPF every other consultation. Here are the answers, ordered by how often they come up.",
          ms: "Setiap kali consultation, mesti ada yang tanya pasal KWSP. Inilah jawapan, disusun ikut soalan yang paling kerap.",
        },
      },
      {
        type: "h3",
        text: { en: "Can I use EPF Account 2 to renovate?", ms: "Boleh ke saya guna Akaun 2 KWSP untuk renovate?" },
      },
      {
        type: "p",
        text: {
          en: "EPF housing withdrawal is built around buying, building or settling a home loan. Pure cosmetic renovation usually doesn't qualify. Confirm the latest rules directly with KWSP before planning around it.",
          ms: "Pengeluaran perumahan KWSP direka untuk beli, bina atau settle pinjaman rumah. Renovasi kosmetik semata-mata biasanya tak layak. Sahkan peraturan terkini dengan KWSP secara terus sebelum buat perancangan.",
        },
      },
      {
        type: "h3",
        text: { en: "Can I combine EPF with a bank loan?", ms: "Boleh combine KWSP dengan pinjaman bank?" },
      },
      {
        type: "p",
        text: {
          en: "Yes, and most homeowners do. Bank loan for the bulk, EPF for the deposit, staged cash for finishing. A milestone-payment builder lets you sequence the cash flow cleanly.",
          ms: "Boleh, dan kebanyakan pemilik rumah buat macam ni. Pinjaman bank untuk bahagian besar, KWSP untuk deposit, cash berperingkat untuk kemasan. Pembina bayaran berperingkat akan susun cash flow anda dengan kemas.",
        },
      },
      {
        type: "h3",
        text: { en: "What documents do I need?", ms: "Apa dokumen yang saya perlukan?" },
      },
      {
        type: "p",
        text: {
          en: "MyKad, the SPA or building contract, your loan offer letter if you're financing through a bank, and title or land documents where applicable. The KWSP portal has the live checklist for your case type.",
          ms: "MyKad, SPA atau kontrak pembinaan, surat tawaran pinjaman kalau anda biayai melalui bank, dan dokumen hak milik atau tanah kalau berkaitan. Portal KWSP ada checklist terkini untuk jenis kes anda.",
        },
      },
      {
        type: "h3",
        text: { en: "How long does it take?", ms: "Berapa lama ia ambil masa?" },
      },
      {
        type: "p",
        text: {
          en: "Once documents are complete and approved, payment is usually within a couple of weeks. Apply well before you need the funds for a milestone, not the day before.",
          ms: "Bila dokumen siap dan diluluskan, bayaran biasanya dalam dua minggu. Mohon awal sebelum anda perlukan dana untuk peringkat bayaran, bukan sehari sebelum.",
        },
      },
      {
        type: "h3",
        text: { en: "What if the rules change?", ms: "Kalau peraturan berubah macam mana?" },
      },
      {
        type: "p",
        text: {
          en: "They do. EPF restructures account categories every few years. Anything you read online, including this page, can age fast. Always sanity-check with KWSP directly before you make a commitment based on it.",
          ms: "Memang berubah. KWSP susun semula kategori akaun setiap beberapa tahun. Apa-apa yang anda baca dalam talian, termasuk halaman ini, boleh jadi lapuk cepat. Selalu sahkan dengan KWSP terus sebelum anda buat komitmen.",
        },
      },
    ],
    faqs: [],
    related: [
      "renovation-loan-malaysia-bank-comparison",
      "vacant-possession-checklist-new-homeowners",
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
    ],
  },

  // 07 — Opinion piece, verdict first
  {
    slug: "spc-flooring-vs-tiles-vs-laminate",
    category: "design-ideas",
    title: {
      en: "SPC, Tiles, or Laminate? Our Verdict for Malaysian Homes",
      ms: "SPC, Jubin, atau Laminate? Pilihan Kami untuk Rumah di Malaysia",
    },
    excerpt: {
      en: "If you want our straight answer: SPC for the whole home, tiles for wet zones, laminate only if you're broke and renting it out.",
      ms: "Kalau anda nak jawapan terus: SPC untuk seluruh rumah, jubin untuk kawasan basah, laminate hanya kalau anda kekurangan duit dan sewakan saja.",
    },
    metaDescription: {
      en: "SPC vs tiles vs laminate flooring for Malaysian homes. Straight verdict, justified, from a Klang Valley design and build studio that specs flooring weekly.",
      ms: "SPC vs jubin vs laminate untuk rumah Malaysia. Jawapan terus, ada justifikasi, dari studio reka dan bina Lembah Klang yang spec lantai setiap minggu.",
    },
    hero: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Close-up of wood-look flooring in a modern home",
      ms: "Lantai rupa kayu dalam rumah moden",
    },
    date: "2026-02-20",
    readMins: 4,
    keywords: ["spc flooring malaysia", "spc vs tiles", "laminate flooring", "lantai rumah"],
    cta: {
      label: { en: "Get help with finishes", ms: "Dapatkan bantuan pilih kemasan" },
      waText: {
        en: "Hi BINA+, I want advice on flooring and finishes for my home.",
        ms: "Hai BINA+, saya nak nasihat pasal lantai dan kemasan untuk rumah saya.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "h2",
        text: { en: "The short version", ms: "Versi pendek" },
      },
      {
        type: "ul",
        items: [
          { en: "SPC for everywhere except wet rooms", ms: "SPC untuk semua bilik kecuali bilik basah" },
          { en: "Tiles for bathrooms, wet kitchens, ground-floor entry zones", ms: "Jubin untuk bilik air, dapur basah, kawasan masuk tingkat bawah" },
          { en: "Laminate: only on a budget, and only in dry bedrooms", ms: "Laminate: hanya kalau budget ketat, dan hanya untuk bilik tidur kering" },
        ],
      },
      {
        type: "h2",
        text: { en: "Why SPC won the last five years", ms: "Kenapa SPC menang lima tahun lepas" },
      },
      {
        type: "p",
        text: {
          en: "Rigid click-lock vinyl with a stone core. Fully waterproof. Warm underfoot. Installs over your existing floor with minimal demolition. Convincingly wood-look in 2026. We use it as the default across all three of our ID packages because it survives Malaysian humidity better than anything in its price class.",
          ms: "Vinil click-lock tegar dengan teras batu. Kalis air sepenuhnya. Hangat di kaki. Boleh dipasang atas lantai sedia ada tanpa perlu pecah banyak. Rupa kayu yang convincing pada 2026. Kami guna sebagai default untuk ketiga-tiga pakej ID kami sebab ia hidup lama dalam kelembapan Malaysia berbanding apa-apa dalam kelas harga sama.",
        },
      },
      {
        type: "h2",
        text: { en: "Why tiles still belong in wet zones", ms: "Kenapa jubin masih perlu untuk kawasan basah" },
      },
      {
        type: "p",
        text: {
          en: "Nothing beats tile for genuine waterproofing under a tested membrane. SPC is water-resistant on the surface, but tile-with-membrane is a system. For bathrooms, wet kitchens and ground-floor entries that take heavy splash and constant mopping, use tile. Don't fight us on this.",
          ms: "Tiada yang kalahkan jubin untuk kalis air sebenar di bawah membran yang diuji. SPC kalis air di permukaan, tapi jubin dengan membran adalah satu sistem. Untuk bilik air, dapur basah, dan kawasan masuk tingkat bawah yang kena percikan air dan kerap dimop, guna jubin. Jangan lawan kami pasal ni.",
        },
      },
      {
        type: "h2",
        text: { en: "Why we rarely recommend laminate", ms: "Kenapa kami jarang cadangkan laminate" },
      },
      {
        type: "p",
        text: {
          en: "It's the cheapest option that looks decent, which is why investor units use it. The problem in Malaysia is humidity. One flood, one leaky aircon condensate line, one wet pet, and the boards swell. If you're renting out a unit and don't expect to live there, fine. If it's your home, spend the extra few thousand and go SPC.",
          ms: "Pilihan paling murah yang masih nampak elok, sebab tu unit pelaburan guna laminate. Masalahnya di Malaysia adalah kelembapan. Sekali banjir, sekali paip kondensat aircon bocor, sekali peliharaan basah, papan akan mengembang. Kalau anda sewa unit dan tak nak duduk sendiri, boleh tahan. Kalau ini rumah anda, belanja extra beberapa ribu, pergi SPC.",
        },
      },
    ],
    faqs: [],
    related: [
      "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
      "kitchen-renovation-cost-malaysia",
      "what-is-included-in-a-design-and-build-package",
    ],
  },

  // 08 — Long essay
  {
    slug: "what-is-included-in-a-design-and-build-package",
    category: "design-build",
    title: {
      en: "What Goes Into a Design & Build Package (and What Should)",
      ms: "Apa Yang Termasuk dalam Pakej Reka & Bina (dan Apa Yang Sepatutnya)",
    },
    excerpt: {
      en: "A walk through what we cover from the first site visit to handover, why it's structured this way, and where shortcuts cost you later.",
      ms: "Penjelasan apa yang kami buat dari lawatan tapak pertama sampai serahan, kenapa ia disusun begini, dan di mana jalan pintas akan kos anda kemudian.",
    },
    metaDescription: {
      en: "Inside a proper design and build package in Malaysia: design and 3D, structure and submissions, project management, finishes and handover. A walk-through.",
      ms: "Dalam pakej reka dan bina yang betul di Malaysia: reka bentuk dan 3D, struktur dan penyerahan, pengurusan projek, kemasan dan serahan. Penjelasan lengkap.",
    },
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
    heroAlt: {
      en: "Completed modern Malaysian home exterior",
      ms: "Luaran rumah moden Malaysia yang siap",
    },
    date: "2026-02-26",
    readMins: 5,
    keywords: ["design and build package malaysia", "pakej reka dan bina", "what is design build", "bina rumah"],
    cta: {
      label: { en: "See our packages", ms: "Lihat pakej kami" },
      waText: {
        en: "Hi BINA+, I'd like to understand your design and build packages.",
        ms: "Hai BINA+, saya nak faham pakej reka dan bina anda.",
      },
      href: "/services#design-build",
    },
    body: [
      {
        type: "p",
        text: {
          en: "When someone asks us what's in a design and build package, the honest answer is: every part of getting from your land or your old house to keys in your hand. That sounds vague, so let's walk it.",
          ms: "Bila ada yang tanya kami apa dalam pakej reka dan bina, jawapan jujur adalah: setiap bahagian dari tanah anda atau rumah lama ke kunci dalam tangan anda. Bunyi macam kabur, jadi mari kita huraikan.",
        },
      },
      {
        type: "p",
        text: {
          en: "It starts with a brief. We sit down, on site if possible, and listen to how you actually live. How many people, what you cook, where you read, where you'd like to sit at the end of a long day. Most studios skip this and go straight to floor plans. We've learned that a brief built around real life beats one built around square footage every time.",
          ms: "Ia bermula dengan brief. Kami duduk, di tapak kalau boleh, dan dengar bagaimana anda sebenarnya hidup. Berapa ramai orang, anda masak apa, anda baca di mana, di mana anda nak duduk hujung hari yang panjang. Kebanyakan studio langkau ni dan terus pergi ke pelan lantai. Kami belajar bahawa brief yang dibina sekitar kehidupan sebenar mengalahkan brief yang dibina sekitar keluasan kaki persegi setiap masa.",
        },
      },
      {
        type: "p",
        text: {
          en: "From the brief we develop a layout, then a 3D you can walk through. You see the home before a single brick is laid. You change your mind about the kitchen island position. We move it now, not after the slab is poured. That's the cheapest design change you'll ever make.",
          ms: "Dari brief kami bangunkan layout, kemudian 3D yang anda boleh tinjau. Anda nampak rumah sebelum sebutir bata diletak. Anda tukar fikiran pasal kedudukan island dapur. Kami pindah sekarang, bukan selepas slab dituang. Itu perubahan reka bentuk paling murah yang anda akan buat.",
        },
      },
      {
        type: "p",
        text: {
          en: "Then come the technical drawings, the structural engineering, and the local authority submissions. This is the part homeowners hate. It's also the part that most often delays a project, because incomplete drawings get bounced. We do this in-house and stay on it. Our packages bake all submission work into the price so the permit maze becomes our job, not yours.",
          ms: "Lepas tu masuklah lukisan teknikal, kejuruteraan struktur, dan penyerahan ke pihak berkuasa tempatan. Bahagian ni yang pemilik rumah benci. Ini juga bahagian yang paling kerap melewatkan projek, sebab lukisan yang tak lengkap akan dipulangkan. Kami buat sendiri dan duduk dengannya. Pakej kami masukkan semua kerja penyerahan dalam harga, jadi labirin permit jadi kerja kami, bukan kerja anda.",
        },
      },
      {
        type: "p",
        text: {
          en: "Construction comes next: foundations, structure, roof, M&E rough-in, finishing, fittings. Every week, photos arrive. Every fortnight, the project lead walks the site with you. You see the work as it happens. The bad version of this industry hides the build behind a fence and shows you results at the end. We've never understood that approach.",
          ms: "Pembinaan datang seterusnya: asas, struktur, bumbung, M&E asas, kemasan, lekapan. Setiap minggu, foto sampai. Setiap dua minggu, project lead jalan dengan anda di tapak. Anda nampak kerja seperti yang berlaku. Versi buruk industri ni sembunyikan binaan di balik pagar dan tunjukkan hasil di akhir sahaja. Kami tak pernah faham pendekatan tu.",
        },
      },
      {
        type: "p",
        text: {
          en: "Handover is the last and most underrated part. A proper handover means a closed snag list, documented warranties, a 12-month defect liability period, and a CCC issued through the submitting professional. Our packages also bundle in items most studios charge extra for: 3D design, smart lock, downlight and fan fittings, sink and hood installation, a safe back door, a site visit, and an itemised quotation. We bundle them because they always come up anyway.",
          ms: "Serahan adalah bahagian terakhir dan paling kurang dihargai. Serahan yang betul bermakna senarai snag yang ditutup, waranti yang didokumenkan, tempoh tanggungan kecacatan 12 bulan, dan CCC yang dikeluarkan melalui profesional yang menyerah. Pakej kami juga masukkan benda yang kebanyakan studio caj tambahan: reka bentuk 3D, smart lock, pemasangan downlight dan kipas, pemasangan sinki dan hud, pintu belakang keselamatan, lawatan tapak, dan quote terperinci. Kami masukkan sebab semua tu pasti akan jadi isu kemudian.",
        },
      },
      {
        type: "p",
        text: {
          en: "What you should look for in any design and build package, ours or someone else's: fixed scope, fixed price, written timeline, weekly updates, in-house team, and clear variation pricing. Anything less and you're paying to be a project manager.",
          ms: "Apa yang anda patut cari dalam mana-mana pakej reka dan bina, kami atau studio lain: skop tetap, harga tetap, jadual bertulis, kemas kini mingguan, pasukan dalaman, dan harga ubah suai yang jelas. Kurang dari tu, anda bayar untuk jadi project manager sendiri.",
        },
      },
    ],
    faqs: [],
    related: [
      "design-build-vs-architect-and-contractor",
      "how-long-to-build-a-house-in-malaysia",
      "design-build-contractor-shah-alam",
    ],
  },

  // 09 — Utility listicle (psf reference)
  {
    slug: "renovation-cost-per-square-foot-klang-valley",
    category: "renovation-cost",
    title: {
      en: "Klang Valley Renovation Cost Per Square Foot, 2026",
      ms: "Kos Renovasi Per Kaki Persegi di Lembah Klang, 2026",
    },
    excerpt: {
      en: "Quick reference psf bands by finish level. Use this to sanity-check any contractor's quote in five minutes.",
      ms: "Rujukan pantas julat psf ikut tahap kemasan. Guna untuk semak quote mana-mana kontraktor dalam lima minit.",
    },
    metaDescription: {
      en: "Renovation cost per square foot in the Klang Valley for 2026. Real psf bands by finish level from a Shah Alam design and build studio, with how to use psf properly.",
      ms: "Kos renovasi per kaki persegi di Lembah Klang untuk 2026. Julat psf sebenar ikut tahap kemasan dari studio reka dan bina Shah Alam, termasuk cara guna psf yang betul.",
    },
    hero: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Architect measuring floor plans", ms: "Arkitek mengukur pelan lantai" },
    date: "2026-03-02",
    readMins: 8,
    keywords: ["renovation cost per square foot", "psf renovation malaysia", "kos renovate per kaki", "klang valley reno cost"],
    cta: {
      label: { en: "Get the itemised version", ms: "Dapatkan versi terperinci" },
      waText: {
        en: "Hi BINA+, I'd like an itemised renovation quote, not just psf.",
        ms: "Hai BINA+, saya nak quote renovasi yang terperinci, bukan setakat psf.",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Contractors quote two ways: lump sum, or psf times your area. Knowing the band lets you check either one in minutes.",
          ms: "Kontraktor quote dengan dua cara: jumlah sekaligus, atau psf darab keluasan anda. Bila anda tahu julatnya, anda boleh semak mana-mana dalam beberapa minit.",
        },
      },
      {
        type: "h2",
        text: { en: "2026 psf bands, Klang Valley", ms: "Julat psf 2026, Lembah Klang" },
      },
      {
        type: "ul",
        items: [
          { en: "Basic refurbishment (paint, patch, light tile): RM80 to RM150 psf", ms: "Pembaikan asas (cat, tampal, jubin ringan): RM80 hingga RM150 psf" },
          { en: "Mid-range with carpentry and wet works: RM150 to RM280 psf", ms: "Pertengahan dengan kerja kayu dan kerja basah: RM150 hingga RM280 psf" },
          { en: "Premium full gut and rebuild: RM280 to RM450+ psf", ms: "Premium rombakan dan bina semula penuh: RM280 hingga RM450+ psf" },
          { en: "New build (design and build): RM180 to RM300+ psf depending on spec", ms: "Binaan baru (reka dan bina): RM180 hingga RM300+ psf bergantung pada spec" },
        ],
      },
      {
        type: "h2",
        text: { en: "Psf by room type", ms: "Psf ikut jenis bilik" },
      },
      {
        type: "p",
        text: {
          en: "Whole-home psf hides a lot. Wet zones cost 3 to 4 times more per square foot than dry zones because of plumbing, waterproofing and tile labour density. If you're renovating part of a home, room-level psf is the more honest number.",
          ms: "Psf keseluruhan rumah sembunyikan banyak benda. Zon basah kos 3 hingga 4 kali ganda per kaki persegi daripada zon kering kerana paip, kalis air dan kepadatan kerja jubin. Kalau anda renovate sebahagian rumah, psf peringkat bilik adalah angka yang lebih jujur.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Bedroom with carpentry: RM150 to RM280 psf", ms: "Bilik tidur dengan kerja kayu: RM150 hingga RM280 psf" },
          { en: "Living and dining (with TV cabinet, ceiling, flooring): RM180 to RM320 psf", ms: "Ruang tamu dan makan (dengan kabinet TV, siling, lantai): RM180 hingga RM320 psf" },
          { en: "Kitchen (full carpentry, worktop, tile, M&E): RM450 to RM900 psf", ms: "Dapur (kerja kayu penuh, meja kerja, jubin, M&E): RM450 hingga RM900 psf" },
          { en: "Wet kitchen or yard fit-out: RM300 to RM600 psf", ms: "Pemasangan dapur basah atau halaman: RM300 hingga RM600 psf" },
          { en: "Bathroom (the most expensive room per psf): RM550 to RM1,200 psf", ms: "Bilik air (bilik paling mahal per psf): RM550 hingga RM1,200 psf" },
          { en: "Study or family hall (light scope): RM120 to RM220 psf", ms: "Bilik belajar atau ruang keluarga (skop ringan): RM120 hingga RM220 psf" },
        ],
      },
      {
        type: "p",
        text: {
          en: "If a contractor quotes you a flat RM200 psf across all rooms of your house, they're either overcharging the dry areas or underquoting the wet ones. Both are problems.",
          ms: "Kalau kontraktor quote anda RM200 psf untuk semua bilik dalam rumah, mereka sama ada overcharge zon kering atau under-quote zon basah. Kedua-duanya masalah.",
        },
      },
      {
        type: "h2",
        text: { en: "Psf by finish tier", ms: "Psf ikut tahap kemasan" },
      },
      {
        type: "p",
        text: {
          en: "The same room at three different finish tiers can carry very different psf. Here's a rough split for mid-range renovation scope.",
          ms: "Bilik yang sama pada tiga tahap kemasan berbeza boleh ada psf yang sangat berbeza. Inilah pecahan kasar untuk skop renovasi pertengahan.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Budget tier (melamine, basic ceramic, mid-range fittings): 100% baseline", ms: "Tahap bajet (melamine, seramik asas, lekapan pertengahan): 100% baseline" },
          { en: "Mid tier (laminated carpentry, quartz worktops, SPC flooring, Blum hardware): 130% to 160% of baseline", ms: "Tahap pertengahan (kerja kayu laminated, meja kerja kuarza, lantai SPC, hardware Blum): 130% hingga 160% baseline" },
          { en: "Premium tier (shaker or acrylic carpentry, stone worktops, brand-name fittings, feature lighting): 180% to 240% of baseline", ms: "Tahap premium (kerja kayu shaker atau akrilik, meja kerja batu, lekapan berjenama, lampu ciri): 180% hingga 240% baseline" },
        ],
      },
      {
        type: "h2",
        text: { en: "Why psf for new build differs from psf for renovation", ms: "Kenapa psf untuk binaan baru berbeza dari psf untuk renovasi" },
      },
      {
        type: "p",
        text: {
          en: "Renovation psf can be higher than new-build psf for the same square footage. Counterintuitive, but real. Reasons: you pay for demolition and disposal before you start, you work around an existing structure with limited access, you discover hidden issues (bad wiring, old plumbing, slab problems) that don't exist on virgin land. A new build is more predictable. Renovating an older home is a discovery process.",
          ms: "Psf renovasi boleh lebih tinggi dari psf binaan baru untuk keluasan yang sama. Tak masuk akal pada pandangan pertama, tapi memang betul. Sebab: anda bayar untuk perobohan dan pelupusan sebelum mula, anda kerja keliling struktur sedia ada dengan akses terhad, anda jumpa isu tersembunyi (pendawaian rosak, paip lama, masalah slab) yang takda pada tanah kosong. Binaan baru lebih boleh diramal. Renovate rumah lama adalah proses penemuan.",
        },
      },
      {
        type: "h2",
        text: { en: "Diseconomies of scale on small jobs", ms: "Diseconomi skala untuk kerja kecil" },
      },
      {
        type: "p",
        text: {
          en: "Smaller projects carry higher psf, almost without exception. A 300 sqft single-bathroom renovation will sit at RM500 to RM900 psf because the fixed costs (site setup, supervision, mobilisation) spread over fewer square feet. A whole-home renovation of 2,000 sqft might come in at RM150 to RM280 psf for the same finish quality. Don't expect a contractor's psf for a small job to match their psf on a large one.",
          ms: "Projek lebih kecil ada psf lebih tinggi, hampir tanpa pengecualian. Renovasi satu bilik air 300 kp akan berada pada RM500 hingga RM900 psf sebab kos tetap (persiapan tapak, penyeliaan, mobilisasi) tersebar pada kaki persegi yang sedikit. Renovasi seluruh rumah 2,000 kp mungkin RM150 hingga RM280 psf untuk kualiti kemasan yang sama. Jangan harap psf kontraktor untuk kerja kecil sepadan dengan psf mereka untuk kerja besar.",
        },
      },
      {
        type: "h2",
        text: { en: "How to use psf without getting fooled", ms: "Cara guna psf tanpa kena tipu" },
      },
      {
        type: "ol",
        items: [
          { en: "Divide each quote by your renovated area to get its real psf", ms: "Bahagikan setiap quote dengan keluasan renovasi anda untuk dapat psf sebenar" },
          { en: "Ask what's included at that psf: material tier, M&E, scope", ms: "Tanya apa yang termasuk pada psf tu: tahap bahan, M&E, skop" },
          { en: "Treat a quote far below the band as a warning, not a win", ms: "Anggap quote yang jauh di bawah julat sebagai amaran, bukan kemenangan" },
        ],
      },
      {
        type: "p",
        text: {
          en: "A psf figure tells you what to expect. An itemised quote tells you what you're actually buying. Get both before you sign.",
          ms: "Angka psf bagi tahu anda apa yang patut dijangka. Quote terperinci bagi tahu anda apa yang anda sebenarnya beli. Dapatkan kedua-duanya sebelum tandatangan.",
        },
      },
      {
        type: "h2",
        text: { en: "Worked comparison: three quotes at different psf", ms: "Perbandingan sebenar: tiga quote pada psf berbeza" },
      },
      {
        type: "p",
        text: {
          en: "A homeowner sends out the same brief to three contractors for a 1,200 sqft single-storey terrace renovation, mid-tier scope. Here's what comes back.",
          ms: "Pemilik rumah hantar brief yang sama kepada tiga kontraktor untuk renovasi teres setingkat 1,200 kp, skop pertengahan. Inilah yang dipulangkan.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Contractor A: RM168k all-in (~RM140 psf). Detailed itemised quote, lump-sum payment schedule, names brand of waterproofing.", ms: "Kontraktor A: RM168k keseluruhan (~RM140 psf). Quote terperinci, jadual bayaran lump-sum, sebut jenama kalis air." },
          { en: "Contractor B: RM198k all-in (~RM165 psf). Itemised, but with several lines marked \"to be quoted on site\" for M&E and waterproofing.", ms: "Kontraktor B: RM198k keseluruhan (~RM165 psf). Terperinci, tapi beberapa baris ditanda \"akan diquote di tapak\" untuk M&E dan kalis air." },
          { en: "Contractor C: RM135k all-in (~RM113 psf). One-page quote with broad scope categories. Doesn't name brands. Asks for 50 percent upfront.", ms: "Kontraktor C: RM135k keseluruhan (~RM113 psf). Quote satu muka surat dengan kategori skop luas. Tak sebut jenama. Minta 50 peratus di depan." },
        ],
      },
      {
        type: "p",
        text: {
          en: "Contractor A is honest and probably fair. Contractor B will turn into Contractor A's price by month three, once those \"to be quoted on site\" lines come due. Contractor C will end up costing more than both once you tally the variation orders, the waterproofing redo, and the things that don't get done at all. The cheapest psf is almost never the cheapest job.",
          ms: "Kontraktor A jujur dan kemungkinan adil. Kontraktor B akan jadi harga Kontraktor A menjelang bulan ketiga, bila baris \"akan diquote di tapak\" tu tiba. Kontraktor C akan akhirnya kos lebih dari kedua-dua bila anda jumlahkan arahan ubah suai, kerja semula kalis air, dan benda yang langsung tak siap. Psf paling murah hampir tak pernah kerja paling murah.",
        },
      },
      {
        type: "h2",
        text: { en: "When psf is useful, when it isn't", ms: "Bila psf berguna, bila ia tak" },
      },
      {
        type: "ul",
        items: [
          { en: "Useful: rough budgeting before you've called a contractor. \"My house is 1,500 sqft, mid-tier reno is around RM150 psf, so plan around RM225k.\"", ms: "Berguna: bajet kasar sebelum anda hubungi kontraktor. \"Rumah saya 1,500 kp, reno pertengahan sekitar RM150 psf, jadi rancang sekitar RM225k.\"" },
          { en: "Useful: sanity-check between two quotes with the same scope.", ms: "Berguna: semakan antara dua quote dengan skop sama." },
          { en: "Not useful: comparing two quotes with very different scopes. The lower psf might just have less in it.", ms: "Tak berguna: bandingkan dua quote dengan skop yang sangat berbeza. Psf lebih rendah mungkin kerana ada kurang benda dalamnya." },
          { en: "Not useful: a single number used to argue a contractor up or down without naming what's actually in or out of scope.", ms: "Tak berguna: satu angka yang digunakan untuk tawar-menawar dengan kontraktor tanpa sebut apa yang termasuk atau tak dalam skop." },
        ],
      },
    ],
    faqs: [],
    related: [
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
      "hidden-renovation-costs-malaysia",
      "kitchen-renovation-cost-malaysia",
    ],
  },

  // 10 — Opinion piece
  {
    slug: "hidden-renovation-costs-malaysia",
    category: "renovation-cost",
    title: {
      en: "The Renovation Costs Nobody Warns You About (Until They Bill You)",
      ms: "Kos Renovasi Yang Tiada Siapa Beritahu (Sampai Mereka Bil Anda)",
    },
    excerpt: {
      en: "Where renovation budgets actually go to die in Malaysia. The honest list of line items contractors leave off cheap quotes.",
      ms: "Di mana bajet renovasi sebenarnya mati di Malaysia. Senarai jujur item yang kontraktor tinggalkan dari quote murah.",
    },
    metaDescription: {
      en: "Hidden renovation costs in Malaysia: hacking, disposal, waterproofing, M&E upgrades, permits, and variation orders. Why cheap quotes never stay cheap.",
      ms: "Kos renovasi tersembunyi di Malaysia: pemecahan, pelupusan, kalis air, naik taraf M&E, permit, dan arahan ubah suai. Kenapa quote murah tak pernah kekal murah.",
    },
    hero: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Renovation demolition and debris", ms: "Perobohan renovasi dan serpihan" },
    date: "2026-03-08",
    readMins: 4,
    keywords: ["hidden renovation costs", "kos tersembunyi renovate", "renovation budget malaysia", "variation order"],
    cta: {
      label: { en: "Get a fixed-price quote", ms: "Dapatkan quote harga tetap" },
      waText: {
        en: "Hi BINA+, I want a fixed-scope renovation quote with no surprises.",
        ms: "Hai BINA+, saya nak quote renovasi skop tetap tanpa kejutan.",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "The headline price gets all the attention. Then you spend a few months in the build and realise the budget has quietly grown by 30 percent. It's almost never one big surprise. It's a dozen small ones nobody told you about. Here they are.",
          ms: "Harga utama dapat semua perhatian. Lepas tu anda habiskan beberapa bulan dalam binaan dan sedar bajet senyap-senyap naik 30 peratus. Hampir tak pernah satu kejutan besar. Selalunya dua belas kejutan kecil yang tiada siapa beritahu. Inilah dia.",
        },
      },
      {
        type: "h2",
        text: { en: "Hacking and disposal", ms: "Pemecahan dan pelupusan" },
      },
      {
        type: "p",
        text: {
          en: "Breaking out old tiles, walls, and ceilings, then carting the rubble to a registered dump. Not glamorous, often left off cheap quotes. A typical terrace will produce more debris than you think.",
          ms: "Pecahkan jubin lama, dinding, dan siling, kemudian angkut semua serpihan ke tapak pelupusan berdaftar. Tak glamor, selalu tertinggal dari quote murah. Rumah teres biasa akan hasilkan lebih banyak sampah daripada yang anda fikir.",
        },
      },
      {
        type: "h2",
        text: { en: "Wiring and plumbing upgrades", ms: "Naik taraf pendawaian dan paip" },
      },
      {
        type: "p",
        text: {
          en: "Older homes rarely meet today's appliance loads. Once a wall is open, replacing the wiring costs a fraction of what it costs after the wall is closed. Cheap quotes assume you'll keep what's there. Then a circuit trips and you're rewiring anyway, only more expensively.",
          ms: "Rumah lama jarang menampung beban perkakas hari ini. Bila dinding sudah dibuka, ganti pendawaian kos hanya sebahagian kecil daripada kos selepas dinding ditutup. Quote murah anggap anda kekal apa yang sedia ada. Lepas tu litar terputus dan anda terpaksa pasang semula, dengan harga lagi mahal.",
        },
      },
      {
        type: "h2",
        text: { en: "Waterproofing", ms: "Kalis air" },
      },
      {
        type: "p",
        text: {
          en: "Easy to skip. Catastrophic when it fails. A failed membrane in a bathroom leaks into the room below and you redo both. Insist on a tested, warrantied membrane under every wet tile, full stop.",
          ms: "Senang nak skip. Bencana bila ia gagal. Membran yang gagal dalam bilik air akan bocor ke bilik bawah dan anda kena baiki dua-dua. Tegaskan membran yang diuji dan ada waranti di bawah setiap jubin basah, habis cerita.",
        },
      },
      {
        type: "h2",
        text: { en: "Permits and management corp deposits", ms: "Permit dan deposit badan pengurusan" },
      },
      {
        type: "p",
        text: {
          en: "Condos and many landed townships need renovation deposits, access fees, and approved plans. Refundable, usually. But they tie up cash for the whole job and are almost never quoted as line items.",
          ms: "Kondo dan banyak township landed perlukan deposit renovasi, fi akses, dan pelan yang diluluskan. Boleh dikembalikan, biasanya. Tapi ia menahan cash anda sepanjang projek dan hampir tak pernah disenaraikan dalam quote.",
        },
      },
      {
        type: "h2",
        text: { en: "Levelling and screeding", ms: "Pemerataan dan screed" },
      },
      {
        type: "p",
        text: {
          en: "Before SPC or new tile goes down, the substrate needs to be flat. Old floors rarely are. Screeding is real labour, real cement, and real money. Cheap quotes assume it's perfect. It isn't.",
          ms: "Sebelum SPC atau jubin baru dipasang, lantai bawah kena rata. Lantai lama jarang rata. Screed melibatkan buruh sebenar, simen sebenar, dan duit sebenar. Quote murah anggap lantai dah rata. Tak rata.",
        },
      },
      {
        type: "h2",
        text: { en: "And the killer: variation orders", ms: "Dan yang paling teruk: arahan ubah suai" },
      },
      {
        type: "p",
        text: {
          en: "Most budget overruns aren't hidden surprises at all. They're scope you added mid-project at on-the-spot prices. \"Just shift the socket here, just add this shelf, just upgrade this tile.\" Every variation is a conscious decision when it's priced and approved in writing before work starts. Without that, you'll be amazed how often \"just\" costs four figures.",
          ms: "Kebanyakan lebihan bajet bukan langsung kejutan tersembunyi. Ia adalah skop yang anda tambah pertengahan projek pada harga di tempat. \"Alihkan sahaja soket ke sini, tambah sahaja rak ni, naik taraf sahaja jubin ni.\" Setiap ubah suai adalah keputusan sedar bila ia dihargakan dan diluluskan secara bertulis sebelum kerja bermula. Tanpa itu, anda akan terkejut betapa kerap \"sahaja\" itu kos empat angka.",
        },
      },
      {
        type: "p",
        text: {
          en: "The fix is structural, not behavioural. Demand an itemised quote that names hacking, disposal, M&E and waterproofing explicitly. Build a 10 percent contingency for genuine unknowns in older homes. Agree variation pricing in writing before any change. Do that and the hidden costs stop being hidden.",
          ms: "Penyelesaian adalah struktur, bukan tingkah laku. Tuntut quote terperinci yang sebut pemecahan, pelupusan, M&E, dan kalis air secara jelas. Bina kontingensi 10 peratus untuk perkara yang anda tak boleh nampak dalam rumah lama. Setuju harga ubah suai secara bertulis sebelum sebarang perubahan. Buat begitu dan kos tersembunyi takkan tersembunyi lagi.",
        },
      },
    ],
    faqs: [],
    related: [
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
      "renovation-cost-per-square-foot-klang-valley",
      "how-to-vet-a-renovation-contractor-red-flags",
    ],
  },

  // 11 — Opinion piece (aggressive red flags)
  {
    slug: "how-to-vet-a-renovation-contractor-red-flags",
    category: "local-guides",
    title: {
      en: "How to Vet a Renovation Contractor Before You Lose Money",
      ms: "Cara Tapis Kontraktor Renovasi Sebelum Anda Rugi Duit",
    },
    excerpt: {
      en: "The documents, the questions, and the eight red flags that mean walk away. Take an hour now and save yourself six months later.",
      ms: "Dokumen, soalan, dan lapan tanda bahaya yang bermakna anda kena berundur. Luangkan sejam sekarang dan jimat enam bulan kemudian.",
    },
    metaDescription: {
      en: "How to vet a renovation contractor in Malaysia. The documents to verify, questions to ask, and red flags that should make you walk away.",
      ms: "Cara menapis kontraktor renovasi di Malaysia. Dokumen yang nak disahkan, soalan yang nak ditanya, dan tanda bahaya yang patut buat anda berundur.",
    },
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Homeowner reviewing a contract with a contractor", ms: "Pemilik rumah menyemak kontrak dengan kontraktor" },
    date: "2026-03-14",
    readMins: 5,
    keywords: ["vet renovation contractor", "kontraktor scam", "contractor red flags", "pilih kontraktor"],
    cta: {
      label: { en: "Work with a registered Shah Alam team", ms: "Bekerja dengan pasukan Shah Alam yang berdaftar" },
      waText: {
        en: "Hi BINA+, I'd like to talk to a registered, accountable contractor.",
        ms: "Hai BINA+, saya nak berbincang dengan kontraktor yang berdaftar dan boleh dipertanggungjawabkan.",
      },
      href: "/services",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Almost every renovation horror story traces back to a vetting failure. The contractor was wrong on day one and everything that followed was downstream of that. Spend one hour here and you'll avoid most of the pain we see homeowners walk into.",
          ms: "Hampir setiap kisah ngeri renovasi berbalik kepada kegagalan tapisan. Kontraktor itu salah dari hari pertama dan semua yang ikut selepas tu adalah akibat dari situ. Luangkan sejam di sini dan anda akan elak kebanyakan kesakitan yang kami nampak pemilik rumah lalui.",
        },
      },
      {
        type: "h2",
        text: { en: "Verify these documents", ms: "Sahkan dokumen ni" },
      },
      {
        type: "ul",
        items: [
          { en: "SSM registration, searchable on the public registry", ms: "Pendaftaran SSM, boleh dicari dalam pendaftaran awam" },
          { en: "A physical office or studio you can visit this week", ms: "Pejabat atau studio fizikal yang anda boleh lawat minggu ni" },
          { en: "Portfolio with verifiable addresses or client references", ms: "Portfolio dengan alamat yang boleh disahkan atau rujukan pelanggan" },
          { en: "A sample itemised quotation and signed contract template", ms: "Contoh quote terperinci dan templat kontrak yang ditandatangan" },
        ],
      },
      {
        type: "h2",
        text: { en: "Four questions that reveal everything", ms: "Empat soalan yang mendedahkan semuanya" },
      },
      {
        type: "ol",
        items: [
          { en: "Who is my single point of contact, from start to handover?", ms: "Siapa orang yang saya berurusan, dari mula sampai serahan?" },
          { en: "How are variation orders priced and approved during the build?", ms: "Bagaimana arahan ubah suai dihargakan dan diluluskan semasa pembinaan?" },
          { en: "What is your defect liability period after handover?", ms: "Apa tempoh tanggungan kecacatan anda selepas serahan?" },
          { en: "Can I visit a job site you're currently working on?", ms: "Boleh saya lawat tapak kerja yang anda sedang buat sekarang?" },
        ],
      },
      {
        type: "h2",
        text: { en: "Eight red flags. Walk away.", ms: "Lapan tanda bahaya. Berundur." },
      },
      {
        type: "ul",
        items: [
          { en: "Demands more than 30 percent upfront before any work", ms: "Mahukan lebih 30 peratus di awal sebelum sebarang kerja" },
          { en: "Only communicates by WhatsApp, no written contract", ms: "Hanya berkomunikasi melalui WhatsApp, tiada kontrak bertulis" },
          { en: "Pressures you to decide today for a special discount", ms: "Tekanan supaya tandatangan hari ini untuk diskaun khas" },
          { en: "Quote is far below everyone else (something is missing)", ms: "Quote jauh lebih murah dari yang lain (mesti ada yang tak masuk)" },
          { en: "Cannot show a single verifiable completed project", ms: "Tak boleh tunjuk satu pun projek siap yang boleh disahkan" },
          { en: "Vague on scope: \"we'll handle everything, don't worry\"", ms: "Kabur dalam skop: \"kami uruskan semua, jangan risau\"" },
          { en: "Wants payment to a personal bank account, not a company", ms: "Mahu bayaran masuk akaun bank peribadi, bukan akaun syarikat" },
          { en: "Bad-mouths every other contractor without specifics", ms: "Burukkan kontraktor lain tanpa fakta spesifik" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Any single one of these is a strong signal. Two or more and you're being told the story of your future build, in advance, for free. Listen.",
          ms: "Mana-mana satu dari ni pun dah signal kuat. Dua atau lebih dan anda dah diberitahu kisah binaan masa depan anda, lebih awal, secara percuma. Dengar betul-betul.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "How much deposit is reasonable?", ms: "Berapa deposit yang munasabah?" },
        a: {
          en: "A modest booking fee, then staged payments tied to certified progress. Be cautious with anyone wanting most of the cost before work begins.",
          ms: "Yuran tempahan sederhana, kemudian bayaran berperingkat ikut kemajuan yang disahkan. Berhati-hati dengan sesiapa yang mahu sebahagian besar kos sebelum kerja bermula.",
        },
      },
    ],
    related: [
      "design-build-contractor-shah-alam",
      "hidden-renovation-costs-malaysia",
      "design-build-vs-architect-and-contractor",
    ],
  },

  // 12 — Case study narrative
  {
    slug: "renovating-sub-sale-home-subang-jaya",
    category: "local-guides",
    title: {
      en: "Renovating a Sub-Sale Home in Subang Jaya: A Real Walkthrough",
      ms: "Renovasi Rumah Sub-Sale di Subang Jaya: Penjelasan Sebenar",
    },
    excerpt: {
      en: "Older SS-series terraces are great bones with old wiring. Here's how a Subang Jaya sub-sale typically goes and what to budget for.",
      ms: "Teres SS lama struktur bagus tapi pendawaiannya tua. Inilah cara sub-sale Subang Jaya biasanya berjalan dan apa yang anda kena bajetkan.",
    },
    metaDescription: {
      en: "How a Subang Jaya sub-sale renovation usually goes: inspection, wiring and plumbing realities, money-saving order, and budget bands you should expect.",
      ms: "Bagaimana renovasi sub-sale Subang Jaya biasanya berjalan: pemeriksaan, realiti pendawaian dan paip, susunan yang menjimatkan, dan julat bajet yang patut anda jangka.",
    },
    hero: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Older terrace house ready for renovation", ms: "Rumah teres lama sedia untuk renovasi" },
    date: "2026-03-20",
    readMins: 6,
    keywords: ["sub sale renovation", "subang jaya renovation", "renovate rumah lama", "older home checklist"],
    cta: {
      label: { en: "Get a sub-sale assessment", ms: "Dapatkan penilaian sub-sale" },
      waText: {
        en: "Hi BINA+, I'm buying or renovating a sub-sale home in Subang Jaya and want an assessment.",
        ms: "Hai BINA+, saya beli atau renovate sub-sale di Subang Jaya dan nak penilaian.",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Imagine a typical Subang Jaya SS-series terrace. Bought sub-sale, original owner moved out in 2019, sat empty for two years. Solid bones, good neighbourhood, school zoning. Asking price reasonable. You walk in expecting paint and tile work, maybe a kitchen refresh.",
          ms: "Bayangkan teres SS Subang Jaya yang biasa. Beli sub-sale, pemilik asal pindah keluar pada 2019, kosong dua tahun. Struktur kukuh, kejiranan baik, zon sekolah elok. Harga minta munasabah. Anda masuk dan jangka cat dan kerja jubin sahaja, mungkin penyegaran dapur.",
        },
      },
      {
        type: "p",
        text: {
          en: "Three weeks later your contractor opens the wall behind the DB board and shows you wiring from 1998. The plumbing under the kitchen sink has galvanised pipes with rust spots. There's a damp patch in the master bathroom that's been quietly working on the slab below.",
          ms: "Tiga minggu kemudian kontraktor anda buka dinding belakang papan DB dan tunjuk pendawaian dari 1998. Paip di bawah sinki dapur ada paip galvani dengan tompok karat. Ada tompok lembap di bilik air utama yang senyap-senyap merosakkan slab di bawah.",
        },
      },
      {
        type: "p",
        text: {
          en: "That's a sub-sale, in a sentence. The cosmetic part is the cheap part. The structural part is what you couldn't see when you signed.",
          ms: "Itulah sub-sale, dalam satu ayat. Bahagian kosmetik adalah bahagian murah. Bahagian struktur adalah apa yang anda tak nampak masa tandatangan.",
        },
      },
      {
        type: "h2",
        text: { en: "What to inspect before you commit", ms: "Apa yang nak diperiksa sebelum anda komited" },
      },
      {
        type: "ul",
        items: [
          { en: "Wiring age (look at the DB board, listen for old buzz)", ms: "Usia pendawaian (tengok papan DB, dengar bunyi dengung lama)" },
          { en: "Water pressure and pipe material", ms: "Tekanan air dan jenis paip" },
          { en: "Roof and ceiling stains (visit after a heavy rain)", ms: "Bumbung dan tompok siling (lawat selepas hujan lebat)" },
          { en: "Structural cracks vs cosmetic ones", ms: "Retak struktur vs retak kosmetik" },
          { en: "Floor levels (a marble tells you fast)", ms: "Aras lantai (guli akan beritahu anda cepat)" },
        ],
      },
      {
        type: "h2",
        text: { en: "Budget realities for an older SJ terrace", ms: "Realiti bajet untuk teres SJ yang lama" },
      },
      {
        type: "p",
        text: {
          en: "An older terrace usually needs rewiring, replumbing and waterproofing before any of the nice work begins. Bake those into your number on day one. We see homeowners arrive with a RM100k budget for cosmetic work, then realise RM40k of it disappears into M&E and waterproofing before they pick a tile. Better to know now.",
          ms: "Teres lama biasanya perlu pendawaian semula, paip semula, dan kalis air sebelum kerja yang cantik bermula. Masukkan tu dalam bajet anda dari hari pertama. Kami nampak pemilik rumah datang dengan bajet RM100k untuk kerja kosmetik, lepas tu sedar RM40k habis untuk M&E dan kalis air sebelum mereka pilih jubin. Lebih baik tahu sekarang.",
        },
      },
      {
        type: "h2",
        text: { en: "The order that saves money", ms: "Susunan yang menjimatkan" },
      },
      {
        type: "ol",
        items: [
          { en: "Structure and roof first. Fix what keeps water and load safe.", ms: "Struktur dan bumbung dahulu. Baiki apa yang pastikan air dan beban selamat." },
          { en: "Then M&E. Rewire and replumb before walls are closed up.", ms: "Kemudian M&E. Pendawaian dan paip semula sebelum dinding ditutup." },
          { en: "Then finishes. Flooring, carpentry, paint, last.", ms: "Kemudian kemasan. Lantai, kerja kayu, cat, paling akhir." },
        ],
      },
      {
        type: "p",
        text: {
          en: "Do it backwards and you'll either tear up new finishes to access old systems, or live with old systems that fail under your new walls. Both options cost more than doing it in the right order from day one.",
          ms: "Buat terbalik dan anda akan sama ada koyakkan kemasan baru untuk capai sistem lama, atau hidup dengan sistem lama yang akan rosak di bawah dinding baru anda. Kedua-dua pilihan kos lebih daripada buat ikut susunan yang betul dari hari pertama.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "Is it worth renovating an old Subang Jaya house?", ms: "Berbaloi ke renovate rumah lama di Subang Jaya?" },
        a: {
          en: "Often yes. The location and land are the real value. Solid bones plus a proper renovation usually cost less than an equivalent new property nearby.",
          ms: "Selalunya ya. Lokasi dan tanah itu yang sebenarnya bernilai. Struktur kukuh tambah renovasi yang betul biasanya kos kurang daripada hartanah baru setara berdekatan.",
        },
      },
    ],
    related: [
      "design-build-contractor-shah-alam",
      "vacant-possession-checklist-new-homeowners",
      "hidden-renovation-costs-malaysia",
    ],
  },

  // 13 — Standard guide, tightened
  {
    slug: "building-a-house-in-selangor-permits-timeline",
    category: "local-guides",
    title: {
      en: "Building a House in Selangor: Permits, CCC and Real Timeline",
      ms: "Membina Rumah di Selangor: Permit, CCC dan Jadual Sebenar",
    },
    excerpt: {
      en: "From an empty plot to a Certificate of Completion and Compliance. The actual sequence, the actual time, the actual people involved.",
      ms: "Dari plot kosong sampai Sijil Siap dan Pematuhan. Urutan sebenar, masa sebenar, orang yang sebenar terlibat.",
    },
    metaDescription: {
      en: "Building a house in Selangor in 2026: the permits and CCC you need, the professionals involved, and a realistic end-to-end timeline.",
      ms: "Membina rumah di Selangor pada 2026: permit dan CCC yang anda perlukan, profesional yang terlibat, dan jadual realistik dari mula sampai akhir.",
    },
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "House under construction with scaffolding", ms: "Rumah dalam pembinaan dengan perancah" },
    date: "2026-03-26",
    readMins: 5,
    keywords: ["build house selangor", "CCC malaysia", "permit bina rumah", "building approval selangor"],
    cta: {
      label: { en: "Build with permits handled for you", ms: "Bina dengan permit diuruskan untuk anda" },
      waText: {
        en: "Hi BINA+, I want to build in Selangor and need the permits and process handled.",
        ms: "Hai BINA+, saya nak bina rumah di Selangor dan perlukan permit serta proses diuruskan.",
      },
      href: "/services#design-build",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Building from scratch in Selangor is normal work, but the approvals process trips up first-timers. Here's the path from a plot of land to a Certificate of Completion and Compliance, and who does what.",
          ms: "Membina dari awal di Selangor adalah kerja biasa, tapi proses kelulusan selalu menyusahkan mereka yang baru. Inilah laluan dari plot tanah sampai Sijil Siap dan Pematuhan, dan siapa buat apa.",
        },
      },
      {
        type: "h2",
        text: { en: "Approvals you'll need", ms: "Kelulusan yang anda perlukan" },
      },
      {
        type: "ul",
        items: [
          { en: "Planning permission (Kebenaran Merancang) from the local council", ms: "Kebenaran Merancang dari majlis tempatan" },
          { en: "Building plan approval (Pelan Bangunan)", ms: "Kelulusan Pelan Bangunan" },
          { en: "Earthworks or structural submissions where required", ms: "Penyerahan kerja tanah atau struktur bila diperlukan" },
          { en: "CCC at completion, issued via the submitting architect or engineer", ms: "CCC bila siap, dikeluarkan melalui arkitek atau jurutera yang menyerah" },
        ],
      },
      {
        type: "h2",
        text: { en: "Who's involved", ms: "Siapa yang terlibat" },
      },
      {
        type: "p",
        text: {
          en: "A submitting professional (architect or qualified draughtsperson), a structural engineer, the local authority (PBT), and your builder. In a design and build setup, one team coordinates all of them so you aren't chasing five parties yourself.",
          ms: "Profesional yang menyerah (arkitek atau pelukis pelan yang bertauliah), jurutera struktur, pihak berkuasa tempatan (PBT), dan pembina anda. Dalam susunan reka dan bina, satu pasukan selaraskan semua. Anda tak perlu kejar lima pihak sendiri.",
        },
      },
      {
        type: "h2",
        text: { en: "Realistic timeline", ms: "Jadual realistik" },
      },
      {
        type: "ol",
        items: [
          { en: "Design and approvals: 2 to 4 months", ms: "Reka bentuk dan kelulusan: 2 hingga 4 bulan" },
          { en: "Construction: 4 to 9 months for single to double storey", ms: "Pembinaan: 4 hingga 9 bulan untuk setingkat hingga dua tingkat" },
          { en: "Finishing, CCC and handover: 1 to 2 months", ms: "Kemasan, CCC dan serahan: 1 hingga 2 bulan" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Anyone telling you a from-scratch house in 4 months is lying or skipping approvals. Our design and build packages bake submissions and site supervision in, so the permit maze becomes our job.",
          ms: "Sesiapa yang janji rumah dari awal dalam 4 bulan sama ada menipu atau skip kelulusan. Pakej reka dan bina kami masukkan penyerahan dan penyeliaan tapak, jadi labirin permit jadi kerja kami.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "What is CCC in Malaysia?", ms: "Apa itu CCC di Malaysia?" },
        a: {
          en: "The Certificate of Completion and Compliance confirms a building is completed per approved plans and safe to occupy. Issued by the principal submitting professional.",
          ms: "Sijil Siap dan Pematuhan mengesahkan bangunan disiapkan ikut pelan yang diluluskan dan selamat diduduki. Dikeluarkan oleh profesional utama yang menyerah.",
        },
      },
    ],
    related: [
      "what-is-included-in-a-design-and-build-package",
      "how-long-to-build-a-house-in-malaysia",
      "single-storey-vs-double-storey-extension-cost-malaysia",
    ],
  },

  // 14 — Standard guide
  {
    slug: "cyberjaya-condo-renovation-rules",
    category: "local-guides",
    title: {
      en: "Renovating a Cyberjaya Condo: Rules, Deposits, and What Bites",
      ms: "Renovasi Kondo Cyberjaya: Peraturan, Deposit, dan Apa Yang Boleh Susahkan Anda",
    },
    excerpt: {
      en: "Condo renovations aren't like landed work. Management approval, working hours, and hacking limits all decide what's possible.",
      ms: "Renovasi kondo bukan macam kerja landed. Kelulusan pengurusan, waktu kerja, dan had pemecahan tentukan apa yang anda boleh buat.",
    },
    metaDescription: {
      en: "Cyberjaya condo renovation rules: JMB approval, deposits, working hours, hacking limits, and how to keep the job compliant from day one.",
      ms: "Peraturan renovasi kondo Cyberjaya: kelulusan JMB, deposit, waktu kerja, had pemecahan, dan cara pastikan kerja patuh dari hari pertama.",
    },
    hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Modern condo interior being renovated", ms: "Dalaman kondo moden sedang direnovasi" },
    date: "2026-04-01",
    readMins: 4,
    keywords: ["condo renovation rules", "cyberjaya renovation", "JMB approval renovation", "kondo renovate"],
    cta: {
      label: { en: "Renovate your condo, compliantly", ms: "Renovasi kondo anda, mengikut peraturan" },
      waText: {
        en: "Hi BINA+, I want to renovate my Cyberjaya condo and need help with management approval and works.",
        ms: "Hai BINA+, saya nak renovate kondo Cyberjaya saya dan perlukan bantuan dengan kelulusan pengurusan dan kerja.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Cyberjaya has one of the Klang Valley's densest stocks of condos and serviced apartments. Renovating one means working inside the building's management rules. Get this wrong and work stops halfway.",
          ms: "Cyberjaya ada salah satu stok kondo dan apartmen servis paling padat di Lembah Klang. Renovate dalam bangunan begini bermakna anda kena ikut peraturan pengurusan. Kalau salah, kerja boleh berhenti separuh jalan.",
        },
      },
      {
        type: "h2",
        text: { en: "Get management approval first", ms: "Dapatkan kelulusan pengurusan dahulu" },
      },
      {
        type: "ul",
        items: [
          { en: "Submit renovation plans to the JMB or management office", ms: "Hantar pelan renovasi ke JMB atau pejabat pengurusan" },
          { en: "Pay the renovation deposit (refundable if no damage)", ms: "Bayar deposit renovasi (boleh dikembalikan kalau tiada kerosakan)" },
          { en: "Register your contractor and workers for access passes", ms: "Daftar kontraktor dan pekerja anda untuk pas akses" },
        ],
      },
      {
        type: "h2",
        text: { en: "The rules that bite", ms: "Peraturan yang boleh susahkan anda" },
      },
      {
        type: "ul",
        items: [
          { en: "Working hours, usually weekdays only. No loud hacking on weekends.", ms: "Waktu kerja, biasanya hari bekerja sahaja. Tiada pemecahan bising hujung minggu." },
          { en: "Hacking limits. Structural walls and slabs are off-limits.", ms: "Had pemecahan. Dinding struktur dan slab tak boleh disentuh." },
          { en: "Wet-area waterproofing, since units above neighbours need extra care.", ms: "Kalis air kawasan basah, sebab unit di atas jiran perlukan jagaan tambahan." },
          { en: "Debris disposal via designated service lift and times.", ms: "Pelupusan serpihan melalui lif servis dan masa yang ditetapkan." },
        ],
      },
      {
        type: "h2",
        text: { en: "Why experience matters", ms: "Kenapa pengalaman penting" },
      },
      {
        type: "p",
        text: {
          en: "A contractor who has worked in managed buildings before knows how to package the submission, protect common areas, and schedule noisy works inside permitted hours. That experience is the difference between a 4-week and an 8-week condo fit-out.",
          ms: "Kontraktor yang pernah kerja dalam bangunan terurus tahu cara susun penyerahan, lindungi kawasan awam, dan jadualkan kerja bising dalam waktu yang dibenarkan. Pengalaman tu adalah perbezaan antara pemasangan kondo 4 minggu dan 8 minggu.",
        },
      },
    ],
    faqs: [
      {
        q: { en: "Do I need management approval to renovate a condo?", ms: "Perlu ke saya dapatkan kelulusan pengurusan untuk renovate kondo?" },
        a: {
          en: "Yes. Almost all Malaysian condos require JMB or MC approval and a deposit before any renovation work begins.",
          ms: "Ya. Hampir semua kondo di Malaysia perlukan kelulusan JMB atau MC dan deposit sebelum sebarang kerja renovasi bermula.",
        },
      },
    ],
    related: [
      "spc-flooring-vs-tiles-vs-laminate",
      "kitchen-renovation-cost-malaysia",
      "first-90-days-new-home-fit-out-plan",
    ],
  },

  // 15 — Utility listicle, no preamble, no FAQ
  {
    slug: "new-house-defect-inspection-checklist",
    category: "new-home",
    title: {
      en: "New House Defect Checklist: A Print-and-Carry Guide",
      ms: "Senarai Semak Kecacatan Rumah Baru: Panduan Cetak dan Bawa",
    },
    excerpt: {
      en: "Room by room, what to test and how to log it, so the developer fixes what they should before the DLP runs out.",
      ms: "Bilik demi bilik, apa yang nak diuji dan cara catat, supaya developer baiki apa yang patut sebelum DLP habis.",
    },
    metaDescription: {
      en: "A room-by-room new house defect inspection checklist for Malaysia. What to test, how to document, and how to use the DLP.",
      ms: "Senarai semak pemeriksaan kecacatan rumah baru bilik demi bilik untuk Malaysia. Apa yang nak diuji, cara dokumen, dan cara guna DLP.",
    },
    hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Inspecting a newly handed-over home", ms: "Memeriksa rumah yang baru diserahkan" },
    date: "2026-04-07",
    readMins: 5,
    keywords: ["defect inspection checklist", "new house defect malaysia", "VP inspection", "developer defect"],
    cta: {
      label: { en: "Plan your fit-out after defects clear", ms: "Rancang pemasangan selepas kecacatan selesai" },
      waText: {
        en: "Hi BINA+, my new home passed VP and I'm ready to plan the fit-out.",
        ms: "Hai BINA+, rumah baru saya lulus VP dan saya nak rancang pemasangan.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "h2",
        text: { en: "Bring these", ms: "Bawa benda ni" },
      },
      {
        type: "ul",
        items: [
          { en: "Phone for photos. Charger to test sockets.", ms: "Telefon untuk foto. Pengecas untuk uji soket." },
          { en: "Masking tape to mark defects, notebook or defect app to log them.", ms: "Pita pelekat untuk tanda kecacatan, buku nota atau aplikasi kecacatan untuk catat." },
          { en: "Marble or small ball to check floor level.", ms: "Guli atau bola kecil untuk semak aras lantai." },
        ],
      },
      {
        type: "h2",
        text: { en: "Living areas and bedrooms", ms: "Ruang tamu dan bilik tidur" },
      },
      {
        type: "ul",
        items: [
          { en: "Tap floor tiles for hollows. Look at edges for chips.", ms: "Ketuk jubin lantai untuk berongga. Tengok tepi untuk serpihan." },
          { en: "Check walls and ceilings for hairline cracks and damp.", ms: "Semak dinding dan siling untuk retak halus dan lembap." },
          { en: "Every door and window opens, closes, locks smoothly.", ms: "Setiap pintu dan tingkap buka, tutup, kunci lancar." },
          { en: "Every socket and switch works. DB labels correct.", ms: "Setiap soket dan suis berfungsi. Label DB betul." },
        ],
      },
      {
        type: "h2",
        text: { en: "Bathrooms", ms: "Bilik air" },
      },
      {
        type: "ul",
        items: [
          { en: "Run every tap and flush every toilet.", ms: "Buka setiap paip dan pam setiap tandas." },
          { en: "Water drains fully (a slow drain hints at slope issues).", ms: "Air mengalir habis (saliran perlahan tanda ada masalah cerun)." },
          { en: "No leaks under sinks or behind shower walls (look after rain).", ms: "Tiada kebocoran di bawah sinki atau belakang dinding shower (tengok selepas hujan)." },
          { en: "Silicone seals are continuous and clean.", ms: "Kedap silikon berterusan dan bersih." },
        ],
      },
      {
        type: "h2",
        text: { en: "Kitchen", ms: "Dapur" },
      },
      {
        type: "ul",
        items: [
          { en: "Worktops level. No chips at the joins.", ms: "Meja kerja rata. Tiada serpihan di sambungan." },
          { en: "Tap and sink drain properly. Hood vents outside, not into the ceiling.", ms: "Paip dan sinki mengalir betul. Hud keluar ke luar, bukan ke siling." },
          { en: "Tall cabinets aligned. Doors open without scraping.", ms: "Kabinet tinggi sejajar. Pintu buka tanpa terkena." },
        ],
      },
      {
        type: "h2",
        text: { en: "Outside and exterior", ms: "Luar dan eksterior" },
      },
      {
        type: "ul",
        items: [
          { en: "Driveway and walkway tiles secure, not loose.", ms: "Jubin laluan kereta dan laluan kaki kukuh, bukan longgar." },
          { en: "Roof gutters clear, no obvious staining on eaves.", ms: "Talang bumbung bersih, tiada kesan jelas di cucur atap." },
          { en: "Boundary walls and gates align and operate properly.", ms: "Dinding dan pagar sempadan sejajar dan beroperasi dengan betul." },
        ],
      },
      {
        type: "h2",
        text: { en: "Document and submit", ms: "Dokumen dan serahkan" },
      },
      {
        type: "p",
        text: {
          en: "Photograph every defect with a location note. Send the list formally to the developer within the DLP. Keep a copy. Written, dated records are what get repairs actually done.",
          ms: "Foto setiap kecacatan dengan nota lokasi. Hantar senarai secara rasmi kepada developer dalam tempoh DLP. Simpan salinan. Rekod bertulis dan bertarikh yang akan buat pembaikan betul-betul jadi.",
        },
      },
    ],
    faqs: [],
    related: [
      "vacant-possession-checklist-new-homeowners",
      "first-90-days-new-home-fit-out-plan",
      "spc-flooring-vs-tiles-vs-laminate",
    ],
  },

  // 16 — Case study narrative
  {
    slug: "first-90-days-new-home-fit-out-plan",
    category: "new-home",
    title: {
      en: "The First 90 Days in a New Home: A Calm Plan",
      ms: "90 Hari Pertama di Rumah Baru: Pelan Yang Tenang",
    },
    excerpt: {
      en: "Keys in hand. Now what? The right order to fit out a new Malaysian home so it costs less and stresses less.",
      ms: "Kunci di tangan. Apa lepas ni? Susunan yang betul untuk siapkan rumah baru di Malaysia supaya kos kurang dan tekanan kurang.",
    },
    metaDescription: {
      en: "A practical first-90-days fit-out plan for new Malaysian homeowners. The right order for defects, M&E, carpentry, flooring and moving in.",
      ms: "Pelan pemasangan 90 hari pertama yang praktikal untuk pemilik rumah baru di Malaysia. Susunan yang betul untuk kecacatan, M&E, kerja kayu, lantai dan pindah masuk.",
    },
    hero: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Bright empty living room awaiting fit-out", ms: "Ruang tamu kosong cerah menunggu pemasangan" },
    date: "2026-04-13",
    readMins: 5,
    keywords: ["new home fit out", "moving in checklist", "fit out plan malaysia", "rumah baru"],
    cta: {
      label: { en: "Get a full interior fit-out", ms: "Dapatkan pemasangan dalaman penuh" },
      waText: {
        en: "Hi BINA+, I just moved in and want a full interior fit-out (ID package).",
        ms: "Hai BINA+, saya baru pindah dan mahu pemasangan dalaman penuh (pakej ID).",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "We see the same pattern every quarter. A couple gets their keys, gets excited, and starts buying things on day three. By day forty they realise they bought a sofa that doesn't fit through the door of the apartment they haven't moved into yet. Slow down. A calm 90-day plan is the cheapest furniture-shopping advice we can give you.",
          ms: "Kami nampak corak yang sama setiap suku tahun. Pasangan dapat kunci, teruja, dan mula beli barang pada hari ketiga. Sampai hari keempat puluh mereka sedar mereka beli sofa yang tak boleh masuk pintu apartmen yang mereka belum pindah masuk lagi. Slow down dulu. Pelan 90 hari yang tenang adalah nasihat shopping perabot paling murah yang kami boleh beri.",
        },
      },
      {
        type: "h2",
        text: { en: "Days 1 to 14: inspect, log, report", ms: "Hari 1 hingga 14: periksa, catat, lapor" },
      },
      {
        type: "p",
        text: {
          en: "Before you fall in love with paint colours, run a thorough defect inspection. Photograph everything. Submit the list formally to the developer. Anything they fix for free now is money you won't spend later.",
          ms: "Sebelum anda jatuh cinta dengan warna cat, jalankan pemeriksaan kecacatan yang teliti. Foto semua. Hantar senarai secara rasmi kepada developer. Apa-apa yang mereka baiki percuma sekarang adalah duit yang anda jimat nanti.",
        },
      },
      {
        type: "h2",
        text: { en: "Days 15 to 30: lock the design", ms: "Hari 15 hingga 30: kunci reka bentuk" },
      },
      {
        type: "p",
        text: {
          en: "Confirm your layout. Pick the material series. Get an itemised quote for kitchen, wardrobes, ceiling and flooring as one coordinated scope. Doing it together costs less and looks cleaner than buying it piecemeal.",
          ms: "Sahkan layout anda. Pilih siri bahan. Dapatkan quote terperinci untuk dapur, almari, siling, dan lantai sebagai satu skop yang diselaraskan. Buat sekaligus kos lebih kurang dan hasil lebih kemas berbanding beli bersepai.",
        },
      },
      {
        type: "h2",
        text: { en: "Days 30 to 75: build the fit-out", ms: "Hari 30 hingga 75: bina pemasangan" },
      },
      {
        type: "ol",
        items: [
          { en: "M&E first. Any new wiring or plumbing points before carpentry.", ms: "M&E dahulu. Sebarang titik pendawaian atau paip baru sebelum kerja kayu." },
          { en: "Ceiling and flooring.", ms: "Siling dan lantai." },
          { en: "Built-in carpentry: kitchen, wardrobes, TV cabinet.", ms: "Kerja kayu built-in: dapur, almari, kabinet TV." },
          { en: "Paint. Then fittings. Then a deep clean.", ms: "Cat. Kemudian lekapan. Kemudian pembersihan mendalam." },
        ],
      },
      {
        type: "h2",
        text: { en: "Days 75 to 90: move in properly", ms: "Hari 75 hingga 90: pindah masuk dengan betul" },
      },
      {
        type: "p",
        text: {
          en: "Only move in once wet works are fully cured and tested. Our ID packages bundle ceiling, flooring and full carpentry into one timeline, which is exactly what keeps this 90-day window calm and predictable. You stop being a project manager and just live in your house.",
          ms: "Hanya pindah masuk bila kerja basah dah betul-betul kering dan diuji. Pakej ID kami gabungkan siling, lantai dan kerja kayu penuh dalam satu jadual, yang membuat tempoh 90 hari ni tenang dan boleh diramal. Anda berhenti jadi project manager dan duduk dengan tenang dalam rumah anda.",
        },
      },
    ],
    faqs: [],
    related: [
      "vacant-possession-checklist-new-homeowners",
      "new-house-defect-inspection-checklist",
      "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
    ],
  },

  // 17 — Q&A only
  {
    slug: "renovation-loan-malaysia-bank-comparison",
    category: "new-home",
    title: {
      en: "How to Finance a Renovation in Malaysia: The Real Questions",
      ms: "Cara Biayai Renovasi di Malaysia: Soalan Yang Sebenar",
    },
    excerpt: {
      en: "Personal loan, home loan top-up, EPF, or a mix? The honest pros and cons of each route, written for Malaysians.",
      ms: "Pinjaman peribadi, top-up pinjaman rumah, KWSP, atau combine? Kelebihan dan kekurangan setiap pilihan, ditulis untuk rakyat Malaysia.",
    },
    metaDescription: {
      en: "Renovation financing in Malaysia compared: personal loans, home-loan top-ups, EPF, and how to combine them around a milestone-payment build.",
      ms: "Pembiayaan renovasi di Malaysia dibandingkan: pinjaman peribadi, top-up pinjaman rumah, KWSP, dan cara combine dengan binaan bayaran berperingkat.",
    },
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Reviewing loan and budget documents", ms: "Menyemak dokumen pinjaman dan bajet" },
    date: "2026-04-19",
    readMins: 4,
    keywords: ["renovation loan malaysia", "pinjaman renovasi", "home loan top up", "financing renovation"],
    cta: {
      label: { en: "Plan a build around how you pay", ms: "Rancang binaan ikut cara anda bayar" },
      waText: {
        en: "Hi BINA+, I'm comparing financing options and want to plan a build around my budget.",
        ms: "Hai BINA+, saya bandingkan pilihan pembiayaan dan nak rancang binaan ikut bajet saya.",
      },
      href: "/services",
    },
    body: [
      {
        type: "h3",
        text: { en: "Is a personal loan or home loan top-up better?", ms: "Pinjaman peribadi atau top-up pinjaman rumah lebih baik?" },
      },
      {
        type: "p",
        text: {
          en: "Depends on the job. Personal loans are fast and unsecured but carry higher interest and shorter tenure. Home-loan top-ups or refinancing run at housing-loan rates, much cheaper over time, but they're secured against your property and take longer to arrange.",
          ms: "Bergantung pada jenis kerja. Pinjaman peribadi cepat dan tanpa cagaran tapi faedah tinggi dan tempoh pendek. Top-up pinjaman rumah atau refinance ikut kadar pinjaman rumah, lagi murah jangka panjang, tapi dicagar atas hartanah dan ambil masa lebih lama.",
        },
      },
      {
        type: "h3",
        text: { en: "Can I use EPF Account 2 for renovation?", ms: "Boleh ke saya guna Akaun 2 KWSP untuk renovasi?" },
      },
      {
        type: "p",
        text: {
          en: "EPF housing withdrawal is structured around buying, building or settling a home loan. Pure cosmetic renovation usually doesn't qualify. Check the current rules with KWSP directly before relying on it.",
          ms: "Pengeluaran perumahan KWSP direka untuk beli, bina, atau settle pinjaman rumah. Renovasi kosmetik semata-mata biasanya tak layak. Semak peraturan terkini dengan KWSP secara terus sebelum bergantung padanya.",
        },
      },
      {
        type: "h3",
        text: { en: "What about combining sources?", ms: "Macam mana kalau combine sumber?" },
      },
      {
        type: "p",
        text: {
          en: "Most homeowners do exactly this. A bank loan covers the bulk, EPF helps with deposit, staged cash funds finishing. A milestone-payment builder makes it easy because you only draw funds when certified work is complete.",
          ms: "Kebanyakan pemilik rumah memang buat macam ni. Pinjaman bank untuk bahagian besar, KWSP untuk deposit, cash berperingkat untuk kemasan. Pembina bayaran berperingkat senangkan benda ni sebab anda hanya keluarkan dana bila kerja yang disahkan dah siap.",
        },
      },
      {
        type: "h3",
        text: { en: "How fast can each option pay out?", ms: "Berapa cepat setiap pilihan boleh bayar?" },
      },
      {
        type: "p",
        text: {
          en: "Personal loans, sometimes within a week if you're pre-approved. Home-loan top-ups and refinancing take longer (a few weeks to a couple of months). EPF housing withdrawals usually within two weeks of full documentation. Apply ahead of when you need the funds, not the day before.",
          ms: "Pinjaman peribadi, kadang-kadang dalam seminggu kalau anda dah pre-approved. Top-up pinjaman rumah dan refinance ambil masa lebih (beberapa minggu hingga sebulan dua). Pengeluaran perumahan KWSP biasanya dalam dua minggu selepas dokumen lengkap. Mohon awal sebelum anda perlukan dana, bukan sehari sebelum.",
        },
      },
      {
        type: "h3",
        text: { en: "How does this work with a fixed-price build?", ms: "Macam mana ini berfungsi dengan binaan harga tetap?" },
      },
      {
        type: "p",
        text: {
          en: "A fixed-price, fixed-scope contract with milestone payments is exactly what banks like to see. We've helped clients structure their bank loan disbursements around our build milestones so cash flow never goes upside down. Bring us your loan offer letter, we'll align the rest.",
          ms: "Kontrak harga tetap, skop tetap dengan bayaran berperingkat memang yang bank suka. Kami pernah bantu pelanggan susun pengeluaran pinjaman bank ikut peringkat binaan kami supaya cash flow tak pernah terbalik. Bawa surat tawaran pinjaman anda, kami susun yang lain.",
        },
      },
    ],
    faqs: [],
    related: [
      "epf-account-2-withdrawal-for-home-renovation",
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
      "what-is-included-in-a-design-and-build-package",
    ],
  },

  // 18 — Long essay, opinionated
  {
    slug: "modern-tropical-house-design-malaysia",
    category: "design-ideas",
    title: {
      en: "Modern Tropical Design for Malaysia, Beyond the Pinterest Mood Board",
      ms: "Reka Bentuk Tropika Moden untuk Malaysia, Lebih dari Sekadar Mood Board Pinterest",
    },
    excerpt: {
      en: "What actually makes a home cool in a Malaysian climate. Cross-ventilation, shade, mass, and the moves Pinterest can't show you.",
      ms: "Apa yang sebenarnya buat rumah sejuk dalam iklim Malaysia. Pengudaraan silang, teduhan, jisim, dan langkah yang Pinterest tak boleh tunjuk.",
    },
    metaDescription: {
      en: "Modern tropical house design for Malaysia: the real climate moves (ventilation, shading, thermal mass) that keep a home cool, beyond the aesthetic.",
      ms: "Reka bentuk rumah tropika moden untuk Malaysia: langkah iklim sebenar (pengudaraan, teduhan, jisim terma) yang pastikan rumah sejuk, lebih dari sekadar estetik.",
    },
    hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Modern tropical house with large openings and greenery", ms: "Rumah tropika moden dengan bukaan besar dan tumbuhan hijau" },
    date: "2026-04-25",
    readMins: 5,
    keywords: ["modern tropical house", "design rumah moden", "tropical home malaysia", "rumah idaman"],
    cta: {
      label: { en: "Design & build a modern tropical home", ms: "Reka & bina rumah tropika moden" },
      waText: {
        en: "Hi BINA+, I love modern tropical design and want to design and build a home like this.",
        ms: "Hai BINA+, saya suka reka bentuk tropika moden dan nak reka dan bina rumah macam ni.",
      },
      href: "/services#design-build",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Modern tropical is everywhere on Malaysian Instagram. Most of it is photogenic and badly suited to the climate. Big floor-to-ceiling glass facing west, large open volumes with no airflow, polished concrete that radiates heat all evening. The look is right. The performance isn't.",
          ms: "Tropika moden ada di mana-mana di Instagram Malaysia. Kebanyakannya menarik dalam gambar tapi tak sesuai dengan iklim. Kaca penuh ketinggian menghadap barat, ruang besar terbuka tanpa pengudaraan, konkrit digilap yang pancarkan haba sepanjang petang. Rupa betul. Prestasi tidak.",
        },
      },
      {
        type: "p",
        text: {
          en: "Real tropical design is climate response first, aesthetic second. The moves that matter are unglamorous and rarely show up in the mood boards: orientation, cross-ventilation, deep eaves, shaded glazing, planting, and thermal mass placed where it helps.",
          ms: "Reka bentuk tropika sebenar adalah tindak balas iklim dahulu, estetik kedua. Langkah yang penting tak glamor dan jarang muncul dalam mood board: orientasi, pengudaraan silang, cucur atap dalam, kaca yang dilindung, tanaman, dan jisim terma diletakkan di mana ia membantu.",
        },
      },
      {
        type: "p",
        text: {
          en: "Cross-ventilation is the heart of it. Openings on opposite walls so air actually moves through. High-level louvres to let hot air escape upward. A planted courtyard or void to pull breeze through the centre of the plan. Done right, you cut your aircon hours by half without anyone noticing the design choices that did it.",
          ms: "Pengudaraan silang adalah teras semuanya. Bukaan di dinding bertentangan supaya udara betul-betul bergerak melalui. Louver aras tinggi supaya udara panas naik dan keluar. Halaman bertanam atau void untuk tarik bayu masuk ke tengah pelan. Dibuat dengan betul, anda kurangkan jam aircon dengan separuh tanpa sesiapa perasan keputusan reka bentuk yang buat begitu.",
        },
      },
      {
        type: "p",
        text: {
          en: "Then comes shade. Our climate is hard on west-facing glass. Deep eaves and overhangs are not aesthetic decisions, they're survival decisions. Vertical fins or screens on the west side cut afternoon heat dramatically. Planting helps before shade does: a row of trees on the western boundary buys you 3 to 5 degrees indoors.",
          ms: "Kemudian teduhan. Iklim kita keras pada kaca menghadap barat. Cucur atap dan unjuran yang dalam bukan keputusan estetik. Ia keputusan untuk hidup selesa. Sirip menegak atau skrin di sisi barat kurangkan haba petang dengan banyak. Tanaman membantu sebelum teduhan struktur: barisan pokok di sempadan barat beri anda 3 hingga 5 darjah lebih sejuk dalam rumah.",
        },
      },
      {
        type: "p",
        text: {
          en: "Materials need to age well in our humidity. Favour the fuss-free: fair-faced concrete, timber-look composite, large-format tiles, powder-coated aluminium. The boutique stuff that ages prettily in Bali ages badly here. Spec for the climate you live in.",
          ms: "Bahan kena hidup lama dalam kelembapan kita. Pilih yang tidak susah dijaga: konkrit muka adil, komposit rupa kayu, jubin format besar, aluminium bersalut serbuk. Bahan-bahan butik yang nampak cantik di Bali akan rosak di sini. Spec ikut iklim tempat anda duduk.",
        },
      },
      {
        type: "p",
        text: {
          en: "The real signature of a modern tropical home is what it does for you on a 33-degree afternoon, not what it looks like at golden hour. We plan the climate response first and let the aesthetic follow. It usually catches up.",
          ms: "Tanda tangan sebenar rumah tropika moden adalah apa yang ia buat untuk anda pada petang 33 darjah, bukan rupanya semasa golden hour. Kami rancang tindak balas iklim dahulu dan biarkan estetik datang lepas tu. Biasanya estetik akan ikut juga.",
        },
      },
    ],
    faqs: [],
    related: [
      "japandi-style-malaysian-homes",
      "what-is-included-in-a-design-and-build-package",
      "spc-flooring-vs-tiles-vs-laminate",
    ],
  },

  // 19 — Long essay, opinionated
  {
    slug: "japandi-style-malaysian-homes",
    category: "design-ideas",
    title: {
      en: "Japandi in Malaysia: Why It Works, and Where It Goes Wrong",
      ms: "Japandi di Malaysia: Kenapa Berkesan, dan Di Mana Ia Salah",
    },
    excerpt: {
      en: "Warm minimalism translates beautifully to Malaysian homes, until you forget that storage is the whole point.",
      ms: "Minimalis hangat sesuai untuk rumah Malaysia, sampai anda lupa yang simpanan adalah inti pati gaya ni.",
    },
    metaDescription: {
      en: "How Japandi style adapts to Malaysian homes. The palette, materials, and carpentry choices that make warm minimalism work in tropical humidity.",
      ms: "Cara Japandi disesuaikan dengan rumah di Malaysia. Palet, bahan, dan kerja kayu yang menjadikan minimalis hangat berjaya dalam kelembapan tropika.",
    },
    hero: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Warm minimalist Japandi interior", ms: "Dalaman Japandi minimalis hangat" },
    date: "2026-05-01",
    readMins: 4,
    keywords: ["japandi malaysia", "japandi style rumah", "minimalist interior", "warm minimalism"],
    cta: {
      label: { en: "Bring Japandi to your home", ms: "Bawa Japandi ke rumah anda" },
      waText: {
        en: "Hi BINA+, I want a Japandi-style interior for my home (ID package).",
        ms: "Hai BINA+, saya nak dalaman gaya Japandi untuk rumah saya (pakej ID).",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Japandi blends Japanese restraint with Scandinavian warmth. Calm, uncluttered, tactile. It photographs beautifully and hides clutter, which is why young Malaysian buyers love it. The catch is that minimalism only stays minimal if you have somewhere to put your stuff.",
          ms: "Japandi gabungkan keterbatasan Jepun dengan kehangatan Scandinavia. Tenang, kemas, bertekstur. Cantik dalam gambar dan sembunyikan kekacauan, sebab tu pembeli muda Malaysia suka. Tetapi minimalis hanya kekal minimalis kalau anda ada tempat letak barang anda.",
        },
      },
      {
        type: "h2",
        text: { en: "The palette", ms: "Palet" },
      },
      {
        type: "p",
        text: {
          en: "Warm neutrals. Off-white, oatmeal, clay, soft greys, all grounded by natural timber tones. Avoid stark white and cold grey, which feel clinical under our bright daylight. Walls should look creamy at 3pm, not blue.",
          ms: "Neutral hangat. Putih lembut, oatmeal, tanah liat, kelabu lembut, semua dikukuhkan oleh nada kayu semula jadi. Elakkan putih tajam dan kelabu sejuk, yang nampak klinikal dalam cahaya siang kita yang terang. Dinding patut nampak krim pukul 3 petang, bukan kebiruan.",
        },
      },
      {
        type: "h2",
        text: { en: "Materials and carpentry", ms: "Bahan dan kerja kayu" },
      },
      {
        type: "p",
        text: {
          en: "Timber-tone laminate or veneer carpentry for warmth. Handle-less, flat-front cabinets for a calm look. Matte finishes over gloss. Linen and rattan as accents. Pair with full-height wardrobes and concealed kitchen storage. Our ID PLUS (laminated) and ID MAX (shaker) series suit this look better than any cheaper alternative we've tried.",
          ms: "Kerja kayu laminate atau veneer nada kayu untuk kehangatan. Kabinet tanpa pemegang dan muka rata untuk rupa yang tenang. Kemasan matte berbanding kilat. Linen dan rotan sebagai aksen. Pasangkan dengan almari penuh tinggi dan simpanan dapur tersembunyi. Siri ID PLUS (laminated) dan ID MAX (shaker) kami sesuai untuk rupa ni, lebih sesuai dari mana-mana alternatif murah yang kami cuba.",
        },
      },
      {
        type: "h2",
        text: { en: "Where Japandi fails in Malaysia", ms: "Di mana Japandi gagal di Malaysia" },
      },
      {
        type: "p",
        text: {
          en: "We've walked into homes that started Japandi and ended up storage-warzone within a year. Reason: the carpentry was beautiful but undersized. Malaysian families have more stuff than Scandinavian ones. We cook more, we collect more, we keep things. If your built-ins don't accommodate that, the look dies the day you move in. Plan for 30 percent more storage than you think you need. You'll use all of it.",
          ms: "Kami pernah masuk rumah yang mula Japandi tapi habis jadi kawasan penuh barang dalam setahun. Sebab: kerja kayunya cantik tapi tak cukup besar. Keluarga Malaysia ada lebih banyak barang dari keluarga Scandinavia. Kami masak lebih, kumpul lebih, simpan banyak benda. Kalau built-in anda tak boleh terima semua tu, rupa Japandi mati hari anda pindah masuk. Rancang 30 peratus lebih simpanan daripada yang anda fikir perlu. Anda akan guna semuanya.",
        },
      },
    ],
    faqs: [],
    related: [
      "modern-tropical-house-design-malaysia",
      "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
      "small-kitchen-layout-ideas-malaysia",
    ],
  },

  // 20 — Standard guide, tightened
  {
    slug: "small-kitchen-layout-ideas-malaysia",
    category: "design-ideas",
    title: {
      en: "Small Kitchen Layouts That Actually Work in Malaysian Homes",
      ms: "Layout Dapur Kecil Yang Memang Berkesan untuk Rumah di Malaysia",
    },
    excerpt: {
      en: "Galley, L-shape, or single run. The smart wet/dry split, and storage tricks that turn a tight Klang Valley kitchen into a workable one.",
      ms: "Galley, bentuk-L, atau larian tunggal. Pembahagian basah/kering yang bijak, dan helah simpanan yang ubah dapur Lembah Klang yang sempit jadi boleh diguna.",
    },
    metaDescription: {
      en: "Small kitchen layout ideas for Malaysian homes. Galley vs L-shape vs single-run, the wet/dry kitchen split, and storage tricks that maximise a tight space.",
      ms: "Idea layout dapur kecil untuk rumah di Malaysia. Galley vs bentuk-L vs larian tunggal, pembahagian dapur basah/kering, dan helah simpanan yang maksimumkan ruang sempit.",
    },
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Compact modern kitchen with smart storage", ms: "Dapur moden padat dengan simpanan bijak" },
    date: "2026-05-07",
    readMins: 4,
    keywords: ["small kitchen layout", "dapur kecil", "wet dry kitchen", "kitchen design malaysia"],
    cta: {
      label: { en: "Design a kitchen that fits your space", ms: "Reka dapur yang sesuai dengan ruang anda" },
      waText: {
        en: "Hi BINA+, I have a small kitchen and want a smart layout and fit-out.",
        ms: "Hai BINA+, dapur saya kecil dan saya nak layout dan pemasangan yang bijak.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Malaysian homes, especially condos and link houses, often have small kitchens. The good news: layout and storage matter more than floor area. A 60 sqft kitchen done well beats a 100 sqft kitchen done badly.",
          ms: "Rumah di Malaysia, terutama kondo dan rumah berangkai, selalunya ada dapur kecil. Berita baiknya: layout dan simpanan lebih penting dari keluasan lantai. Dapur 60 kp yang siap betul mengalahkan dapur 100 kp yang siap separa.",
        },
      },
      {
        type: "h2",
        text: { en: "Pick the right layout", ms: "Pilih layout yang betul" },
      },
      {
        type: "ul",
        items: [
          { en: "Galley (two parallel runs): efficient for narrow spaces", ms: "Galley (dua larian selari): cekap untuk ruang sempit" },
          { en: "L-shape: frees a corner for a small table or movement", ms: "Bentuk-L: bebaskan sudut untuk meja kecil atau ruang gerak" },
          { en: "Single run with tall units: best for very tight condos", ms: "Larian tunggal dengan unit tinggi: paling sesuai untuk kondo sangat sempit" },
        ],
      },
      {
        type: "h2",
        text: { en: "Use the wet/dry split", ms: "Guna pembahagian basah/kering" },
      },
      {
        type: "p",
        text: {
          en: "A Malaysian classic for a reason. A clean dry kitchen inside for light cooking and presentation, a wet kitchen (often at the rear or balcony) for heavy frying and washing. Keeps the main kitchen pristine and the home odour-free.",
          ms: "Klasik Malaysia memang ada sebabnya. Dapur kering yang bersih di dalam untuk masak ringan dan persembahan, dapur basah (biasanya di belakang atau balkoni) untuk goreng dan mencuci yang berat. Kekalkan dapur utama kemas dan rumah tak berbau.",
        },
      },
      {
        type: "h2",
        text: { en: "Storage tricks", ms: "Helah simpanan" },
      },
      {
        type: "ul",
        items: [
          { en: "Go full-height: take cabinets to the ceiling for extra storage", ms: "Naik penuh: bawa kabinet ke siling untuk simpanan tambahan" },
          { en: "Tall pull-out units beat deep, hard-to-reach corner cabinets", ms: "Unit pull-out tinggi mengalahkan kabinet sudut yang dalam dan susah dicapai" },
          { en: "Integrate the fridge, use slimline appliances", ms: "Sepadukan peti sejuk, guna perkakas nipis" },
          { en: "Light colours and handle-less doors make the space feel bigger", ms: "Warna cerah dan pintu tanpa pemegang buat ruang nampak lebih besar" },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Do I really need a wet and dry kitchen?", ms: "Saya betul-betul perlu dapur basah dan kering ke?" },
        a: {
          en: "If you cook Malaysian food often, yes. Heavy frying and asam-based dishes will smoke up an enclosed dry kitchen fast. Even a small wet kitchen on the balcony keeps the main one clean.",
          ms: "Kalau anda kerap masak makanan Melayu/Asia, ya. Goreng yang berat dan masakan berasaskan asam akan buat dapur kering tertutup penuh asap dengan cepat. Walaupun dapur basah balkoni kecil pun cukup untuk kekalkan dapur utama bersih.",
        },
      },
    ],
    related: [
      "kitchen-renovation-cost-malaysia",
      "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
      "japandi-style-malaysian-homes",
    ],
  },

  // 21 — Standard guide with recommendations
  {
    slug: "wardrobe-and-carpentry-material-guide-melamine-laminate-shaker",
    category: "design-ideas",
    title: {
      en: "Melamine, Laminate, or Shaker? A Carpentry Material Guide",
      ms: "Melamine, Laminate, atau Shaker? Panduan Bahan Kerja Kayu",
    },
    excerpt: {
      en: "Three material tiers behind most Malaysian fit-outs. Where to use each, where they fail, and which we'd put in our own home.",
      ms: "Tiga tahap bahan di sebalik kebanyakan pemasangan di Malaysia. Di mana guna setiap satu, di mana ia gagal, dan yang mana kami pilih untuk rumah sendiri.",
    },
    metaDescription: {
      en: "Melamine vs laminate vs shaker carpentry for Malaysian homes. How the three material series compare on look, durability and cost for wardrobes and kitchens.",
      ms: "Kerja kayu melamine vs laminate vs shaker untuk rumah di Malaysia. Perbandingan tiga siri bahan dari segi rupa, ketahanan dan kos untuk almari dan dapur.",
    },
    hero: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Built-in wardrobe and cabinetry detail", ms: "Butiran almari built-in dan kabinet" },
    date: "2026-05-13",
    readMins: 4,
    keywords: ["melamine vs laminate", "shaker cabinet", "carpentry material malaysia", "kabinet bahan"],
    cta: {
      label: { en: "Pick the right material series", ms: "Pilih siri bahan yang betul" },
      waText: {
        en: "Hi BINA+, I want advice on carpentry material (melamine, laminated, shaker) for my fit-out.",
        ms: "Hai BINA+, saya nak nasihat pasal bahan kerja kayu (melamine, laminated, shaker) untuk pemasangan saya.",
      },
      href: "/services#interior",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Wardrobes, kitchen cabinets and TV consoles are usually the biggest line in an interior budget. The material drives both the look and the price. Our three ID series map directly to these three tiers.",
          ms: "Almari, kabinet dapur, dan konsol TV biasanya item paling besar dalam bajet dalaman. Bahan pengaruhi kedua-dua rupa dan harga. Tiga siri ID kami padan terus dengan tiga tahap ni.",
        },
      },
      {
        type: "h2",
        text: { en: "Melamine (our ID START series)", ms: "Melamine (siri ID START kami)" },
      },
      {
        type: "p",
        text: {
          en: "A durable factory-finished surface bonded to board. Cost-effective. Wide range of wood looks and colours. Perfectly fine for bedrooms and budget kitchens. The smart starting point for first homes and rental units.",
          ms: "Permukaan kemasan kilang yang tahan lasak, dilekatkan ke papan. Kos efektif. Banyak pilihan rupa kayu dan warna. Cukup baik untuk bilik tidur dan dapur bajet. Titik permulaan bijak untuk rumah pertama dan unit sewa.",
        },
      },
      {
        type: "h2",
        text: { en: "Laminate (our ID PLUS series)", ms: "Laminate (siri ID PLUS kami)" },
      },
      {
        type: "p",
        text: {
          en: "Tougher and thicker than melamine. Better scratch and moisture resistance. Richer textures, including reasonable timber and stone looks. The sweet spot for most family homes that want durability without paying premium money. If you asked us what we'd put in our own home, it would be this.",
          ms: "Lebih keras dan tebal dari melamine. Tahan calar dan lembap lebih baik. Tekstur lebih kaya, termasuk rupa kayu dan batu yang munasabah. Sweet spot untuk kebanyakan rumah keluarga yang nak tahan lasak tanpa bayar harga premium. Kalau anda tanya kami apa yang kami pilih untuk rumah sendiri, ini.",
        },
      },
      {
        type: "h2",
        text: { en: "Shaker (our ID MAX series)", ms: "Shaker (siri ID MAX kami)" },
      },
      {
        type: "p",
        text: {
          en: "A framed, recessed-panel door style with a sprayed or moulded finish. Timeless and premium. Most characterful of the three, and the most expensive. Right when you want a high-end statement that ages well over 15+ years.",
          ms: "Gaya pintu panel berbingkai dan tenggelam dengan kemasan sembur atau acuan. Abadi dan premium. Paling berkarakter antara ketiga-tiga, dan paling mahal. Sesuai bila anda nak kenyataan mewah yang menua dengan baik melebihi 15 tahun.",
        },
      },
      {
        type: "h2",
        text: { en: "Quick verdict", ms: "Keputusan pantas" },
      },
      {
        type: "ul",
        items: [
          { en: "Budget-conscious, first home, rental unit: melamine (ID START)", ms: "Sedar bajet, rumah pertama, unit sewa: melamine (ID START)" },
          { en: "Durable family home, best value: laminate (ID PLUS)", ms: "Rumah keluarga tahan lasak, nilai terbaik: laminate (ID PLUS)" },
          { en: "Premium, long-term, character-driven: shaker (ID MAX)", ms: "Premium, jangka panjang, ada karakter: shaker (ID MAX)" },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Is laminate worth the extra over melamine?", ms: "Laminate berbaloi ke harga lebih daripada melamine?" },
        a: {
          en: "For kitchens and high-use areas, usually yes. Laminate resists scratches and moisture better, so it ages more gracefully in our humidity.",
          ms: "Untuk dapur dan kawasan yang kerap guna, biasanya berbaloi. Laminate tahan calar dan lembap lagi baik, jadi ia menua lebih elok dalam kelembapan kita.",
        },
      },
    ],
    related: [
      "spc-flooring-vs-tiles-vs-laminate",
      "kitchen-renovation-cost-malaysia",
      "japandi-style-malaysian-homes",
    ],
  },

  // 22 — Opinion piece
  {
    slug: "design-build-vs-architect-and-contractor",
    category: "design-build",
    title: {
      en: "Design & Build vs Hiring Separately: Pick a Side",
      ms: "Reka & Bina vs Upah Berasingan: Pilih Satu",
    },
    excerpt: {
      en: "Two ways to build in Malaysia. We're biased, openly. Here's the honest case for each and where we think the design and build model wins.",
      ms: "Dua cara untuk bina di Malaysia. Kami berat sebelah, kami akui. Inilah kes jujur untuk setiap satu dan di mana kami rasa model reka dan bina menang.",
    },
    metaDescription: {
      en: "Design and build vs hiring an architect and contractor separately in Malaysia. Honest comparison on cost, risk, speed and accountability, from a D&B firm.",
      ms: "Reka dan bina vs upah arkitek dan kontraktor berasingan di Malaysia. Perbandingan jujur dari segi kos, risiko, kelajuan dan akauntabiliti, dari firma reka dan bina.",
    },
    hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Design and build team reviewing plans together", ms: "Pasukan reka dan bina menyemak pelan bersama" },
    date: "2026-05-19",
    readMins: 4,
    keywords: ["design build vs architect", "reka bina vs arkitek", "design build model", "construction malaysia"],
    cta: {
      label: { en: "Build with one accountable team", ms: "Bina dengan satu pasukan yang bertanggungjawab" },
      waText: {
        en: "Hi BINA+, I'm deciding between design-build and hiring separately. Can we talk?",
        ms: "Hai BINA+, saya tengah pilih antara reka-bina dan upah berasingan. Boleh borak?",
      },
      href: "/services#design-build",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Two ways to get a home built in Malaysia. Hire an architect and a contractor separately, or use one design and build team that handles both. Since we are a design and build studio, we're biased. We'll be honest about that and give you the case for each route.",
          ms: "Dua cara untuk dapatkan rumah dibina di Malaysia. Upah arkitek dan kontraktor berasingan, atau guna satu pasukan reka dan bina yang uruskan kedua-dua. Sebab kami studio reka dan bina, kami berat sebelah. Kami akui dan kami akan bagi kes untuk setiap laluan.",
        },
      },
      {
        type: "h2",
        text: { en: "The traditional split", ms: "Pembahagian tradisional" },
      },
      {
        type: "p",
        text: {
          en: "An architect designs. A separately appointed contractor builds. You get independent design expertise, which can be a real advantage for complex or architecturally ambitious work. The downside: when the build doesn't match the drawing, each party can point at the other. The coordination becomes your job, on top of everything else you have going on.",
          ms: "Arkitek reka bentuk. Kontraktor yang dilantik berasingan bina. Anda dapat kepakaran reka bentuk bebas, yang boleh jadi kelebihan sebenar untuk kerja yang kompleks atau berambisi tinggi dari segi seni bina. Bahagian susah: bila binaan tak ikut lukisan, setiap pihak boleh tunding satu sama lain. Penyelarasan jadi kerja anda, atas semua benda lain yang anda dah ada.",
        },
      },
      {
        type: "h2",
        text: { en: "The design and build model", ms: "Model reka dan bina" },
      },
      {
        type: "p",
        text: {
          en: "One team owns design and construction under a single contract. Same manager from sketch to handover. Coordination gaps disappear. Variation pricing is straightforward because the same team makes both the drawing and the bill of quantities. The trade-off is that you lose the independent-design layer. For most Malaysian family homes, that's not the constraint people think it is.",
          ms: "Satu pasukan miliki reka bentuk dan pembinaan di bawah satu kontrak. Pengurus yang sama dari lakaran sampai serahan. Jurang penyelarasan hilang. Harga ubah suai mudah sebab pasukan yang sama buat lukisan dan bill of quantities. Tukar gantinya, anda kehilangan lapisan reka bentuk bebas. Untuk kebanyakan rumah keluarga di Malaysia, ini bukan halangan yang ramai sangka.",
        },
      },
      {
        type: "h2",
        text: { en: "When the traditional split makes sense", ms: "Bila pembahagian tradisional masuk akal" },
      },
      {
        type: "p",
        text: {
          en: "Highly bespoke architectural work. Award-seeking residential projects. Cases where you want a named architect's voice on the result. We've watched these projects produce extraordinary homes. They cost more and take longer, and that's the trade.",
          ms: "Kerja seni bina yang sangat tersuai. Projek kediaman yang mengejar anugerah. Kes di mana anda nak ada suara arkitek terkenal pada hasilnya. Kami pernah tengok projek-projek begini hasilkan rumah yang luar biasa. Ia kos lebih dan ambil masa lebih, dan itulah perjanjiannya.",
        },
      },
      {
        type: "h2",
        text: { en: "Where we think design and build wins", ms: "Di mana kami rasa reka dan bina menang" },
      },
      {
        type: "p",
        text: {
          en: "Single to double-storey family homes. Renovation and extension projects. Anything where you want a single accountable party, fixed-scope pricing, and a build that runs faster because the design and construction phases overlap. That's most of the work we do, and it's why we exist as a studio.",
          ms: "Rumah keluarga setingkat hingga dua tingkat. Projek renovasi dan sambungan. Apa-apa yang anda nak satu pihak yang bertanggungjawab, harga skop tetap, dan binaan yang berjalan lebih cepat sebab fasa reka bentuk dan pembinaan bertindih. Itulah kebanyakan kerja yang kami buat, dan sebab kami wujud sebagai studio.",
        },
      },
    ],
    faqs: [],
    related: [
      "what-is-included-in-a-design-and-build-package",
      "design-build-contractor-shah-alam",
      "how-long-to-build-a-house-in-malaysia",
    ],
  },

  // 23 — Q&A only
  {
    slug: "how-long-to-build-a-house-in-malaysia",
    category: "design-build",
    title: {
      en: "How Long to Build a House in Malaysia: The Real Answers",
      ms: "Berapa Lama Nak Bina Rumah di Malaysia: Jawapan Sebenar",
    },
    excerpt: {
      en: "Phase-by-phase timeline questions answered, including the ones nobody warns you about (approvals, weather, late finish decisions).",
      ms: "Soalan jadual fasa demi fasa dijawab, termasuk yang tiada siapa beritahu (kelulusan, cuaca, keputusan kemasan yang lewat).",
    },
    metaDescription: {
      en: "How long does it take to build a house in Malaysia? Realistic phase-by-phase answers on design, approvals, construction and handover.",
      ms: "Berapa lama nak bina rumah di Malaysia? Jawapan realistik fasa demi fasa pasal reka bentuk, kelulusan, pembinaan dan serahan.",
    },
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "House construction nearing completion", ms: "Pembinaan rumah hampir siap" },
    date: "2026-05-25",
    readMins: 4,
    keywords: ["how long to build house", "build timeline malaysia", "tempoh bina rumah", "construction duration"],
    cta: {
      label: { en: "Get a build timeline for your project", ms: "Dapatkan jadual binaan untuk projek anda" },
      waText: {
        en: "Hi BINA+, I'd like a realistic timeline and quote to build my home.",
        ms: "Hai BINA+, saya nak jadual realistik dan quote untuk bina rumah saya.",
      },
      href: "/services#design-build",
    },
    body: [
      {
        type: "h3",
        text: { en: "How long, in total?", ms: "Berapa lama, secara keseluruhan?" },
      },
      {
        type: "p",
        text: {
          en: "Single to double-storey home in Malaysia, from brief to keys: roughly 8 to 14 months. Anyone telling you 4 to 6 months either skips approvals or shifts most of the design risk onto you.",
          ms: "Rumah setingkat hingga dua tingkat di Malaysia, dari brief sampai kunci: kira-kira 8 hingga 14 bulan. Sesiapa yang janji 4 hingga 6 bulan sama ada skip kelulusan atau alihkan kebanyakan risiko reka bentuk ke atas anda.",
        },
      },
      {
        type: "h3",
        text: { en: "How long is design and 3D?", ms: "Berapa lama untuk reka bentuk dan 3D?" },
      },
      {
        type: "p",
        text: {
          en: "Two to six weeks. Variation depends on how quickly you can decide. If your brief changes three times, the design takes three times longer.",
          ms: "Dua hingga enam minggu. Berbeza ikut kelajuan anda buat keputusan. Kalau brief anda berubah tiga kali, reka bentuk ambil tiga kali ganda lebih lama.",
        },
      },
      {
        type: "h3",
        text: { en: "How long is approval?", ms: "Berapa lama untuk kelulusan?" },
      },
      {
        type: "p",
        text: {
          en: "Two to four months in Selangor councils on a clean submission. Longer if drawings are incomplete and get bounced. This is the single biggest source of delay we see.",
          ms: "Dua hingga empat bulan di majlis Selangor untuk penyerahan yang bersih. Lebih lama kalau lukisan tak lengkap dan dipulangkan. Inilah punca kelewatan paling besar yang kami nampak.",
        },
      },
      {
        type: "h3",
        text: { en: "How long is construction?", ms: "Berapa lama untuk pembinaan?" },
      },
      {
        type: "p",
        text: {
          en: "Four to nine months for a single to double-storey home. Foundations, structure, roof, M&E rough-in, finishing, fittings, in that order.",
          ms: "Empat hingga sembilan bulan untuk rumah setingkat hingga dua tingkat. Asas, struktur, bumbung, M&E asas, kemasan, lekapan, ikut susunan itu.",
        },
      },
      {
        type: "h3",
        text: { en: "What about snagging and handover?", ms: "Macam mana pula dengan snagging dan serahan?" },
      },
      {
        type: "p",
        text: {
          en: "Two to four weeks. Walk the site with your project lead, list defects, fix, re-inspect, hand over with a closed list and warranties documented.",
          ms: "Dua hingga empat minggu. Jalan tapak dengan project lead anda, senaraikan kecacatan, baiki, periksa semula, serah dengan senarai ditutup dan waranti didokumenkan.",
        },
      },
      {
        type: "h3",
        text: { en: "What causes the worst delays?", ms: "Apa punca kelewatan paling teruk?" },
      },
      {
        type: "p",
        text: {
          en: "In order: slow or incomplete authority submissions, late client decisions on finishes, monsoon weather hitting structural work, and material lead times for imported items. The first two are within your control. Move fast and decide early.",
          ms: "Ikut susunan: penyerahan ke pihak berkuasa yang lambat atau tak lengkap, keputusan pelanggan yang lewat pasal kemasan, hujan tengkujuh kena kerja struktur, dan masa tunggu bahan untuk barang import. Dua yang pertama dalam kawalan anda. Bergerak cepat dan buat keputusan awal.",
        },
      },
      {
        type: "h3",
        text: { en: "How do you keep a build on schedule?", ms: "Macam mana anda pastikan binaan ikut jadual?" },
      },
      {
        type: "p",
        text: {
          en: "Submit complete drawings the first time. Sign off finishes before construction starts. Use a team that runs a fixed schedule with weekly site photos and one project lead. Our packages bake all of that in.",
          ms: "Hantar lukisan yang lengkap pada kali pertama. Sahkan kemasan sebelum pembinaan bermula. Guna pasukan yang ada jadual tetap dengan foto tapak mingguan dan seorang project lead. Pakej kami masukkan semua benda ni.",
        },
      },
    ],
    faqs: [],
    related: [
      "building-a-house-in-selangor-permits-timeline",
      "what-is-included-in-a-design-and-build-package",
      "design-build-vs-architect-and-contractor",
    ],
  },

  // 24 — Case study narrative
  {
    slug: "bathroom-renovation-cost-malaysia",
    category: "renovation-cost",
    title: {
      en: "Bathroom Renovation in Malaysia: Where the Money Really Goes",
      ms: "Renovasi Bilik Air di Malaysia: Ke Mana Wang Sebenar Pergi",
    },
    excerpt: {
      en: "A small room. A surprisingly big bill. Tiles, plumbing, waterproofing, and the one line you must never let a contractor talk down.",
      ms: "Bilik kecil. Bil yang tinggi tak disangka. Jubin, paip, kalis air, dan satu item yang jangan sekali-kali biarkan kontraktor turunkan.",
    },
    metaDescription: {
      en: "Bathroom renovation cost in Malaysia: realistic price bands, where the money goes (tiles, plumbing, waterproofing, fittings), and the cost you can't cut.",
      ms: "Kos renovasi bilik air di Malaysia: julat harga realistik, ke mana wang pergi (jubin, paip, kalis air, lekapan), dan kos yang anda tak boleh potong.",
    },
    hero: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=80&auto=format&fit=crop",
    heroAlt: { en: "Newly renovated modern bathroom", ms: "Bilik air moden yang baru direnovasi" },
    date: "2026-05-29",
    readMins: 9,
    keywords: ["kos renovate bilik air", "bathroom renovation cost malaysia", "toilet renovation", "waterproofing cost"],
    cta: {
      label: { en: "Get a bathroom renovation quote", ms: "Dapatkan quote renovasi bilik air" },
      waText: {
        en: "Hi BINA+, I'd like a quote to renovate my bathrooms.",
        ms: "Hai BINA+, saya nak quote untuk renovate bilik air saya.",
      },
      href: "/services#renovation",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Picture a 30 square foot bathroom. The owner expected RM10k. The quote came back at RM18k. They thought the contractor was overcharging. He wasn't. Bathrooms are small but cost-dense, and every square foot carries tile, plumbing, waterproofing and fittings. That's why a tiny bathroom costs more per square foot than any other room in the house.",
          ms: "Bayangkan bilik air 30 kaki persegi. Pemilik jangka RM10k. Quote pulang RM18k. Mereka fikir kontraktor mahal. Sebenarnya tak. Bilik air kecil tapi padat dengan kos, dan setiap kaki persegi ada jubin, paip, kalis air, dan lekapan. Sebab tu bilik air kecil kos lebih per kaki persegi daripada bilik lain dalam rumah.",
        },
      },
      {
        type: "h2",
        text: { en: "Typical budget bands", ms: "Julat bajet biasa" },
      },
      {
        type: "ul",
        items: [
          { en: "Refresh (re-tile, new fittings, same layout): RM6k to RM12k", ms: "Penyegaran (jubin semula, lekapan baru, layout sama): RM6k hingga RM12k" },
          { en: "Mid renovation (new layout, partial replumb): RM12k to RM22k", ms: "Renovasi pertengahan (layout baru, paip separa baru): RM12k hingga RM22k" },
          { en: "Premium (full strip, feature tiling, premium fittings): RM22k to RM40k+", ms: "Premium (kupas penuh, jubin istimewa, lekapan premium): RM22k hingga RM40k+" },
        ],
      },
      {
        type: "h2",
        text: { en: "Where the money goes (line by line)", ms: "Ke mana wang itu pergi (baris demi baris)" },
      },
      {
        type: "ul",
        items: [
          { en: "Hacking and disposal of old tiles, fittings and screed: RM1,500 to RM3,000", ms: "Pemecahan dan pelupusan jubin lama, lekapan dan screed: RM1,500 hingga RM3,000" },
          { en: "Waterproofing membrane (Sika, Kemroc or equivalent): RM12 to RM20 per sqft", ms: "Membran kalis air (Sika, Kemroc atau setara): RM12 hingga RM20 per kp" },
          { en: "Wall and floor tiling (material + labour, by tile size): RM18 to RM45 per sqft", ms: "Jubin dinding dan lantai (bahan + buruh, ikut saiz jubin): RM18 hingga RM45 per kp" },
          { en: "Plumbing rerouting (per point): RM300 to RM600", ms: "Pindahan paip (per titik): RM300 hingga RM600" },
          { en: "WC (close-coupled, mid-range): RM800 to RM2,500", ms: "WC (close-coupled, pertengahan): RM800 hingga RM2,500" },
          { en: "Basin and counter (countertop or wall-hung): RM600 to RM2,500", ms: "Basin dan kaunter (countertop atau wall-hung): RM600 hingga RM2,500" },
          { en: "Mixer set (shower + basin + bidet): RM800 to RM3,500", ms: "Set mixer (shower + basin + bidet): RM800 hingga RM3,500" },
          { en: "Shower screen (frameless 8mm-10mm): RM1,500 to RM4,500", ms: "Skrin shower (frameless 8mm-10mm): RM1,500 hingga RM4,500" },
          { en: "Accessories (towel rail, paper holder, mirror, robe hook): RM400 to RM1,200", ms: "Aksesori (rak tuala, pemegang tisu, cermin, sangkut jubah): RM400 hingga RM1,200" },
        ],
      },
      {
        type: "h2",
        text: { en: "Master vs common bathroom cost", ms: "Kos bilik air utama vs bilik air biasa" },
      },
      {
        type: "p",
        text: {
          en: "A master bathroom usually carries a walk-in shower (screen + linear drain), a feature tile or two-tone scheme, possibly a vanity with double sinks, and better fittings. That's why master bathrooms run 1.5x to 2x the cost of a common bath of the same footprint. Don't let a contractor price both at the same rate.",
          ms: "Bilik air utama biasanya ada walk-in shower (skrin + linear drain), jubin ciri atau skim dua warna, mungkin vanity dengan dua sinki, dan lekapan yang lebih baik. Sebab tu bilik air utama kos 1.5x hingga 2x bilik air biasa untuk keluasan yang sama. Jangan biarkan kontraktor caj kedua-duanya dengan kadar yang sama.",
        },
      },
      {
        type: "h2",
        text: { en: "A worked example: 60 sqft common bathroom, mid-tier", ms: "Contoh sebenar: bilik air biasa 60 kp, pertengahan" },
      },
      {
        type: "p",
        text: {
          en: "Typical scope: existing bathroom in a 10-year-old terrace. Full strip-out, new waterproofing, new tiles, new fittings, keep the existing plumbing layout to save cost.",
          ms: "Skop biasa: bilik air sedia ada dalam teres 10 tahun. Kupas penuh, kalis air baru, jubin baru, lekapan baru, kekalkan layout paip sedia ada untuk jimat kos.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Hacking and disposal: RM2,200", ms: "Pemecahan dan pelupusan: RM2,200" },
          { en: "Waterproofing (60 sqft floor + 4ft up the walls, ~140 sqft total): RM2,100", ms: "Kalis air (60 kp lantai + 4 kaki tinggi dinding, ~140 kp jumlah): RM2,100" },
          { en: "Wall and floor tiling (~220 sqft, 600x600 tiles): RM6,200", ms: "Jubin dinding dan lantai (~220 kp, jubin 600x600): RM6,200" },
          { en: "Plumbing touch-ups (no rerouting, just new connections): RM1,200", ms: "Penyesuaian paip (tiada pindahan, hanya sambungan baru): RM1,200" },
          { en: "WC, close-coupled, dual-flush: RM1,200", ms: "WC, close-coupled, double flush: RM1,200" },
          { en: "Basin with countertop and concealed cistern (or wall-hung): RM1,800", ms: "Basin dengan kaunter dan sistem tersembunyi (atau wall-hung): RM1,800" },
          { en: "Mixer set (shower + basin): RM1,500", ms: "Set mixer (shower + basin): RM1,500" },
          { en: "Frameless 8mm shower screen: RM2,200", ms: "Skrin shower frameless 8mm: RM2,200" },
          { en: "Accessories (mirror, robe hook, towel rail, paper holder): RM800", ms: "Aksesori (cermin, sangkut jubah, rak tuala, pemegang tisu): RM800" },
          { en: "Linear drain and grating: RM600", ms: "Linear drain dan grating: RM600" },
          { en: "Project supervision: RM1,200", ms: "Penyeliaan projek: RM1,200" },
          { en: "Subtotal: RM21,000", ms: "Subtotal: RM21,000" },
          { en: "All-in: ~RM21k", ms: "Jumlah keseluruhan: ~RM21k" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Same bathroom, upgrade to a feature tile wall (RM30/sqft instead of RM18/sqft), brand-name fittings (Grohe or Hansgrohe), and a stone-resin shower tray, and you're at RM30k. Drop to budget fittings and basic ceramic tile and you're at RM12k. That's the realistic range for a 60 sqft common bath in 2026.",
          ms: "Bilik air yang sama, naik taraf ke dinding jubin ciri (RM30/kp bukan RM18/kp), lekapan berjenama (Grohe atau Hansgrohe), dan dulang shower stone-resin, anda akan di RM30k. Turun ke lekapan bajet dan jubin seramik asas, anda di RM12k. Itulah julat realistik untuk bilik air biasa 60 kp pada 2026.",
        },
      },
      {
        type: "h2",
        text: { en: "Don't ever cut waterproofing", ms: "Jangan sesekali potong kalis air" },
      },
      {
        type: "p",
        text: {
          en: "If there's one line a contractor tries to soften and you have to push back on, it's waterproofing. A failed membrane means leaks into the room below, ruined ceilings, and a full re-do. The savings on day one will cost you ten times more two years later. Insist on a tested, warrantied membrane under every wet tile.",
          ms: "Kalau ada satu item yang kontraktor cuba turunkan dan anda kena tolak balik, ia adalah kalis air. Membran yang gagal bermakna kebocoran ke bilik di bawah, siling rosak, dan kerja semula penuh. Penjimatan pada hari pertama akan kos sepuluh kali ganda dua tahun kemudian. Tegaskan membran yang diuji dan ada waranti di bawah setiap jubin basah.",
        },
      },
      {
        type: "p",
        text: {
          en: "What a proper waterproofing system looks like: a primer coat on the substrate, two coats of liquid membrane (or a polyurethane system), a 48-hour ponding test before tiling, and a written warranty of at least 5 years. If a contractor can't tell you which brand they're using or won't pond-test the floor, walk.",
          ms: "Sistem kalis air yang betul: lapisan primer pada substrat, dua lapis membran cecair (atau sistem polyurethane), ujian pondi 48 jam sebelum pasang jubin, dan waranti bertulis sekurang-kurangnya 5 tahun. Kalau kontraktor tak boleh sebut jenama yang dia guna atau tak nak buat ujian pondi pada lantai, tinggalkan.",
        },
      },
      {
        type: "h2",
        text: { en: "Where to spend, where to save", ms: "Di mana belanja, di mana jimat" },
      },
      {
        type: "ul",
        items: [
          { en: "Spend on: waterproofing brand and depth, mixer cartridges (German or Japanese), the shower screen (8mm minimum)", ms: "Belanja pada: jenama dan ketebalan kalis air, kartrij mixer (Jerman atau Jepun), skrin shower (8mm minimum)" },
          { en: "Save on: WC body (mid-range works for a decade), basin shape (visual choice only), accessories (replaceable anytime)", ms: "Jimat pada: badan WC (pertengahan tahan satu dekad), bentuk basin (pilihan visual sahaja), aksesori (boleh ganti bila-bila)" },
          { en: "Don't ever save on: the membrane, the floor slope to drain, the shower drain itself", ms: "Jangan sekali-kali jimat pada: membran, cerun lantai ke drain, drain shower itu sendiri" },
        ],
      },
      {
        type: "h2",
        text: { en: "Smart ways to lower the bill (without cutting the right things)", ms: "Cara bijak untuk turunkan bil (tanpa potong benda yang penting)" },
      },
      {
        type: "ul",
        items: [
          { en: "Keep the existing layout: leave the WC and basin where they are, save RM1,500 to RM3,000 in plumbing", ms: "Kekalkan layout: kekalkan kedudukan WC dan basin, jimat RM1,500 hingga RM3,000 untuk paip" },
          { en: "Use larger format tiles (600x600 or 600x1200): less grout, faster install, fewer joints to fail", ms: "Guna jubin format besar (600x600 atau 600x1200): kurang grout, pemasangan lebih cepat, kurang sambungan yang boleh gagal" },
          { en: "Spec mid-range fittings, premium membrane and adhesive (the opposite of most homeowner instincts)", ms: "Pilih lekapan pertengahan, membran dan pelekat premium (terbalik dari naluri kebanyakan pemilik rumah)" },
          { en: "Combine bathrooms in scheduling: if you're doing more than one, the marginal cost on the second is 15 to 25 percent lower than the first", ms: "Gabungkan bilik air dalam jadual: kalau anda renovate lebih satu, kos marginal yang kedua 15 hingga 25 peratus lebih rendah dari yang pertama" },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Why is bathroom renovation so expensive per square foot?", ms: "Kenapa renovasi bilik air mahal sangat per kaki persegi?" },
        a: {
          en: "Small space, lots of trades. Waterproofing, plumbing, tiling and fittings all concentrate in a few square feet. Labour-intensive and unforgiving.",
          ms: "Ruang kecil, banyak kerja berlainan. Kalis air, paip, jubin, dan lekapan semua padat dalam beberapa kaki persegi. Intensif buruh dan tak boleh silap.",
        },
      },
    ],
    related: [
      "kitchen-renovation-cost-malaysia",
      "hidden-renovation-costs-malaysia",
      "how-much-does-it-cost-to-renovate-a-house-in-malaysia",
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(post: BlogPost): BlogPost[] {
  return post.related
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => Boolean(p));
}

export function blogHref(locale: Locale, slug?: string): string {
  const base = locale === "ms" ? "/ms/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}

/** Rough word count of a post body in the given locale (for read-time / SEO). */
export function wordCount(post: BlogPost, locale: Locale): number {
  let n = 0;
  for (const b of post.body) {
    if (b.type === "ul" || b.type === "ol") {
      for (const it of b.items) n += it[locale].split(/\s+/).length;
    } else {
      n += b.text[locale].split(/\s+/).length;
    }
  }
  return n;
}
