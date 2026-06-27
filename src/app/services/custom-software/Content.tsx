"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  { title: "ERP Systems", desc: "End-to-end Enterprise Resource Planning tailored to your business — not a generic off-the-shelf product that requires expensive customisation.", features: ["Finance & accounting", "HR & payroll", "Production tracking", "Custom reports"] },
  { title: "Billing & Invoicing Software", desc: "GST-compliant billing software with automated invoice generation, payment tracking, outstanding alerts and client portals.", features: ["GST invoices", "Payment tracking", "Auto reminders", "Client portal"] },
  { title: "Inventory Management", desc: "Real-time stock tracking, multi-warehouse support, reorder triggers, barcode scanning and supplier management.", features: ["Multi-warehouse", "Reorder automation", "Barcode support", "Supplier tracking"] },
  { title: "CRM Systems", desc: "Customer relationship management built around your sales process — pipeline tracking, follow-up automation and performance reporting.", features: ["Sales pipeline", "Follow-up automation", "Team performance", "WhatsApp integration"] },
  { title: "School ERP", desc: "Complete school management — admissions, fee collection, timetabling, attendance, report cards and parent communication.", features: ["Fee management", "Attendance tracking", "Report cards", "Parent portal"] },
  { title: "HR Management Systems", desc: "Employee records, leave management, payroll computation, performance reviews and document management in one system.", features: ["Leave management", "Payroll", "Performance reviews", "Document store"] },
];

export default function CustomSoftwarePage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Custom Software &amp; ERP</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Software That Fits<br /><span className="gradient-text">Your Workflow.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              ERP, billing, inventory, CRM, School ERP and HR systems built around how your
              business actually operates — not how a vendor thinks it should.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Discuss Your Requirements <ArrowRight size={16} /></Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">How We Build It</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div className="text-center mb-16"><h2 className="font-display font-bold text-4xl md:text-5xl">What We <span className="gradient-text">Build</span></h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Replace Your <span className="gradient-text">Manual Processes</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Tell us what you&apos;re managing manually. We&apos;ll design the right system for you.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Get a Free System Audit <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
