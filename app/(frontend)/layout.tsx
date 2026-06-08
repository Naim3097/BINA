import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import WhatsAppFab from "@/components/WhatsAppFab";

const jakarta = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
      weight: "200 800",
    },
    {
      path: "./fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "200 800",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://binaplusdesign.my";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BINA+ Design & Build — Move-in Ready Homes & Renovation in Selangor",
  description:
    "BINA+ is a Malaysian design-and-build studio crafting move-in ready homes, renovations and interior design across the Klang Valley. From RM200k. Single-storey to double-storey, full project management included.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    title: "BINA+ Design & Build — Move-in Ready Homes & Renovation",
    description: "End-to-end design, build and renovation in Shah Alam, Selangor. From RM200k.",
    url: "/",
    images: [
      {
        url: "/og-bina.jpg",
        width: 1200,
        height: 630,
        alt: "BINA+ Design & Build — Sawah & Teduh, a completed home in Sekinchan, Selangor",
        type: "image/jpeg",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/BINA LOGO 1.png",
    apple: "/BINA LOGO 1.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#EAEAEA",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "BINA+ Design & Build",
  alternateName: "bina.byboxup",
  image: "/BINA LOGO 1.png",
  url: siteUrl + "/",
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/bina.byboxup/",
    "https://www.facebook.com/share/1CiR3MgS5e/",
    "https://www.tiktok.com/@bina.byboxup",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LenisProvider>{children}</LenisProvider>
        <WhatsAppFab />
      </body>
    </html>
  );
}
