"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function DigitalGrowthPage() {
  const offerings = [
    { title: "Search Engine Optimisation (SEO)", desc: "Technical SEO, content strategy and link building — we get your business ranking for the keywords your customers are searching.", features: ["Technical SEO audit", "Keyword strategy", "Content optimization", "Link building"] },
    { title: "Performance Optimization", desc: "Core Web Vitals, page speed, image compression, caching — we make your site fast so Google and users both love it.", features: ["Core Web Vitals", "Image optimization", "CDN setup", "Cache strategy"] },
    { title: "Analytics & Tracking Setup", desc: "GA4, Meta Pixel, conversion tracking and custom dashboards — full visibility into where your growth is coming from.", features: ["GA4 setup", "Meta Pixel", "Conversion tracking", "Custom dashboards"] },
    { title: "Lead Generation Systems", desc: "Landing pages, lead magnets, CRM integration and follow-up automation — a complete funnel from click to conversion.", features: ["Landing pages", "Lead magnets", "CRM integration", "Follow-up sequences"] },
    { title: "Website Maintenance", desc: "Monthly care plans — security updates, content changes, performance monitoring and uptime guarantees.", features: ["Security updates", "Content edits", "Uptime monitoring", "Monthly reports"] },
  ];

  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Digital Growth &amp; SEO</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Grow Online.<br /><span className="gradient-text">Generate Real Leads.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              SEO, performance optimisation, analytics and lead generation — a complete digital growth
              system that compounds over time and delivers measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Get a Free SEO Audit <ArrowRight size={16} /></Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">How We Work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className={`glass-card glass-card-hover rounded-2xl p-7 h-full ${i === 4 ? "md:col-span-2" : ""}`}>
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{o.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">{o.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-soft"><span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{f}</li>))}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to <span className="gradient-text">Grow Online?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Get a free SEO audit and find out exactly what&apos;s holding your website back.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Get Free SEO Audit <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
