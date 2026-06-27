"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { num: "01", icon: "🎯", title: "Discovery Meeting", short: "Understand business challenges", detail: "We start every engagement by listening — not pitching. In the discovery call, we map your operations, identify what's manual or broken, understand your industry, and clarify what success looks like for your business. We ask questions a business analyst would ask, not a salesperson." },
  { num: "02", icon: "🔬", title: "Research & Analysis", short: "Deep business analysis", detail: "Before recommending anything, we research your industry, competitors, existing tech stack and workflows. We map your team's day-to-day processes to find automation opportunities, inefficiencies and technology gaps — so our recommendations are grounded in real insight, not assumptions." },
  { num: "03", icon: "🗺️", title: "Technology Roadmap", short: "Best solution recommendation", detail: "You receive a clear roadmap: what to build, in what sequence, why each decision was made, what it will cost, and what results to expect. No jargon. No bloated scope. Just a pragmatic, prioritised plan that fits your budget and timeline." },
  { num: "04", icon: "⚒️", title: "Development", short: "Build the product", detail: "Our team builds against the agreed roadmap with weekly updates, a shared project tracker, and demos at every milestone. You're never in the dark. Changes are handled through a structured change-request process — no surprises on scope or cost." },
  { num: "05", icon: "🚀", title: "Deployment", short: "Launch & team training", detail: "We handle the full launch — server setup, domain configuration, security, performance checks and go-live. We train your team to use what we've built, document everything, and make sure adoption is immediate and smooth." },
  { num: "06", icon: "🔁", title: "Continuous IT Support", short: "Ongoing improvements & maintenance", detail: "The engagement doesn't end at launch. We stay on as your technology partner — handling maintenance, security patches, new feature requests, automation expansion and technology guidance. You get a dedicated technology team without the overhead of hiring one." },
];

export default function ProcessPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">How We Work</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Six Steps.<br /><span className="gradient-text">Zero Surprises.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              A transparent, consultative process from initial discovery to long-term technology partnership —
              with full visibility at every stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 flex gap-8 items-start">
                <div className="text-center shrink-0 w-16">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <div className="font-display font-bold text-2xl text-teal/30">{step.num}</div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{step.title}</h3>
                  <p className="text-xs font-semibold text-teal-bright uppercase tracking-widest mb-3">{step.short}</p>
                  <p className="text-sm text-muted leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to <span className="gradient-text">Begin?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Step 1 is a free 30-minute discovery call. No commitment, no sales pressure.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book Discovery Call <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
