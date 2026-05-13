import { ArrowRight, Building2, CupSoda } from "lucide-react";
import { motion } from "framer-motion";
import { homeVerticalCards } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";

const iconMap = {
  hotel: Building2,
  tea: CupSoda,
};

export function HomeVerticalShowcase() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="Matoshree Group gives two clear growth paths: a premium hotel format and a repeat-footfall tea format."
          eyebrow="Business Verticals"
          title="Choose the franchise model that fits your market and investment style."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {homeVerticalCards.map((card, index) => {
            const Icon = iconMap[card.id];
            const accentClass = index === 0 ? "from-brand-red/12 to-brand-saffron/8" : "from-brand-saffron/14 to-brand-red/6";

            return (
              <motion.article
                className="group panel-card overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                key={card.id}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={`grid h-full lg:grid-cols-[0.95fr_1.05fr] bg-gradient-to-br ${accentClass}`}>
                  <div className="relative min-h-64 overflow-hidden">
                    <img
                      alt={card.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      src={card.image}
                    />
                    <div className="image-overlay absolute inset-0" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
                      <Icon className="h-4 w-4" />
                      {card.title}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-4xl text-brand-deep">{card.title}</h3>
                    <p className="body-copy mt-4">{card.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.highlights.map((highlight) => (
                        <span className="chip" key={highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <CTAButton icon={ArrowRight} to={card.to}>
                        {card.ctaLabel}
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
