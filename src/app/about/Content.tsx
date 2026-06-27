"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">About Mulsetu</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Your Technology<br /><span className="gradient-text">Partner. Not a Vendor.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Mulsetu was built on a single belief — every business deserves access to
              enterprise-grade technology without the overhead of building an IT department from scratch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Who We Are</h2>
                <p className="text-muted leading-relaxed mb-5">
                  Mulsetu is the technology and AI partner arm operating under Mulsetu Agrotech Private Limited.
                  Our roots in agriculture and traditional business operations give us something most tech agencies lack —
                  a genuine understanding of how real SMEs, manufacturers, and service businesses operate.
                </p>
                <p className="text-muted leading-relaxed mb-5">
                  We apply that operational knowledge to technology. When we build an ERP for a manufacturer
                  or an automation system for a service business, we&apos;re not just writing code — we&apos;re solving
                  problems we understand from the ground up.
                </p>
                <p className="text-muted leading-relaxed">
                  We position ourselves not as a website agency, but as a full technology partner —
                  a team you can think of as your own in-house IT department.
                </p>
              </Reveal>
            </div>

            <div className="space-y-5">
              {[
                { label: "What We Believe", text: "Every business — regardless of size or industry — deserves access to enterprise-grade technology without building a department from scratch." },
                { label: "What Makes Us Different", text: "We bring business analysis, AI consulting, product strategy, and long-term support to every engagement. Not just code delivery." },
                { label: "Our Approach", text: "Listen first. Understand deeply. Recommend clearly. Execute fully. Support continuously. Six steps, zero handoff gaps." },
                { label: "Our Mission", text: "To be the dedicated technology team for businesses that want to grow digitally — without the cost, complexity, or risk of doing it alone." },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.1}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6">
                    <h3 className="font-display font-bold text-sm uppercase tracking-widest text-teal-bright mb-3">{item.label}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Want to Work <span className="gradient-text">With Us?</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">Book a free 30-minute strategy call. No commitment, no sales pressure — just a genuine conversation about your technology needs.</p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">Book a Free Call <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
