import type { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service | Al Zahra Beauty Center – Sharjah Beauty Salon",
  description:
    "Review the terms of service of Al Zahra Beauty Center in Sharjah. Understand booking policies, cancellation terms, and service guidelines for our beauty salon.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
