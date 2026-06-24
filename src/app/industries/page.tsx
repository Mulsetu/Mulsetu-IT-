"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const industries = [
  { icon: "🌾", label: "Agriculture", desc: "Operational automation and digital tools for agri-businesses, trading companies and cooperatives. Inventory, procurement, billing and logistics systems for the agricultural supply chain.", solutions: ["Procurement management", "Inventory & warehouse", "Billing & payments", "Supplier portals"] },
  { icon: "🏭", label: "Manufacturing", desc: "ERP, production tracking, quality control, inventory management and dispatch systems — built to handle the complexity of manufacturing operations.", solutions: ["Production ERP", "Inventory management", "Quality tracking", "Dispatch systems"] },
  { icon: "🎓", label: "Educational Institutes", desc: "School and college ERP systems, fee management, attendance tracking, parent communication portals, and e-learning platforms.", solutions: ["School ERP", "Fee management", "Parent portal", "E-learning"] },
  { icon: "🏥", label: "Healthcare", desc: "Patient management, appointment booking, medical billing, pharmacy management and clinical workflow automation for hospitals and clinics.", solutions: ["Patient management", "Appointment booking", "Medical billing", "Lab portals"] },
  { icon: "🏘️", label: "Real Estate", desc: "CRM for lead management, property listing portals, site visit tracking, booking management and automated follow-up systems.", solutions: ["Lead CRM", "Property portals", "Booking systems", "Follow-up automation"] },
  { icon: "🛍️", label: "Retail", desc: "E-commerce stores, POS integrations, inventory management, loyalty programmes and WhatsApp marketing automation.", solutions: ["E-commerce", "POS integration", "Inventory", "WhatsApp automation"] },
  { icon: "🚚", label: "Logistics", desc: "Fleet tracking, delivery management, driver apps, customer tracking portals and automated delivery notifications.", solutions: ["Fleet tracking", "Delivery management", "Driver apps", "Customer tracking"] },
  { icon: "🚀", label: "Startups", desc: "MVP development, SaaS platform builds, rapid iteration and technical co-founding support — from idea to product in weeks.", solutions: ["MVP builds", "SaaS platforms", "Rapid iteration", "Technical advisory"] },
  { icon: "💼", label: "Professional Services", desc: "Client portals, CRM, project management, billing, and WhatsApp automation for consultants, agencies, law firms and service companies.", solutions: ["Client portals", "Project management", "Billing", "Automation"] },
];

export default function IndustriesPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Industries</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Built for<br /><span className="gradient-text">Every Sector.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              We serve businesses across nine industries — from agriculture to startups.
              Our solutions are never generic; they&apos;re designed around how your industry actually operates.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 0.06}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <div className="text-3xl mb-4">{ind.icon}</div>
                  <h3 className="font-display font-bold text-lg mb-3">{ind.label}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{ind.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {ind.solutions.map((s) => (
                      <span key={s} className="text-xs text-soft flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{s}
                      </span>
                    ))}
                  </div>
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
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Your Industry. <span className="gradient-text">Your Solution.</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Tell us about your business and we&apos;ll show you exactly how we can help.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book Free Consultation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
