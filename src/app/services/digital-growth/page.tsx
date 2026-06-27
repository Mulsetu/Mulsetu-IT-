import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Digital Growth & SEO Services",
  description:
    "SEO strategy, performance optimisation, analytics setup, and lead generation systems that compound. We turn your digital presence into a consistent growth engine.",
  keywords: ["SEO services", "digital growth", "search engine optimisation", "lead generation", "website performance", "analytics setup", "digital marketing"],
  alternates: { canonical: "https://mulsetu.com/services/digital-growth" },
  openGraph: {
    title: "Digital Growth & SEO — Mulsetu",
    description:
      "SEO, analytics, performance and lead generation — building a digital presence that grows your business on autopilot.",
    url: "https://mulsetu.com/services/digital-growth",
  },
};

export default function Page() {
  return <Content />;
}
