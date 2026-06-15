import { Clock3, MapPin, Phone, Store, User } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { CTAButton } from "../common/CTAButton";
import { WhatsAppIcon } from "../common/WhatsAppIcon";

type BranchCardProps = { branch: Branch; showActions?: boolean };

export function BranchCard({ branch, showActions = false }: BranchCardProps) {
  const T = useT();
  const bc = translations.branchCard;
  const branchWhatsAppMessage = `Namaskar, mala ${branch.name} branch baddal mahiti pahije.`;
  const defaultTagline =
    branch.vertical === "hotel"
      ? `${T(bc.hotelTagline)}`
      : `${T(bc.teaTagline)}`;

  return (
    <motion.article
      className="panel-card group flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55 }}
      viewport={viewport}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-64 shrink-0 overflow-hidden">
        <img alt={branch.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src={branch.image} />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cream shadow-md">
          <MapPin className="h-3.5 w-3.5" />
          {branch.city}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">{branch.locality}</p>
          <h3 className="mt-2 font-display text-3xl">{branch.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-4">
          <div className="flex items-start gap-3 text-sm text-brand-brown/76">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
            <span>{typeof branch.address === "string" ? branch.address : T(branch.address as { mr: string; en: string })}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-brand-brown/76">
            <User className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
            <span>{T(bc.manager)} {branch.managerName || "Branch Manager"}</span>
          </div>
          {showActions ? (
            <div className="flex items-start gap-3 text-sm text-brand-brown/76">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <span>{branch.phone}</span>
            </div>
          ) : null}
          <div className="flex items-start gap-3 text-sm text-brand-brown/76">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
            <span>{branch.timings}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-brand-brown/76">
            <Store className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
            <span>{branch.format}</span>
          </div>
          <p className="body-copy">{branch.note}</p>
          <div className="flex flex-wrap gap-2">
            <span className="chip">{branch.specialty}</span>
            <span className="chip">{branch.vertical === "hotel" ? T(bc.hotelVertical) : T(bc.teaVertical)}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col items-center justify-center rounded-xl border border-brand-red/10 bg-brand-red/5 p-3 sm:mt-5">
          <p className="text-center text-xs font-medium italic leading-relaxed text-brand-red/80">
            "{branch.tagline || defaultTagline}"
          </p>
        </div>

        {showActions ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <CTAButton href={branch.mapLink} icon={MapPin} iconPosition="left" target="_blank" variant="map">
              {T(bc.googleMap)}
            </CTAButton>
            <CTAButton href={`tel:${branch.phone.replaceAll(" ", "")}`} icon={Phone} iconPosition="left" variant="primary">
              {T(bc.call)}
            </CTAButton>
            <CTAButton
              href={buildWhatsAppLink(branch.phone.replace(/\D/g, ""), branchWhatsAppMessage)}
              icon={WhatsAppIcon}
              iconPosition="left"
              target="_blank"
              variant="whatsapp"
            >
              {T(bc.whatsapp)}
            </CTAButton>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
