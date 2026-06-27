import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Technology and AI solutions for agriculture, manufacturing, education, healthcare, retail, real estate, logistics, startups, and professional services — built by Mulsetu.",
  keywords: ["industry software solutions", "sector technology", "agriculture software", "healthcare software", "education technology", "retail technology", "startup software", "logistics software"],
  alternates: { canonical: "https://mulsetu.com/industries" },
  openGraph: {
    title: "Industries We Serve — Mulsetu",
    description:
      "Sector-specific software, automation, and digital transformation for businesses across 9 industries worldwide.",
    url: "https://mulsetu.com/industries",
  },
};

export default function Page() {
  return <Content />;
}
