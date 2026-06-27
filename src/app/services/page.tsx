import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "AI automation, website development, SaaS platforms, custom software & ERP, mobile apps, digital growth, and data scraping — all from one dedicated technology team.",
  keywords: ["technology services", "software development services", "AI automation services", "SaaS development", "mobile app development", "website development company", "digital transformation services"],
  alternates: { canonical: "https://mulsetu.com/services" },
  openGraph: {
    title: "Services — Mulsetu",
    description:
      "End-to-end technology services: AI, SaaS, software, web, mobile, SEO, and data. One team, full accountability.",
    url: "https://mulsetu.com/services",
  },
};

export default function Page() {
  return <Content />;
}
