"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
  "AI & Automation",
  "Website Development",
  "SaaS Development",
  "Custom Software & ERP",
  "Mobile App Development",
  "Digital Growth & SEO",
  "Dedicated IT Team",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend / form service
    setSubmitted(true);
  };

  return (
    <main className="bg-deep pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-6 inline-flex">Let&apos;s Talk</span>
              <h1 className="font-display font-bold text-5xl md:text-6xl mt-5 mb-6">
                Need a <span className="gradient-text">Technology Partner?</span>
              </h1>
              <p className="text-muted text-xl max-w-2xl mx-auto">
                Book a free 30-minute strategy session. We&apos;ll understand your needs and
                tell you exactly how we can help — no obligation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <Reveal delay={0.1}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-5">Ways to Reach Us</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@mulsetu.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                        <Mail size={18} className="text-teal-bright" />
                      </div>
                      <div>
                        <div className="text-xs text-muted mb-0.5">Email Us</div>
                        <div className="text-sm font-medium group-hover:text-teal-bright transition-colors">hello@mulsetu.com</div>
                      </div>
                    </a>
                    <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <MessageCircle size={18} className="text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-muted mb-0.5">WhatsApp</div>
                        <div className="text-sm font-medium">Chat Directly</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Calendar size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-muted mb-0.5">Book a Call</div>
                        <div className="text-sm font-medium">30-min free strategy session</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-teal/8 to-transparent border-teal/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-teal-bright mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {["Reply within 4 business hours", "Free 30-minute strategy session", "Clear technology roadmap proposal", "No-obligation, no sales pressure"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-soft">
                        <CheckCircle2 size={14} className="text-teal-bright mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="glass-card rounded-2xl p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 size={32} className="text-teal-bright" />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-3">Message Sent!</h3>
                      <p className="text-muted">We&apos;ll get back to you within 4 business hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Full Name *</label>
                          <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Company Name</label>
                          <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Your company" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Email *</label>
                          <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                          <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Service Interested In</label>
                        <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal/40 transition-all appearance-none">
                          <option value="" className="bg-navy">Select a service...</option>
                          {services.map(s => <option key={s} value={s} className="bg-navy">{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Tell Us More *</label>
                        <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Describe your project, what you're trying to solve, or what you need help with..." className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all resize-none" />
                      </div>
                      <button type="submit" className="btn-primary w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2">
                        <span className="relative z-10 flex items-center gap-2">Send Message <ArrowRight size={16} /></span>
                      </button>
                      <p className="text-xs text-muted/50 text-center">We&apos;ll reply within 4 business hours. No spam, ever.</p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
