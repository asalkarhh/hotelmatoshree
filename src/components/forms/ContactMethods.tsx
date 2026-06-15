import { Camera, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { buildWhatsAppLink } from "../../utils/whatsapp";

export function ContactMethods() {
  const T = useT();
  const cm = translations.contactMethods;

  const contactCards = [
    { label: T(cm.phone),     value: `${contactInfo.phone} / ${contactInfo.alternatePhones[0]}`, href: `tel:${contactInfo.phone.replaceAll(" ", "")}`, icon: PhoneCall },
    { label: T(cm.email),     value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
    { label: T(cm.whatsapp),  value: T(cm.whatsappChat), href: buildWhatsAppLink(contactInfo.whatsappNumber, "Namaskar Matoshree Group"), icon: MessageCircle },
    { label: T(cm.instagram), value: "@matoshreegroup", href: contactInfo.instagram, icon: Camera },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactCards.map((card) => (
        <a className="panel-card p-5 transition hover:-translate-y-1" href={card.href} key={card.label} rel="noreferrer" target="_blank">
          <card.icon className="h-8 w-8 text-brand-red" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{card.label}</p>
          <p className="mt-2 text-lg font-semibold text-brand-deep">{card.value}</p>
        </a>
      ))}

      <div className="panel-card p-5 sm:col-span-2">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-red" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{T(cm.officeAddress)}</p>
            <p className="mt-2 text-lg font-semibold text-brand-deep">{contactInfo.address}</p>
            <p className="body-copy mt-3">{T(cm.owner)} {contactInfo.owner}</p>
            <p className="body-copy mt-2">{T(cm.workingHours)} {contactInfo.hours}</p>
            <p className="body-copy mt-2">{T(cm.otherContacts)} {contactInfo.alternatePhones.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
