import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Al Zahra Beauty Center | Beauty Salon in Sharjah",
  description:
    "Get in touch with Al Zahra Beauty Center in Sharjah. Call +971 54 446 7625, visit us in Al Soor, or book instantly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <div className="h-20" />
      <Contact />
      <FinalCTA />
    </>
  );
}
