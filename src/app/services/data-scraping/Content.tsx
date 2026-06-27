"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Database,
  Building2, BarChart3, Newspaper, MapPin, ShoppingCart, Globe,
  AlertTriangle, FileText
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  {
    icon: <Building2 size={22} className="text-teal-bright" />,
    title: "Business Directory Data",
    desc: "Collect company names, addresses, contact details, and business categories from publicly listed directories like Justdial, IndiaMART, Google Maps business listings, and government trade portals.",
    features: ["Company name & category", "Public contact info", "Location & region", "Industry classification"],
  },
  {
    icon: <BarChart3 size={22} className="text-teal-bright" />,
    title: "Competitor & Market Pricing",
    desc: "Track publicly displayed prices, product listings, and availability from competitor websites and e-commerce platforms — updated on your schedule.",
    features: ["Price monitoring", "Product availability", "Feature comparison", "Historical trend tracking"],
  },
  {
    icon: <Globe size={22} className="text-teal-bright" />,
    title: "Government & Public Records",
    desc: "Extract data from government portals — tender listings, regulatory filings, court records, land registry, and public procurement notices that are open for public access.",
    features: ["Tender & bid data", "Regulatory filings", "Public procurement", "Land & property records"],
  },
  {
    icon: <Newspaper size={22} className="text-teal-bright" />,
    title: "News & Media Monitoring",
    desc: "Aggregate news articles, press releases, and media mentions from public news portals to track brand mentions, industry news, or competitor activity.",
    features: ["Keyword-based monitoring", "Sentiment tagging", "Source deduplication", "Scheduled delivery"],
  },
  {
    icon: <MapPin size={22} className="text-teal-bright" />,
    title: "Real Estate & Property Data",
    desc: "Scrape publicly listed property data from real estate portals — listings, prices, locations, and agent information to support market research or lead generation.",
    features: ["Listing price & type", "Location & pincode", "Agent/developer info", "Historical price data"],
  },
  {
    icon: <ShoppingCart size={22} className="text-teal-bright" />,
    title: "E-Commerce Intelligence",
    desc: "Collect publicly available product data, reviews, ratings, and category structures from e-commerce platforms to power catalogue management, pricing strategy, or market research.",
    features: ["Product titles & SKUs", "Public ratings & reviews", "Category mapping", "Stock status"],
  },
];

const compliance = [
  {
    icon: <ShieldCheck size={20} className="text-teal-bright" />,
    rule: "Public data only",
    detail: "We only access pages that do not require login, authentication, or any form of account access. No scraping behind paywalls, login walls, or access-restricted content — ever.",
  },
  {
    icon: <FileText size={20} className="text-teal-bright" />,
    rule: "robots.txt respected",
    detail: "Before any scraping begins, we review the target site's robots.txt file and honour all disallow directives. We do not override or circumvent crawl restrictions.",
  },
  {
    icon: <AlertTriangle size={20} className="text-teal-bright" />,
    rule: "Rate limiting & polite crawling",
    detail: "We configure crawl delays and request intervals to avoid overloading servers. Our crawlers behave like responsible visitors — not aggressive bots.",
  },
  {
    icon: <ShieldCheck size={20} className="text-teal-bright" />,
    rule: "No personal data collection",
    detail: "We do not collect personally identifiable information (PII) such as Aadhaar numbers, email addresses, phone numbers, or any individual-level private data. DPDP Act (India) and GDPR compliant.",
  },
  {
    icon: <FileText size={20} className="text-teal-bright" />,
    rule: "Terms of Service review",
    detail: "We perform a legal review of each target website's Terms of Service before commencing any project. If a site prohibits scraping, we advise alternative data acquisition methods.",
  },
  {
    icon: <AlertTriangle size={20} className="text-teal-bright" />,
    rule: "No copyright infringement",
    detail: "Collected data is used only for structured intelligence — we do not reproduce copyrighted articles, images, or creative content. Data is transformed into structured datasets, not duplicated.",
  },
];

const useCases = [
  "Build a lead database from public business directories",
  "Monitor competitor pricing and product changes daily",
  "Track government tenders relevant to your industry",
  "Aggregate news and brand mentions for PR analysis",
  "Research real estate markets for investment decisions",
  "Build training datasets from publicly licensed sources",
  "Map supplier or distributor landscapes from public listings",
  "Enrich your CRM with publicly available company info",
];

