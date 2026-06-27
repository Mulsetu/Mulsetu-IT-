"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const roles = [
  { icon: "🧑‍💻", role: "Senior Developer", cost: "$80–150K/yr", note: "Full-stack or specialised" },
  { icon: "🎨", role: "UI/UX Designer", cost: "$55–95K/yr", note: "Product + web design" },
  { icon: "🔍", role: "SEO Expert", cost: "$45–80K/yr", note: "Organic growth" },
  { icon: "📋", role: "Project Manager", cost: "$75–115K/yr", note: "Coordination & delivery" },
  { icon: "🤖", role: "AI Engineer", cost: "$110–180K/yr", note: "LLMs & automation" },
  { icon: "☁️", role: "DevOps Engineer", cost: "$95–160K/yr", note: "Cloud & infrastructure" },
];

const included = [
  "Software development (web, mobile, SaaS, ERP)",
  "UI/UX design and product thinking",
  "AI and automation implementation",
  "SEO and digital growth management",
  "Cloud infrastructure and DevOps",
  "Business analysis and tech consulting",
  "Project management and delivery",
  "Monthly performance reviews and reporting",
  "Security updates and maintenance",
  "Priority support and rapid response",
];

export default function DedicatedITTeamPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Dedicated IT Team</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Think of Us As<br /><span className="gradient-text">Your In-House IT Team.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Instead of hiring six specialists and managing separate salaries, coordination gaps
              and context-switching — get one unified technology team through Mulsetu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Explore the Model <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display font-bold text-2xl mb-2 text-white/60">Without Mulsetu</h2>
                <p className="text-sm text-muted mb-6">You&apos;d need to hire, manage and retain all of these separately:</p>
                <div className="space-y-3">
                  {roles.map((r) => (
                    <div key={r.role} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xl opacity-40">{r.icon}</span>
                        <div>
                          <div className="text-sm text-muted/50 line-through">{r.role}</div>
                          <div className="text-xs text-muted/30">{r.note}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted/40">{r.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted/50">Total annual cost</span>
                    <span className="font-mono text-red-400/60">$460K–780K/yr</span>
                  </div>
                  <p className="text-xs text-muted/30 mt-1">Excluding PF, benefits, equipment, training and recruitment costs</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card rounded-2xl p-8 border-teal/30 bg-gradient-to-br from-teal/8 to-transparent">
                <h2 className="font-display font-bold text-2xl mb-2 gradient-text">With Mulsetu</h2>
                <p className="text-sm text-muted mb-6">One unified team, one point of contact, full accountability:</p>
                <div className="space-y-2.5 mb-8">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-teal-bright mt-0.5 shrink-0" />
                      <span className="text-sm text-soft">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm">
                  <span className="relative z-10">Get a Custom Quote</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to <span className="gradient-text">Get Started?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Book a call and we&apos;ll walk you through how the dedicated IT team model works for your business.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book Free Strategy Call <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
