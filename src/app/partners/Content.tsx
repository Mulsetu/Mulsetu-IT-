"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, CheckCircle2, Globe, DollarSign, Users, Zap, Shield, TrendingUp } from "lucide-react";

const partnerTypes = [
  {
    type: "Referral Partner",
    badge: "Individual / Consultant",
    desc: "Freelancers, consultants, and individuals with a strong professional network who refer clients occasionally.",
    perks: ["Commission on every closed deal", "No minimum targets", "Quick onboarding", "Partner certificate"],
    color: "from-teal/10 to-transparent",
    border: "border-teal/20",
  },
  {
    type: "Agency Partner",
    badge: "Agency / Marketing Firm",
    desc: "Design agencies, marketing firms, and IT companies that want to offer technology services to their existing clients.",
    perks: ["Enhanced commission structure", "Co-branded materials", "Dedicated partner manager", "Priority client support"],
    color: "from-teal/15 to-transparent",
    border: "border-teal/30",
    featured: true,
  },
  {
    type: "Strategic Partner",
    badge: "Organisation / Incubator",
    desc: "Established organisations, incubators, accelerators, and ecosystem players with consistent deal flow.",
    perks: ["Premium commission structure", "Co-marketing campaigns", "Joint webinars & events", "Formal MOU agreement"],
    color: "from-teal/10 to-transparent",
    border: "border-teal/20",
  },
];

const steps = [
  { num: "01", icon: <Users size={20} className="text-teal-bright" />, title: "Apply & Get Approved", desc: "Fill the partner application form. We review within 48 hours and schedule a short onboarding call to understand your network and align on goals." },
  { num: "02", icon: <Shield size={20} className="text-teal-bright" />, title: "Sign the MOU", desc: "We formalise the partnership with a Memorandum of Understanding — outlining roles, commission structure, confidentiality terms, and the referral tracking process." },
  { num: "03", icon: <Globe size={20} className="text-teal-bright" />, title: "Refer Clients to Mulsetu", desc: "Introduce prospects in your network who need technology services. We provide pitch decks, case studies, and talking points so you can represent us confidently." },
  { num: "04", icon: <DollarSign size={20} className="text-teal-bright" />, title: "Earn on Every Closed Deal", desc: "When the referred client signs a contract and Mulsetu receives payment, your commission is transferred on schedule — no chasing, no delays." },
];

const benefits = [
  { icon: <DollarSign size={18} className="text-teal-bright" />, title: "Attractive Commission", desc: "Earn a meaningful share of every project value for simply making the introduction. Commission is agreed in the MOU before you start." },
  { icon: <Zap size={18} className="text-teal-bright" />, title: "We Do All the Work", desc: "You refer. We handle sales, delivery, client management, and support. You earn without lifting a finger after the introduction." },
  { icon: <Globe size={18} className="text-teal-bright" />, title: "Open to Every Country", desc: "No geographic restrictions. Partners from USA, UK, UAE, India, Europe, Africa — all welcome. Remote-first by design." },
  { icon: <Shield size={18} className="text-teal-bright" />, title: "Zero Upfront Cost", desc: "No registration fee, no monthly subscription, no minimum targets. Completely free to join and stay." },
  { icon: <Users size={18} className="text-teal-bright" />, title: "Dedicated Partner Manager", desc: "Every partner gets a direct contact at Mulsetu who handles your queries, deal updates, and commission payments personally." },
  { icon: <TrendingUp size={18} className="text-teal-bright" />, title: "Marketing Support", desc: "Co-branded pitch decks, case studies, email templates, and WhatsApp scripts — everything you need to sell Mulsetu to your network." },
];

const idealPartners = [
  "Business consultants and advisors",
  "Digital marketing & design agencies",
  "IT companies and software resellers",
  "Startup incubators and accelerators",
  "CA / CS and financial advisory firms",
  "HR consultants and recruitment agencies",
  "Business development professionals",
  "Co-working spaces and startup hubs",
  "University entrepreneurship cells",
  "Industry associations and trade bodies",
];

