import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion";
import { CTAButton } from "./CTAButton";

type HeroAction = {
  label: string;
  to?: string;
  href?: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
};

type HeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  actions?: HeroAction[];
  aside?: ReactNode;
  chips?: string[];
  description: string;
  eyebrow: string;
  stats?: HeroStat[];
  title: string;
};

export function PageHero({
  actions,
  aside,
  chips,
  description,
  eyebrow,
  stats,
  title,
}: PageHeroProps) {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 flex flex-col justify-center min-h-screen panel-card texture-wash !rounded-none !border-0 !shadow-none !max-w-none shrink-0 overflow-hidden !-mt-[69px] !pt-[69px]">
      <div className="section-shell w-full px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <motion.div
          animate="show"
          initial="hidden"
          variants={staggerContainer}
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.span className="accent-badge" variants={fadeUp}>
                {eyebrow}
              </motion.span>
              <motion.h1 className="display-title mt-6 max-w-4xl text-balance" variants={fadeUp}>
                {title}
              </motion.h1>
              <motion.p className="body-copy mt-5 max-w-2xl text-base sm:text-lg" variants={fadeUp}>
                {description}
              </motion.p>

              {chips?.length ? (
                <motion.div className="mt-6 flex flex-wrap gap-3" variants={fadeUp}>
                  {chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </motion.div>
              ) : null}

              {actions?.length ? (
                <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
                  {actions.map((action) => (
                    <CTAButton
                      href={action.href}
                      icon={action.icon}
                      key={`${action.label}-${action.to ?? action.href ?? "button"}`}
                      to={action.to}
                      variant={action.variant}
                    >
                      {action.label}
                    </CTAButton>
                  ))}
                </motion.div>
              ) : null}
            </div>

            <motion.div className="grid gap-4" variants={fadeUp}>
              {aside ? aside : null}
              {!aside && stats?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div className="stat-tile" key={stat.label}>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                        {stat.label}
                      </p>
                      <p className="mt-3 font-display text-3xl text-brand-deep">{stat.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
