import {
  BriefcaseBusiness,
  Building2,
  CupSoda,
  Fuel,
  MapPin,
  Rocket,
  ShieldCheck,
  Store,
  TimerReset,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  teaBranches,
  teaSignatureProducts,
  teaInvestmentPlaceholder,
} from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { BranchCard } from "../branches/BranchCard";
import { CTAButton } from "../common/CTAButton";
import { PageHero } from "../common/PageHero";
import { SectionTitle } from "../common/SectionTitle";
import { TeaBenefitCard } from "./TeaBenefitCard";
import { TeaProductCard } from "./TeaProductCard";

const benefitIcons = [ShieldCheck, Users, Store, Rocket, TimerReset, BriefcaseBusiness];
const locationIcons = [MapPin, Building2, Store, Users, BriefcaseBusiness, Fuel];

export function TeaFranchiseContent() {
  const T = useT();
  const t = translations.teaPage;
  const proofBranches = teaBranches.slice(0, 3);

  const conceptPoints = [
    { title: T(t.tc1Title), description: T(t.tc1Desc) },
    { title: T(t.tc2Title), description: T(t.tc2Desc) },
    { title: T(t.tc3Title), description: T(t.tc3Desc) },
    { title: T(t.tc4Title), description: T(t.tc4Desc) },
    { title: T(t.tc5Title), description: T(t.tc5Desc) },
  ];

  const benefits = [
    { title: T(t.tb1Title), description: T(t.tb1Desc) },
    { title: T(t.tb2Title), description: T(t.tb2Desc) },
    { title: T(t.tb3Title), description: T(t.tb3Desc) },
    { title: T(t.tb4Title), description: T(t.tb4Desc) },
    { title: T(t.tb5Title), description: T(t.tb5Desc) },
    { title: T(t.tb6Title), description: T(t.tb6Desc) },
  ];

  const idealLocations = [
    T(t.tloc1), T(t.tloc2), T(t.tloc3), T(t.tloc4), T(t.tloc5), T(t.tloc6),
  ];

  return (
    <>
      <PageHero
        actions={[
          { label: T(t.applyBtn),     to: "/tea-franchise-inquiry" },
          { label: T(t.viewBranches), to: "/branches", variant: "secondary" },
        ]}
        chips={[T(t.chip1), T(t.chip2), T(t.chip3), T(t.chip4)]}
        description={T(t.description)}
        eyebrow={T(t.eyebrow)}
        title={T(t.title)}
        aside={
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] border border-brand-brown/10">
              <img
                alt="Matoshree Tea outlet concept"
                className="h-72 w-full object-cover"
                loading="lazy"
                src={teaBranches[0].image}
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                  {T(t.teaOutlet)}
                </p>
                <p className="mt-2 text-lg font-semibold">{T(t.teaCaption)}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  {T(t.branchProof)}
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{teaBranches.length}+</p>
              </div>
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  {T(t.format)}
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{T(t.compactOutlet)}</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.article
            className="panel-card overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-full min-h-80 overflow-hidden">
              <img
                alt="Tea franchise concept"
                className="h-full w-full object-cover"
                loading="lazy"
                src={teaBranches[1].image}
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                  {T(t.aboutConceptEye)}
                </p>
                <h2 className="mt-3 font-display text-4xl">{T(t.conceptCaption)}</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-brand-cream/82">
                  {T(t.conceptSubtext)}
                </p>
              </div>
            </div>
          </motion.article>

          <div>
            <SectionTitle
              description={T(t.conceptDesc)}
              eyebrow={T(t.conceptEyebrow)}
              title={T(t.conceptTitle)}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {conceptPoints.map((point) => (
                <motion.article
                  className="soft-card p-5"
                  initial={{ opacity: 0, y: 24 }}
                  key={point.title}
                  transition={{ duration: 0.55 }}
                  viewport={viewport}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-lg font-semibold text-brand-deep">{point.title}</h3>
                  <p className="body-copy mt-3">{point.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description={T(t.productsDesc)}
            eyebrow={T(t.productsEyebrow)}
            title={T(t.productsTitle)}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {teaSignatureProducts.map((product) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                key={product.id}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <TeaProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description={T(t.whyDesc)}
            eyebrow={T(t.whyEyebrow)}
            title={T(t.whyTitle)}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                key={benefit.title}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <TeaBenefitCard benefit={benefit} icon={benefitIcons[index]} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.article
            className="panel-card p-6 sm:p-7"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionTitle
              description={T(t.locationDesc)}
              eyebrow={T(t.locationEyebrow)}
              title={T(t.locationTitle)}
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {idealLocations.map((location, index) => {
                const Icon = locationIcons[index];
                return (
                  <div className="chip inline-flex items-center gap-2" key={location}>
                    <Icon className="h-4 w-4 text-brand-red" />
                    {location}
                  </div>
                );
              })}
            </div>
          </motion.article>

          <motion.article
            className="panel-card p-6 sm:p-7"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionTitle
              description={T(t.investDesc)}
              eyebrow={T(t.investEyebrow)}
              title={T(t.investTitle)}
            />
            <div className="mt-6 rounded-[28px] border border-brand-saffron/24 bg-brand-saffron/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red/74">
                {T(t.investNote)}
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-deep">
                {teaInvestmentPlaceholder}
              </p>
              <p className="body-copy mt-3">{T(t.investNoteText)}</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description={T(t.branchDesc)}
            eyebrow={T(t.branchEyebrow)}
            title={T(t.branchTitle)}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {proofBranches.map((branch) => (
              <BranchCard branch={branch} key={branch.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <motion.div
            className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#4a2617_0%,#8d3025_42%,#df8d31_100%)] px-6 py-8 text-brand-cream shadow-[0_24px_60px_rgba(92,38,23,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream">
                  <CupSoda className="h-4 w-4" />
                  {T(t.ctaEyebrow)}
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  {T(t.ctaHeading)}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">
                  {T(t.ctaText)}
                </p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/tea-franchise-inquiry" variant="secondary">
                {T(t.applyNow)}
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
