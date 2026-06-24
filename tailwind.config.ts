import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#05080f",
        navy: "#080d1a",
        card: "#0b1120",
        border: "rgba(14,200,140,0.15)",
        teal: {
          DEFAULT: "#0ec88c",
          bright: "#12f0a8",
          dim: "#0a9a6a",
          glow: "rgba(14,200,140,0.3)",
        },
        copper: "#c9703a",
        muted: "#8899aa",
        soft: "#c8d8e8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,200,140,0.15) 0%, transparent 60%)",
        "card-glow": "radial-gradient(circle at 50% 0%, rgba(14,200,140,0.08) 0%, transparent 60%)",
        "teal-gradient": "linear-gradient(135deg, #0ec88c, #0a9a6a)",
        "dark-gradient": "linear-gradient(180deg, #080d1a 0%, #05080f 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
        "gradient-shift": "gradientShift 8s ease infinite",
        "blink": "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      boxShadow: {
        "teal-sm": "0 0 20px rgba(14,200,140,0.2)",
        "teal-md": "0 0 40px rgba(14,200,140,0.3)",
        "teal-lg": "0 0 80px rgba(14,200,140,0.4)",
        "card": "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
