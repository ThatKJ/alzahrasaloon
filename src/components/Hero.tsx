"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { salon } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          alt="beauty salon in Sharjah interior with rose gold styling stations and plush velvet chairs"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwpWbGm7cdIUZh1i0A8_Pg1Mfp2Klpm1nbWR8qFuqJtKWgaC9jfSZRSTr0HvMYfsqB7IYNyAX8y6igLfbOX5-TPMXZMN4SyVMoubZajBJnfW_p4XXVx0AdW7qfdZsY6rQ3wrfg97OvEYehbXEdA_-d9JgUx-fxZnIF3HvYeOTNTrVLjRS1O1FxU_v6GXdiTb9O6uFYxpRJSFhtW0BoCU5q_sr9ZBBs1rMD6WfxT7p1Scrj2SlrqfPsMB4ZrYOVd72E3wxsYKCyOfg"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-container-margin">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: "★", label: "4.5 Rating" },
            { icon: null, label: "48+ Reviews" },
            { icon: null, label: "Open Until 10 PM" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-body-md"
            >
              {badge.icon && <span className="text-yellow-400">{badge.icon}</span>}
              {badge.label}
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-headline-lg-mobile md:text-display-lg font-display-lg text-white mb-6 leading-tight drop-shadow-lg"
        >
          Best Beauty Salon in <br />
          <span className="text-secondary-fixed">Sharjah</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-body-lg font-body-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium ladies salon in Sharjah offering professional hair styling, bridal makeup, facial services, waxing &ndash; designed to make you look and feel your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-primary text-on-primary text-label-md font-label-md uppercase tracking-widest px-10 py-5 rounded-full hover:shadow-xl transition-all hover:-translate-y-1 inline-block text-center"
          >
            Book Appointment
          </Link>
          <a
            href={salon.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white text-white text-label-md font-label-md uppercase tracking-widest px-10 py-[18px] rounded-full hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-8 h-8 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </section>
  );
}
