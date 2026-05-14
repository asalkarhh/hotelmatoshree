import { Camera, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo, footerHotelLinks, footerTeaLinks } from "../../data/siteData";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep pt-16 pb-8 mt-12 border-t-[4px] border-brand-red text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8 mb-12 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start lg:col-span-1">
            <div className="rounded-xl bg-white/5 p-4 shadow-sm backdrop-blur-md inline-block mb-4">
              <Logo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-vanilla/80 max-w-sm">
              {contactInfo.tagline}
            </p>
            <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/10 text-brand-cream transition hover:bg-brand-red hover:text-white"
                href={contactInfo.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <Camera className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/10 text-brand-cream transition hover:bg-brand-red hover:text-white"
                href={buildWhatsAppLink(contactInfo.whatsappNumber, "Namaskar Matoshree Group")}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-6">
              Hotel Franchise
            </h3>
            <ul className="flex flex-col gap-4">
              {footerHotelLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    className="group flex items-center gap-2 text-sm text-brand-vanilla/70 transition hover:text-white"
                    to={item.to}
                  >
                    <ArrowRight className="h-3 w-3 text-brand-red opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-6">
              Tea Franchise
            </h3>
            <ul className="flex flex-col gap-4">
              {footerTeaLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    className="group flex items-center gap-2 text-sm text-brand-vanilla/70 transition hover:text-white"
                    to={item.to}
                  >
                    <ArrowRight className="h-3 w-3 text-brand-red opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-brand-vanilla/70">
              <li>
                <a
                  className="group flex items-center justify-center sm:justify-start gap-3 transition hover:text-white"
                  href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cream/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center justify-center sm:justify-start gap-3 transition hover:text-white"
                  href={`mailto:${contactInfo.email}`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cream/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center justify-center sm:justify-start gap-3 transition hover:text-white text-left"
                  href={contactInfo.mapLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cream/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>{contactInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-cream/10 pt-8 sm:flex-row text-xs text-brand-vanilla/50">
          <p>&copy; {year} {contactInfo.brand}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
      </div>
      </div>
    </footer>
  );
}
