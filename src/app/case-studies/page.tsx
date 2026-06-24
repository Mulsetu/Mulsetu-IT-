"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CaseStudiesPage() {
  return (
    <main className="bg-deep pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Case Studies & Work</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Problems Solved.<br /><span className="gradient-text">Results Delivered.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Real projects, real outcomes. Case studies and project showcases coming soon —
              we&apos;re documenting our work and will publish it here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-16 text-center border-dashed">
            <div className="text-5xl mb-5">🚧</div>
            <h2 className="font-display font-bold text-2xl mb-4">Case Studies Coming Soon</h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              We&apos;re in the process of documenting our project work and results. 
              In the meantime, book a call and we&apos;ll walk you through relevant examples for your industry.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
              Let&apos;s Talk About Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
