import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogArticle from "@/components/BlogArticle";
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
  if (!post) return { title: "Article not found — BINA+" };
  return {
    title: `${post.title.en} | BINA+ Design & Build`,
    description: post.metaDescription.en,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: { "en-MY": `/blog/${slug}`, "ms-MY": `/ms/blog/${slug}` },
    },
    openGraph: {
      type: "article",
      title: post.title.en,
      description: post.metaDescription.en,
      url: `/blog/${slug}`,
      images: [post.hero],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostEn({
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
        headline: post.title.en,
        description: post.metaDescription.en,
        image: post.hero,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: "BINA+ Design & Build" },
        publisher: { "@type": "Organization", name: "BINA+ Design & Build", logo: { "@type": "ImageObject", url: `${SITE}/BINA LOGO 1.png` } },
        mainEntityOfPage: `${SITE}/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blog" },
          { "@type": "ListItem", position: 3, name: post.title.en, item: `${SITE}/blog/${slug}` },
        ],
      },
      ...(post.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.q.en,
                acceptedAnswer: { "@type": "Answer", text: f.a.en },
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
      <a href="#main" className="skip">Skip to content</a>
      <Header locale="en" current="blog" altHref={`/ms/blog/${slug}`} selfHref={`/blog/${slug}`} />
      <main id="main">
        <BlogArticle post={post} locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
