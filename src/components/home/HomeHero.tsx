import { Building2, CupSoda, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { homeStats, homeVerticalCards } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

export function HomeHero() {
  const hotelCard = homeVerticalCards[0];
  const teaCard = homeVerticalCards[1];

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 flex flex-col justify-center min-h-screen bg-[linear-gradient(135deg,#2b120d_0%,#6f2519_44%,#d97927_100%)] !rounded-none !border-0 !shadow-none !max-w-none shrink-0 overflow-hidden !-mt-[69px] !pt-[69px] text-brand-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(252,244,231,0.16),transparent_24%)] pointer-events-none" />
      <div className="section-shell w-full px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 relative z-10">
        <motion.div
          animate="show"
          initial="hidden"
          variants={staggerContainer}
        >
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream"
                variants={fadeUp}
              >
                <Sparkles className="h-4 w-4" />
                Premium Food & Tea Franchise
              </motion.span>

              <motion.h1 className="mt-6 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-7xl" variants={fadeUp}>
                मातोश्री — महाराष्ट्रभर वाढणारा Food & Tea Franchise Brand
              </motion.h1>

              <motion.p className="mt-5 max-w-2xl text-sm leading-7 text-brand-cream/82 sm:text-base" variants={fadeUp}>
                Matoshree Group brings together a premium hotel franchise and a high-repeat tea
                franchise under one strong Marathi-first brand story, built for growth across
                Maharashtra.
              </motion.p>

              <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={fadeUp}>
                <CTAButton to="/hotel-franchise" variant="secondary">
                  Explore Hotel Franchise
                </CTAButton>
                <CTAButton to="/tea-franchise" variant="secondary">
                  Explore Tea Franchise
                </CTAButton>
                <CTAButton to="/franchise-inquiry">Apply for Franchise</CTAButton>
              </motion.div>

              <motion.div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" variants={fadeUp}>
                {homeStats.map((stat) => (
                  <div className="rounded-[22px] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm" key={stat.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-cream/70">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-display text-3xl text-brand-cream">{stat.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div className="grid gap-4" variants={fadeUp}>
              {/* Placeholder media collage for the premium hero visual. */}
              <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/12">
                  <img
                    alt={hotelCard.title}
                    className="h-72 w-full object-cover sm:h-80"
                    loading="lazy"
                    src={hotelCard.image}
                  />
                  <div className="image-overlay absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
                      <Building2 className="h-4 w-4" />
                      Hotel Franchise
                    </div>
                    <p className="mt-3 text-lg font-semibold text-brand-cream">
                      Family restaurant format with biryani, thali, and premium dine-in energy.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/12">
                    <img
                      alt={teaCard.title}
                      className="h-36 w-full object-cover sm:h-[188px]"
                      loading="lazy"
                      src={teaCard.image}
                    />
                    <div className="image-overlay absolute inset-0" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
                        <CupSoda className="h-4 w-4" />
                        Tea Franchise
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-cream/72">
                      Franchise Focus
                    </p>
                    <p className="mt-3 text-xl font-semibold text-brand-cream">
                      Hotel + Tea verticals on one premium, scalable home page.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Hotel Franchise", "Tea Franchise", "Marathi Trust"].map((item) => (
                        <span
                          className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs text-brand-cream/82"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
