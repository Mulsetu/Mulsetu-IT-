"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type BlogPost = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  cover: string;
  content: React.ReactNode;
};

const posts: Record<string, BlogPost> = {
  "ai-automation-saves-time": {
    title: "How AI Automation Is Saving Businesses 20+ Hours Per Week",
    excerpt:
      "Repetitive tasks are quietly draining your team's capacity. Here's how modern AI tools are giving those hours back.",
    tags: ["AI", "Automation", "Productivity"],
    date: "June 10, 2026",
    readTime: "5 min read",
    cover:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    content: (
      <div className="prose-content">
        <p className="lead">
          Time is the one resource you cannot buy more of — yet most businesses unknowingly hemorrhage it every single day. Data entry, email responses, appointment scheduling, report generation, follow-up messages: these tasks feel small in isolation, but together they consume dozens of hours per week across your team. AI automation is changing that equation permanently.
        </p>

        <h2>What &quot;AI Automation&quot; Actually Means in Practice</h2>
        <p>
          AI automation isn&apos;t a single tool — it&apos;s a category of solutions that use artificial intelligence to handle work that would otherwise require human attention. For a growing business, this includes:
        </p>
        <ul>
          <li><strong>AI chatbots</strong> that handle customer enquiries on your website 24/7, qualifying leads and answering FAQs without a human agent.</li>
          <li><strong>Email automation systems</strong> that read incoming emails, classify them by intent, and trigger the right response or workflow automatically.</li>
          <li><strong>Intelligent document processing</strong> that extracts data from invoices, forms, and contracts — no manual typing required.</li>
          <li><strong>AI agents</strong> that can browse the web, compile reports, send follow-ups, and schedule meetings autonomously.</li>
          <li><strong>Workflow orchestration</strong> that connects your CRM, ERP, email, and messaging tools so data flows without anyone copying it manually.</li>
        </ul>

        <h2>The Five Areas Where Businesses Save the Most Time</h2>

        <h3>1. Customer Support &amp; Lead Qualification</h3>
        <p>
          A well-trained AI chatbot handles 60–80% of inbound questions without human involvement — product queries, pricing requests, booking confirmations, order status checks. The 20% that genuinely need a human get routed correctly the first time. Businesses using this approach report saving 15–25 hours per week on support alone.
        </p>

        <h3>2. Email &amp; Communication Workflows</h3>
        <p>
          AI-powered email tools can draft responses, sort inboxes by priority, send follow-up sequences based on customer behaviour, and flag urgent messages for human attention. A sales team of five people often reclaims two to three hours per person per day.
        </p>

        <h3>3. Data Entry &amp; Report Generation</h3>
        <p>
          Manual data entry is the silent productivity killer. AI can read forms, extract values, populate spreadsheets, and generate weekly or monthly reports in seconds. What took a team member three hours every Friday now runs automatically every Sunday night.
        </p>

        <h3>4. Scheduling &amp; Appointment Management</h3>
        <p>
          AI scheduling tools let clients book, reschedule, and confirm appointments without any back-and-forth emails. When integrated with your calendar, CRM, and notification systems, the entire flow becomes hands-free.
        </p>

        <h3>5. Inventory &amp; Operations Alerts</h3>
        <p>
          AI monitoring tools watch stock levels, flag anomalies in operations data, and send proactive alerts before problems escalate. Instead of manually reviewing dashboards, your team only acts when action is needed.
        </p>

        <h2>The Compounding Effect</h2>
        <p>
          Here&apos;s what most businesses underestimate: automation compounds. When your team spends less time on repetitive work, they spend more time on strategy, customer relationships, and revenue-generating activities. A business that automates well in year one doesn&apos;t just save 20 hours a week — it creates the capacity to grow without proportionally growing headcount.
        </p>

        <h2>How to Start: A Three-Step Approach</h2>
        <ol>
          <li><strong>Audit your repetitive tasks.</strong> List every task your team does more than three times per week. These are your automation candidates.</li>
          <li><strong>Prioritise by time and impact.</strong> Start with the tasks that take the most time or block the most critical workflows.</li>
          <li><strong>Build incrementally.</strong> One well-built automation delivers more value than five half-finished ones. Work with a team that understands both your business and the technology.</li>
        </ol>

        <h2>Where Mulsetu Fits In</h2>
        <p>
          At Mulsetu, we don&apos;t sell off-the-shelf tools. We analyse your specific workflows, identify the highest-value automation opportunities, and build or configure the right solution for your context — whether that&apos;s an AI chatbot, an email automation system, an AI agent, or a full workflow orchestration layer. Then we maintain it as your business grows.
        </p>
        <p>
          If you&apos;re curious about where AI automation could make the biggest difference in your operations, book a free 30-minute strategy call. We&apos;ll map it out with you — no commitment, no jargon.
        </p>
      </div>
    ),
  },

  "saas-vs-custom-software": {
    title: "SaaS Platform vs. Custom Software: What Growing Businesses Actually Need",
    excerpt:
      "Off-the-shelf SaaS can only take you so far. Learn when custom-built platforms become your competitive moat.",
    tags: ["SaaS", "Software", "Strategy"],
    date: "May 22, 2026",
    readTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: (
      <div className="prose-content">
        <p className="lead">
          Every growing business reaches a point where its tools stop growing with it. The spreadsheets become unmanageable. The off-the-shelf SaaS products don&apos;t talk to each other. The workflows are workarounds for workarounds. At this point, the question shifts from &quot;which tool should we use?&quot; to &quot;should we build our own?&quot;
        </p>

        <h2>The Case for Off-the-Shelf SaaS</h2>
        <p>
          Subscription SaaS products are fast to deploy, relatively affordable at small scale, and require no engineering investment. For a business in its early stages — validating a model, testing a market — tools like HubSpot, Notion, QuickBooks, or industry-specific platforms are the right starting point. They handle standard workflows well.
        </p>
        <p>
          The problems emerge when:
        </p>
        <ul>
          <li>Your workflow doesn&apos;t match the tool&apos;s assumptions</li>
          <li>You&apos;re paying for ten features but only need two</li>
          <li>Integrating three different tools creates data silos and manual bridging</li>
          <li>Your growth introduces edge cases the tool wasn&apos;t designed for</li>
          <li>Your data lives in someone else&apos;s system, on their terms</li>
        </ul>

        <h2>When Custom Software Becomes the Right Answer</h2>
        <p>
          Custom software — whether that&apos;s a bespoke web application, a proprietary SaaS platform, or a custom ERP — becomes the right answer when your competitive advantage depends on a workflow, process, or data model that generic tools cannot replicate.
        </p>
        <p>
          Signs you&apos;ve crossed that threshold:
        </p>
        <ul>
          <li>You&apos;re duct-taping multiple tools together with Zapier or manual exports</li>
          <li>Your operations team spends hours every week reconciling data between systems</li>
          <li>You need multi-role access with different views and permissions</li>
          <li>Clients or partners need their own portal or dashboard</li>
          <li>You want to offer your workflow to others as a product (i.e., become a SaaS company)</li>
        </ul>

        <h2>What a Modern Custom SaaS Platform Looks Like</h2>
        <p>
          Today&apos;s custom SaaS platforms are not monolithic, expensive legacy systems. Built with modern frameworks like Next.js, Node.js, or Python — deployed on scalable cloud infrastructure — they can be:
        </p>
        <ul>
          <li><strong>Multi-tenant:</strong> Multiple clients or companies share one platform with isolated data</li>
          <li><strong>Multi-role:</strong> Different dashboards for different user types (admin, client, partner, manager)</li>
          <li><strong>Subscription-ready:</strong> Built-in billing, plan management, and usage tracking</li>
          <li><strong>Analytics-native:</strong> Real-time data visualisation baked into the product, not bolted on</li>
          <li><strong>API-first:</strong> Connects to any third-party tool or data source you need</li>
        </ul>

        <h2>A Real Example: TrackMyStartup</h2>
        <p>
          We built TrackMyStartup — a SaaS platform for the startup ecosystem — with seven distinct role-based dashboards: Startup, Investor, Investment Advisor, Incubation Center, CA, CS, and Mentors. Each role has a completely tailored experience. The platform is now live in 30+ countries.
        </p>
        <p>
          No generic SaaS product could have delivered this. The only path was a purpose-built platform designed around the exact workflows of each user type.
        </p>

        <h2>How to Decide</h2>
        <p>
          Ask yourself three questions:
        </p>
        <ol>
          <li>Is my core workflow genuinely different from what off-the-shelf tools handle?</li>
          <li>Is this tool a cost centre (internal efficiency) or a revenue driver (client-facing product)?</li>
          <li>Am I spending more on workarounds, integrations, and manual bridging than a custom build would cost?</li>
        </ol>
        <p>
          If the answer to any of these is yes, you&apos;re likely a custom software candidate. The right technology partner will walk you through a proper discovery process before recommending any approach.
        </p>
      </div>
    ),
  },

  "cost-of-digital-delay": {
    title: "The Real Cost of Delaying Your Digital Transformation",
    excerpt:
      "Every month you operate on manual processes is a month your competitors gain ground. Here's what the delay is really costing you.",
    tags: ["Digital Transformation", "ROI", "Operations"],
    date: "April 15, 2026",
    readTime: "7 min read",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: (
      <div className="prose-content">
        <p className="lead">
          &quot;We&apos;ll deal with it next quarter.&quot; &quot;We&apos;re not big enough yet for that.&quot; &quot;It&apos;s working well enough for now.&quot; These are the phrases that quietly compound into years of lost efficiency, missed growth, and increasing operational fragility. The cost of digital delay is real — and it&apos;s rarely visible until it&apos;s significant.
        </p>

        <h2>What &quot;Digital Transformation&quot; Actually Means</h2>
        <p>
          For most businesses, digital transformation doesn&apos;t mean replacing everything overnight. It means replacing the manual, error-prone, and time-consuming steps in your operations with software and automation that are faster, more reliable, and easier to scale.
        </p>
        <p>
          It might look like:
        </p>
        <ul>
          <li>Replacing a spreadsheet-based inventory system with a real-time software dashboard</li>
          <li>Moving from manual processes to a structured CRM for customer management</li>
          <li>Automating your billing and invoicing instead of generating PDFs manually</li>
          <li>Building a client portal so customers can track their orders or requests without calling you</li>
        </ul>

        <h2>The Hidden Costs You&apos;re Already Paying</h2>

        <h3>Time Cost</h3>
        <p>
          Every hour your team spends on manual data entry, copy-pasting between tools, generating reports by hand, or answering repetitive customer questions is an hour not spent on growth. For a team of ten people, even two hours per person per day of avoidable manual work equals 5,200 hours per year — roughly three full-time employees — doing work that technology could handle.
        </p>

        <h3>Error Cost</h3>
        <p>
          Manual processes introduce errors. A wrong invoice amount, a missed follow-up, a data entry mistake — each one has a cost, whether measured in client trust, refunds, legal exposure, or rework time. Software systems with proper validation eliminate entire categories of error.
        </p>

        <h3>Scale Ceiling</h3>
        <p>
          Manual operations have an invisible ceiling. You can grow up to a point — and then adding more customers requires adding proportionally more headcount. Businesses that digitise early break this relationship. They scale revenue without scaling costs at the same rate.
        </p>

        <h3>Competitive Gap</h3>
        <p>
          While you&apos;re managing operations manually, competitors who have digitised are responding faster, serving clients better, and gathering data that improves their decisions. This gap compounds quarterly, not linearly.
        </p>

        <h2>Why Businesses Delay (And Why Those Reasons Don&apos;t Hold)</h2>

        <h3>&quot;We&apos;re too small for software.&quot;</h3>
        <p>
          There is no minimum size for benefiting from automation. A ten-person business with an AI chatbot and a simple CRM outperforms a thirty-person team operating manually — because their people spend their time on higher-value work.
        </p>

        <h3>&quot;It&apos;s too expensive.&quot;</h3>
        <p>
          The cost of good software almost always pays for itself within 6–18 months through time savings, error reduction, and growth capacity. The question is not whether you can afford to digitise — it&apos;s whether you can afford not to.
        </p>

        <h3>&quot;We don&apos;t know where to start.&quot;</h3>
        <p>
          This is the most honest answer — and the most solvable. A good technology partner doesn&apos;t start by selling you a solution. They start by understanding your operations, identifying the highest-impact starting point, and building a phased roadmap you can actually execute.
        </p>

        <h2>Where to Start: The One-Thing Rule</h2>
        <p>
          Don&apos;t try to transform everything at once. Pick the one manual process that costs your team the most time or creates the most friction for your clients. Fix that. Measure the impact. Then move to the next. This approach delivers fast wins that build internal confidence and fund the next phase of transformation.
        </p>

        <h2>The Compounding Advantage of Starting Now</h2>
        <p>
          Businesses that start their digital journey this year will have 12 months of operational learning, data, and efficiency gains by next year. That&apos;s a compounding advantage — not a one-time improvement. The best time to start was last year. The second-best time is today.
        </p>
      </div>
    ),
  },

  "tech-stack-guide-founders": {
    title: "Building Your First Tech Stack: A Non-Technical Founder's Guide",
    excerpt:
      "Frontend, backend, cloud, APIs — the jargon is endless. This plain-English guide walks you through what your business actually needs.",
    tags: ["Tech Stack", "Startups", "Guide"],
    date: "March 28, 2026",
    readTime: "8 min read",
    cover:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    content: (
      <div className="prose-content">
        <p className="lead">
          If you&apos;re a founder or business leader who isn&apos;t technical, conversations about technology can feel like someone switched the language halfway through. Frontend, backend, microservices, REST APIs, cloud-native, serverless — the jargon is relentless. But the concepts underneath it are straightforward. This guide is for you.
        </p>

        <h2>What Is a Tech Stack?</h2>
        <p>
          A tech stack is simply the combination of technologies — programming languages, frameworks, databases, and infrastructure — that your software product or business system runs on. Think of it like the materials and tools used to construct a building: each choice affects cost, flexibility, performance, and how easy it is to change later.
        </p>

        <h2>The Three Core Layers</h2>

        <h3>1. The Frontend (What Users See)</h3>
        <p>
          The frontend is everything your users interact with — the buttons, screens, dashboards, and forms. It runs in the browser or on a mobile device. Common technologies include React, Next.js (for websites and web apps), and Flutter (for mobile apps). A well-built frontend should be fast, responsive, and intuitive.
        </p>

        <h3>2. The Backend (Where the Logic Lives)</h3>
        <p>
          The backend is the engine behind the scenes — it processes requests, enforces business rules, manages users, and communicates with the database. Technologies like Node.js, Python (Django/FastAPI), and Ruby on Rails are common choices. The backend is where your product&apos;s intelligence and logic live.
        </p>

        <h3>3. The Database (Where Data Is Stored)</h3>
        <p>
          Your database stores all the information your system needs — user accounts, transaction records, content, configurations. The choice between structured (PostgreSQL, MySQL) and flexible (MongoDB) databases depends on the nature of your data and how it&apos;s queried.
        </p>

        <h2>What Goes On Top: Cloud Infrastructure</h2>
        <p>
          Your entire stack needs to run somewhere. That &quot;somewhere&quot; is cloud infrastructure — typically AWS, Google Cloud, or Microsoft Azure. Rather than owning servers, you rent computing capacity on demand. This gives you the ability to scale up when traffic spikes and scale down when it doesn&apos;t.
        </p>
        <p>
          Modern deployments use services like Vercel (for frontend), Railway or Render (for backends), and managed databases to simplify this dramatically. You don&apos;t need a dedicated DevOps team for most business software — you need the right setup.
        </p>

        <h2>Five Questions to Ask Before Building Anything</h2>
        <ol>
          <li><strong>Who are the users, and what devices do they use?</strong> Mobile users need a different approach than desktop-first enterprise users.</li>
          <li><strong>How many users do you expect in year one vs. year three?</strong> Scale decisions made early are expensive to undo later.</li>
          <li><strong>Does the system need to integrate with existing tools?</strong> APIs, webhooks, and third-party connections need to be planned, not retrofitted.</li>
          <li><strong>What data do you need to capture and analyse?</strong> The right data model from day one saves enormous rework later.</li>
          <li><strong>What happens if it goes down?</strong> Uptime requirements determine infrastructure redundancy and backup strategy.</li>
        </ol>

        <h2>Common Mistakes Non-Technical Founders Make</h2>

        <h3>Over-engineering from day one</h3>
        <p>
          You don&apos;t need microservices, Kubernetes, and a multi-region deployment for your first version. Start simple. Add complexity when the business justifies it.
        </p>

        <h3>Choosing based on hype, not fit</h3>
        <p>
          The technology that&apos;s trending in Silicon Valley may not be the right choice for your team&apos;s experience level, your timeline, or your budget. Boring, proven technologies are often the best choice.
        </p>

        <h3>Ignoring security from the start</h3>
        <p>
          Authentication, data encryption, input validation, and access controls are not features you add later — they are foundations you build from. A security vulnerability in production is significantly more expensive than doing it right initially.
        </p>

        <h3>Building what you should buy</h3>
        <p>
          Payment processing, email delivery, SMS, PDF generation — these are solved problems with excellent third-party services. Don&apos;t build them. Focus your engineering budget on your unique value proposition.
        </p>

        <h2>Working With a Technology Partner</h2>
        <p>
          The right technology partner doesn&apos;t just take your feature list and start coding. They ask the questions above. They challenge assumptions. They recommend what to build, what to buy, and what to defer — and they give you a phased roadmap you can afford to execute.
        </p>
        <p>
          At Mulsetu, our first engagement with every client is a discovery and analysis process — not a quote. We want to understand your business deeply before recommending any technology. If you&apos;re starting to think about your first build or your next platform, that conversation is a good place to start.
        </p>
      </div>
    ),
  },
};

