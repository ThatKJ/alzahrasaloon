"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function SpecialOffers() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-7xl mx-auto px-container-margin">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
              Seasonal
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Special Packages
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        >
          {/* Summer Glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row bg-primary rounded-3xl overflow-hidden shadow-xl text-white"
          >
            <div className="md:w-1/2">
              <img
                className="w-full h-full object-cover min-h-[240px]"
                loading="lazy"
                alt="facial services Sharjah summer glow package with premium spa treatments"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxfNUN0yhIB984Rt4Vmcj3yNyXQ1FR2hJ2Z7uf7Sb6qaajND0RyTnLTx7o4TC9xn8PQ710j_TuL9X786bWhuVgm1jxrXDl_rrPuM9hMgGqMF14r_fqJpaUFkhFCGmUArMFfN1-y0QCHbAQ66Cv7CudZDNtCvqXqCrSmxuGgVHm5fRuIHIcgRhmoZoYKYZVtExDgTluejWApFM099uIv8ewY2B0CgupaWWwznq6fEjmHGs3jb_4eL1YV-m7cPrLdihy7W64QMTanI"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-headline-md font-headline-md mb-2">
                Summer Glow
              </h3>
              <p className="text-white/80 mb-4 text-sm font-body-md">
                Facial + Manicure + Pedicure
              </p>
              <p className="text-3xl font-display-lg font-bold mb-6">
                AED 299
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary text-label-sm font-label-md uppercase px-8 py-3 rounded-full self-start hover:bg-secondary-fixed transition-all"
              >
                Claim Offer
              </Link>
            </div>
          </motion.div>

          {/* Bridal Party */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row bg-secondary rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="md:w-1/2 order-2 md:order-1 p-8 flex flex-col justify-center text-on-secondary">
              <h3 className="text-headline-md font-headline-md mb-2">
                Bridal Party
              </h3>
              <p className="text-white/80 mb-4 text-sm font-body-md">
                Full styling for Bride + 3 Bridesmaids
              </p>
              <p className="text-3xl font-display-lg font-bold mb-6">
                Starts AED 1499
              </p>
              <Link
                href="/contact"
                className="bg-white text-secondary text-label-sm font-label-md uppercase px-8 py-3 rounded-full self-start hover:bg-secondary-fixed transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                className="w-full h-full object-cover min-h-[240px]"
                loading="lazy"
                alt="bridal makeup Sharjah party styling session for bride and bridesmaids"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXAk4Pv4SqWG7vtaMkkPRg-7B5QPlr7mg6T48u0p61oMFAUIChjU62VwO8ejOdCpTDIBtnv0E5rGi1G7UKwIyk-C1h0K3nBaN3BbTcyPO0zMhVvp509sHievK-45SAJ71cKEY4eRbfE3MSjaD7Zbw4kKTwTyhuG3VD_dIsZiydMlxClInGU6lr5IUzcWxQXYFCtpGiRxeRDyG2_qb1aSmbkTiHmErAxi3BTgyx2Pt_fWdEiifpaVVeTvHtgzRA25SfkFPB2UR1qOE"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
