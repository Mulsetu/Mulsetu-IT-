import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our transparent 6-step technology partnership process — from discovery and research to development, deployment, and ongoing IT support. No surprises, just results.",
  keywords: ["software development process", "technology partnership", "IT team process", "agile development", "discovery to deployment", "how we work"],
  alternates: { canonical: "https://mulsetu.com/process" },
  openGraph: {
    title: "How We Work — Mulsetu's 6-Step Process",
    description:
      "Discovery, research, roadmap, development, deployment, support. See exactly how Mulsetu partners with businesses to deliver technology that works.",
    url: "https://mulsetu.com/process",
  },
};

export default function Page() {
  return <Content />;
}
