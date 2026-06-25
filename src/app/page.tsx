"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TypeAnimation } from "react-type-animation";

// Load Three.js canvas client-side only
const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

// ── DATA ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "AI & Automation",
    desc: "Chatbots, WhatsApp bots, email automation and AI agents that handle your repetitive operations 24/7.",
    tags: ["AI Chatbots", "WhatsApp Bot", "Email Automation", "AI Agents"],
    href: "/services/ai-automation",
    color: "from-purple-500/10 to-teal/5",
  },
  {
    title: "Website Development",
    desc: "Performance-first websites in Next.js, React or WordPress — built to convert visitors into clients.",
    tags: ["Next.js", "Corporate", "E-Commerce", "Landing Pages"],
    href: "/services/website-development",
    color: "from-blue-500/10 to-teal/5",
  },
  {
    title: "SaaS Development",
    desc: "End-to-end SaaS platforms — multi-tenant architecture, subscription billing, analytics dashboards.",
    tags: ["Multi-tenant", "Dashboards", "Portals", "Subscriptions"],
    href: "/services/saas-development",
    color: "from-sky-500/10 to-teal/5",
  },
  {
    title: "Custom Software & ERP",
    desc: "ERP, billing, inventory, HR and CRM — software that fits your workflow, not the other way around.",
    tags: ["ERP", "Billing", "Inventory", "School ERP"],
    href: "/services/custom-software",
    color: "from-amber-500/10 to-teal/5",
  },
  {
    title: "Mobile App Development",
    desc: "Android, iOS and cross-platform Flutter apps for your customers and field teams.",
    tags: ["Android", "iOS", "Flutter", "Admin Panel"],
    href: "/services/mobile-apps",
    color: "from-green-500/10 to-teal/5",
  },
  {
    title: "Digital Growth & SEO",
    desc: "SEO strategy, performance optimization, analytics setup and lead generation systems that compound.",
    tags: ["SEO", "Performance", "Analytics", "Lead Gen"],
    href: "/services/digital-growth",
    color: "from-orange-500/10 to-teal/5",
  },
];

const problems = [
  { text: "Too much manual, repetitive work" },
  { text: "No proper software for your workflow" },
  { text: "No technical team to guide or build" },
  { text: "Website not generating leads" },
  { text: "No automation in operations" },
  { text: "Too many disconnected tools" },
  { text: "No clarity on what technology to build" },
];

const whyPoints = [
  { title: "Business Analysis", desc: "We understand your operations deeply before recommending any technology." },
  { title: "AI Consulting", desc: "We map where AI gives you the highest ROI and build exactly that." },
  { title: "Product Strategy", desc: "Roadmaps built around your goals — not feature lists or guesswork." },
  { title: "Dedicated Tech Team", desc: "One team, full accountability, zero handoff between vendors." },
  { title: "Long-Term Support", desc: "We scale with your business. Not a one-time delivery, ever." },
  { title: "End-to-End Execution", desc: "From strategy and design to deployment and maintenance — all in-house." },
];

const techStack = [
  "Next.js", "React", "Node.js", "Python", "Flutter", "TypeScript",
  "AWS", "DigitalOcean", "Cloudflare", "Vercel", "Docker",
  "OpenAI", "Claude AI", "Gemini", "LangChain",
  "PostgreSQL", "MySQL", "Supabase", "Firebase", "Redis",
  "Tailwind CSS", "Prisma", "GraphQL", "REST API",
];

const process = [
  { num: "01", title: "Discovery Meeting", desc: "We listen first — what's broken, what's manual, what's costing your business time or money." },
  { num: "02", title: "Research & Analysis", desc: "Deep-dive into your workflows, competitors and industry before recommending anything." },
  { num: "03", title: "Technology Roadmap", desc: "A clear plan: what to build, in what order, and exactly why — no jargon, just clarity." },
  { num: "04", title: "Development", desc: "Our team builds against the agreed roadmap with weekly check-ins and full visibility." },
  { num: "05", title: "Deployment", desc: "We launch, configure and train your team so adoption is immediate." },
  { num: "06", title: "Continuous IT Support", desc: "We stay on as your technology partner — improvements, maintenance and growth, ongoing." },
];

const industries = [
  "Agriculture", "Manufacturing", "Education",
  "Healthcare", "Real Estate", "Retail",
  "Logistics", "Startups", "Professional Services",
];