const relatedPosts = [
  {
    slug: "ai-automation-saves-time",
    title: "How AI Automation Is Saving Businesses 20+ Hours Per Week",
    tags: ["AI", "Automation"],
    readTime: "5 min read",
  },
  {
    slug: "saas-vs-custom-software",
    title: "SaaS Platform vs. Custom Software: What Growing Businesses Actually Need",
    tags: ["SaaS", "Strategy"],
    readTime: "6 min read",
  },
  {
    slug: "cost-of-digital-delay",
    title: "The Real Cost of Delaying Your Digital Transformation",
    tags: ["Digital Transformation", "ROI"],
    readTime: "7 min read",
  },
  {
    slug: "tech-stack-guide-founders",
    title: "Building Your First Tech Stack: A Non-Technical Founder's Guide",
    tags: ["Tech Stack", "Guide"],
    readTime: "8 min read",
  },
];

export default function Content({ slug }: { slug: string }) {
  const post = posts[slug];
  if (!post) return null;

  const related = relatedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-deep pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8">
              &larr; Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted/60 mb-10">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <Reveal>
          <div className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent" />
          </div>
        </Reveal>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <Reveal>
          <style>{`
            .prose-content { color: #a8b3c5; line-height: 1.8; }
            .prose-content .lead { font-size: 1.15rem; color: #c5d0de; margin-bottom: 2rem; line-height: 1.75; }
            .prose-content h2 { font-family: var(--font-syne), sans-serif; font-weight: 700; font-size: 1.6rem; color: #fff; margin-top: 2.5rem; margin-bottom: 1rem; }
            .prose-content h3 { font-family: var(--font-syne), sans-serif; font-weight: 600; font-size: 1.15rem; color: #e2e8f0; margin-top: 1.75rem; margin-bottom: 0.6rem; }
            .prose-content p { margin-bottom: 1.25rem; }
            .prose-content ul, .prose-content ol { margin: 1rem 0 1.5rem 1.5rem; }
            .prose-content li { margin-bottom: 0.5rem; }
            .prose-content ul li { list-style-type: disc; }
            .prose-content ol li { list-style-type: decimal; }
            .prose-content strong { color: #e2e8f0; }
          `}</style>
          {post.content}
        </Reveal>

        {/* CTA card */}
        <Reveal delay={0.2}>
          <div className="mt-16 glass-card rounded-2xl p-8 border-teal/20 bg-gradient-to-br from-teal/8 to-transparent text-center">
            <h3 className="font-display font-bold text-2xl mb-3">
              Ready to Put This Into Action?
            </h3>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Book a free 30-minute strategy call with our team. We&apos;ll map out exactly where technology can make the biggest impact for your business.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3.5 rounded-xl inline-flex items-center gap-2 font-semibold">
              Book Free Consultation &rarr;
            </Link>
          </div>
        </Reveal>
      </article>

      {/* Related posts */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-10">
              More <span className="gradient-text">Articles</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.07}>
                <Link href={`/blog/${r.slug}`} className="group block">
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {r.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-semibold text-sm leading-snug mb-3 group-hover:text-teal-bright transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted/60">{r.readTime}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
