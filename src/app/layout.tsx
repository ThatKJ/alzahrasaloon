import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SchemaMarkup from "@/components/SchemaMarkup";
import { salon } from "@/lib/config";

const playfairDisplay = Playfair_Display({
  variable: "--font-display-lg",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body-md",
  subsets: ["latin"],
  display: "swap",
});

const title = `Beauty Salon in Sharjah | Hair, Facial & Bridal Services – ${salon.fullName}`;
const description =
  "Professional beauty salon in Sharjah offering hair, facial, waxing & bridal services. Book instantly on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "beauty salon in Sharjah",
    "ladies salon Sharjah",
    "hair salon Sharjah",
    "hair treatment Sharjah",
    "waxing salon Sharjah",
    "facial services Sharjah",
    "bridal makeup Sharjah",
    "beauty center Al Soor",
    salon.fullName,
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: salon.fullName,
    url: salon.website,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: salon.website,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <meta name="geo.region" content="AE-SH" />
        <meta name="geo.placename" content="Sharjah" />
        <meta name="geo.position" content="25.3575;55.3917" />
        <meta name="ICBM" content="25.3575, 55.3917" />
        <SchemaMarkup />
      </head>
      <body className="min-h-full overflow-x-hidden font-body-md text-body-md">
        <Navbar />
        <main>{children}</main>
        <Testimonials />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
