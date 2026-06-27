import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "AI & Automation Services",
  description:
    "Build AI chatbots, email automation workflows, and intelligent agents that handle your repetitive operations 24/7. Enterprise-grade AI automation for growing businesses worldwide.",
  keywords: [
    "AI automation services",
    "chatbot development",
    "email automation",
    "AI agents",
    "workflow automation",
    "business process automation",
    "AI for business",
    "intelligent automation",
    "LLM integration",
    "GPT chatbot development",
  ],
  alternates: { canonical: "https://mulsetu.com/services/ai-automation" },
  openGraph: {
    title: "AI & Automation Services — Mulsetu",
    description:
      "Chatbots, email automation, AI agents, and workflow automation that run 24/7 so your team can focus on growth.",
    url: "https://mulsetu.com/services/ai-automation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI automation services does Mulsetu offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mulsetu builds AI chatbots, intelligent email automation, document processing systems, AI agents, and full workflow orchestration. We integrate with GPT-4o, Claude AI, LangChain, and tools like Zapier, Make, and n8n to automate repetitive business operations.",
      },
    },
    {
      "@type": "Question",
      name: "How much time can AI automation save my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses typically save 20–40 hours per week after implementing AI automation. Customer support chatbots handle 60–80% of inbound queries without human involvement. Email automation and document processing eliminate hours of manual data entry daily.",
      },
    },
    {
      "@type": "Question",
      name: "Can Mulsetu integrate AI with my existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build AI solutions that integrate with your existing CRM, ERP, email, databases, and third-party tools via APIs and webhooks. Our approach is to automate within your current stack rather than replace it.",
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
