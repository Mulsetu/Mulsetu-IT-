"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Bot, Mail, MessageSquare, Workflow, Users, BarChart3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offerings = [
  {
    icon: <Bot size={22} className="text-teal-bright" />,
    title: "AI Chatbots",
    desc: "Intelligent chatbots trained on your business knowledge — handle customer queries, product FAQs, support tickets, and lead qualification automatically, 24/7.",
    features: ["Custom-trained on your data", "Multi-language support", "Handoff to human agents", "Analytics dashboard"],
  },
  {
    icon: <MessageSquare size={22} className="text-teal-bright" />,
    title: "WhatsApp Automation",
    desc: "Automate your entire WhatsApp business communication — order confirmations, appointment reminders, support flows, and marketing sequences.",
    features: ["WhatsApp Business API", "Automated sequences", "Broadcast messages", "CRM integration"],
  },
  {
    icon: <Mail size={22} className="text-teal-bright" />,
    title: "Email Automation",
    desc: "Smart email sequences triggered by user behaviour — onboarding flows, nurture campaigns, follow-ups, and re-engagement automations.",
    features: ["Behaviour-triggered flows", "Drip campaigns", "A/B testing", "Deliverability optimization"],
  },
  {
    icon: <Users size={22} className="text-teal-bright" />,
    title: "Lead Qualification",
    desc: "AI systems that score, qualify and route leads automatically — so your sales team only speaks to high-intent prospects.",
    features: ["AI lead scoring", "Automatic routing", "CRM sync", "Follow-up automation"],
  },
  {
    icon: <Zap size={22} className="text-teal-bright" />,
    title: "AI Agents",
    desc: "Autonomous AI agents that complete multi-step tasks — data entry, report generation, research, scheduling, and complex workflows without human intervention.",
    features: ["Multi-step task execution", "Web + data access", "Tool integrations", "Scheduled runs"],
  },
  {
    icon: <Workflow size={22} className="text-teal-bright" />,
    title: "Workflow Automation",
    desc: "Map your manual, repetitive workflows and automate them end-to-end — across your CRM, ERP, communication tools and data systems.",
    features: ["No-code + custom builds", "Cross-tool automation", "Error handling", "Audit logs"],
  },
];

const benefits = [
  "Reduce manual work by 60–80% in core operations",
  "Respond to customers in seconds, not hours",
  "Qualify leads automatically while you sleep",
  "Scale operations without scaling headcount",
  "Consistent, error-free process execution",
  "Full visibility with dashboards and logs",
];

const stack = ["OpenAI GPT-4o", "Claude AI", "LangChain", "WhatsApp Business API", "Zapier / Make", "n8n", "Python", "Node.js", "Webhooks", "REST APIs"];

export default function AIAutomationPage() {
  return (
    <main className="bg-deep pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block" />
              AI &amp; Automation
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Automate the Work.<br />
              <span className="gradient-text">Scale the Business.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We build AI agents, chatbots, and end-to-end automation systems that eliminate
              manual work, qualify leads, and handle customer operations — around the clock.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                Get a Free Automation Audit <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-outline px-8 py-4 rounded-xl font-semibold">
                How We Build It
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 border-y border-white/[0.06] bg-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-bright mt-0.5 shrink-0" />
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
                Complete AI &amp; Automation <span className="gradient-text">Stack</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
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

      {/* Tech Stack */}
      <section className="py-16 bg-navy/40 border-y border-white/[0.06]">
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

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ready to <span className="gradient-text">Automate?</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Book a free automation audit. We'll map your top 3 automation opportunities and
              show you exactly what&apos;s possible.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">
              Book Free Audit <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
