import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogArticle from "@/components/BlogArticle";
import LangSetter from "@/components/LangSetter";
import { getAllPosts, getPost } from "@/lib/blog";

const SITE = "https://bina.designbuild";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel tidak dijumpai — BINA+" };
  return {
    title: `${post.title.ms} | BINA+ Reka & Bina`,
    description: post.metaDescription.ms,
    keywords: post.keywords,
    alternates: {
      canonical: `/ms/blog/${slug}`,
      languages: { "en-MY": `/blog/${slug}`, "ms-MY": `/ms/blog/${slug}`, "x-default": `/blog/${slug}` },
    },
    openGraph: {
      type: "article",
      locale: "ms_MY",
      title: post.title.ms,
      description: post.metaDescription.ms,
      url: `/ms/blog/${slug}`,
      images: [post.hero],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostMs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title.ms,
        description: post.metaDescription.ms,
        image: post.hero,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "ms-MY",
        author: { "@type": "Organization", name: "BINA+ Reka & Bina" },
        publisher: { "@type": "Organization", name: "BINA+ Reka & Bina", logo: { "@type": "ImageObject", url: `${SITE}/BINA LOGO 1.png` } },
        mainEntityOfPage: `${SITE}/ms/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Utama", item: SITE + "/ms" },
          { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/ms/blog" },
          { "@type": "ListItem", position: 3, name: post.title.ms, item: `${SITE}/ms/blog/${slug}` },
        ],
      },
      ...(post.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.q.ms,
                acceptedAnswer: { "@type": "Answer", text: f.a.ms },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LangSetter locale="ms" />
      <a href="#main" className="skip">Langkau ke kandungan</a>
      <Header locale="ms" current="blog" altHref={`/blog/${slug}`} selfHref={`/ms/blog/${slug}`} />
      <main id="main">
        <BlogArticle post={post} locale="ms" />
      </main>
      <Footer locale="ms" />
    </>
  );
}
