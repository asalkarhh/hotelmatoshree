import { Building2, CupSoda, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { franchiseOffers, homeStats } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

export function HomeHero() {
  return (
    <section className="page-section pb-8">
      <div className="section-shell">
        <motion.div
          animate="show"
          className="panel-card texture-wash overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          initial="hidden"
          variants={staggerContainer}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <motion.span className="accent-badge" variants={fadeUp}>
                <Sparkles className="h-4 w-4" />
                Premium food brand | Marathi warmth
              </motion.span>
              <motion.h1 className="display-title mt-6 max-w-4xl text-balance" variants={fadeUp}>
                Assal swad, premium atithya, and one franchise website for two clear growth lanes.
              </motion.h1>
              <motion.p className="body-copy mt-5 max-w-2xl text-base sm:text-lg" variants={fadeUp}>
                Matoshree Group hotel franchise ani tea franchise donhi vertical ekach clean brand
                story madhe present karto, so partners la right format choose karna easy hote.
              </motion.p>
              <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
                <CTAButton to="/franchise-inquiry">Start Franchise Inquiry</CTAButton>
                <CTAButton to="/about" variant="secondary">
                  Explore Brand Story
                </CTAButton>
              </motion.div>
              <motion.div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" variants={fadeUp}>
                {homeStats.map((stat) => (
                  <div className="stat-tile" key={stat.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-display text-3xl text-brand-deep">{stat.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div className="grid gap-4" variants={fadeUp}>
              <div className="soft-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-brand-red p-3 text-brand-cream">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                      Hotel Franchise
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-brand-deep">
                      {franchiseOffers.hotel.investment}
                    </h2>
                    <p className="body-copy mt-3">{franchiseOffers.hotel.description}</p>
                  </div>
                </div>
              </div>

              <div className="soft-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-brand-saffron p-3 text-brand-deep">
                    <CupSoda className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                      Tea Franchise
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-brand-deep">
                      {franchiseOffers.tea.investment}
                    </h2>
                    <p className="body-copy mt-3">{franchiseOffers.tea.description}</p>
                  </div>
                </div>
              </div>

              <div className="soft-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Brand note
                </p>
                <p className="mt-3 text-lg font-semibold text-brand-deep">
                  Ek umbrella, don franchise stories, and a cleaner path for future expansion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
