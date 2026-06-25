"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Custom Software & ERP", href: "/services/custom-software" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Digital Growth & SEO", href: "/services/digital-growth" },
];

const company = [
  { label: "About Mulsetu", href: "/about" },
  { label: "How We Work", href: "/process" },
  { label: "Dedicated IT Team", href: "/dedicated-it-team" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tech Stack", href: "/tech-stack" },
];

const industries = [
  "Agriculture", "Manufacturing", "Education",
  "Healthcare", "Real Estate", "Retail",
  "Logistics", "Startups", "Professional Services"
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy mt-0">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="gradient-text">Mul</span><span className="text-white">setu</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Your dedicated technology and AI partner. We work like your in-house IT team — without the overhead.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:founder@mulsetu.com" className="text-sm text-muted hover:text-teal-bright transition-colors">
                founder@mulsetu.com
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="text-sm text-muted hover:text-teal-bright transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-muted hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-5">Industries</h4>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li key={ind}>
                  <Link href="/industries" className="text-sm text-muted hover:text-white transition-colors">
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © 2026 Mulsetu Agrotech Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-teal/60 italic font-display">
            "Think of us as your in-house IT team."
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-muted hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
