"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9998] w-[500px] h-[500px] rounded-full hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(76,215,246,0.055) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "left 0.12s ease, top 0.12s ease",
      }}
    />
  );
}
