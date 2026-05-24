import Link from "next/link";
import { dict, type Locale } from "@/lib/dict";

type Props = {
  /** Locale of the *current* page. The switcher shows EN and BM, with the current one marked active. */
  locale: Locale;
  /** Where the OTHER-locale link should go (must be the equivalent page in the other locale). */
  altHref: string;
  /** Where the CURRENT-locale link should go (usually the current page itself). */
  selfHref: string;
  /** "short" = EN/BM labels (nav); "full" = English/Bahasa Malaysia (drawer/body). */
  variant?: "short" | "full";
};

export default function LangSwitcher({
  locale,
  altHref,
  selfHref,
  variant = "short",
}: Props) {
  const d = dict[locale];
  const enLabel = variant === "short" ? d.lang.enShort : d.lang.en;
  const msLabel = variant === "short" ? d.lang.msShort : d.lang.ms;
  const enHref = locale === "en" ? selfHref : altHref;
  const msHref = locale === "ms" ? selfHref : altHref;
  const enActive = locale === "en";
  const msActive = locale === "ms";

  return (
    <div className="lang-switch" role="group" aria-label={d.lang.ariaLabel}>
      <Link
        href={enHref}
        hrefLang="en"
        className={enActive ? "is-active" : undefined}
        aria-current={enActive ? "true" : undefined}
      >
        {enLabel}
      </Link>
      <Link
        href={msHref}
        hrefLang="ms"
        className={msActive ? "is-active" : undefined}
        aria-current={msActive ? "true" : undefined}
      >
        {msLabel}
      </Link>
    </div>
  );
}
