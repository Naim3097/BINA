"use client";

import { usePathname } from "next/navigation";

const WA_PHONE = "60193428981";

const COPY = {
  en: {
    text: "Hi BINA+! I'd like to chat about a home project.",
    label: "Chat with us on WhatsApp",
  },
  ms: {
    text: "Hai BINA+! Saya nak borak pasal projek rumah.",
    label: "Sembang dengan kami di WhatsApp",
  },
} as const;

export default function WhatsAppFab() {
  const pathname = usePathname() || "/";
  const isMs = pathname === "/ms" || pathname.startsWith("/ms/");
  const c = isMs ? COPY.ms : COPY.en;
  const href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(c.text)}`;

  return (
    <a
      href={href}
      className="wa-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.label}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5L9.4 7c-.2-.5-.4-.4-.6-.4H8.3c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    </a>
  );
}
