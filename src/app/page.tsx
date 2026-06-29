"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TypeAnimation } from "react-type-animation";

// Load Three.js canvas client-side only
const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });
const ServicesOrbit = dynamic(() => import("@/components/three/ServicesOrbit"), { ssr: false });

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
  {
    title: "MVP Development",
    desc: "Idea to live product in 4–8 weeks. Lean, investor-ready MVPs built specifically for startups that need to move fast.",
    tags: ["4–8 Weeks", "Startups", "Investor Ready", "Fixed Scope"],
    href: "/services/mvp-development",
    color: "from-rose-500/10 to-teal/5",
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
  { text: "No visibility into business data or performance" },
];

const whyPoints = [
  { title: "Business Analysis", desc: "We understand your operations deeply before recommending any technology." },
  { title: "AI Consulting", desc: "We map where AI gives you the highest ROI and build exactly that." },
  { title: "Product Strategy", desc: "Roadmaps built around your goals — not feature lists or guesswork." },
  { title: "Dedicated Tech Team", desc: "One team, full accountability, zero handoff between vendors." },
  { title: "Long-Term Support", desc: "We scale with your business. Not a one-time delivery, ever." },
  { title: "End-to-End Execution", desc: "From strategy and design to deployment and maintenance — all in-house." },
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
  { role: "Senior Developer", cost: "$80–150K/yr" },
  { role: "UI/UX Designer", cost: "$55–95K/yr" },
  { role: "SEO Expert", cost: "$45–80K/yr" },
  { role: "Project Manager", cost: "$75–115K/yr" },
  { role: "AI Engineer", cost: "$110–180K/yr" },
  { role: "DevOps Engineer", cost: "$95–160K/yr" },
];

