"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { salon } from "@/lib/config";

const services = [
  {
    title: "Hair Styling",
    desc: "Cut, Blowout, & Modern Styling",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHjKQb5ES2RiPIs-Iz1rs_fZDIEylbPtaYrDiHqPXKe7NlAnY3PjsmiqOrLUXAlsRlU2GlZAqNvTvz9r6-QMT_0Rz3vgF7lE45zEXcNHUhgl_-l-w80CkK-8HUwFyZxZV4PWjXMkhYgP0E4QY-Fm2vijhCgelch2T7MoqLM8DF_O3pq5jbA07pw5_FnQFcyB-Lk7L2mX3na3KIbioqixR3k-4iEQ5UucXvozYt88y4b7DeXhMDjsNgPzaZLjZwHOnjUmoqq2_M-1E",
    alt: "hair styling salon Sharjah with professional stylist working on long wavy hair",
    isLarge: false,
    isPrimary: false,
  },
  {
    title: "Bridal Beauty",
    desc: "The Ultimate Wedding Experience",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCk46yz9wmKcKvNr3vuaODRCBKbWEBtiDj7_-8ORK4N5WcAFvEDOYw1U8uXPtqV-fhjQkTCnCUwCcSSIyxapWVLBD9JPpBKl1x358QThl6YwhM-oHyjK2ZrSKNRZfsU_IMsQkZokvm0e_VMvzieK-93GsKcqTVPYS94ErY-qPoctsE91UqIYrUvC8Exrc1Vbm6YVQj6DKYg6iGunKk1u3FgT76_BFjSh-rw2CogIm6gLLcIoW9aNRhed17is2xgIzsrpXAgVC_qF0o",
    alt: "bridal makeup Sharjah portrait with flawless complexion and elegant eye makeup",
    isLarge: true,
    isPrimary: true,
  },
  {
    title: "Nail Art",
    desc: "Manicure & Pedicure Specialists",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZt8UFdxXSsS9ApqEiBrCJXnxbYMVsX67Ar_kxYZcrjb7ljia-NYoCZ0yRkIC433FtWQh0uPfyyL81mAJ86HTvftrOLaHJ-qWQh2S5QKezgtsf0Y2JUwz3tYzE9N75kEaQa4Qjse4X2p5wg19VYYfJ4Q1-Fv0Sq4-GOnJZmginjzfjaVASdHVjVmy7laxrVS0JzXUKRi4CjwkhYJpeBdpBkSqVXInTrd-dH8OAXui9dKoS_kKYf1Sxps_jEF6Y85ifkgYsrIQR6vg",
    alt: "nail art salon Sharjah with luxury manicure service and gold accents",
    isLarge: false,
    isPrimary: false,
  },
  {
    title: "Extensions",
    desc: "Seamless Hair Transformations",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_qjShcF2AMXOzc4sWCg_r55stnYNW3kwumxsHOnVP8G7P5oc8Sy88Fcs-aivXFeg2hyX4gBSd4x8uxzV-phoF5daHHgSMb5mxHxts-46S-k2UNLkyrSY6c7q_5C8WwXSWqkGSFBdDjInpRviF11sHuvTNCQsLY4W8pM5pa2NOi3irPtq6qQIhZhWK3n1ZGvun9Y4aoU-Y6QlWGSPxRDCA2255sSFjI73GwF1diPrrAVeYH9GQgQ9kSd4wjDddV5W4tchp4OkIJD0",
    alt: "hair treatment Sharjah extensions service with seamless premium integration",
    isLarge: false,
    isPrimary: false,
  },
  {
    title: "Skin Care",
    desc: "Deep Cleansing & Facials",
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYf49BVzpgtTRqkta0SEzefLdHyWwCUdOuoK8pogwMB0sr2ySkkqO_NOANTkRkEUrIk1ZtVU4OEtvKmX62XOv2kq7kzjXpKpvqCoPiUlxp0tmSDJkNMis5yAeHf3yqSFEp8jkdCo9USa43wWVpyexWZLdbkR35untbNmZ_EgGV1chzfGfgm6_JsivUQP2s_rQOe_UlBCzGC_IQzPS2x36y3YOD38qndCFy-GAxBzKms-REMy-WuIb70HCFRS0kN0idmTW4OzOyKhM",
    alt: "facial services Sharjah relaxing treatment with luxury mask and warm towels",
    isLarge: false,
    isPrimary: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-section-gap bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-container-margin">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Ladies Salon Sharjah – Premium Beauty Services
            </h2>
            <p className="text-on-surface-variant text-body-lg font-body-lg mt-4 max-w-2xl mx-auto">
              From hair styling and bridal makeup to facial treatments and waxing, our beauty salon in Sharjah offers everything you need.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[minmax(300px,auto)]"
        >
          {displayed.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group bg-surface rounded-3xl overflow-hidden shadow-soft transition-all hover:-translate-y-2 ${
                service.isLarge ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden relative ${
                  service.isLarge ? "h-[65%]" : "h-64"
                }`}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  src={service.image}
                  alt={service.alt}
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2.5 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-headline-md font-headline-md mb-2">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant mb-6 text-sm font-body-md">
                  {service.desc}
                </p>
                <a
                  href={salon.whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-label-sm font-label-md uppercase px-6 py-2.5 rounded-full transition-all inline-block ${
                    service.isPrimary
                      ? "bg-primary text-on-primary hover:shadow-lg"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {service.isPrimary ? "VIP Consultation" : "Book Now"}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-primary text-primary text-label-md font-label-md uppercase tracking-widest px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
