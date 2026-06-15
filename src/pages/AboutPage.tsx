import { motion } from "framer-motion";

import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { viewport } from "../utils/motion";
import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";
import { SectionTitle } from "../components/common/SectionTitle";
import { PageSEO } from "../components/common/PageSEO";

export function AboutPage() {
  const T = useT();
  const a = translations.aboutPage;
  const s = translations.homeStats;

  const stats = [
    { label: T(s.mainBranch),        value: T(s.mainBranchValue) },
    { label: T(s.verticals),         value: T(s.verticalsValue) },
    { label: T(s.franchiseContacts), value: "3+" },
    { label: T(s.brandPromise),      value: T(s.brandPromiseValue) },
  ];

  const pillars = [
    { title: T(a.ap1Title), description: T(a.ap1Desc) },
    { title: T(a.ap2Title), description: T(a.ap2Desc) },
    { title: T(a.ap3Title), description: T(a.ap3Desc) },
  ];

  const journey = [
    { step: "01", title: T(a.pj1Title), description: T(a.pj1Desc) },
    { step: "02", title: T(a.pj2Title), description: T(a.pj2Desc) },
    { step: "03", title: T(a.pj3Title), description: T(a.pj3Desc) },
    { step: "04", title: T(a.pj4Title), description: T(a.pj4Desc) },
  ];

  return (
    <>
      <PageSEO
        title={T(a.eyebrow)}
        description={T(a.description)}
      />
      <PageHero
        description={T(a.description)}
        eyebrow={T(a.eyebrow)}
        stats={stats}
        title={T(a.title)}
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description={T(a.brandDesc)}
            eyebrow={T(a.brandEyebrow)}
            title={T(a.brandTitle)}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
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
            description={T(a.journeyDesc)}
            eyebrow={T(a.journeyEyebrow)}
            title={T(a.journeyTitle)}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {journey.map((item) => (
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
                  {T(a.step)} {item.step}
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
            <h2 className="section-title max-w-3xl text-balance">{T(a.ctaText)}</h2>
            <p className="body-copy mt-4 max-w-2xl">{T(a.ctaSubtext)}</p>
            <div className="mt-8">
              <CTAButton to="/franchise-inquiry">{T(a.ctaBtn)}</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