const stack = [
  "Python", "Scrapy", "Playwright", "Puppeteer", "BeautifulSoup",
  "Node.js", "PostgreSQL", "MongoDB", "Pandas", "Apache Airflow",
  "Bright Data", "REST APIs", "Google Sheets API", "AWS S3"
];

export default function DataScrapingPage() {
  return (
    <main className="bg-deep pt-24">

      {/* Hero */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(76,215,246,0.1) 0%, transparent 60%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block" />
              Data Scraping &amp; Research
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mt-5 mb-6">
              Turn Public Data Into<br />
              <span className="gradient-text">Business Intelligence.</span>
            </h1>
            <p className="text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              We collect, clean and structure publicly available data from the web — business directories,
              government portals, market data, and competitor intelligence — delivered as clean, ready-to-use datasets.
            </p>
            <p className="text-teal-bright/80 text-sm font-medium mb-10">
              100% legal · Public data only · DPDP &amp; GDPR compliant
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                Discuss Your Data Needs <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-semibold">
                How We Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Legal compliance banner — prominent, builds trust */}
      <section className="py-10 border-y border-teal/20 bg-gradient-to-r from-teal/5 via-teal/10 to-teal/5">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-teal/10 border border-teal/30 flex items-center justify-center">
                <ShieldCheck size={24} className="text-teal-bright" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg mb-1">We Only Scrape What Is Public &amp; Permitted</p>
                <p className="text-sm text-muted leading-relaxed">
                  Every project begins with a legal review of the target website&apos;s Terms of Service and robots.txt.
                  We do not access login-protected pages, collect personal data, or violate any platform&apos;s crawl policies.
                  If a source prohibits scraping, we tell you upfront and suggest compliant alternatives.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we collect */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-tag mb-4 inline-flex">What We Collect</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4">
                Data Sources We <span className="gradient-text">Specialise In</span>
              </h2>
              <p className="text-muted text-base md:text-lg max-w-xl mx-auto mt-4">
                All sources are publicly accessible — no credentials, no private APIs, no terms violations.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-5">
                    {o.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{o.desc}</p>
                  <ul className="space-y-1.5">
                    {o.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-soft">
                        <span className="w-1 h-1 rounded-full bg-teal/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance rules */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-tag mb-4 inline-flex">Rules We Follow</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4">
                Our Compliance <span className="gradient-text">Principles</span>
              </h2>
              <p className="text-muted text-base md:text-lg max-w-xl mx-auto mt-4">
                Legal data collection is not optional — it is the foundation of every project we take on.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compliance.map((c, i) => (
              <Reveal key={c.rule} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-6 flex gap-4 h-full">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mt-0.5">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-2">{c.rule}</h3>
                    <p className="text-sm text-muted leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag mb-4 inline-flex">Use Cases</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-4">
                What Businesses <span className="gradient-text">Use This For</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {useCases.map((u, i) => (
              <Reveal key={u} delay={i * 0.06}>
                <div className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-bright mt-0.5 shrink-0" />
                  <span className="text-sm text-soft">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-14 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="font-display font-bold text-2xl text-center mb-8">Tools &amp; Technologies We Use</h3>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <span className="glass-card rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-white hover:border-teal/30 transition-colors">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="glass-card rounded-2xl p-6 border-yellow-500/20 bg-yellow-500/5">
              <div className="flex gap-3">
                <AlertTriangle size={18} className="text-yellow-400/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-yellow-300/80 mb-1">Important Legal Note</p>
                  <p className="text-xs text-muted/80 leading-relaxed">
                    Mulsetu performs data collection only on publicly accessible web pages that permit crawling under their Terms of Service and robots.txt.
                    We do not collect personal data as defined under India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023) or the EU General Data Protection Regulation (GDPR).
                    All client data requests are reviewed on a case-by-case basis. We reserve the right to decline any project that conflicts with applicable law, platform policies, or ethical standards.
                    This service is not intended for and will not be used for surveillance, competitive espionage, or any form of illegal intelligence gathering.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Ready to Turn Data Into <span className="gradient-text">Decisions?</span>
            </h2>
            <p className="text-muted text-base md:text-lg mb-8 max-w-xl mx-auto">
              Tell us what data you need and where it lives. We&apos;ll assess feasibility, check compliance,
              and deliver clean, structured datasets ready to use.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center gap-2">
              Discuss Your Data Needs <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
