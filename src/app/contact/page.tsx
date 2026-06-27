import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute strategy session with Mulsetu. We'll understand your business needs and show you exactly how technology can help you grow — no obligation, no pressure.",
  keywords: ["contact Mulsetu", "book free consultation", "technology strategy session", "hire software team", "technology partner contact", "IT team consultation"],
  alternates: { canonical: "https://mulsetu.com/contact" },
  openGraph: {
    title: "Contact Mulsetu — Book a Free Strategy Session",
    description:
      "Get a free 30-minute technology roadmap session. Tell us what you're building and we'll tell you exactly how to build it right.",
    url: "https://mulsetu.com/contact",
  },
};

export default function Page() {
  return <Content />;
}
