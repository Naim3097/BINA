"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const COPY = {
  en: { label: "Enquire", aria: "Enquire — send us your details" },
  ms: { label: "Tanya", aria: "Tanya — hantar butiran anda" },
} as const;

export default function WhatsAppFab() {
  const pathname = usePathname() || "/";
  const isMs = pathname === "/ms" || pathname.startsWith("/ms/");
  const c = isMs ? COPY.ms : COPY.en;
  const href = isMs ? "/ms/contact#form" : "/contact#form";

  return (
    <Link href={href} className="wa-fab" aria-label={c.aria}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="wa-fab__label">{c.label}</span>
    </Link>
  );
}
