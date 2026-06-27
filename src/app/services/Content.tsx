"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
  { icon: "🤖", title: "AI & Automation", desc: "Chatbots, WhatsApp automation, email sequences, lead qualification and AI agents that run 24/7 without human intervention.", href: "/services/ai-automation", items: ["AI Chatbots", "WhatsApp Automation", "Email Automation", "Lead Qualification", "AI Agents", "Workflow Automation"] },
  { icon: "🌐", title: "Website Development", desc: "Performance-first websites in Next.js, React, WordPress or Wix — built to rank, convert and represent your brand.", href: "/services/website-development", items: ["Next.js Websites", "Corporate Sites", "Landing Pages", "E-Commerce", "Portfolio Sites", "Business Sites"] },
  { icon: "☁️", title: "SaaS Development", desc: "Multi-tenant SaaS platforms, subscription billing, analytics dashboards and customer portals — production-ready from day one.", href: "/services/saas-development", items: ["Multi-Tenant SaaS", "Subscription Billing", "Admin Dashboards", "Customer Portals", "Analytics Systems"] },
  { icon: "🏭", title: "Custom Software & ERP", desc: "ERP, billing, inventory, HR, CRM and School ERP built around your workflow — not a generic off-the-shelf product.", href: "/services/custom-software", items: ["ERP Systems", "Billing Software", "Inventory Management", "CRM", "School ERP", "HR Systems"] },
  { icon: "📱", title: "Mobile App Development", desc: "Android, iOS and Flutter apps for customers, employees and field teams — fast, reliable and well-designed.", href: "/services/mobile-apps", items: ["Android Apps", "iOS Apps", "Flutter Apps", "Customer Apps", "Employee Apps", "Admin Panels"] },
  { icon: "📈", title: "Digital Growth & SEO", desc: "SEO, performance optimisation, analytics setup and lead generation systems that compound over time.", href: "/services/digital-growth", items: ["SEO Strategy", "Performance Optimization", "Analytics Setup", "Lead Generation", "Website Maintenance"] },
];

export default function ServicesPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">All Services</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Everything Your Business<br /><span className="gradient-text">Needs to Go Digital.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Six domains of deep expertise. One unified team. No handoffs, no gaps, no excuses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-6xl mx-auto px-6 space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <Link href={s.href} className="block group">
                <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:w-12 text-4xl shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl mb-2 group-hover:text-teal-bright transition-colors">{s.title}</h2>
                    <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span key={item} className="text-xs font-medium text-teal/70 bg-teal/8 border border-teal/15 rounded-md px-2.5 py-1">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:shrink-0 flex items-center gap-2 text-sm font-semibold text-teal-bright opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Not Sure <span className="gradient-text">What You Need?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Book a free strategy session. We&apos;ll listen, ask the right questions, and tell you exactly what technology would help your business most.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book Free Session <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