const blogPosts = [
  {
    slug: "ai-automation-saves-time",
    title: "How AI Automation Is Saving Businesses 20+ Hours Per Week",
    excerpt: "Repetitive tasks are quietly draining your team's capacity. Here's how modern AI tools — chatbots, email workflows, and intelligent agents — are giving those hours back.",
    tags: ["AI", "Automation", "Productivity"],
    date: "June 10, 2026",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "saas-vs-custom-software",
    title: "SaaS Platform vs. Custom Software: What Growing Businesses Actually Need",
    excerpt: "Off-the-shelf software can only take you so far. Discover when a custom-built SaaS platform becomes the competitive advantage your business can't afford to skip.",
    tags: ["SaaS", "Software", "Strategy"],
    date: "May 22, 2026",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "cost-of-digital-delay",
    title: "The Real Cost of Delaying Your Digital Transformation",
    excerpt: "Every month you operate on manual processes is a month your competitors gain ground. We break down the true — often invisible — cost of not digitizing your operations.",
    tags: ["Digital Transformation", "ROI", "Operations"],
    date: "April 15, 2026",
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    company: "TrackMyStartup",
    website: "https://www.trackmystartup.com",
    logo: null,
    founder: "Dr. Saeel Momin",
    role: "Founder, TrackMyStartup",
    quote: "Best team I have worked with. The quality of work they have delivered is exceptional. This team works as my own IT team — fully dedicated, fully accountable.",
    project: "End-to-end SaaS platform with 7 specialized dashboards — built from scratch and scaled globally.",
    dashboards: ["Startup", "Investor", "Investment Advisor", "Incubation Center", "CA", "CS", "Mentors"],
    stats: [
      { label: "Dashboards Built", value: "7" },
      { label: "Countries Scaled", value: "30+" },
      { label: "User Roles", value: "7" },
    ],
  },
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
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block shrink-0" />
              <span className="hidden sm:inline">Technology &amp; AI Partner for Growing Businesses</span>
              <span className="sm:hidden">Technology &amp; AI Partner</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6"
          >
            Planning to Go Digital<br />
            but Don&apos;t Know
            <span
              className="gradient-text text-glow"
              style={{ display: 'block', minHeight: '1.15em' }}
            >
              <TypeAnimation
                sequence={["Where to Start?", 2000, "What to Build?", 2000, "Who to Trust?", 2000]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor={false}
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10 px-2 sm:px-0"
          >
            We help businesses build software, automate operations, and manage technology —
            without the cost or complexity of hiring an entire IT department.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold relative z-10 text-center">
              Book Free Consultation &rarr;
            </Link>
            <Link href="/services" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-center">
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted/50 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-teal/40 to-transparent"
          />
        </motion.div>

        {/* Soft transition to next section to remove any hard lines */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep to-transparent z-[5] pointer-events-none" />
      </section>

      {/* ── SERVICES ── */}
      <section className="relative w-full" id="services">
        <ServicesOrbit />
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-navy/50 to-deep" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">The Reality for Most Businesses</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
                Are You Facing <span className="gradient-text">These Challenges?</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Most growing businesses hit the same walls. We&apos;ve solved them all.
              </p>
            </div>
          </Reveal>

          {/* 8 problem cards — divides evenly into 4×2 on desktop, 2×4 on tablet, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {problems.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.06}>
                <div className="glass-card glass-card-hover rounded-2xl p-5 h-full cursor-default flex items-start gap-3">
                  <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <span className="text-white/30 text-[9px] leading-none font-bold">✕</span>
                  </span>
                  <p className="text-sm text-soft leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Solution banner — full-width, visually distinct from the problem grid */}
          <Reveal delay={0.4}>
            <div className="glass-card rounded-2xl p-6 md:p-8 border-teal/30 bg-gradient-to-br from-teal/8 to-transparent text-center">
              <p className="text-base md:text-lg text-soft leading-relaxed font-medium max-w-2xl mx-auto">
                <span className="text-teal-bright font-semibold">Mulsetu</span> solves all of this — one roof, one team, one point of contact.
              </p>
            </div>
          </Reveal>

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

      {/* ── DEDICATED IT TEAM ── */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-deep" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="section-tag mb-4 inline-flex">The Smarter Way</span>
                <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
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
      <section className="py-16 md:py-28 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">How We Work</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
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
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag mb-4 inline-flex">Who We Serve</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
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
      <section className="py-16 md:py-28 relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Why Mulsetu</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Client Success Stories</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Real results, real feedback from founders who trust Mulsetu as their technology partner.
              </p>
            </div>
          </Reveal>

          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={i * 0.1}>
              <div className="glass-card rounded-3xl p-8 md:p-10 border-teal/20 bg-gradient-to-br from-teal/5 to-transparent">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  {/* Quote side */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <div className="text-teal-bright text-4xl leading-none mb-4 font-display">&ldquo;</div>
                      <p className="text-lg md:text-xl text-soft leading-relaxed font-medium mb-8">
                        {t.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal/30 to-teal/10 border border-teal/30 flex items-center justify-center shrink-0">
                        <span className="text-teal-bright font-bold text-lg">{t.founder.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{t.founder}</p>
                        <a
                          href={t.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-teal-bright hover:underline"
                        >
                          {t.role}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project details side */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                        <img src="/logos/trackmystartup.svg" alt="TrackMyStartup" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg">{t.company}</p>
                        <p className="text-xs text-muted">{t.project}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {t.stats.map((s) => (
                        <div key={s.label} className="glass-card rounded-xl p-3 text-center">
                          <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                          <div className="text-xs text-muted mt-0.5 leading-tight">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Dashboards */}
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Dashboards Built</p>
                      <div className="flex flex-wrap gap-2">
                        {t.dashboards.map((d) => (
                          <span key={d} className="text-xs px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={t.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 w-fit"
                    >
                      Visit {t.company} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/our-work" className="btn-outline px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
                See Our Work &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-16 md:py-28 relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Insights & Resources</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-5">
                From Our <span className="gradient-text">Blog</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Practical articles on AI, automation, and building technology for growing businesses.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Cover image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-base md:text-lg leading-snug mb-3 group-hover:text-teal-bright transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted/60 mt-auto pt-4 border-t border-white/[0.06]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center">
              <Link href="/blog" className="btn-outline px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold">
                Read All Articles &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-navy to-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Ready to Start?</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl mb-6 leading-tight">
              Need a <span className="gradient-text text-glow">Technology Partner?</span>
            </h2>
            <p className="text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a website, ERP, SaaS platform, AI automation, mobile app,
              or complete digital transformation — our team is ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-semibold text-center">
                Book Free Strategy Session &rarr;
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-muted/60">
              No commitment required · 30-minute call · Get a clear technology roadmap
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
