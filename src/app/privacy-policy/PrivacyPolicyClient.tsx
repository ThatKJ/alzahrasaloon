"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { salon } from "@/lib/config";

const sections = [
  {
    title: "Information We Collect",
    icon: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z",
    items: [
      "Your full name",
      "Phone number",
      "Email address (if provided)",
      "Service preferences and appointment history",
      "Messages you send via WhatsApp or our contact form",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    items: [
      "Schedule and manage your appointments",
      "Communicate with you about your bookings",
      "Send service reminders or follow-ups",
      "Improve our services based on feedback",
    ],
  },
  {
    title: "WhatsApp Booking",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    body: "When you contact us via WhatsApp, your phone number and messages are processed through WhatsApp&apos;s platform. We store your number and conversation history only for appointment management purposes and do not share this data with third parties.",
  },
  {
    title: "Data Protection",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    body: "We take your privacy seriously. Your personal information is stored securely and accessed only by authorized staff. We do not sell, rent, or trade your personal data to any third party.",
  },
  {
    title: "Your Rights",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    body: "You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, please contact us via WhatsApp or email.",
  },
];

export default function PrivacyPolicyClient() {
  return (
    <>
      <div className="h-20" />
      <section className="py-section-gap bg-surface overflow-hidden">
        <div className="max-w-3xl mx-auto px-container-margin">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-heading">Legal</span>
              <h1 className="section-title mb-4">Privacy Policy</h1>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                Have Questions?
              </h2>
              <p className="text-on-surface-variant text-body-md mb-6 max-w-md mx-auto">
                If you have any questions about our privacy practices, we are here to help.
              </p>
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary text-label-md font-label-md uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-md active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
