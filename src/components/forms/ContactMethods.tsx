import { Camera, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "../../data/siteData";
import { buildWhatsAppLink } from "../../utils/whatsapp";

const contactCards = [
  {
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replaceAll(" ", "")}`,
    icon: PhoneCall,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Quick franchise chat",
    href: buildWhatsAppLink(contactInfo.whatsappNumber, "Namaskar Matoshree Group"),
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: "@matoshreegroup",
    href: contactInfo.instagram,
    icon: Camera,
  },
];

export function ContactMethods() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactCards.map((card) => (
        <a
          className="panel-card p-5 transition hover:-translate-y-1"
          href={card.href}
          key={card.label}
          rel="noreferrer"
          target="_blank"
        >
          <card.icon className="h-8 w-8 text-brand-red" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
            {card.label}
          </p>
          <p className="mt-2 text-lg font-semibold text-brand-deep">{card.value}</p>
        </a>
      ))}

      <div className="panel-card p-5 sm:col-span-2">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-red" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
              Office Address
            </p>
            <p className="mt-2 text-lg font-semibold text-brand-deep">{contactInfo.address}</p>
            <p className="body-copy mt-3">Working hours: {contactInfo.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
