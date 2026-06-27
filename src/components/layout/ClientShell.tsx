"use client";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>{children}</PageTransition>
    </AnimatePresence>
  );
}
