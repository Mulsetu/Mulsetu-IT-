"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const differentiators = [
  {
    icon: "🎯",
    title: "Your Own CTO",
    desc: "We don't just build what you ask. We act as your Chief Technology Officer — owning your technology strategy, architecture decisions, and product roadmap. You get senior-level thinking without the senior-level salary.",
    they: "They execute tasks. We think ahead.",
  },
  {
    icon: "🔁",
    title: "Long-Term Partnership",
    desc: "We don't deliver a project and disappear. We stay — maintaining, evolving, and scaling your technology as your business grows. When you succeed, we succeed. That alignment changes everything.",
    they: "They finish, invoice, and move to the next client.",
  },
  {
    icon: "📐",
    title: "Free System Design & Architecture",
    desc: "Before writing a single line of code, we design your full system — architecture, data flow, integrations, and tech stack. Upfront. Included. No discovery fees, no billable planning hours.",
    they: "They charge you to think before they build.",
  },
  {
    icon: "🔧",
    title: "Changes on Your Terms",
    desc: "Business evolves. Your software should too. We don't lock you into rigid scope and bill for every small request. Changes, iterations, and pivots are built into how we work — not exceptions to the contract.",
    they: "They raise a change request and invoice for every tweak.",
  },
  {
    icon: "🤝",
    title: "We Work With Your Team",
    desc: "Got internal staff, freelancers, or other vendors? We collaborate alongside them — not above them, not in isolation. We fill the gaps, align with your processes, and amplify what you already have.",
    they: "They hand over a deliverable and leave you to figure out the rest.",
  },
];

const included = [
  "System design & architecture (free, upfront)",
  "Software development (web, mobile, SaaS, ERP)",
  "UI/UX design and product thinking",
  "AI and automation implementation",
  "SEO and digital growth management",
  "Cloud infrastructure and DevOps",
  "Business analysis and technology consulting",
  "Changes and iterations as your needs evolve",
  "Long-term maintenance and ongoing support",
  "Collaboration with your existing internal team",
];

const workingStyle = [
  { title: "You bring the vision", desc: "Tell us what you're trying to build or fix. We ask the right questions, challenge assumptions, and help you think it through properly — before anything is built." },
  { title: "We design the solution", desc: "Architecture, tech stack, data structure, integrations — all designed and documented before a line of code is written. Free. Always." },
  { title: "We build, you stay in control", desc: "Weekly updates, open communication, full visibility into progress. No black box. No surprises. You know exactly where things stand at every stage." },
  { title: "You ask, we adjust", desc: "The business evolves. You'll think of new things. We treat changes as part of the work — not extra billing. That's the difference." },
  { title: "Your team stays in the loop", desc: "We work alongside your existing staff, not in a separate silo. Training, handovers, shared tools — we make it seamless." },
  { title: "We stay long after launch", desc: "Maintenance, improvements, scaling, new features — we're your ongoing technology partner, not a one-time contractor who ghosts you after delivery." },
];

export default function DedicatedITTeamPage() {
  return (
    <main className="bg-deep pt-24">

      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block shrink-0" />
              Not Your Typical IT Company
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              We Don&apos;t Work<br />
              <span className="gradient-text">Like a Vendor.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We work as an extension of your team — as your own CTO, with free architecture planning,
              long-term commitment, and the flexibility to change course whenever your business needs it.
              One team. Full accountability. No surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                Book Free Strategy Call <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">
                See How We Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { val: "CTO", label: "Included in every engagement" },
                { val: "Free", label: "System design & architecture" },
                { val: "∞", label: "Long-term support" },
                { val: "1 Team", label: "Works like yours" },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                  <div className="font-display font-bold text-2xl gradient-text">{s.val}</div>
                  <div className="text-xs text-muted mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 DIFFERENTIATORS ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">What Makes Us Different</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                Five Things a Traditional IT Company<br />
                <span className="gradient-text">Won&apos;t Do for You.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="text-4xl shrink-0">{d.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl mb-3">{d.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{d.desc}</p>
                    </div>
                    <div className="lg:w-52 shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-1.5">Traditional IT</p>
                      <p className="text-xs text-muted/50 italic leading-relaxed">{d.they}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-24 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="section-tag mb-4 inline-flex">Everything Included</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                One Team.<br />
                <span className="gradient-text">Your Entire Tech Stack Covered.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Instead of managing six vendors, freelancers, and specialists — get one unified team that covers
                every layer of your technology. One contact. One team. Total clarity.
              </p>
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-2xl p-8 border-teal/20 bg-gradient-to-br from-teal/8 to-transparent">
                <p className="text-xs font-bold tracking-widest uppercase text-teal-bright mb-6">With Mulsetu You Get</p>
                <div className="space-y-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-teal-bright mt-0.5 shrink-0" />
                      <span className="text-sm text-soft">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WORKING STYLE ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">What Working With Us Looks Like</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                Less Like an Agency.<br />
                <span className="gradient-text">More Like a Co-founder.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workingStyle.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-7 h-full">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                    <span className="text-teal-bright font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center relative overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready for a Team That <span className="gradient-text">Actually Stays?</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Book a free strategy call. We&apos;ll listen, ask the right questions, and show you exactly
              how we&apos;d work as your dedicated technology team.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">
              Book Free Strategy Call <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