const partnerTypeOptions = ["Referral Partner (Individual / Consultant)", "Agency Partner (Agency / Firm)", "Strategic Partner (Organisation / Incubator / Accelerator)"];
const monthlyLeadOptions = ["1–2 leads per month", "3–5 leads per month", "6–10 leads per month", "10+ leads per month"];

type FormState = {
  name: string;
  org: string;
  country: string;
  website: string;
  email: string;
  phone: string;
  partnerType: string;
  monthlyLeads: string;
  network: string;
  why: string;
};

export default function PartnersContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "", org: "", country: "", website: "", email: "",
    phone: "", partnerType: "", monthlyLeads: "", network: "", why: "",
  });

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all";
  const labelClass = "block text-xs font-semibold text-muted uppercase tracking-wider mb-2";

  return (
    <main className="bg-deep pt-24">

      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse inline-block shrink-0" />
              Global Partner Program
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mt-5 mb-6">
              Partner with Mulsetu.<br />
              <span className="gradient-text">Earn on Every Deal.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Refer clients from your network. We deliver world-class technology.
              You earn a <strong className="text-white">competitive commission</strong> on every closed project — zero technical work required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-2">
                Apply to Partner <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn-outline px-8 py-4 rounded-xl text-lg font-semibold">
                How It Works
              </a>
            </div>
          </Reveal>

          {/* Quick stats */}
          <Reveal delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { val: "MOU", label: "Formal Agreement" },
                { val: "Global", label: "Open Worldwide" },
                { val: "48h", label: "Approval Time" },
                { val: "Free", label: "To Join" },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                  <div className="font-display font-bold text-3xl gradient-text">{s.val}</div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Simple Process</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                How the <span className="gradient-text">Partner Program Works</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="relative glass-card rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="font-display font-bold text-4xl text-white/10">{step.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-teal/30 text-2xl font-bold z-10">→</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER TIERS ── */}
      <section className="py-24 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Partnership Types</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                Choose Your <span className="gradient-text">Partnership Level</span>
              </h2>
              <p className="text-muted text-lg mt-4 max-w-xl mx-auto">All tiers are free to join. Commission structure is discussed and formalised in your MOU.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((pt, i) => (
              <Reveal key={pt.type} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 h-full border bg-gradient-to-br ${pt.color} ${pt.border} ${pt.featured ? "ring-1 ring-teal/40" : ""}`}>
                  {pt.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-deep text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <p className="text-xs font-bold tracking-widest uppercase text-teal-bright mb-2">{pt.type}</p>
                    <div className="font-display font-semibold text-lg text-white mb-1">{pt.badge}</div>
                    <p className="text-xs text-muted">Commission agreed in MOU</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-6">{pt.desc}</p>
                  <ul className="space-y-2">
                    {pt.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm text-soft">
                        <CheckCircle2 size={14} className="text-teal-bright shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag mb-4 inline-flex">Why Partner with Us</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
                Everything You Need to <span className="gradient-text">Succeed</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDEAL PARTNERS ── */}
      <section className="py-20 bg-navy/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="section-tag mb-4 inline-flex">Who Should Apply</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
                Is This the Right<br /><span className="gradient-text">Partnership for You?</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                If you work with businesses, founders, or organisations that need technology — and you want to earn on every referral without doing any technical work — the Mulsetu Partner Program is built for you.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {idealPartners.map((p, i) => (
                <Reveal key={p} delay={i * 0.04}>
                  <div className="flex items-center gap-2.5 glass-card rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-bright shrink-0" />
                    <span className="text-sm text-soft">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag mb-4 inline-flex">Apply Now</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-4">
                Start Your <span className="gradient-text">Partnership</span>
              </h2>
              <p className="text-muted text-lg">Fill the form below. We review every application within 48 hours and schedule an onboarding call.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center mx-auto mb-5">
                    <span className="text-teal-bright text-2xl font-bold">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">Application Received!</h3>
                  <p className="text-muted max-w-sm mx-auto">We&apos;ll review your application and reach out within 48 hours to schedule your onboarding call.</p>
                  <Link href="/" className="btn-outline mt-8 px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                    Back to Home <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input required type="text" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Organisation Name *</label>
                      <input required type="text" value={form.org} onChange={set("org")} placeholder="Company / agency / firm" className={inputClass} />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone / WhatsApp</label>
                      <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" className={inputClass} />
                    </div>
                  </div>

                  {/* Country + Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Country *</label>
                      <input required type="text" value={form.country} onChange={set("country")} placeholder="Your country" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Website / LinkedIn</label>
                      <input type="url" value={form.website} onChange={set("website")} placeholder="https://yourwebsite.com" className={inputClass} />
                    </div>
                  </div>

                  {/* Partner Type */}
                  <div>
                    <label className={labelClass}>Partner Type *</label>
                    <select required value={form.partnerType} onChange={set("partnerType")} className={`${inputClass} appearance-none`}>
                      <option value="" className="bg-navy">Select partner type...</option>
                      {partnerTypeOptions.map((o) => <option key={o} value={o} className="bg-navy">{o}</option>)}
                    </select>
                  </div>

                  {/* Monthly leads */}
                  <div>
                    <label className={labelClass}>Estimated Monthly Referrals</label>
                    <select value={form.monthlyLeads} onChange={set("monthlyLeads")} className={`${inputClass} appearance-none`}>
                      <option value="" className="bg-navy">How many leads can you refer?</option>
                      {monthlyLeadOptions.map((o) => <option key={o} value={o} className="bg-navy">{o}</option>)}
                    </select>
                  </div>

                  {/* Network */}
                  <div>
                    <label className={labelClass}>Tell Us About Your Network *</label>
                    <textarea
                      required
                      rows={3}
                      value={form.network}
                      onChange={set("network")}
                      placeholder="What industries do you serve? Who are your typical clients? How big is your network?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Why */}
                  <div>
                    <label className={labelClass}>Why Do You Want to Partner with Mulsetu?</label>
                    <textarea
                      rows={3}
                      value={form.why}
                      onChange={set("why")}
                      placeholder="What made you interested in our partner program?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 text-center">Something went wrong. Please email us at founder@mulsetu.com</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">{loading ? "Submitting…" : "Submit Partnership Application →"}</span>
                  </button>
                  <p className="text-xs text-muted/50 text-center">We review every application personally and respond within 48 hours.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </Reveal>
          <div className="space-y-4">
            {[
              { q: "Is there a fee to join?", a: "No. The Mulsetu Partner Program is completely free. No setup fees, monthly charges, or minimum targets." },
              { q: "When do I receive my commission?", a: "The commission payment schedule is defined in your MOU. Typically, commission is transferred after Mulsetu receives payment from the referred client. We track every deal transparently." },
              { q: "Can I partner from outside India?", a: "Absolutely. The program is global. We have partners across the US, UK, UAE, Singapore, Europe, and Africa. All communication is in English." },
              { q: "Do I need to do any technical work?", a: "None. Your role is to make the introduction. Mulsetu handles sales calls, proposals, delivery, and client management entirely." },
              { q: "What if my referral doesn't convert immediately?", a: "Referrals are tracked for 12 months. If a lead you referred converts within a year of introduction, you still earn your full commission." },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.07}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-5">
              Ready to Start <span className="gradient-text">Earning?</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              We're actively onboarding our first cohort of global partners. Apply now and be one of the first to represent Mulsetu in your market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply" className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-2">
                Apply Now <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="btn-outline px-8 py-4 rounded-xl text-lg font-semibold">
                Ask a Question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
