import Link from "next/link";
import { dict, routes, type Locale } from "@/lib/dict";

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
            <a href="#">{d.footer.terms}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
