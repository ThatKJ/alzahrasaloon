"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { salon } from "@/lib/config";

export default function BridalBanner() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      id="bridal"
    >
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          alt={`bridal makeup Sharjah elegant bride with professional hair and makeup by ${salon.name} specialists`}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX4ZJgxyx3Bg1K7H-n3G-pg8PbdTO3QcePepuz-XYT1mkKWBYFelt9N3wHZkN8rZfR3FLz07WKHpYGead04FlQ8qIg7_Vni0_v4OizOJKG2FfLTALRmGOQv9CI5uAx0Php4RfOwkre0ogaQ6EXgL_EtQcXnNH763sJp6kmG5LRLcelTYff0C0AxH2BZHsdlkhJS_wbUVG1ZirEn0VNjxEA-kaFCHW1ZtBv8FzIPnMw8t0wYKlaAlQs1WIQ-p4BlXzHUBDEOCjJliU"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-container-margin text-center"
      >
        <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-white mb-8 drop-shadow-md">
          Your Dream Bridal <br /> Look Starts Here
        </h2>
        <p className="text-white text-body-lg font-body-lg mb-12 max-w-2xl mx-auto italic font-light">
          &ldquo;Capturing your natural radiance for the most important day of
          your life.&rdquo;
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary text-label-md font-label-md uppercase tracking-widest px-12 py-5 rounded-full hover:bg-secondary-fixed transition-colors shadow-2xl inline-block"
        >
          Book Bridal Consultation
        </Link>
      </motion.div>
    </section>
  );
}
