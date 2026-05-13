import { Building2, CupSoda } from "lucide-react";
import { motion } from "framer-motion";
import { franchiseOffers } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";

const verticalCards = [
  {
    icon: Building2,
    slug: "/hotel-franchise",
    vertical: franchiseOffers.hotel,
  },
  {
    icon: CupSoda,
    slug: "/tea-franchise",
    vertical: franchiseOffers.tea,
  },
];

export function HomeVerticalShowcase() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="Investor, operator, kiwa first-time founder kontya lane madhun start karaycha te market fit nusar choose karu shakto."
          eyebrow="Two Franchise Verticals"
          title="One brand umbrella with two distinct business models."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {verticalCards.map((card) => (
            <motion.article
              className="panel-card p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              key={card.slug}
              transition={{ duration: 0.55 }}
              viewport={viewport}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand-red p-3 text-brand-cream">
                  <card.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  {card.vertical.eyebrow}
                </p>
              </div>
              <h3 className="mt-5 font-display text-4xl text-brand-deep">{card.vertical.title}</h3>
              <p className="body-copy mt-4">{card.vertical.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="soft-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/72">
                    Investment
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-deep">{card.vertical.investment}</p>
                </div>
                <div className="soft-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/72">
                    Area
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-deep">{card.vertical.area}</p>
                </div>
                <div className="soft-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/72">
                    Payback
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-deep">{card.vertical.payback}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {card.vertical.highlights.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <CTAButton className="mt-8" to={card.slug} variant="secondary">
                View Details
              </CTAButton>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
