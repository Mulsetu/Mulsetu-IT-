import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "SaaS Platform Development",
  description:
    "End-to-end SaaS platform development — multi-tenant architecture, role-based dashboards, subscription billing, and analytics. From MVP to global scale.",
  keywords: ["SaaS development", "SaaS platform", "multi-tenant SaaS", "subscription software", "SaaS MVP", "dashboard development", "portal development"],
  alternates: { canonical: "https://mulsetu.com/services/saas-development" },
  openGraph: {
    title: "SaaS Platform Development — Mulsetu",
    description:
      "Custom SaaS platforms with multi-tenant architecture, role-based dashboards, billing, and analytics — built from zero to global scale.",
    url: "https://mulsetu.com/services/saas-development",
  },
};

export default function Page() {
  return <Content />;
}
