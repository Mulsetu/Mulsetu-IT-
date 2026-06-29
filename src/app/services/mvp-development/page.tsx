import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "MVP Development for Startups",
  description:
    "Go from idea to live product in 4–8 weeks. We build lean, investor-ready MVPs for startups — fast enough to validate, solid enough to scale. No wasted time, no bloated scope.",
  keywords: [
    "MVP development",
    "startup MVP",
    "minimum viable product",
    "rapid prototyping",
    "idea to product",
    "startup software development",
    "fast MVP build",
    "lean startup development",
    "investor ready MVP",
  ],
  alternates: { canonical: "https://mulsetu.com/services/mvp-development" },
  openGraph: {
    title: "MVP Development for Startups — Mulsetu",
    description:
      "Idea to live MVP in 4–8 weeks. We build lean, investor-ready products so you can validate fast and raise with confidence.",
    url: "https://mulsetu.com/services/mvp-development",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build an MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVPs we build take 4–8 weeks from kickoff to live product. Timeline depends on scope — a web app MVP is typically 4–6 weeks, a mobile app MVP is 6–8 weeks. We always start with a scope-locking discovery session to give you a precise timeline before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in MVP development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MVP build includes product discovery, UX/UI design, full-stack development, cloud deployment, basic analytics, and a 30-day post-launch support period. We deliver a working, publicly accessible product — not a prototype or wireframe.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build an MVP for fundraising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience building MVPs specifically for investor demos and fundraising rounds. We focus on the core user journey, clean design, and real functionality — so investors see a product, not a mockup.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the MVP is built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After launch, we offer two paths: a dedicated IT team retainer where we continue building features and improving the product, or a handoff package with full codebase, documentation, and deployment guides. Most clients continue with us as their long-term technology partner.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Content />
    </>
  );
}
