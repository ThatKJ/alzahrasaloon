"use client";

import ScrollReveal from "./ScrollReveal";
import { salon } from "@/lib/config";

export default function About() {
  return (
    <section className="py-section-gap bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-container-margin grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <img
              className="rounded-2xl shadow-soft w-full aspect-[4/5] object-cover"
              loading="lazy"
              alt="ladies salon in Sharjah with professional beauty specialist organizing premium skincare products"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLk2i-mgEemXRiOBCB4uvxjKfZMFSH-dcXM2kUNZzpSf_81XqtrhuCumecV-_oM0Q3d0Sh3g-5Xq-cQ08feszfHq0wT10u2JrekgIcxonebBz73RQCMjTWPkXbnDxRPQ1R5XfoGLx_OpLMIohi8wcKpMPRzXS26pklu1pQTP9MlSKW35lBkgwslsdyynH96V3dMTegeYT_T_o-_liQWFMdb_QRxGAZjmQC0WgMvNA1oFMOChiyDS05ON36b8sUbO8PF_BJRqE6Aso"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded-2xl -z-10 hidden md:block" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-8">
            <div>
              <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
                About
              </span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
                Best Beauty Salon in Sharjah
              </h2>
            </div>
            <p className="text-on-surface-variant text-body-lg leading-relaxed font-body-lg">
              At {salon.fullName}, we believe true beauty emerges from
              personalized care and absolute professionalism. Conveniently located in Al Soor, we have
              served as Sharjah&apos;s premier ladies salon for women seeking more
              than just a service&mdash;they seek a transformation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface font-bold">
                    Hygiene First
                  </h4>
                  <p className="text-sm text-on-surface-variant font-body-md">
                    Medical-grade sterilization for all tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface font-bold">
                    Personalized Care
                  </h4>
                  <p className="text-sm text-on-surface-variant font-body-md">
                    Custom treatments tailored to your skin/hair type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
