import Link from "next/link";
import type { Locale } from "@/lib/dict";
import { getAllPosts, CATEGORY_LABELS, BLOG_INTRO, blogHref } from "@/lib/blog";

export default function BlogIndex({ locale }: { locale: Locale }) {
  const t = BLOG_INTRO[locale];
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const dateFmt = (iso: string) =>
    new Date(iso).toLocaleDateString(locale === "ms" ? "ms-MY" : "en-MY", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <>
      <section className="container page-hero">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="lead">{t.sub}</p>
        </div>
      </section>

      {featured && (
        <section className="container blog-featured">
          <Link href={blogHref(locale, featured.slug)} className="blog-featured__link">
            <div className="blog-featured__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.hero} alt={featured.heroAlt[locale]} loading="eager" />
            </div>
            <div className="blog-featured__body">
              <span className="blog-card__cat">{CATEGORY_LABELS[featured.category][locale]}</span>
              <h2>{featured.title[locale]}</h2>
              <p>{featured.excerpt[locale]}</p>
              <span className="blog-card__meta">
                {dateFmt(featured.date)} · {featured.readMins} {t.minRead}
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {rest.map((p) => (
              <Link key={p.slug} href={blogHref(locale, p.slug)} className="blog-card">
                <div className="blog-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.hero} alt={p.heroAlt[locale]} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__cat">{CATEGORY_LABELS[p.category][locale]}</span>
                  <h3>{p.title[locale]}</h3>
                  <p>{p.excerpt[locale]}</p>
                  <span className="blog-card__meta">
                    {dateFmt(p.date)} · {p.readMins} {t.minRead}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
