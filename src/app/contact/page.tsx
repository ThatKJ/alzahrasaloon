import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import { salon } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Al Zahra Beauty Center | Beauty Salon in Sharjah",
  description: `Get in touch with Al Zahra Beauty Center in Sharjah. Call ${salon.phoneDisplay}, visit us in Al Soor, or book instantly on WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="h-20" />
      <h1 className="sr-only">Contact Al Zahra Beauty Center | Beauty Salon in Sharjah</h1>
      <Contact />
      <FinalCTA />
    </>
  );
}
