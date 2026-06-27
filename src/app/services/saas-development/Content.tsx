"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  { title: "Multi-Tenant SaaS Platforms", desc: "Full multi-tenant architecture where each client gets isolated data, custom branding and role-based access — built to scale from 10 to 10,000 users.", features: ["Tenant isolation", "Role-based access", "White-labelling", "Usage-based billing"] },
  { title: "Admin Dashboards", desc: "Real-time analytics dashboards with charts, filters, exports and automated reports — so you always have visibility into your platform's performance.", features: ["Real-time charts", "Custom KPIs", "CSV/PDF exports", "Alert systems"] },
  { title: "Customer & User Portals", desc: "Self-service portals where your customers can manage subscriptions, view invoices, raise tickets and access their data — reducing your support load dramatically.", features: ["Self-service flows", "Invoice history", "Support tickets", "Document management"] },
  { title: "Subscription & Billing Systems", desc: "Flexible subscription management with plan upgrades, proration, coupon codes, trial periods and automated invoice generation.", features: ["Plan management", "Proration handling", "Coupon codes", "Auto invoicing"] },
];

const stack = ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Prisma", "Stripe", "Razorpay", "Redis", "Docker", "AWS", "Vercel"];

export default function SaaSDevelopmentPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-sky-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">SaaS Product Development</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Build Your SaaS.<br /><span className="gradient-text">Own the Market.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We build production-grade SaaS platforms from scratch — multi-tenant architecture,
              subscription billing, analytics, and portals that scale with your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Discuss Your SaaS Idea <ArrowRight size={16} /></Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">Our Build Process</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Production-ready from day one", "Multi-tenant architecture built-in", "Stripe / Razorpay billing integrated", "Role-based access control", "Real-time analytics dashboards", "Scalable cloud infrastructure"].map((b, i) => (
              <Reveal key={b} delay={i * 0.06}><div className="flex items-start gap-3"><CheckCircle2 size={16} className="text-teal-bright mt-0.5 shrink-0" /><span className="text-sm text-soft">{b}</span></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div className="text-center mb-16"><span className="section-tag mb-4 inline-flex">What We Build</span><h2 className="font-display font-bold text-4xl md:text-5xl mt-4">SaaS Components We <span className="gradient-text">Specialise In</span></h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{o.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">{o.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-soft"><span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{f}</li>))}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><h3 className="font-display font-bold text-2xl text-center mb-8">Technology Stack</h3></Reveal>
          <div className="flex flex-wrap justify-center gap-3">{stack.map((s, i) => (<Reveal key={s} delay={i * 0.04}><span className="glass-card rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-white hover:border-teal/30 transition-colors">{s}</span></Reveal>))}</div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to Build Your <span className="gradient-text">SaaS?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Share your idea. We&apos;ll propose the architecture, timeline and scope — no obligation.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book a Technical Discussion <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
