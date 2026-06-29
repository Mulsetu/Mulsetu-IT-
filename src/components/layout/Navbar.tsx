"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "AI & Automation", href: "/services/ai-automation", desc: "Chatbots, workflows, AI agents" },
  { label: "Website Development", href: "/services/website-development", desc: "Next.js, corporate, e-commerce" },
  { label: "SaaS Development", href: "/services/saas-development", desc: "Multi-tenant platforms, portals" },
  { label: "Custom Software & ERP", href: "/services/custom-software", desc: "ERP, billing, inventory, CRM" },
  { label: "Mobile Apps", href: "/services/mobile-apps", desc: "Android, iOS, Flutter" },
  { label: "Digital Growth & SEO", href: "/services/digital-growth", desc: "SEO, performance, lead gen" },
  { label: "Data Scraping & Research", href: "/services/data-scraping", desc: "Public data, market intelligence" },
  { label: "MVP Development", href: "/services/mvp-development", desc: "Idea to live product in 4–8 weeks" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inOrbSection, setInOrbSection] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Cache the element ref once found — services-orbit is dynamically imported
    // so it won't be in the DOM on mount, only after the user starts scrolling
    let orbEl: HTMLElement | null = null;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!orbEl) orbEl = document.getElementById('services-orbit');
      if (!orbEl) return;

      const rect = orbEl.getBoundingClientRect();
      // Only hide when the section is actively pinned at the top (user is scrolling through it)
      setInOrbSection(rect.top <= 0 && rect.bottom > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inOrbSection ? -100 : 0, opacity: inOrbSection ? 0 : 1 }}
        transition={{ duration: inOrbSection ? 0.35 : 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ pointerEvents: inOrbSection ? 'none' : 'auto' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="gradient-text">Mul</span>
              <span className="text-white">setu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted hover:text-white transition-colors">
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[520px]"
                  >
                    <div className="glass-card rounded-2xl p-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                          >
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-teal-bright transition-colors">
                                {s.label}
                              </div>
                              <div className="text-xs text-muted mt-0.5">{s.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/[0.06] mt-1 pt-2 px-2 pb-1">
                        <Link
                          href="/services"
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.04] transition-colors group"
                        >
                          <span className="text-sm text-muted group-hover:text-white transition-colors">View all services</span>
                          <span className="text-teal text-xs">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/dedicated-it-team" className="text-sm font-medium text-muted hover:text-white transition-colors">
              IT Team
            </Link>
            <Link href="/our-work" className="text-sm font-medium text-muted hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="/process" className="text-sm font-medium text-muted hover:text-white transition-colors">
              Process
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted hover:text-white transition-colors">
              About
            </Link>
            <Link href="/products" className="text-sm font-medium text-teal-bright/80 hover:text-teal-bright transition-colors flex items-center gap-1.5">
              Products
              <span className="text-[10px] font-bold tracking-widest uppercase bg-teal/10 border border-teal/25 text-teal rounded-full px-1.5 py-0.5 leading-none">New</span>
            </Link>
            <Link href="/partners" className="text-sm font-medium text-muted hover:text-white transition-colors flex items-center gap-1.5">
              Partners
              <span className="text-[10px] font-bold tracking-widest uppercase bg-teal/10 border border-teal/25 text-teal rounded-full px-1.5 py-0.5 leading-none">Earn</span>
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5 rounded-lg relative overflow-hidden"
            >
              <span className="relative z-10">Book Free Call</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-muted hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-deep/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold tracking-widest text-muted uppercase mb-2">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="p-3 rounded-xl hover:bg-white/[0.05] transition-colors font-medium block"
                >
                  {s.label}
                </Link>
              ))}
              <div className="border-t border-white/[0.06] my-3" />
              {[
                { label: "Dedicated IT Team", href: "/dedicated-it-team" },
                { label: "Our Work", href: "/our-work" },
                { label: "Process", href: "/process" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Partner Program", href: "/partners" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-3 font-medium text-muted hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center py-4 rounded-xl mt-4 font-semibold text-base"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
