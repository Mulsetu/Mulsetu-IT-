"use client";
import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <head>
        <title>Mulsetu — Your Dedicated IT Team & Technology Partner</title>
        <meta name="description" content="Mulsetu is your dedicated technology and AI partner. We build software, automate operations, and manage technology — so you don't have to hire an entire IT department. Serving businesses across India." />
        <meta name="keywords" content="IT company India, software development, AI automation, ERP development, SaaS development, mobile app development, website development, digital growth, dedicated IT team, technology partner India" />
        <meta name="author" content="Mulsetu Agrotech Private Limited" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#05080f" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mulsetu" />
        <meta property="og:title" content="Mulsetu — Your Dedicated IT Team & Technology Partner" />
        <meta property="og:description" content="Mulsetu is your dedicated technology and AI partner. We build software, automate operations, and manage technology — so you don't have to hire an entire IT department." />
        <meta property="og:url" content="https://mulsetu.com" />
        <meta property="og:image" content="https://mulsetu.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mulsetu — Your Dedicated IT Team & Technology Partner" />
        <meta name="twitter:description" content="We build software, automate operations, and manage technology — so you don't have to hire an entire IT department." />
        <meta name="twitter:image" content="https://mulsetu.com/og-image.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://mulsetu.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mulsetu Agrotech Private Limited",
              alternateName: "Mulsetu",
              url: "https://mulsetu.com",
              logo: "https://mulsetu.com/favicon.svg",
              email: "founder@mulsetu.com",
              description: "Dedicated technology and AI partner for growing businesses. We build software, automate operations, and manage technology end-to-end.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [],
              offers: {
                "@type": "AggregateOffer",
                description: "IT services including AI automation, website development, SaaS, custom software, mobile apps, and digital growth.",
              },
            }),
          }}
        />
      </head>
      <body className="bg-deep text-white antialiased">
        <CursorGlow />
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition>{children}</PageTransition>
        </AnimatePresence>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