const itRoles = [
  { role: "Senior Developer", cost: "₹8–15L/yr" },
  { role: "UI/UX Designer", cost: "₹5–10L/yr" },
  { role: "SEO Expert", cost: "₹4–8L/yr" },
  { role: "Project Manager", cost: "₹8–12L/yr" },
  { role: "AI Engineer", cost: "₹12–20L/yr" },
  { role: "DevOps Engineer", cost: "₹10–18L/yr" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-deep">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Three.js canvas */}
        <HeroCanvas />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep/20 via-transparent to-deep pointer-events-none z-[1]" />
        <div className="absolute inset-0 hero-bg opacity-70 z-[1]" />

        {/* Content */}
        <div className="relative z-[2] max-w-5xl mx-auto px-6 text-center pt-28 pb-20">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <span className="section-tag">
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block" />
              Technology &amp; AI Partner for Growing Businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Planning to Go Digital<br />
            but Don&apos;t Know{" "}
            <span className="gradient-text text-glow">
              <TypeAnimation
                sequence={["Where to Start?", 2000, "What to Build?", 2000, "Who to Trust?", 2000]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We help businesses build software, automate operations, and manage technology —
            without the cost or complexity of hiring an entire IT department.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-semibold relative z-10">
              Book Free Consultation &rarr;
            </Link>
            <Link href="/services" className="btn-outline px-8 py-4 rounded-xl text-base font-semibold">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="inline-flex flex-wrap justify-center gap-x-12 gap-y-6 px-10 py-6 glass-card rounded-2xl"
          >
            {[
              { value: 6, suffix: "+", label: "Service Domains" },
              { value: 9, suffix: "", label: "Industries Served" },
              { value: 100, suffix: "%", label: "In-House Execution" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl gradient-text counter-num">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted/50 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-teal/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/50 to-deep" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">The Reality for Most Businesses</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Are You Facing <span className="gradient-text">These Challenges?</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Most growing businesses hit the same walls. We&apos;ve solved them all.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {problems.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.07}>
                <div className="glass-card glass-card-hover rounded-2xl p-5 cursor-default">
                  <p className="text-sm text-soft leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
            {/* Solution card */}
            <Reveal delay={0.5}>
              <div className="glass-card rounded-2xl p-5 border-teal/30 bg-gradient-to-br from-teal/10 to-transparent col-span-1 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-soft leading-relaxed font-medium">
                  Mulsetu solves all of this — under one roof, one team, one point of contact.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-10 border-teal/20 bg-gradient-to-br from-teal/8 to-transparent text-center">
              <p className="text-lg md:text-xl text-soft leading-relaxed max-w-3xl mx-auto">
                Mulsetu provides <span className="text-teal-bright font-semibold">dedicated technology support</span>, software development,
                AI automation, and digital transformation — all under one roof,
                so you never have to figure it out alone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 relative" id="services">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">What We Build</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Everything Under <span className="gradient-text">One Roof</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Six domains of deep expertise. One unified team. No gaps.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link href={s.href} className="block group">
                  <div className={`glass-card glass-card-hover rounded-2xl p-7 h-full bg-gradient-to-br ${s.color} relative overflow-hidden`}>
                    {/* Arrow */}
                    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-teal-bright text-sm translate-x-2 group-hover:translate-x-0">
                      &rarr;
                    </div>

                    <h3 className="font-display font-bold text-lg mb-3 group-hover:text-teal-bright transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="text-xs font-medium text-teal/80 bg-teal/8 border border-teal/15 rounded-md px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-outline px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
                View All Services &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DEDICATED IT TEAM ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-deep" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <span className="section-tag mb-4 inline-flex">The Smarter Way</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                  Don&apos;t Hire an Entire<br />
                  <span className="gradient-text">IT Department</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  Instead of recruiting six specialists, managing separate salaries, and
                  dealing with coordination gaps — get one unified team through Mulsetu.
                </p>
                <Link href="/dedicated-it-team" className="btn-primary px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
                  Learn How It Works &rarr;
                </Link>
              </Reveal>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 gap-4">
              {/* Traditional side */}
              <Reveal delay={0.1}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Traditional Hiring</h3>
                  <div className="space-y-2">
                    {itRoles.map((r) => (
                      <div key={r.role} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                        <span className="text-sm text-muted line-through opacity-50">{r.role}</span>
                        <span className="text-xs text-muted/40 font-mono">{r.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Mulsetu side */}
              <Reveal delay={0.2}>
                <div className="glass-card rounded-2xl p-6 border-teal/30 bg-gradient-to-br from-teal/8 to-transparent">
                  <h3 className="text-sm font-bold text-teal-bright uppercase tracking-widest mb-4">With Mulsetu</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Full-stack development",
                      "Design & branding",
                      "SEO & digital growth",
                      "Single contact point",
                      "AI & automation",
                      "Cloud & DevOps",
                      "Ongoing IT support",
                      "Business consulting",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-bright shrink-0" />
                        <span className="text-xs text-soft">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">How We Work</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Six Steps. <span className="gradient-text">Zero Surprises.</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                A consultative, transparent engagement from discovery to ongoing support.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 relative group">
                  <div className="font-display font-bold text-5xl text-teal/10 mb-4 leading-none group-hover:text-teal/20 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/process" className="btn-outline px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
                See Full Process Details &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag mb-4 inline-flex">Who We Serve</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Built for <span className="gradient-text">Every Sector</span>
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 0.05}>
                <Link href="/industries">
                  <motion.div
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="glass-card rounded-full px-5 py-3 text-sm font-medium text-soft hover:text-white hover:border-teal/30 transition-colors cursor-pointer"
                  >
                    {ind}
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MULSETU ── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Why Mulsetu</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Not Just Developers.<br />
                <span className="gradient-text">Your Technology Partner.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{w.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative max-w-6xl mx-auto px-6 mb-10">
          <Reveal>
            <div className="text-center">
              <span className="section-tag mb-3 inline-flex">Technology Stack</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
                We Build With <span className="gradient-text">Industry-Leading Tools</span>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          <div className="marquee-wrap">
            <div className="marquee-track flex gap-3">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="glass-card rounded-lg px-4 py-2.5 text-sm font-medium text-muted whitespace-nowrap flex items-center gap-2 hover:text-white hover:border-teal/30 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track marquee-track-reverse flex gap-3">
              {[...techStack.reverse(), ...techStack].map((tech, i) => (
                <div key={i} className="glass-card rounded-lg px-4 py-2.5 text-sm font-medium text-muted whitespace-nowrap flex items-center gap-2 hover:text-white hover:border-teal/30 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PRODUCTS ── */}
      <section id="products" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/40 to-deep" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal/4 blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-tag mb-4 inline-flex">Beyond Services</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-5">
                Our <span className="gradient-text">Products</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                We&apos;re building software products of our own — purpose-built for Indian businesses and the problems we keep solving.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 — Coming Soon */}
            <Reveal delay={0.1}>
              <div className="glass-card rounded-2xl p-8 border-teal/20 bg-gradient-to-br from-teal/6 to-transparent relative overflow-hidden group h-full flex flex-col">
                {/* Glow blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-teal/10 blur-2xl pointer-events-none group-hover:bg-teal/15 transition-all duration-700" />

                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-teal-bright bg-teal/10 border border-teal/25 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
                    Launching Soon
                  </span>
                </div>

                <div className="flex-1">
                  <div className="w-12 h-1 bg-gradient-to-r from-teal to-teal/20 rounded-full mb-5" />
                  <h3 className="font-display font-bold text-2xl text-white mb-3 leading-tight">
                    Stealth Mode
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Something we&apos;ve been quietly building. Born from the problems we see every day across our client engagements — a product that will change how Indian businesses manage and automate their operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["SaaS", "AI-Powered", "India-First"].map((tag) => (
                      <span key={tag} className="text-xs font-medium text-teal/70 bg-teal/8 border border-teal/15 rounded-md px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:founder@mulsetu.com?subject=I want early access to Mulsetu's product"
                  className="btn-primary text-sm px-5 py-3 rounded-xl text-center font-semibold"
                >
                  Get Early Access &rarr;
                </a>
              </div>
            </Reveal>

            {/* Placeholder card 2 */}
            <Reveal delay={0.2}>
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.01)_8px,rgba(255,255,255,0.01)_16px)]" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white/20 text-xl font-bold">?</span>
                  </div>
                  <p className="text-white/20 font-display font-bold text-lg mb-2">More Coming</p>
                  <p className="text-white/15 text-xs tracking-widest uppercase">In Development</p>
                </div>
              </div>
            </Reveal>

            {/* Placeholder card 3 */}
            <Reveal delay={0.3}>
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.01)_8px,rgba(255,255,255,0.01)_16px)]" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white/20 text-xl font-bold">?</span>
                  </div>
                  <p className="text-white/20 font-display font-bold text-lg mb-2">More Coming</p>
                  <p className="text-white/15 text-xs tracking-widest uppercase">In Development</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-muted/50 text-xs mt-8 tracking-wide">
              Want to be the first to know? Email us at{" "}
              <a href="mailto:founder@mulsetu.com" className="text-teal/70 hover:text-teal-bright transition-colors">
                founder@mulsetu.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-navy to-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Ready to Start?</span>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-6 leading-tight">
              Need a <span className="gradient-text text-glow">Technology Partner?</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a website, ERP, SaaS platform, AI automation, mobile app,
              or complete digital transformation — our team is ready.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold">
                Book Free Strategy Session &rarr;
              </Link>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn-outline px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-2">
                💬 Chat on WhatsApp
              </a>
            </div>
            <p className="text-sm text-muted/60">
              No commitment required · 30-minute call · Get a clear technology roadmap
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
