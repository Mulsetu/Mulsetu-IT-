import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Partner with Mulsetu — Earn Commission on Every Referral",
  description:
    "Join the Mulsetu Partner Program. Refer clients, we deliver world-class technology, you earn a competitive commission on every closed deal. Formal MOU. Open to agencies, consultants, and organisations worldwide.",
  keywords: [
    "Mulsetu partner program",
    "technology referral partner",
    "IT reseller partner",
    "earn commission technology",
    "agency partner program",
    "software referral program",
    "technology partnership",
  ],
  alternates: { canonical: "https://mulsetu.com/partners" },
  openGraph: {
    title: "Partner with Mulsetu — Earn on Every Deal You Refer",
    description:
      "Refer clients to Mulsetu, we deliver world-class technology, you earn a competitive commission. Formal MOU. No tech work needed. Open to organisations worldwide.",
    url: "https://mulsetu.com/partners",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the Mulsetu partner commission work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you refer a client to Mulsetu and the deal closes, you earn a commission on the total project value. The exact commission rate and payment schedule are defined in the Memorandum of Understanding (MOU) signed before you begin referring clients. We keep the structure transparent and competitive.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a fee to become a Mulsetu partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Becoming a Mulsetu partner is completely free. There are no setup fees, monthly fees, or minimum referral requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can I become a partner from any country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Mulsetu Partner Program is open to organisations and individuals worldwide. We currently have partners across Asia, the Middle East, Europe, North America, and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to do as a partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your role is simply to identify potential clients who need technology services and make the introduction to Mulsetu. We handle the entire sales process, technical delivery, and client management. You earn commission without doing any technical work.",
      },
    },
    {
      "@type": "Question",
      name: "What support does Mulsetu provide to partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partners receive a dedicated partner manager, co-branded marketing materials, pitch decks, case studies, and technical support for client conversations. We make it easy for you to represent Mulsetu confidently.",
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
