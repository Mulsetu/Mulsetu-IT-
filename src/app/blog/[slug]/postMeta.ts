export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  readTime: string;
  tags: string[];
  cover: string;
  keywords: string[];
};

export const postMeta: Record<string, PostMeta> = {
  "ai-automation-saves-time": {
    title: "How AI Automation Is Saving Businesses 20+ Hours Per Week",
    excerpt:
      "Repetitive tasks are quietly draining your team's capacity. Here's how modern AI tools are giving those hours back — permanently.",
    date: "June 10, 2026",
    isoDate: "2026-06-10",
    readTime: "5 min read",
    tags: ["AI", "Automation", "Productivity"],
    cover:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "AI automation",
      "business automation",
      "save time with AI",
      "AI chatbot",
      "workflow automation",
      "email automation",
      "AI agents for business",
    ],
  },
  "saas-vs-custom-software": {
    title: "SaaS Platform vs. Custom Software: What Growing Businesses Actually Need",
    excerpt:
      "Off-the-shelf SaaS can only take you so far. Learn when custom-built platforms become your competitive moat.",
    date: "May 22, 2026",
    isoDate: "2026-05-22",
    readTime: "6 min read",
    tags: ["SaaS", "Software", "Strategy"],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "SaaS vs custom software",
      "custom software development",
      "when to build custom software",
      "SaaS platform development",
      "business software decision",
      "multi-tenant SaaS",
    ],
  },
  "cost-of-digital-delay": {
    title: "The Real Cost of Delaying Your Digital Transformation",
    excerpt:
      "Every month you operate on manual processes is a month your competitors gain ground. Here's what the delay is really costing you.",
    date: "April 15, 2026",
    isoDate: "2026-04-15",
    readTime: "7 min read",
    tags: ["Digital Transformation", "ROI", "Operations"],
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "digital transformation",
      "cost of digital delay",
      "business digitisation",
      "digital transformation ROI",
      "business automation benefits",
      "manual process costs",
    ],
  },
  "tech-stack-guide-founders": {
    title: "Building Your First Tech Stack: A Non-Technical Founder's Guide",
    excerpt:
      "Frontend, backend, cloud, APIs — the jargon is endless. This plain-English guide walks you through what your business actually needs.",
    date: "March 28, 2026",
    isoDate: "2026-03-28",
    readTime: "8 min read",
    tags: ["Tech Stack", "Startups", "Guide"],
    cover:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "tech stack for startups",
      "non-technical founder guide",
      "how to choose tech stack",
      "web development stack",
      "cloud infrastructure basics",
      "startup technology decisions",
    ],
  },
};
