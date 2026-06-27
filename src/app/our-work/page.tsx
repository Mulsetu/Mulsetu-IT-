import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Software platforms, SaaS products, and digital systems built by Mulsetu. See the technology we've shipped for founders and businesses in 30+ countries worldwide.",
  keywords: ["Mulsetu portfolio", "software we built", "SaaS platform example", "TrackMyStartup", "custom software case study", "technology partner results"],
  alternates: { canonical: "https://mulsetu.com/our-work" },
  openGraph: {
    title: "Our Work — Platforms & Software Built by Mulsetu",
    description:
      "From multi-role SaaS platforms to custom ERPs — see what we've shipped and how we've worked as an in-house team for our partners.",
    url: "https://mulsetu.com/our-work",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody:
    "Best team I have worked with. Quality of work is outstanding and the team works as my own IT team.",
  author: {
    "@type": "Person",
    name: "Dr. Saeel Momin",
    jobTitle: "Founder, TrackMyStartup",
  },
  itemReviewed: {
    "@type": "Organization",
    name: "Mulsetu",
    url: "https://mulsetu.com",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Content />
    </>
  );
}
