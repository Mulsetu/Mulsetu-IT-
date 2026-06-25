"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function ProductsPage() {
  return (
    <main className="bg-deep pt-24">

      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-tag mb-6 inline-flex">Beyond Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            Our <span className="gradient-text">Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t just build for clients — we build for the market. Mulsetu is developing its own software products
            born from real problems we&apos;ve solved across hundreds of engagements.
          </motion.p>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="pb-28 relative">
        <div className="relative max-w-6xl mx-auto px-6">

          {/* Main product — coming soon */}
          <Reveal delay={0.1}>
            <div className="glass-card rounded-3xl p-10 md:p-14 border-teal/20 bg-gradient-to-br from-teal/6 via-transparent to-purple-500/5 relative overflow-hidden mb-8 group">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal/8 blur-3xl pointer-events-none group-hover:bg-teal/12 transition-all duration-1000" />
              <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal-bright bg-teal/10 border border-teal/25 rounded-full px-4 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
                      Launching Soon
                    </span>
                    <span className="text-xs text-muted/50 tracking-widest uppercase">Product 01</span>
                  </div>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-teal to-transparent rounded-full mb-7" />

                  <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
                    In Stealth Mode
                  </h2>

                  <p className="text-muted text-lg leading-relaxed mb-8">
                    Something we&apos;ve been quietly building. Born from the exact problems we solve daily for our clients —
                    a product that gives Indian businesses the power of a full technology stack without the complexity or cost.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {["SaaS Platform", "AI-Powered", "India-First", "B2B"].map((tag) => (
                      <span key={tag} className="text-xs font-medium text-teal/70 bg-teal/8 border border-teal/15 rounded-md px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:founder@mulsetu.com?subject=Early access request — Mulsetu product"
                      className="btn-primary px-7 py-3.5 rounded-xl text-sm font-semibold"
                    >
                      Request Early Access &rarr;
                    </a>
                    <Link
                      href="/contact"
                      className="btn-outline px-7 py-3.5 rounded-xl text-sm font-semibold"
                    >
                      Talk to the Founder
                    </Link>
                  </div>
                </div>

                {/* Visual — blurred teaser */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    {/* Fake UI teaser */}
                    <div className="glass-card rounded-2xl p-6 blur-[3px] select-none pointer-events-none">
                      <div className="h-3 w-24 bg-teal/30 rounded-full mb-4" />
                      <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                      <div className="h-2 w-4/5 bg-white/8 rounded-full mb-6" />
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-12 rounded-lg bg-white/[0.05] border border-white/[0.06]" />
                        ))}
                      </div>
                      <div className="h-2 w-full bg-white/6 rounded-full mb-2" />
                      <div className="h-2 w-3/5 bg-white/5 rounded-full" />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-deep/40 backdrop-blur-[1px]">
                      <div className="text-center">
                        <div className="text-xs font-bold tracking-widest uppercase text-teal-bright mb-1">Preview Locked</div>
                        <div className="text-xs text-muted/60">Reveal at launch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* More products — placeholder row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { num: "02", label: "In Development" },
              { num: "03", label: "In Development" },
            ].map((p) => (
              <Reveal key={p.num} delay={0.15}>
                <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-[200px] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.008)_10px,rgba(255,255,255,0.008)_20px)]" />
                  <div className="relative flex items-start justify-between">
                    <span className="font-display font-bold text-5xl text-white/6">{p.num}</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/20 border border-white/10 rounded-full px-3 py-1">
                      {p.label}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-2 w-20 bg-white/8 rounded-full mb-2" />
                    <div className="h-2 w-32 bg-white/5 rounded-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Waitlist CTA */}
          <Reveal delay={0.2}>
            <div className="glass-card rounded-2xl p-10 text-center border-teal/15 bg-gradient-to-br from-teal/5 to-transparent">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                Want to Know First?
              </h3>
              <p className="text-muted text-base max-w-lg mx-auto mb-8">
                We&apos;re sharing early access with a small group before public launch. Drop us an email and we&apos;ll add you to the list.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:founder@mulsetu.com?subject=Add me to the Mulsetu product waitlist"
                  className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold"
                >
                  Join the Waitlist &rarr;
                </a>
                <Link href="/about" className="btn-outline px-8 py-3.5 rounded-xl text-sm font-semibold">
                  About Mulsetu
                </Link>
              </div>
              <p className="text-xs text-muted/40 mt-5">
                No spam. Just one email when we&apos;re ready to show you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
