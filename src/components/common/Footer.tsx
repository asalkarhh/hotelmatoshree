import { Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo, footerHotelLinks, footerTeaLinks } from "../../data/siteData";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="page-section pt-6">
      <div className="section-shell panel-card overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <Logo />
            <p className="body-copy mt-5 max-w-md">{contactInfo.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-brand-brown/10 bg-white/85 px-4 py-2 text-sm font-semibold text-brand-brown transition hover:border-brand-saffron/40 hover:text-brand-red"
                href={contactInfo.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <Camera className="h-4 w-4" />
                Instagram
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-brand-brown/10 bg-white/85 px-4 py-2 text-sm font-semibold text-brand-brown transition hover:border-brand-saffron/40 hover:text-brand-red"
                href={buildWhatsAppLink(contactInfo.whatsappNumber, "Namaskar Matoshree Group")}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Hotel Franchise
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerHotelLinks.map((item) => (
                <Link
                  className="text-sm text-brand-brown/72 transition hover:text-brand-red"
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Tea Franchise
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerTeaLinks.map((item) => (
                <Link
                  className="text-sm text-brand-brown/72 transition hover:text-brand-red"
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Contact
            </h3>
            <div className="mt-4 space-y-4 text-sm text-brand-brown/74">
              <a
                className="flex items-start gap-3 transition hover:text-brand-red"
                href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                className="flex items-start gap-3 transition hover:text-brand-red"
                href={`mailto:${contactInfo.email}`}
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                className="flex items-start gap-3 transition hover:text-brand-red"
                href={contactInfo.mapLink}
                rel="noreferrer"
                target="_blank"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactInfo.address}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="warm-divider my-8" />

        <div className="flex flex-col gap-3 text-sm text-brand-brown/64 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} Matoshree Group. All rights reserved.</p>
          <p>Dummy base setup for hotel and tea franchise website.</p>
        </div>
      </div>
    </footer>
  );
}
