"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/dict";

/**
 * Sets <html lang> client-side based on the page's locale. The root layout
 * always renders lang="en", which is correct for English pages but not for
 * Malay ones — this component nudges the attribute as soon as it mounts.
 * Modern crawlers (Googlebot, Bingbot) execute JS and observe the change.
 */
export default function LangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
