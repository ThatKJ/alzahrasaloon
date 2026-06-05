import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Al Zahra Beauty Center – Sharjah Beauty Salon",
  description:
    "Read the privacy policy of Al Zahra Beauty Center in Sharjah. Learn how we collect, use, and protect your personal information when you book services via WhatsApp or visit our salon.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
