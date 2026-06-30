"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const dashboards = [
  { label: "Startup", icon: "🚀", desc: "Track growth, metrics & milestones" },
  { label: "Investor", icon: "💼", desc: "Portfolio management & deal flow" },
  { label: "Investment Advisor", icon: "📊", desc: "Client portfolios & recommendations" },
  { label: "Incubation Center", icon: "🏢", desc: "Cohort management & mentorship" },
  { label: "CA", icon: "📋", desc: "Compliance, filings & client data" },
  { label: "CS", icon: "⚖️", desc: "Secretarial work & governance" },
  { label: "Mentors", icon: "🎓", desc: "Session tracking & startup guidance" },
];

const stats = [
  { value: "7", label: "Role-Based\nDashboards" },
  { value: "30+", label: "Countries\nLive" },
  { value: "1", label: "Unified\nPlatform" },
  { value: "∞", label: "Long-term\nPartnership" },
];

export default function OurWorkPage() {
  return (
    <main className="bg-deep pt-24 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Our Work</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-5 mb-6">
              Things We&apos;ve<br />
              <span className="gradient-text text-glow">Built & Shipped.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              We embed as your in-house technology team — so what we build is as much ours as it is yours. Here&apos;s what we&apos;ve shipped together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED: TRACKMYSTARTUP ── */}
      <section className="py-8 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-teal/50" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-bright">Built by Us</span>
            </div>
          </Reveal>

          {/* Main card */}
          <Reveal delay={0.05}>
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-navy/80 via-deep to-navy/60 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

              {/* Decorative glow */}
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal/8 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Card header */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 md:px-12 py-7 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img src="/logos/trackmystartup.svg" alt="TrackMyStartup" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="font-display font-bold text-xl text-white">TrackMyStartup</h2>
                      <a
                        href="https://www.trackmystartup.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-teal-bright border border-teal/25 rounded-full px-2 py-0.5 hover:bg-teal/10 transition-colors"
                      >
                        trackmystartup.com ↗
                      </a>
                      <a
                        href="https://www.linkedin.com/company/track-my-startup/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-blue-400/80 border border-blue-400/20 rounded-full px-2 py-0.5 hover:bg-blue-400/10 transition-colors flex items-center gap-1"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        LinkedIn ↗
                      </a>
                    </div>
                    <p className="text-sm text-muted mt-0.5">SaaS Platform for the Global Startup Ecosystem</p>
                  </div>
                </div>
                {/* 5 stars */}
                <div className="flex items-center gap-1 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted/60 ml-1.5">5.0</span>
                </div>
              </div>

              {/* Card body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* LEFT — Platform showcase */}
                <div className="relative px-8 md:px-12 py-10 lg:border-r border-white/[0.06]">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">What We Built</p>
                  <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                    An end-to-end multi-role SaaS platform connecting every stakeholder in the startup ecosystem — built from zero and scaled to <span className="text-white font-medium">30+ countries</span> in production.
                  </p>

                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">7 Role-Based Dashboards</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {dashboards.map((d, i) => (
                      <motion.div
                        key={d.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-teal/20 transition-all cursor-default"
                      >
                        <span className="text-xl mt-0.5 shrink-0">{d.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-teal-bright transition-colors leading-tight">{d.label}</div>
                          <div className="text-xs text-muted/60 mt-0.5 leading-snug">{d.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Quote */}
                <div className="relative px-8 md:px-12 py-10 flex flex-col justify-between">
                  <div
                    className="absolute top-8 right-10 font-display font-bold text-[140px] leading-none text-teal/[0.07] select-none pointer-events-none"
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">From the Founder</p>

                    <blockquote className="relative z-10">
                      <p className="text-xl md:text-2xl font-display font-semibold text-white leading-[1.45] mb-6">
                        &ldquo;Best team I have worked with. The quality of work they have done is outstanding — and this team works as my{" "}
                        <span className="gradient-text">own IT team.</span>&rdquo;
                      </p>
                      <p className="text-muted text-base leading-relaxed mb-8">
                        From architecture to deployment, design to DevOps — Mulsetu handled every layer of a complex, multi-role SaaS platform. The result speaks for itself: live in 30+ countries, trusted by startups, investors, incubators, advisors, and mentors worldwide.
                      </p>
                    </blockquote>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal/40 to-teal/10 border border-teal/30 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-lg text-teal-bright">S</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Dr. Saeel Momin</p>
                        <p className="text-sm text-muted">Founder &amp; CEO, TrackMyStartup</p>
                      </div>
                    </div>

                    <a
                      href="https://www.trackmystartup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-bright border border-teal/25 rounded-xl px-5 py-2.5 hover:bg-teal/10 transition-colors"
                    >
                      Visit TrackMyStartup &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-white/[0.06] px-8 md:px-12 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-3xl md:text-4xl gradient-text leading-none mb-1.5">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted/60 whitespace-pre-line leading-snug">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED: JUDGE MY LAWYER ── */}
      <section className="py-8 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-teal/50" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-bright">Built by Us</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-navy/80 via-deep to-navy/60 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Header */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 md:px-12 py-7 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img src="/logos/jml.png" alt="Judge My Lawyer" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="font-display font-bold text-xl text-white">Judge My Lawyer</h2>
                      <a
                        href="https://www.judgemylawyer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-teal-bright border border-teal/25 rounded-full px-2 py-0.5 hover:bg-teal/10 transition-colors"
                      >
                        judgemylawyer.com ↗
                      </a>
                    </div>
                    <p className="text-sm text-muted mt-0.5">India&apos;s Premier Legal Analytics & Data Platform</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border bg-teal/10 text-teal-bright border-teal/25 shrink-0">
                  Full Platform Build
                </span>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* LEFT — What we built */}
                <div className="relative px-8 md:px-12 py-10 lg:border-r border-white/[0.06]">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">What We Built</p>
                  <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                    Mulsetu built the entire technology platform from scratch — scraping and processing millions of Indian court case records, building ranking algorithms, and presenting verified lawyer, judge, and court performance data to the public.
                  </p>

                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Platform Modules</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { icon: "⚖️", label: "Lawyer Profiles & Rankings", desc: "Win score, case history, hearings" },
                      { icon: "🏛️", label: "Judge Analytics", desc: "Performance data by court & case type" },
                      { icon: "🏢", label: "Court-wise Analytics", desc: "Case counts & activity across India" },
                      { icon: "📊", label: "Ranking Algorithm", desc: "Win / loss / settle % analysis" },
                      { icon: "🔍", label: "Advanced Search & Filters", desc: "By court, judge, case type, score" },
                      { icon: "🏆", label: "Top 50 Lawyers", desc: "India's highest-performing lawyers" },
                      { icon: "📰", label: "Research Articles", desc: "Legal insights and analysis" },
                      { icon: "🔐", label: "Lawyer Login Portal", desc: "Professional profile management" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-teal/20 transition-all cursor-default"
                      >
                        <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-teal-bright transition-colors leading-tight">{item.label}</div>
                          <div className="text-xs text-muted/60 mt-0.5 leading-snug">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Tech & scope */}
                <div className="relative px-8 md:px-12 py-10 flex flex-col justify-between">
                  <div
                    className="absolute top-8 right-10 font-display font-bold text-[140px] leading-none text-blue-500/[0.05] select-none pointer-events-none"
                    aria-hidden
                  >
                    ⚖
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">The Challenge</p>
                    <p className="text-white/80 text-lg font-display font-semibold leading-relaxed mb-6">
                      Indian court data is scattered across hundreds of courts, in inconsistent formats, with no unified way to evaluate a lawyer&apos;s track record.
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-8">
                      Mulsetu built the full data pipeline — scraping, cleaning, and normalising case records from courts across India — then designed the ranking engine and the entire user-facing platform. Citizens can now find, compare, and choose legal counsel backed by real verified performance data.
                    </p>

                    <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">What Makes It Unique</p>
                    <div className="space-y-2.5 mb-8">
                      {[
                        "Real court data — not self-reported by lawyers",
                        "Multi-factor ranking: wins, losses, settlements, duration",
                        "Covers lawyers, judges, and courts in one platform",
                        "Built and maintained entirely by Mulsetu",
                      ].map((point) => (
                        <div key={point} className="flex items-start gap-2.5">
                          <span className="text-teal-bright mt-0.5 text-sm font-bold shrink-0">✓</span>
                          <span className="text-sm text-soft">{point}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://www.judgemylawyer.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-bright border border-teal/25 rounded-xl px-5 py-2.5 hover:bg-teal/10 transition-colors"
                    >
                      Visit Judge My Lawyer &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-white/[0.06] px-8 md:px-12 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "Full", label: "End-to-End\nPlatform Build" },
                    { value: "8", label: "Platform\nModules" },
                    { value: "India", label: "Legal Data\nCoverage" },
                    { value: "Live", label: "Production\nStatus" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-3xl md:text-4xl gradient-text leading-none mb-1.5">{s.value}</div>
                      <div className="text-xs text-muted/60 whitespace-pre-line leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED: STARTUP NATION INDIA ── */}
      <section className="py-8 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-teal/50" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-bright">Built by Us</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-navy/80 via-deep to-navy/60 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Header */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 md:px-12 py-7 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <img src="/logos/startup-nation.png" alt="Startup Nation India" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="font-display font-bold text-xl text-white">Startup Nation India</h2>
                      <a
                        href="https://www.linkedin.com/company/startup-nation-india/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-teal-bright border border-teal/25 rounded-full px-2 py-0.5 hover:bg-teal/10 transition-colors"
                      >
                        linkedin ↗
                      </a>
                    </div>
                    <p className="text-sm text-muted mt-0.5">World&apos;s Largest Startup Olympiad Platform · Pune, India</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border bg-teal/10 text-teal-bright border-teal/25 shrink-0">
                  Full Tech Build
                </span>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* LEFT */}
                <div className="relative px-8 md:px-12 py-10 lg:border-r border-white/[0.06]">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">What We Built</p>
                  <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                    We built the complete technology platform powering the world&apos;s largest Startup Olympiad — enabling startups globally to register, pitch, and get shortlisted through a fully digital, scalable system.
                  </p>

                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Platform Modules</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { icon: "🚀", label: "Startup Registration", desc: "Global onboarding for participating startups" },
                      { icon: "🎤", label: "Pitch Submission", desc: "Digital pitch portal for all entrants" },
                      { icon: "✅", label: "Shortlisting System", desc: "Evaluation & selection workflow" },
                      { icon: "👨‍⚖️", label: "Judge & Mentor Portal", desc: "Review, score & feedback tools" },
                      { icon: "📊", label: "Dashboard & Analytics", desc: "Real-time event & submission tracking" },
                      { icon: "🌍", label: "Global Scale", desc: "Built to handle worldwide participation" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-teal/20 transition-all cursor-default"
                      >
                        <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-teal-bright transition-colors leading-tight">{item.label}</div>
                          <div className="text-xs text-muted/60 mt-0.5 leading-snug">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative px-8 md:px-12 py-10 flex flex-col justify-between">
                  <div
                    className="absolute top-8 right-10 font-display font-bold text-[140px] leading-none text-amber-500/[0.05] select-none pointer-events-none"
                    aria-hidden
                  >
                    🏆
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">About the Platform</p>
                    <p className="text-white/80 text-lg font-display font-semibold leading-relaxed mb-6">
                      The world&apos;s largest Startup Olympiad — where startups from across the globe pitch, compete, and get shortlisted for recognition and opportunities.
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-8">
                      Startup Nation India is Pune&apos;s most dynamic innovation corridor — a space where ideas meet execution. We built every technical layer of their Startup Olympiad: from registration and pitch submission to shortlisting workflows and judging tools, enabling a global competition to run seamlessly at scale.
                    </p>

                    <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">What We Delivered</p>
                    <div className="space-y-2.5 mb-8">
                      {[
                        "End-to-end platform built from scratch",
                        "Startup pitch & registration system",
                        "Shortlisting and evaluation workflow",
                        "Built to handle global-scale participation",
                      ].map((point) => (
                        <div key={point} className="flex items-start gap-2.5">
                          <span className="text-teal-bright mt-0.5 text-sm font-bold shrink-0">✓</span>
                          <span className="text-sm text-soft">{point}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://www.linkedin.com/company/startup-nation-india/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-bright border border-teal/25 rounded-xl px-5 py-2.5 hover:bg-teal/10 transition-colors"
                    >
                      Visit Startup Nation India &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="border-t border-white/[0.06] px-8 md:px-12 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "World's", label: "Largest Startup\nOlympiad" },
                    { value: "Full", label: "End-to-End\nTech Build" },
                    { value: "Global", label: "Startup\nParticipation" },
                    { value: "Live", label: "Production\nStatus" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-3xl md:text-4xl gradient-text leading-none mb-1.5">{s.value}</div>
                      <div className="text-xs text-muted/60 whitespace-pre-line leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MORE BUILDS COMING ── */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/30">More Builds</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "E-Commerce Platform", industry: "Retail", status: "Shipping soon" },
              { label: "School ERP System", industry: "Education", status: "Shipping soon" },
              { label: "Healthcare Portal", industry: "Healthcare", status: "Shipping soon" },
            ].map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-7 border-dashed border-white/[0.08] flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal/40 animate-pulse" />
                    <span className="text-xs text-teal/60 font-medium">{card.status}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white/40 text-base">{card.label}</h3>
                  <span className="text-xs text-muted/30 px-2 py-0.5 border border-white/[0.06] rounded-full w-fit">{card.industry}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-navy to-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal/7 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Let&apos;s Build Together</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl mb-6 leading-tight">
              Want Us On<br />
              <span className="gradient-text text-glow">Your Team?</span>
            </h2>
            <p className="text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              We embed as your dedicated technology team — design, development, AI, DevOps, all of it. One team. Full ownership. No handoffs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl text-base font-semibold">
                Book Free Strategy Session &rarr;
              </Link>
              <Link href="/services" className="btn-outline w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl text-base font-semibold">
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
