import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Al Zahra Beauty Center | Join Our Salon Team in Sharjah",
  description:
    "Join the team at Al Zahra Beauty Center in Sharjah. We are hiring hairstylists, beauticians, and receptionists. Apply via WhatsApp.",
};

export default function CareersPage() {
  return <CareersClient />;
}
