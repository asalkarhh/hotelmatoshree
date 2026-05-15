import { motion } from "framer-motion";
import { aboutPillars, homeStats, partnerJourney } from "../data/siteData";
import { viewport } from "../utils/motion";
import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";
import { SectionTitle } from "../components/common/SectionTitle";

export function AboutPage() {
  return (
    <>
      <PageHero
        description="Matoshree Group ha dual franchise website concept ahe jithe hotel ani tea donhi business lanes one premium identity khali present kelet aahet."
        eyebrow="About Matoshree Group"
        stats={homeStats}
        title="Rooted hospitality, sharp presentation, and a clean base for future growth."
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description="Brand values, tone, and operating mindset donhi verticals madhye consistent thevaycha core structure ithe set kelela aahe."
            eyebrow="Brand Principles"
            title="What this base website is built to communicate."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aboutPillars.map((pillar) => (
              <motion.article
                className="panel-card p-6"
                initial={{ opacity: 0, y: 24 }}
                key={pillar.title}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-semibold text-brand-deep">{pillar.title}</h3>
                <p className="body-copy mt-3">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description="Future real onboarding flow sathi hi timeline later backend किंवा CRM integration shivay pan easily extend hou shakte."
            eyebrow="Partner Journey"
            title="A simple discovery-to-launch story for both franchise verticals."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {partnerJourney.map((item) => (
              <motion.article
                className="panel-card p-6"
                initial={{ opacity: 0, y: 24 }}
                key={item.step}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-brand-deep">{item.title}</h3>
                <p className="body-copy mt-3">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="panel-card texture-wash p-6 sm:p-8 lg:p-10">
            <h2 className="section-title max-w-3xl text-balance">
              This setup is intentionally component-based, so content, visuals, and future integrations can grow without rebuilding the site.
            </h2>
            <p className="body-copy mt-4 max-w-2xl">
              Sadhya content dummy aahe, pan route structure, shared design system, and form flow production-style base sarkhe wired aahet.
            </p>
            <div className="mt-8">
              <CTAButton to="/franchise-inquiry">Open Inquiry Flow</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
