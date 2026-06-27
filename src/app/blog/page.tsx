import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical articles on AI automation, SaaS development, digital transformation, and technology strategy for growing businesses — written by practitioners, not theorists.",
  alternates: { canonical: "https://mulsetu.com/blog" },
  openGraph: {
    title: "Mulsetu Blog — AI, Automation & Tech for Business",
    description:
      "Actionable insights on AI, SaaS, digital transformation, and building technology that actually moves the needle for growing businesses.",
    url: "https://mulsetu.com/blog",
  },
};

export default function Page() {
  return <Content />;
}
