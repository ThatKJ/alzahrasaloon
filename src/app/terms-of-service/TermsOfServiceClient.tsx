"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { salon } from "@/lib/config";

const sections = [
  {
    title: "Booking & Appointments",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    items: [
      "Appointments are confirmed upon our reply to your booking request.",
      "Please arrive on time to ensure full service duration.",
      "We reserve the right to reschedule or cancel appointments due to unforeseen circumstances.",
    ],
  },
  {
    title: "Cancellation Policy",
    icon: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
    body: "We understand that plans can change. Please notify us at least 2 hours in advance if you need to cancel or reschedule your appointment. Late cancellations may affect your ability to book peak-time slots in the future.",
  },
  {
    title: "Service Disclaimer",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    items: [
      "Individual results may vary depending on hair type, skin type, and other personal factors.",
      "Our stylists and beauticians provide professional recommendations based on their expertise.",
      "Please inform us of any allergies or sensitivities before your service.",
    ],
  },
  {
    title: "WhatsApp Booking Terms",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    body: "By contacting us via WhatsApp for booking inquiries, you consent to receive messages related to your appointment, including confirmations, reminders, and follow-ups. Your WhatsApp number will only be used for salon-related communication and will not be shared with third parties.",
  },
  {
    title: "Pricing & Payments",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    items: [
      "Prices are as listed on our website or as communicated via WhatsApp.",
      "We reserve the right to modify pricing at any time.",
      "Payment is accepted via cash, card, or other methods displayed at the salon.",
      "All prices are in UAE Dirham (AED).",
    ],
  },
  {
    title: "Limitation of Liability",
    icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z",
    body: "Al Zahra Beauty Center shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.",
  },
];

export default function TermsOfServiceClient() {
  return (
    <>
      <div className="h-20" />
      <section className="py-section-gap bg-surface overflow-hidden">
        <div className="max-w-3xl mx-auto px-container-margin">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-heading">Legal</span>
              <h1 className="section-title mb-4">Terms of Service</h1>
              <p className="text-on-surface-variant text-sm">
                Last updated: June 2026
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {section.items ? (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                          </svg>
                        </div>
                        <h2 className="text-headline-md font-headline-md text-on-surface">
                          {section.title}
                        </h2>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-on-surface-variant text-body-md">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                          </svg>
                        </div>
                        <h2 className="text-headline-md font-headline-md text-on-surface">
                          {section.title}
                        </h2>
                      </div>
                      <p
                        className="text-on-surface-variant text-body-md leading-relaxed pl-16"
                        dangerouslySetInnerHTML={{ __html: section.body ?? "" }}
                      />
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17a2.5 2.5 0 01-2.5-2.5V11m5.25 4.17a2.5 2.5 0 002.5-2.5V11m-5.25 4.17a2.5 2.5 0 002.5-2.5V11m5.25-4.17V11a5.25 5.25 0 01-10.5 0V6.83m10.5 0V11a5.25 5.25 0 01-10.5 0V6.83m10.5 0H6.75" />
                </svg>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                Ready to Book?
              </h2>
              <p className="text-on-surface-variant text-body-md mb-6 max-w-md mx-auto">
                Book your appointment now and experience the best beauty services in Sharjah.
              </p>
              <a
                href={salon.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary text-label-md font-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-md active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Appointment
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
