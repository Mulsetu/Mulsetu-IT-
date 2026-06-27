import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { postMeta } from "./postMeta";
import Content from "./Content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(postMeta).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = postMeta[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://mulsetu.com/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mulsetu.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.isoDate,
      tags: post.tags,
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default function Page({ params }: Props) {
  const post = postMeta[params.slug];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    keywords: post.keywords.join(", "),
    url: `https://mulsetu.com/blog/${params.slug}`,
    author: {
      "@type": "Organization",
      name: "Mulsetu",
      url: "https://mulsetu.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Mulsetu",
      url: "https://mulsetu.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mulsetu.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mulsetu.com/blog/${params.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Content slug={params.slug} />
    </>
  );
}
