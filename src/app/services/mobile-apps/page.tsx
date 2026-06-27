import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Android, iOS, and cross-platform Flutter apps for your customers and field teams. End-to-end mobile development from design to App Store deployment.",
  keywords: ["mobile app development", "Android app development", "iOS app development", "Flutter app", "cross-platform app", "React Native", "mobile application"],
  alternates: { canonical: "https://mulsetu.com/services/mobile-apps" },
  openGraph: {
    title: "Mobile App Development — Mulsetu",
    description:
      "Android, iOS and Flutter apps for customers, field teams, and admin panels — built and maintained by a dedicated mobile team.",
    url: "https://mulsetu.com/services/mobile-apps",
  },
};

export default function Page() {
  return <Content />;
}
