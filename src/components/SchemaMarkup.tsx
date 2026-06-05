import { salon } from "@/lib/config";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salon.fullName,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5j6ho5zCyn0PI2ptvstdMLLpErNqtCmTXqwbMjkM_9uyj7V9Pbvb60WXcm96X2KKFyDKOG--dZyRhM-JKPbiLhTeKIecy2GSmsJRaqIBuS4YtigmA_npXe-G7c3lyEyOwM70azKzvvLv-NyQw5_1dZxRaSe-qKjRqLcEWg3GIE4qEFqg68G2ctyqDVG7Iv5BZBglBDQ3hDvyOLZiUMAXy1DmtJPGrrF4lFIZ_B2rJf_lPotpSWJxkKAaf__RDo9zZKxTuaftW0tM",
    "@id": salon.website,
    url: salon.website,
    telephone: salon.phone,
    priceRange: "AED 50–1500",
    description:
      "Professional beauty salon in Sharjah offering hair, facial, waxing & bridal services. Book instantly on WhatsApp.",
    address: {
      "@type": "PostalAddress",
      streetAddress: salon.address.street,
      addressLocality: salon.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: salon.geo.latitude,
      longitude: salon.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: salon.rating,
      reviewCount: salon.reviewCount,
      bestRating: "5",
    },
    sameAs: [salon.whatsappUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Hair Styling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Bridal Makeup" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Nail Art" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Facial Treatments" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Waxing" },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
