import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Data Scraping & Research Services",
  description:
    "Ethical web scraping, competitive intelligence, market research automation, and data pipelines. Turn publicly available data into actionable business insights.",
  keywords: ["web scraping", "data scraping", "market research", "competitive intelligence", "data pipeline", "business intelligence", "data extraction"],
  alternates: { canonical: "https://mulsetu.com/services/data-scraping" },
  openGraph: {
    title: "Data Scraping & Research — Mulsetu",
    description:
      "Automated web scraping, market intelligence, and data pipelines that turn public data into business advantage.",
    url: "https://mulsetu.com/services/data-scraping",
  },
};

export default function Page() {
  return <Content />;
}
