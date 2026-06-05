import type { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import BridalBanner from "@/components/BridalBanner";

export const metadata: Metadata = {
  title: "About Al Zahra Beauty Center | Ladies Salon in Sharjah",
  description:
    "Learn about Al Zahra Beauty Center – Sharjah's trusted ladies salon. Professional hair, bridal, facial & nail services in a premium, hygienic environment.",
};

export default function AboutPage() {
  return (
    <>
      <div className="h-20" />
      <About />
      <WhyChooseUs />
      <BridalBanner />
    </>
  );
}
