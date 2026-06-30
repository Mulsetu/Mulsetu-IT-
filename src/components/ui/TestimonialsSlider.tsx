"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Stat = { label: string; value: string };
type Entry = {
  types: string[];
  company: string;
  location: string;
  logo: string | null;
  website: string | null;
  founder: string;
  role: string;
  quote: string | null;
  desc: string;
  tags: string[];
  stats: Stat[];
};

const entries: Entry[] = [
  {
    types: ["Client"],
    company: "TrackMyStartup",
    location: "India",
    logo: "/logos/trackmystartup.svg",
    website: "https://www.trackmystartup.com",
    founder: "Dr. Saeel Momin",
    role: "Founder, TrackMyStartup",
    quote: "Best team I have worked with. The quality of work they have delivered is exceptional. This team works as my own IT team — fully dedicated, fully accountable.",
    desc: "End-to-end SaaS platform with 7 specialized dashboards, built from scratch and scaled globally.",
    tags: ["SaaS Platform", "7 Dashboards", "Multi-role", "Startup Ecosystem"],
    stats: [
      { label: "Dashboards Built", value: "7" },
      { label: "Countries Scaled", value: "30+" },
      { label: "User Roles", value: "7" },
    ],
  },
  {
    types: ["Client"],
    company: "Judge My Lawyer",
    location: "India",
    logo: "/logos/jml.png",
    website: "https://www.judgemylawyer.com",
    founder: null,
    role: null,
    quote: null,
    desc: "India's premier legal analytics platform. Mulsetu built the entire technology platform — processing millions of court cases across India to rank lawyers, judges, and courts by verified performance data: win rates, loss rates, settlement patterns, case durations, and hearing counts. Citizens can now find and compare legal counsel backed by real data.",
    tags: ["Legal Analytics", "Data Platform", "Lawyer Rankings", "Court Data", "Full Build"],
    stats: [],
  },
  {
    types: ["Partner", "Client"],
    company: "GVI — Gold Ventures Investment",
    location: "Vienna, Austria",
    logo: "/logos/gvi.png",
    website: "https://www.linkedin.com/company/gold-ventures-investment/posts/?feedView=all",
    founder: null,
    role: null,
    quote: null,
    desc: "GVI is a global investment advisory firm based in Austria, cooperating with international partners to assist startups in fundraising — including grants and support from Austrian funding agencies — and global expansion. GVI acts as a Venture Partner for investors, VCs, and family offices.",
    tags: ["Fundraising", "Grants", "Venture Capital", "Global Expansion", "Startups"],
    stats: [],
  },
];

const typeStyle: Record<string, string> = {
  Client: "bg-teal/15 text-teal-bright border-teal/30",
  Partner: "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % entries.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + entries.length) % entries.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [paused, next]);

  const entry = entries[current];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slider */}
      <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: 380 }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 border-teal/20 bg-gradient-to-br from-teal/5 to-transparent">
              {entry.quote ? (
                /* ── Testimonial layout (has a real quote) ── */
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-2 mb-5">
                        {entry.types.map((type) => (
                          <span key={type} className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${typeStyle[type]}`}>
                            {type}
                          </span>
                        ))}
                      </div>
                      <div className="text-teal-bright text-4xl leading-none mb-4 font-display">&ldquo;</div>
                      <p className="text-lg md:text-xl text-soft leading-relaxed font-medium mb-8">{entry.quote}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal/30 to-teal/10 border border-teal/30 flex items-center justify-center shrink-0">
                        <span className="text-teal-bright font-bold text-lg">{entry.founder!.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{entry.founder}</p>
                        {entry.website
                          ? <a href={entry.website} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-bright hover:underline">{entry.role}</a>
                          : <p className="text-sm text-teal-bright">{entry.role}</p>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      {entry.logo
                        ? <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5"><img src={entry.logo} alt={entry.company} className="w-full h-full object-contain" /></div>
                        : <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0"><span className="text-teal-bright font-bold">{entry.company.charAt(0)}</span></div>
                      }
                      <div>
                        <p className="font-display font-bold text-base leading-tight">{entry.company}</p>
                        <p className="text-xs text-muted">{entry.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{entry.desc}</p>
                    {entry.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {entry.stats.map((s) => (
                          <div key={s.label} className="glass-card rounded-xl p-3 text-center">
                            <div className="font-display font-bold text-xl gradient-text">{s.value}</div>
                            <div className="text-[11px] text-muted mt-0.5 leading-tight">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">{tag}</span>
                      ))}
                    </div>
                    {entry.website && (
                      <a href={entry.website} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 w-fit">
                        Visit {entry.company.split(" ")[0]} →
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* ── Partner showcase layout (no quote) ── */
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="flex flex-col gap-5 flex-1">
                    <div className="flex gap-2">
                      {entry.types.map((type) => (
                        <span key={type} className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${typeStyle[type]}`}>
                          {type}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-5">
                      {entry.logo && (
                        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-2.5">
                          <img src={entry.logo} alt={entry.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <p className="font-display font-bold text-2xl leading-tight">{entry.company}</p>
                        <p className="text-sm text-muted mt-0.5">{entry.location}</p>
                      </div>
                    </div>
                    <p className="text-base text-soft leading-relaxed max-w-2xl">{entry.desc}</p>
                  </div>
                  <div className="flex flex-col gap-4 md:w-56 shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">{tag}</span>
                      ))}
                    </div>
                    {entry.website && (
                      <a href={entry.website} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 w-fit">
                        Visit GVI →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted hover:text-white hover:border-teal/30 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {entries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx, idx > current ? 1 : -1)}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-6 h-2 bg-teal-bright"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted hover:text-white hover:border-teal/30 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
