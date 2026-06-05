import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Salon Gallery Sharjah | Before & After – Al Zahra Beauty Center",
  description:
    "View our salon gallery in Sharjah. See before & after results of hair styling, bridal makeup, nail art, and facial treatments.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="h-20" />
      <Gallery />
    </>
  );
}
