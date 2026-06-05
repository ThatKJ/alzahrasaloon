import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQs | Al Zahra Beauty Center – Beauty Salon in Sharjah",
  description:
    "Find answers to common questions about Al Zahra Beauty Center in Sharjah. Learn about services, booking, pricing, bridal packages, and more.",
};

export default function FAQPage() {
  return <FAQClient />;
}
