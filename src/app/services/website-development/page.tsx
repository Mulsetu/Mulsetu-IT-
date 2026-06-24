"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, FileText, Layers } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  { icon: <Globe size={22} className="text-teal-bright" />, title: "Next.js Websites", desc: "Lightning-fast, SEO-optimised websites built with Next.js — perfect for corporate sites that need performance, security and scalability.", features: ["Server-side rendering", "Edge performance", "Built-in SEO", "CMS integration"] },
  { icon: <Layers size={22} className="text-teal-bright" />, title: "Corporate & Business Sites", desc: "Professional, brand-first websites that communicate your credibility and convert visitors into enquiries and clients.", features: ["Custom design", "Mobile-first", "Lead capture forms", "Analytics setup"] },
  { icon: <FileText size={22} className="text-teal-bright" />, title: "Landing Pages", desc: "High-conversion campaign landing pages designed to turn paid traffic into leads — A/B testing ready from day one.", features: ["Conversion-optimised", "A/B test ready", "Fast load times", "Pixel/tracking setup"] },
  { icon: <ShoppingCart size={22} className="text-teal-bright" />, title: "E-Commerce Stores", desc: "Full-featured e-commerce stores with payment gateway integration, inventory management and order tracking.", features: ["Razorpay / Stripe", "Inventory management", "Order tracking", "Mobile app optional"] },
];

const stack = ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "WordPress", "Wix", "Strapi CMS", "Sanity", "Vercel", "Cloudflare", "Razorpay", "Stripe"];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Website Development</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Websites That <span className="gradient-text">Work for You</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Not just a web presence — a conversion engine. We build performance-first websites
              that rank on Google, load in milliseconds, and turn visitors into clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Book Free Consultation <ArrowRight size={16} /></Link>
              <Link href="/case-studies" className="btn-outline px-8 py-4 rounded-xl font-semibold">View Case Studies</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Mobile-first, responsive design", "Google Core Web Vitals optimised", "SEO-ready architecture from day one", "CMS for easy content management", "Analytics & conversion tracking", "Ongoing maintenance included"].map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-bright mt-0.5 shrink-0" />
                  <span className="text-sm text-soft">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div className="text-center mb-16"><span className="section-tag mb-4 inline-flex">What We Build</span><h2 className="font-display font-bold text-4xl md:text-5xl mt-4">Website Types We <span className="gradient-text">Specialise In</span></h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-5">{o.icon}</div>
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{o.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {o.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-soft"><span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{f}</li>))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><h3 className="font-display font-bold text-2xl text-center mb-8">Technology Stack</h3></Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((s, i) => (<Reveal key={s} delay={i * 0.04}><span className="glass-card rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-white hover:border-teal/30 transition-colors">{s}</span></Reveal>))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Let&apos;s Build Your <span className="gradient-text">Website</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Tell us about your business and we&apos;ll propose the right tech stack, design direction, and timeline.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Start the Conversation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
