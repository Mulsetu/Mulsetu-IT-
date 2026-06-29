"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Clock, Rocket, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  {
    title: "Web App MVPs",
    desc: "Full-stack web applications built for speed — user authentication, core workflows, dashboards and admin panels. Live and accessible from any browser in 4–6 weeks.",
    features: ["User auth & roles", "Core feature set", "Admin dashboard", "Cloud deployment"],
  },
  {
    title: "Mobile App MVPs",
    desc: "Android and iOS apps (or cross-platform Flutter) with your core user journey built and shipped to the App Store and Play Store — ready for real user testing in 6–8 weeks.",
    features: ["Android & iOS", "Flutter cross-platform", "App Store submission", "Push notifications"],
  },
  {
    title: "SaaS MVPs",
    desc: "Multi-role SaaS platforms with subscription billing, onboarding flows and basic analytics — everything an investor or early customer needs to understand the product's value.",
    features: ["Multi-role access", "Subscription billing", "Onboarding flow", "Usage analytics"],
  },
  {
    title: "API & Backend MVPs",
    desc: "Scalable REST or GraphQL APIs, third-party integrations, and backend systems for products that need a solid data layer before building the frontend.",
    features: ["REST / GraphQL API", "Third-party integrations", "Database design", "API documentation"],
  },
];

const timeline = [
  { week: "Week 1", title: "Discovery & Scope Lock", desc: "We align on your target user, core user journey, and the exact feature set for v1. Nothing gets built without a locked scope." },
  { week: "Week 1–2", title: "Design", desc: "UX wireframes and UI designs in your brand style. You approve before a single line of code is written." },
  { week: "Week 2–6", title: "Development", desc: "Frontend, backend, database and integrations built in parallel. Weekly demos so you see progress — no black box development." },
  { week: "Week 6–8", title: "Testing & Launch", desc: "QA, bug fixes, cloud deployment and go-live. We submit to App Stores if mobile and hand you a production-ready product." },
];

const stack = ["Next.js", "React", "Flutter", "Node.js", "Python", "PostgreSQL", "Supabase", "Firebase", "Stripe", "AWS", "Vercel", "Render"];

const benefits = [
  "Validate your idea with real users before raising a round",
  "Go to market in weeks, not months",
  "Investor-ready product with real functionality",
  "Clean, scalable codebase you own completely",
  "No scope creep — fixed deliverables, fixed timeline",
  "Continue building with us post-launch or take the code",
];

export default function MVPDevelopmentPage() {
  return (
    <main className="bg-deep pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-rose-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">MVP Development</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Idea to Live Product.<br /><span className="gradient-text">In 4–8 Weeks.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We build lean, investor-ready MVPs for startups — fast enough to validate your concept
              with real users, solid enough to scale when you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                Discuss Your MVP <ArrowRight size={16} />
              </Link>
              <Link href="/our-work" className="btn-outline px-8 py-4 rounded-xl font-semibold">
                See What We've Built
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Clock size={20} className="text-teal-bright" />, stat: "4–8 Weeks", label: "Idea to live product" },
              { icon: <Rocket size={20} className="text-teal-bright" />, stat: "Fast", label: "Startup-focused delivery" },
              { icon: <Target size={20} className="text-teal-bright" />, stat: "Fixed Scope", label: "No surprise costs" },
              { icon: <Zap size={20} className="text-teal-bright" />, stat: "100% Yours", label: "Full code ownership" },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.07}>
                <div className="flex flex-col items-center gap-2">
                  {item.icon}
                  <div className="font-display font-bold text-2xl gradient-text">{item.stat}</div>
                  <div className="text-xs text-muted">{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">What We Build</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                MVPs We <span className="gradient-text">Specialise In</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{o.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {o.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-soft">
                        <span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-tag mb-4 inline-flex">How We Do It</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                From Kickoff to <span className="gradient-text">Live in 8 Weeks</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="text-xs font-bold tracking-widest uppercase text-teal-bright mb-3">{t.week}</div>
                  <h3 className="font-display font-bold text-base mb-3">{t.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="section-tag mb-4 inline-flex">Why Mulsetu for MVPs</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                Built to Validate.<br /><span className="gradient-text">Ready to Scale.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Most agencies build MVPs that are either too slow, too bloated, or too fragile to show investors.
                We build lean, real products with clean code — so you can validate fast and scale without starting over.
              </p>
            </Reveal>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={i * 0.07}>
                  <div className="flex items-start gap-3 glass-card rounded-xl p-4">
                    <CheckCircle2 size={16} className="text-teal-bright mt-0.5 shrink-0" />
                    <span className="text-sm text-soft">{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="font-display font-bold text-2xl text-center mb-8">Technology Stack</h3>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <span className="glass-card rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-white hover:border-teal/30 transition-colors">{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Have an Idea? Let&apos;s <span className="gradient-text">Build It.</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute session. We&apos;ll scope your MVP, give you a timeline and tell you exactly what it takes to go live — no obligation.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">
              Book Free MVP Discovery Call <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
