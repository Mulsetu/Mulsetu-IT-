"use client";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  {
    title: "Next.js Websites",
    desc: "Lightning-fast, SEO-optimised websites built with Next.js — perfect for corporate sites that need performance, security and scalability.",
    features: ["Server-side rendering", "Edge performance", "Built-in SEO", "CMS integration"],
  },
  {
    title: "WordPress Websites",
    desc: "Fully custom WordPress sites with bespoke themes, plugins and CMS — easy for your team to manage without any technical knowledge.",
    features: ["Custom theme design", "Plugin development", "Easy CMS", "WooCommerce ready"],
  },
  {
    title: "Wix Websites",
    desc: "Professional Wix builds for businesses that want a polished online presence with fast turnaround and zero maintenance overhead.",
    features: ["Custom Wix design", "SEO setup", "Fast delivery", "Easy self-editing"],
  },
  {
    title: "Animated & Motion Websites",
    desc: "High-impact animated websites built for branding, product launches and marketing — using GSAP, Framer Motion and Three.js to tell your story visually.",
    features: ["GSAP animations", "3D / WebGL scenes", "Scroll storytelling", "Brand-first design"],
    highlight: true,
  },
  {
    title: "Corporate & Business Sites",
    desc: "Professional, brand-first websites that communicate your credibility and convert visitors into enquiries and clients.",
    features: ["Custom design", "Mobile-first", "Lead capture forms", "Analytics setup"],
  },
  {
    title: "Landing Pages",
    desc: "High-conversion campaign landing pages designed to turn paid traffic into leads — A/B testing ready from day one.",
    features: ["Conversion-optimised", "A/B test ready", "Fast load times", "Pixel / tracking setup"],
  },
  {
    title: "E-Commerce Stores",
    desc: "Full-featured e-commerce stores with payment gateway integration, inventory management and order tracking.",
    features: ["Razorpay / Stripe", "Inventory management", "Order tracking", "Mobile app optional"],
  },
];

const stack = [
  "Next.js 14", "React", "TypeScript", "Tailwind CSS",
  "WordPress", "Wix", "GSAP", "Framer Motion", "Three.js",
  "Strapi CMS", "Sanity", "Vercel", "Cloudflare", "Razorpay", "Stripe",
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-deep pt-24">

      {/* Hero */}
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
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold">
                Book Free Consultation &rarr;
              </Link>
              <Link href="/case-studies" className="btn-outline px-8 py-4 rounded-xl font-semibold">
                View Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Mobile-first, responsive design",
              "Google Core Web Vitals optimised",
              "SEO-ready architecture from day one",
              "CMS for easy content management",
              "Analytics & conversion tracking",
              "Ongoing maintenance included",
            ].map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-bright mt-1.5 shrink-0" />
                  <span className="text-sm text-soft">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">What We Build</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                Website Types We <span className="gradient-text">Specialise In</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.07}>
                <div className={`glass-card glass-card-hover rounded-2xl p-7 h-full flex flex-col ${o.highlight ? "border-teal/25 bg-gradient-to-br from-teal/6 to-transparent" : ""}`}>
                  {o.highlight && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-teal-bright bg-teal/10 border border-teal/20 rounded-full px-2.5 py-1 mb-4 self-start">
                      <span className="w-1 h-1 rounded-full bg-teal-bright" />
                      Branding & Marketing
                    </span>
                  )}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-teal/60 to-transparent rounded-full mb-5" />
                  <h3 className="font-display font-bold text-lg mb-3">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{o.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5">
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

      {/* Tech stack */}
      <section className="py-16 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="font-display font-bold text-2xl text-center mb-8">Technology Stack</h3>
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

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Let&apos;s Build Your <span className="gradient-text">Website</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll propose the right tech stack, design direction, and timeline.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">
              Start the Conversation &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
