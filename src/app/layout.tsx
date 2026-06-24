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
        <title>Mulsetu — Your In-House IT Team</title>
        <meta name="description" content="Mulsetu is your dedicated technology and AI partner. We build software, automate operations, and manage technology — so you don't have to hire an entire IT department." />
        <meta name="theme-color" content="#05080f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
