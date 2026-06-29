import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ClientShell from "@/components/layout/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mulsetu.com"),
  title: {
    default: "Mulsetu — Your Dedicated IT Team & Technology Partner",
    template: "%s | Mulsetu",
  },
  description:
    "Mulsetu is your global technology and AI partner. We build software, automate operations, and manage technology end-to-end — so you don't have to hire an entire IT department. Serving businesses worldwide.",
  keywords: [
    "software development company",
    "AI automation",
    "ERP development",
    "SaaS development",
    "mobile app development",
    "website development",
    "digital growth",
    "dedicated IT team",
    "technology partner",
    "custom software",
    "AI consulting",
    "digital transformation",
    "tech outsourcing",
    "product development",
  ],
  authors: [{ name: "Mulsetu" }],
  creator: "Mulsetu",
  openGraph: {
    type: "website",
    siteName: "Mulsetu",
    title: "Mulsetu — Your Dedicated IT Team & Technology Partner",
    description:
      "Mulsetu is your global technology and AI partner. We build software, automate operations, and manage technology — so you don't have to hire an entire IT department. Serving businesses worldwide.",
    url: "https://mulsetu.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mulsetu — Technology Partner" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulsetu — Your Dedicated IT Team & Technology Partner",
    description:
      "We build software, automate operations, and manage technology — so you don't have to hire an entire IT department.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mulsetu.com" },
  icons: { icon: "/favicon.svg" },
  other: { "theme-color": "#05080f" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://mulsetu.com/#organization",
                  name: "Mulsetu",
                  legalName: "Mulsetu Agrotech Private Limited",
                  alternateName: "Mulsetu",
                  url: "https://mulsetu.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://mulsetu.com/favicon.svg",
                    caption: "Mulsetu — Technology Partner",
                  },
                  email: "founder@mulsetu.com",
                  description:
                    "Mulsetu is a global technology and AI partner that works as a dedicated IT team for businesses worldwide. We build SaaS platforms, custom software, AI automation, mobile apps, and websites — and manage technology end-to-end for founders and companies globally.",
                  foundingDate: "2024",
                  areaServed: "Worldwide",
                  serviceArea: {
                    "@type": "AdministrativeArea",
                    name: "Worldwide",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "founder@mulsetu.com",
                    availableLanguage: ["English"],
                    areaServed: "Worldwide",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/mulsetu",
                  ],
                  knowsAbout: [
                    "AI Automation",
                    "SaaS Development",
                    "Custom Software Development",
                    "Mobile App Development",
                    "Website Development",
                    "ERP Systems",
                    "Digital Transformation",
                    "Dedicated IT Team",
                    "Data Scraping",
                    "Digital Growth",
                    "SEO",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Technology Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Automation", url: "https://mulsetu.com/services/ai-automation" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Development", url: "https://mulsetu.com/services/saas-development" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software & ERP", url: "https://mulsetu.com/services/custom-software" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://mulsetu.com/services/website-development" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", url: "https://mulsetu.com/services/mobile-apps" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Growth & SEO", url: "https://mulsetu.com/services/digital-growth" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dedicated IT Team", url: "https://mulsetu.com/dedicated-it-team" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development for Startups", url: "https://mulsetu.com/services/mvp-development" } },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mulsetu.com/#website",
                  name: "Mulsetu",
                  url: "https://mulsetu.com",
                  description: "Global technology and AI partner. Build software, automate operations, and get a dedicated IT team — without the overhead.",
                  publisher: { "@id": "https://mulsetu.com/#organization" },
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-deep text-white antialiased">
        <CursorGlow />
        <Navbar />
        <ClientShell>{children}</ClientShell>
        <Footer />
      </body>
    </html>
  );
}
