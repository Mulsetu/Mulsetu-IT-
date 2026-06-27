import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Custom Software & ERP Development",
  description:
    "Custom ERP systems, billing software, inventory management, CRM, HR systems, and workflow automation tailored precisely to your business operations.",
  keywords: ["custom software development", "ERP development", "custom ERP", "CRM development", "billing software", "inventory management system", "business software"],
  alternates: { canonical: "https://mulsetu.com/services/custom-software" },
  openGraph: {
    title: "Custom Software & ERP — Mulsetu",
    description:
      "ERP, billing, inventory, CRM, and HR systems built to fit your workflow — not the other way around.",
    url: "https://mulsetu.com/services/custom-software",
  },
};

export default function Page() {
  return <Content />;
}
