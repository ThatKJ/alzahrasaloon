"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { salon } from "@/lib/config";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of beauty services including hair styling, haircuts, hair treatments, bridal makeup, facial services, nail art and manicure, waxing, and threading. Visit our Services page for the complete list.",
    category: "Services",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book instantly through our WhatsApp button, call us directly, or visit our salon in Al Soor, Sharjah. We recommend booking in advance, especially for bridal packages and weekend slots.",
    category: "Booking",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, we welcome walk-in guests. However, availability may vary during peak hours. We recommend booking ahead to secure your preferred time slot.",
    category: "Booking",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open daily from 10:00 AM to 10:00 PM, including weekends and public holidays. You can reach us anytime during these hours.",
    category: "General",
  },
  {
    question: "Do you offer bridal packages?",
    answer:
      "Yes, we offer comprehensive bridal packages including trial sessions, bridal makeup, hairstyling, mehendi, and full-body waxing. Contact us on WhatsApp for customized bridal packages tailored to your needs.",
    category: "Services",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards, and debit cards. All prices are in UAE Dirham (AED).",
    category: "General",
  },
  {
    question: "Do you offer home services?",
    answer:
      "Yes, we offer home services for our regular clients and bridal customers. Our beauticians can visit your home in Sharjah for select services including bridal makeup, hair styling, and waxing. Contact us on WhatsApp to check availability and service areas.",
    category: "Services",
  },
];

const categories = ["All", "Services", "Booking", "General"];

const categoryColors: Record<string, string> = {
  Services:
    "bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-white",
  Booking:
    "bg-secondary/10 text-secondary border-secondary/20 group-hover:bg-secondary group-hover:text-white",
  General:
    "bg-tertiary/10 text-tertiary border-tertiary/20 group-hover:bg-tertiary group-hover:text-white",
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = faqs.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="h-20" />
      <section className="py-section-gap bg-surface overflow-hidden">
        <div className="max-w-3xl mx-auto px-container-margin">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-heading">Help Center</span>
              <h1 className="section-title mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-on-surface-variant text-body-md max-w-xl mx-auto">
                Everything you need to know about booking and services at{" "}
                {salon.fullName}.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-label-sm font-label-md uppercase tracking-wider transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary border-primary shadow-md"
                      : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((faq, index) => {
                const realIndex = faqs.indexOf(faq);
                const isOpen = openIndex === realIndex;
                return (
                  <motion.div
                    key={faq.question}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-soft group"
                  >
                    <button
                      onClick={() => toggle(realIndex)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-surface-container-low"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-label-md transition-all duration-300 shrink-0 ${
                            isOpen
                              ? "bg-primary text-on-primary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {realIndex + 1}
                        </span>
                        <div className="min-w-0">
                          <span className="text-body-md font-label-md text-on-surface pr-4 block">
                            {faq.question}
                          </span>
                          <span
                            className={`inline-block mt-1.5 text-[10px] uppercase tracking-widest font-label-sm px-2.5 py-1 rounded-full border transition-all duration-300 ${
                              categoryColors[faq.category]
                            }`}
                          >
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-primary flex-shrink-0 ml-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pl-16 text-on-surface-variant text-body-md leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-on-surface-variant">
                <p className="text-body-lg">No questions found in this category.</p>
              </div>
            )}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                Still have questions?
              </h2>
              <p className="text-on-surface-variant text-body-md mb-6 max-w-md mx-auto">
                We are happy to help. Reach out to us directly on WhatsApp.
              </p>
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary text-label-md font-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-md active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask us on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
