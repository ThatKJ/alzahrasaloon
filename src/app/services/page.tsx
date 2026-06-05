import type { Metadata } from "next";
import Services from "@/components/Services";
import BridalBanner from "@/components/BridalBanner";
import SpecialOffers from "@/components/SpecialOffers";

export const metadata: Metadata = {
  title: "Beauty Services in Sharjah | Hair, Facial & Bridal – Al Zahra Beauty Center",
  description:
    "Explore our full range of beauty services in Sharjah: hair styling, bridal makeup, nail art, facials, waxing & more. Book on WhatsApp.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="h-20" />
      <h1 className="sr-only">Beauty Services in Sharjah | Hair, Facial & Bridal – Al Zahra Beauty Center</h1>
      <Services />
      <BridalBanner />
      <SpecialOffers />
    </>
  );
}
