import Link from "next/link";
import type { Locale } from "@/lib/dict";
import {
  type BlogPost,
  CATEGORY_LABELS,
  BLOG_INTRO,
  blogHref,
  getRelated,
} from "@/lib/blog";

function Block({ block, locale }: { block: BlogPost["body"][number]; locale: Locale }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text[locale]}</h2>;
    case "h3":
      return <h3>{block.text[locale]}</h3>;
    case "quote":
      return <blockquote>{block.text[locale]}</blockquote>;
    case "ul":
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{it[locale]}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{it[locale]}</li>
          ))}
        </ol>
      );
    default:
      return <p>{block.text[locale]}</p>;
  }
}

export default function BlogArticle({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const t = BLOG_INTRO[locale];
  const related = getRelated(post);
  const servicesHref = locale === "ms" ? "/ms/services" : "/services";
  const dateFmt = new Date(post.date).toLocaleDateString(
    locale === "ms" ? "ms-MY" : "en-MY",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="blog-post">
      <header className="container blog-post__head">
        <div className="crumbs">
          <Link href={blogHref(locale)}>{t.backToBlog}</Link>
          <span>/</span> {CATEGORY_LABELS[post.category][locale]}
        </div>
        <span className="eyebrow">{CATEGORY_LABELS[post.category][locale]}</span>
        <h1>{post.title[locale]}</h1>
        <p className="lead">{post.excerpt[locale]}</p>
        <span className="blog-post__meta">
          {dateFmt} · {post.readMins} {t.minRead}
        </span>
      </header>

      <div className="container blog-post__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.hero} alt={post.heroAlt[locale]} loading="eager" />
      </div>

      <div className="blog-post__layout container">
        <div className="blog-post__body">
          {post.body.map((block, i) => (
            <Block key={i} block={block} locale={locale} />
          ))}

          {/* In-body CTA */}
          <div className="blog-cta">
            <div>
              <strong>{post.cta.label[locale]}</strong>
              <p>
                {locale === "ms"
                  ? "Pasukan reka-dan-bina kami berpangkalan di Shah Alam, melayani seluruh Lembah Klang."
                  : "Our design-and-build team is based in Shah Alam, serving the whole Klang Valley."}
              </p>
            </div>
            <div className="blog-cta__actions">
              <Link href={locale === "ms" ? "/ms/contact" : "/contact"} className="btn btn--primary">
                {locale === "ms" ? "Hubungi kami" : "Get in touch"}
              </Link>
              <Link href={`${servicesHref}${post.cta.href.replace(/^\/services/, "")}`} className="btn btn--ghost">
                {locale === "ms" ? "Lihat pakej" : "See packages"}
              </Link>
            </div>
          </div>

          {post.faqs.length > 0 && (
            <section className="blog-faq">
              <h2>{t.faqTitle}</h2>
              {post.faqs.map((f, i) => (
                <details key={i} className="blog-faq__item">
                  <summary>{f.q[locale]}</summary>
                  <p>{f.a[locale]}</p>
                </details>
              ))}
            </section>
          )}
        </div>

        {related.length > 0 && (
          <aside className="blog-post__aside">
            <h2 className="blog-aside__title">{t.related}</h2>
            <ul className="blog-related">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={blogHref(locale, r.slug)}>
                    <span className="blog-related__cat">
                      {CATEGORY_LABELS[r.category][locale]}
                    </span>
                    <span className="blog-related__title">{r.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
