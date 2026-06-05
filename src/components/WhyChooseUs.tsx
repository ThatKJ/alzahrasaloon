"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { salon } from "@/lib/config";

const features = [
  {
    title: "Experts",
    desc: "Certified Specialists",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Hygienic",
    desc: "Sterilized Environment",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    title: "Premium",
    desc: "Luxury Products",
    icon: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5",
  },
  {
    title: "Affordable",
    desc: "Luxury for Less",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Sharjah",
    desc: "Central Al Soor Location",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
    extra: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-7xl mx-auto px-container-margin">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
              Why Us
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why Choose {salon.name}
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 border border-outline-variant rounded-2xl hover:border-primary transition-all duration-300 group cursor-default bg-white/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <svg
                  className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      feature.extra
                        ? [feature.icon, feature.extra].join(" ")
                        : feature.icon
                    }
                  />
                </svg>
              </div>
              <h4 className="text-label-md font-label-md text-on-surface font-bold mb-1">
                {feature.title}
              </h4>
              <p className="text-xs text-on-surface-variant font-body-md">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
