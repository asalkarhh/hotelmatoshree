import { Building2, CupSoda } from "lucide-react";
import { motion } from "framer-motion";
import type { FranchiseInquiryOption } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

type InquiryOptionCardProps = {
  option: FranchiseInquiryOption;
};

const iconMap = {
  hotel: Building2,
  tea: CupSoda,
};

export function InquiryOptionCard({ option }: InquiryOptionCardProps) {
  const Icon = iconMap[option.id];

  return (
    <motion.article
      className="group panel-card overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55 }}
      viewport={viewport}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          alt={option.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          src={option.image}
        />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
          <Icon className="h-4 w-4" />
          {option.title}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-4xl text-brand-deep">{option.title}</h3>
        <p className="body-copy mt-4">{option.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {option.highlights.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <CTAButton className="mt-8" to={option.to}>
          {option.buttonLabel}
        </CTAButton>
      </div>
    </motion.article>
  );
}
