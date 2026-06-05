"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GalleryLightbox from "./GalleryLightbox";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9xuUpijOOnf9Ajy7DZ15EROhJYcCITi3bSSFVUtC2IbCf5U8Wp9phdtvkBT3Gu0t2nB5ObhlSmVlb-OyadUCCABUU8j6OQOy7SW8T1NdGyL6ohNHSpWPwI6qP6blStv6cLMWRMPZRws3S_w6kM04L16uLb_3n2rNhATUBkN54gEyxH3V2ZMBiPoBoD5c_iwOXZkNUUuMkVXIdQqGLJdLOtgaEUvR1vaiYhrsocZgpIo-zU7Uzn2jak7wk1qZFujcpwea59QyiryA",
    alt: "beauty salon Sharjah interior with rose gold mirrors and organized hair products",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdiXfs_IMDUR2Xys-yIQi13ghlFXfduKV4EQElifdhJEfAw9x-bqDXjS_SBNK9HrSuBfoJ90YRGiuCM-n4AXPmaZt59Y3qwb_AIlaFE0S3PCbwdPZNA_WHubshjTYXqlK-t8D1pJ8HP0Q2KnhBveCxNVZHr3R7MsGrJEFSQLMp-s0JX06ZAvMD3V9nIeXVGm98chCTF0bTxhZlzXcdkEzeV50beJrrFFUmha_EQ2B50xYgzSjsNAKiXJmdGfVXzvRb675E5KeHuCM",
    alt: "bridal makeup Sharjah cosmetic brushes and makeup palettes on marble surface",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3PEoWCrmaCv-Z1BjnO3a3oeRzBOazPBOuJKozqAbzQSH9CnE5pD1FtPffUqMj5tIshpQWM3cadNQtWzfLnfJSj0Ssk7NQYtk7EbCcyXFcyy0LlPNZhAWXZoFcEfdyywFdeS6I7se1vZ6SsrQaKYrcvRR7nhNlaFeV6YWzWbODd-zMPmXVGBIjRpuRXOy6muEqdwBx1-C3xgwNiqXW-F-hDtc2V7cELCwbibssjt7X78tKf-0L6fi4jS6egrQi9jOqq5IuUCiQ1ZM",
    alt: "ladies salon Sharjah client after professional hair styling and makeup session",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLgZePLI4thG49vE68PUbhsaIbMx9SryOhqBWPXSi_BasqOr9tJe07GLfy2KfPb-o4JLR4svMiNYqOlU9x9Wc48tipA4gaphH6Ylbls_FtImGxpW2zusdfFJUMA4a7UhgulvSB0-tKfyrLT-iv8YpkfaAzkbG1X44hqFxEIXxvla7zFKKEojMQJYoiAZ2decERXhBQGMnR_YODb-xZSIOnZTPvVhtKyBb9ecR--WZ-53TisEhnu7ohhQXCre-_xX_-Ln0Lp4SP0yc",
    alt: "nail salon Sharjah nail care section with elegant chairs and premium polish colors",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqihdBtpqKDPh51mo23HjrXqoLpkwBINhXBDk0lcu2Zl78RjRiKrl5DlwaGaUT27YiPvIl0L89TFIQFtze5Icdi7Vr5Ggl5PDAGQJmDjp7Grje9fqNpSxTZ2Ec9G_oI_IVtAfP4aXkm2ySSSKAcO0DNOerm9sHRCXe1zsFU7WlAtrXEkFzZJeAnNVN8oihKghMgRuxO_btBWSfUpJnBH1jqayotLEeJuCxL9_-yZRE7y1r6v6AozTzai8wbG0tQnkhkC6L9oLDhxE",
    alt: "facial services Sharjah skincare setup with premium treatment products",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    );
  };

  const goNext = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <section className="py-section-gap bg-surface-container-low" id="gallery">
      <div className="max-w-7xl mx-auto px-container-margin">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Beauty Salon Sharjah Gallery
            </h2>
            <p className="text-on-surface-variant text-body-lg font-body-lg mt-4 max-w-2xl mx-auto">
              See the results from Sharjah&apos;s trusted ladies salon &ndash; from bridal makeup to hair treatments and facials.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        images={images}
        currentIndex={lightboxIndex ?? 0}
        isOpen={isOpen}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
