import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Website Development Services",
  description:
    "Performance-first websites built in Next.js, React, and WordPress. Corporate sites, e-commerce platforms, and landing pages engineered to convert visitors into clients.",
  keywords: ["website development", "Next.js development", "React website", "WordPress development", "e-commerce website", "corporate website", "landing page"],
  alternates: { canonical: "https://mulsetu.com/services/website-development" },
  openGraph: {
    title: "Website Development — Mulsetu",
    description:
      "Fast, conversion-optimised websites in Next.js, React, and WordPress. Built for performance and designed to grow your business.",
    url: "https://mulsetu.com/services/website-development",
  },
};

export default function Page() {
  return <Content />;
}
