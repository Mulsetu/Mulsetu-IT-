import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Dedicated IT Team Model",
  description:
    "Get a full technology team — senior developers, UI/UX designers, AI engineers, SEO specialists, and DevOps — without the overhead of hiring. One team. One contact. Full accountability.",
  keywords: [
    "dedicated IT team",
    "outsourced IT team",
    "tech team as a service",
    "software development team",
    "managed IT services",
    "technology partner",
    "hire software developers",
    "remote development team",
    "offshore IT team",
    "fractional CTO",
  ],
  alternates: { canonical: "https://mulsetu.com/dedicated-it-team" },
  openGraph: {
    title: "Dedicated IT Team — Mulsetu",
    description:
      "Your complete in-house technology team without the hiring cost. Senior dev, design, AI, SEO, DevOps — one team, one bill.",
    url: "https://mulsetu.com/dedicated-it-team",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a dedicated IT team model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dedicated IT team model means you get a full technology team — developers, designers, AI engineers, DevOps, and SEO specialists — working exclusively on your projects on a monthly retainer. Unlike project-based outsourcing, the team functions as your in-house IT department without the cost of full-time employment.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a dedicated IT team from Mulsetu cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full Mulsetu dedicated IT team (senior developer, UI/UX designer, AI engineer, SEO specialist, DevOps, and project manager) costs $460,000–$780,000 per year — compared to $1M+ for equivalent in-house hires in Western markets. Individual role costs range from $45,000 to $180,000 per year depending on the role.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire just one or two roles from Mulsetu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can engage Mulsetu for individual roles — a single senior developer, a UI/UX designer, or an AI engineer — or build a complete team over time. The model scales with your needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mulsetu works with international clients including those based in the United States, United Kingdom, Canada, Australia, UAE, and Europe. All communication is in English and engagements are structured for remote collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Mulsetu and a freelancer or traditional agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelancers work on individual tasks with no accountability for the whole system. Traditional agencies hand off projects and move on. Mulsetu works as a long-term embedded partner — owning your technology end-to-end, proactively improving it, and staying accountable for outcomes, not just deliverables.",
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
