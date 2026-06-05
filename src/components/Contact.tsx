"use client";

import ScrollReveal from "./ScrollReveal";
import { salon } from "@/lib/config";

export default function Contact() {
  return (
    <section className="py-section-gap bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal direction="left">
            <div>
              <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-8">
                Beauty Salon in Sharjah – Book Your Appointment
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-label-md font-label-md">
                      Address
                    </h4>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      {salon.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-label-md font-label-md">
                      Phone
                    </h4>
                      <a
                        href={`tel:${salon.phone}`}
                        className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors"
                      >
                        {salon.phoneDisplay}
                      </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-label-md font-label-md">
                      Opening Hours
                    </h4>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      {salon.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                className="space-y-5 bg-surface p-8 rounded-3xl shadow-soft"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-b-2 focus:border-primary outline-none p-4 rounded-xl text-sm font-body-md transition-all"
                    placeholder="Full Name"
                    type="text"
                    required
                  />
                  <input
                    className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-b-2 focus:border-primary outline-none p-4 rounded-xl text-sm font-body-md transition-all"
                    placeholder="Phone Number"
                    type="tel"
                    required
                  />
                </div>
                <select className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-b-2 focus:border-primary outline-none p-4 rounded-xl text-sm font-body-md transition-all appearance-none text-on-surface-variant">
                  <option value="">Select Service</option>
                  <option value="hair">Hair Styling</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="nails">Nail Care</option>
                  <option value="skincare">Skin Care</option>
                  <option value="extensions">Hair Extensions</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-b-2 focus:border-primary outline-none p-4 rounded-xl text-sm font-body-md transition-all resize-none"
                  placeholder="Your Message"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary text-label-md font-label-md uppercase tracking-widest py-4 rounded-full hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-3xl overflow-hidden shadow-soft h-[400px] lg:h-full min-h-[400px] border-4 border-white">
              <iframe
                title={`${salon.fullName} Location`}
                src={`https://maps.google.com/maps?q=${salon.address.mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
