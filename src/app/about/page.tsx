import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mulsetu — a dedicated technology and AI team working as your in-house IT department. We build software, automate operations, and partner with businesses long-term worldwide.",
  keywords: ["about Mulsetu", "technology company", "dedicated IT team", "software development team", "AI partner", "technology partner worldwide", "outsourced tech team"],
  alternates: { canonical: "https://mulsetu.com/about" },
  openGraph: {
    title: "About Mulsetu — Your Dedicated Technology Partner",
    description:
      "We work like your in-house IT team — without the overhead. Learn how Mulsetu helps businesses worldwide build software, automate, and grow with technology.",
    url: "https://mulsetu.com/about",
  },
};

export default function Page() {
  return <Content />;
}
