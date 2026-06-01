import Link from "next/link";
import { dict, routes, type Locale } from "@/lib/dict";

const SOCIALS = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bina.byboxup/",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1CiR3MgS5e/",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9v-1.9c0-.87.24-1.46 1.49-1.46H17V4.5c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.89V10.5H8.5v3h2.44V21h2.56z" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@bina.byboxup",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.5 8.6a6.4 6.4 0 0 1-3.7-1.2v6.7a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 1.9 2.6V2h2.6c0 .2 0 .5.1.7a3.8 3.8 0 0 0 3.6 3.3v2.6z" />
      </svg>
    ),
  },
];

export default function Footer({ locale }: { locale: Locale }) {
  const d = dict[locale];
  const r = routes[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/BINA LOGO 1.png" alt="BINA+" />
            <p>{d.footer.brandText}</p>
            <div className="footer__socials" aria-label={d.footer.follow}>
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  className="footer__social"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>{d.footer.pages}</h4>
            <ul>
              <li>
                <Link href={r.home}>{d.nav.home}</Link>
              </li>
              <li>
                <Link href={r.about}>{d.nav.about}</Link>
              </li>
              <li>
                <Link href={r.services}>{d.nav.services}</Link>
              </li>
              <li>
                <Link href={r.caseStudies}>{d.nav.caseStudies}</Link>
              </li>
              <li>
                <Link href={r.blog}>{d.nav.blog}</Link>
              </li>
              <li>
                <Link href={r.contact}>{d.nav.contact}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>{d.footer.contact}</h4>
            <ul>
              <li>
                <a href="tel:+60193428981">{d.footer.contactPrincipal}</a>
              </li>
              <li>
                <a href="tel:+60134315051">{d.footer.contactSecondary}</a>
              </li>
              <li>
                <a href="mailto:bina.designbuild@gmail.com">bina.designbuild@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{d.footer.studio}</h4>
            <ul>
              <li>24-1, Jalan Matahari Aa U5/Aa</li>
              <li>Pinggiran Subang, 40150</li>
              <li>Shah Alam, Selangor</li>
              <li>{d.footer.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} {d.footer.copyright}
          </span>
          <span>
            <Link href={r.privacy}>{d.footer.privacy}</Link>
            <Link href={r.privacy}>{d.footer.terms}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
