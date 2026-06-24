"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function MobileAppsPage() {
  const apps = [
    { title: "Android Apps", desc: "Native Android apps optimised for performance and battery life — published on Google Play Store.", features: ["Native performance", "Play Store publishing", "Push notifications", "Offline support"] },
    { title: "iOS Apps", desc: "Native iOS apps built with Swift, designed to Apple's HIG standards — published on App Store.", features: ["Swift / SwiftUI", "App Store publishing", "Apple Pay ready", "Siri shortcuts"] },
    { title: "Flutter Cross-Platform", desc: "One codebase, two platforms — Flutter apps that look and feel native on both Android and iOS.", features: ["Single codebase", "Native performance", "Custom UI components", "Fast delivery"] },
    { title: "Customer-Facing Apps", desc: "Apps your customers use — product browsing, order tracking, appointment booking, loyalty programmes.", features: ["Product catalogues", "Order tracking", "Booking systems", "Loyalty & rewards"] },
    { title: "Employee & Field Apps", desc: "Internal apps for your team — attendance, task management, field reporting, and real-time communication.", features: ["Attendance tracking", "Task management", "GPS field tracking", "Offline data sync"] },
    { title: "Admin Panels", desc: "Web-based admin dashboards to manage your app's data, users, orders and analytics in real time.", features: ["User management", "Order management", "Analytics", "Role-based access"] },
  ];

  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Mobile App Development</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Apps Your Users<br /><span className="gradient-text">Will Love to Use.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Android, iOS, and Flutter apps built for customers, employees and field teams —
              designed to be fast, reliable and genuinely useful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Discuss Your App Idea <ArrowRight size={16} /></Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">Our Development Process</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div className="text-center mb-16"><h2 className="font-display font-bold text-4xl md:text-5xl">What We <span className="gradient-text">Build</span></h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <h3 className="font-display font-bold text-lg mb-3">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{a.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">{a.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-soft"><span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />{f}</li>))}</ul>
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
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Have an <span className="gradient-text">App Idea?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Tell us the problem you want to solve. We&apos;ll help you build the right solution.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book a Free Discovery Call <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
