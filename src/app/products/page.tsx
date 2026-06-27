import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Technology products and SaaS platforms built by Mulsetu — purpose-built tools for growing businesses worldwide.",
  keywords: ["Mulsetu products", "SaaS products", "technology tools", "business software", "startup tools", "software platform"],
  alternates: { canonical: "https://mulsetu.com/products" },
  openGraph: {
    title: "Mulsetu Products — Technology Platforms We've Built",
    description: "Mulsetu-built SaaS products and tools for growing businesses. Sign up for early access.",
    url: "https://mulsetu.com/products",
  },
};

export default function Page() {
  return <Content />;
}
