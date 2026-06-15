import { motion } from "framer-motion";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

export function HomeFranchiseCTA() {
  const T = useT();
  const c = translations.homeCTA;

  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <motion.div
          className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#8d3025_0%,#c05b29_58%,#f0a03d_100%)] px-6 py-8 text-brand-cream shadow-[0_24px_60px_rgba(92,38,23,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream">
                {T(c.eyebrow)}
              </span>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{T(c.heading)}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">{T(c.subtext)}</p>
            </div>
            <CTAButton className="w-full sm:w-auto" to="/franchise-inquiry" variant="secondary">
              {T(c.applyNow)}
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
