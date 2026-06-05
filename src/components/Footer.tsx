import Link from "next/link";
import { salon } from "@/lib/config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/faqs", label: "FAQs" },
  { href: "/careers", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-8 pb-6 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/20 shadow-soft h-full">
            <Link href="/" className="inline-block mb-1">
              <span className="text-lg font-headline-lg text-primary font-bold tracking-tight">
                {salon.name}
              </span>
            </Link>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-sm mb-2">
              Sharjah&rsquo;s Premier Ladies Beauty Salon
            </p>

            <div className="flex flex-wrap gap-1 mb-3">
              {["Hair Styling", "Bridal Makeup", "Facials", "Nail Art", "Waxing", "Home Services"].map(
                (service) => (
                  <span
                    key={service}
                    className="text-[9px] uppercase tracking-wider font-label-sm bg-primary/5 text-primary px-2 py-0.5 rounded-full border border-primary/10"
                  >
                    {service}
                  </span>
                )
              )}
            </div>

            <div className="space-y-2 mb-3">
              <a
                href={`https://maps.google.com/maps?q=${salon.address.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[11px] text-on-surface-variant hover:text-primary transition-colors group"
              >
                <svg className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  {salon.address.street}, {salon.address.city},{" "}
                  {salon.address.country}
                </span>
              </a>

              <div className="flex items-start gap-2 text-[11px] text-on-surface-variant">
                <svg className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{salon.hours}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${salon.phone}`}
                className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-on-primary text-[10px] font-label-md uppercase tracking-wider px-3 py-2 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <a
                href={salon.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-secondary text-on-secondary text-[10px] font-label-md uppercase tracking-wider px-3 py-2 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Now
              </a>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl px-3 py-3 border border-outline-variant/20 shadow-soft h-full text-center flex flex-col items-center">
            <h4 className="text-lg font-bold text-primary underline decoration-primary/30 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-base font-body-md">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-secondary transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/20 shadow-soft h-full text-center flex flex-col items-center">
            <h4 className="text-lg font-bold text-primary underline decoration-primary/30 mb-3">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-base font-body-md">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-secondary transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/20 shadow-soft h-full text-center flex flex-col items-center">
            <h4 className="text-lg font-bold text-primary underline decoration-primary/30 mb-3">
              Connect
            </h4>
            <div className="flex justify-center gap-3 mb-3">
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`tel:${salon.phone}`}
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <a
                href={`mailto:${salon.email}`}
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
            <p className="text-base text-on-surface-variant font-body-md">
              &copy; {new Date().getFullYear()} {salon.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
