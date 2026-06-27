"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const posts = [
  {
    slug: "ai-automation-saves-time",
    title: "How AI Automation Is Saving Businesses 20+ Hours Per Week",
    excerpt:
      "Repetitive tasks are quietly draining your team's capacity. Here's how modern AI tools — chatbots, email workflows, and intelligent agents — are giving those hours back and compounding into real operational advantage.",
    tags: ["AI", "Automation", "Productivity"],
    date: "June 10, 2026",
    readTime: "5 min read",
    cover:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    slug: "saas-vs-custom-software",
    title: "SaaS Platform vs. Custom Software: What Growing Businesses Actually Need",
    excerpt:
      "Off-the-shelf SaaS tools can only take you so far. Discover when a custom-built platform becomes the competitive moat your business can't afford to skip — and how to know which path is right for you.",
    tags: ["SaaS", "Software", "Strategy"],
    date: "May 22, 2026",
    readTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    slug: "cost-of-digital-delay",
    title: "The Real Cost of Delaying Your Digital Transformation",
    excerpt:
      "Every month you operate on manual processes is a month your competitors gain ground. We break down the true — often invisible — cost of not digitizing your operations, and how to start without overwhelm.",
    tags: ["Digital Transformation", "ROI", "Operations"],
    date: "April 15, 2026",
    readTime: "7 min read",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    slug: "tech-stack-guide-founders",
    title: "Building Your First Tech Stack: A Non-Technical Founder's Guide",
    excerpt:
      "Frontend, backend, cloud, APIs — the jargon is endless. This plain-English guide walks you through what every growing business actually needs in its technology stack, and the questions you must ask before building anything.",
    tags: ["Tech Stack", "Startups", "Guide"],
    date: "March 28, 2026",
    readTime: "8 min read",
    cover:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="bg-deep pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag mb-6 inline-flex">Insights & Resources</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mt-5 mb-6">
              The Mulsetu <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Practical thinking on AI, automation, SaaS, and building technology that actually moves the needle for growing businesses — written by practitioners, not theorists.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="glass-card glass-card-hover rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase text-teal-bright mb-4">Featured Article</span>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug mb-4 group-hover:text-teal-bright transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted/60">
                      <span>{featured.date}</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal/10 border border-teal/20 text-teal-bright">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-base md:text-lg leading-snug mb-3 group-hover:text-teal-bright transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted/60 mt-auto pt-4 border-t border-white/[0.06]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/6 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Want Expert Guidance for <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Book a free strategy call and let our team map out a technology roadmap tailored to your goals.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              Book Free Consultation &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
