import { BookOpen, Building2, Camera, MapPin, Megaphone, Rocket, ShieldCheck, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { galleryItems, hotelBranches, hotelSignatureDishes, hotelInvestmentPlaceholder } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { BranchCard } from "../branches/BranchCard";
import { CTAButton } from "../common/CTAButton";
import { PageHero } from "../common/PageHero";
import { SectionTitle } from "../common/SectionTitle";
import { HotelBenefitCard } from "./HotelBenefitCard";
import { HotelSignatureDishCard } from "./HotelSignatureDishCard";

const benefitIcons = [ShieldCheck, UtensilsCrossed, Megaphone, BookOpen, Rocket, Camera];

export function HotelFranchiseContent() {
  const T = useT();
  const h = translations.hotelPage;
  const proofBranches = hotelBranches.slice(0, 3);

  const conceptPoints = [
    { title: T(h.cp1Title), description: T(h.cp1Desc) },
    { title: T(h.cp2Title), description: T(h.cp2Desc) },
    { title: T(h.cp3Title), description: T(h.cp3Desc) },
    { title: T(h.cp4Title), description: T(h.cp4Desc) },
  ];

  const benefits = [
    { title: T(h.hb1Title), description: T(h.hb1Desc) },
    { title: T(h.hb2Title), description: T(h.hb2Desc) },
    { title: T(h.hb3Title), description: T(h.hb3Desc) },
    { title: T(h.hb4Title), description: T(h.hb4Desc) },
    { title: T(h.hb5Title), description: T(h.hb5Desc) },
    { title: T(h.hb6Title), description: T(h.hb6Desc) },
  ];

  const idealLocations = [T(h.loc1), T(h.loc2), T(h.loc3), T(h.loc4), T(h.loc5)];

  const dishes = [
    { ...hotelSignatureDishes[0], name: "Chicken Dum Biryani" },
    { ...hotelSignatureDishes[1], name: "Special Chicken Thali" },
    { ...hotelSignatureDishes[2], name: "Tandoori Leg Piece Thali" },
    { ...hotelSignatureDishes[3], name: "Veg Thali" },
    { ...hotelSignatureDishes[4], name: "Mutton Thali" },
    { ...hotelSignatureDishes[5], name: "Family Combos" },
  ];

  return (
    <>
      <PageHero
        actions={[
          { label: T(h.applyBtn),     to: "/hotel-franchise-inquiry" },
          { label: T(h.viewBranches), to: "/branches", variant: "secondary" },
        ]}
        chips={[T(h.chip1), T(h.chip2), T(h.chip3), T(h.chip4)]}
        description={T(h.description)}
        eyebrow={T(h.eyebrow)}
        title={T(h.title)}
        aside={
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] border border-brand-brown/10">
              <img alt="Hotel Matoshree dining concept" className="h-72 w-full object-cover" loading="lazy" src={galleryItems[5].image} />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">{T(h.trustedBrand)}</p>
                <p className="mt-2 text-lg font-semibold">{T(h.trustedCaption)}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{T(h.branchProof)}</p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{hotelBranches.length}+</p>
              </div>
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{T(h.concept)}</p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{T(h.familyDining)}</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.article className="panel-card overflow-hidden" initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.55 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}>
            <div className="relative h-full min-h-80 overflow-hidden">
              <img alt="Hotel Matoshree concept" className="h-full w-full object-cover" loading="lazy" src={hotelBranches[0].image} />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">{T(h.aboutConceptEye)}</p>
                <h2 className="mt-3 font-display text-4xl">{T(h.conceptCaption)}</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-brand-cream/82">{T(h.conceptSubtext)}</p>
              </div>
            </div>
          </motion.article>

          <div>
            <SectionTitle description={T(h.conceptDesc)} eyebrow={T(h.conceptEyebrow)} title={T(h.conceptTitle)} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {conceptPoints.map((point) => (
                <motion.article className="soft-card p-5" initial={{ opacity: 0, y: 24 }} key={point.title} transition={{ duration: 0.55 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}>
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
          <SectionTitle description={T(h.dishesDesc)} eyebrow={T(h.dishesEyebrow)} title={T(h.dishesTitle)} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {dishes.map((dish) => (
              <motion.div initial={{ opacity: 0, y: 24 }} key={dish.id} transition={{ duration: 0.55 }} viewport={viewport} whileHover={{ y: -6 }} whileInView={{ opacity: 1, y: 0 }}>
                <HotelSignatureDishCard dish={dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle description={T(h.benefitsDesc)} eyebrow={T(h.benefitsEyebrow)} title={T(h.benefitsTitle)} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div initial={{ opacity: 0, y: 24 }} key={benefit.title} transition={{ duration: 0.55 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}>
                <HotelBenefitCard benefit={benefit} icon={benefitIcons[index]} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.article className="panel-card p-6 sm:p-7" initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.55 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}>
            <SectionTitle description={T(h.locationDesc)} eyebrow={T(h.locationEyebrow)} title={T(h.locationTitle)} />
            <div className="mt-6 flex flex-wrap gap-3">
              {idealLocations.map((location) => (
                <div className="chip inline-flex items-center gap-2" key={location}>
                  <MapPin className="h-4 w-4 text-brand-red" />
                  {location}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article className="panel-card p-6 sm:p-7" initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.55, delay: 0.05 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}>
            <SectionTitle description={T(h.investDesc)} eyebrow={T(h.investEyebrow)} title={T(h.investTitle)} />
            <div className="mt-6 rounded-[28px] border border-brand-saffron/24 bg-brand-saffron/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red/74">{T(h.investNote)}</p>
              <p className="mt-3 text-lg font-semibold text-brand-deep">{hotelInvestmentPlaceholder}</p>
              <p className="body-copy mt-3">{T(h.investNoteText)}</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle description={T(h.branchDesc)} eyebrow={T(h.branchEyebrow)} title={T(h.branchTitle)} />
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
            className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#7f241b_0%,#a43d23_45%,#dc8532_100%)] px-6 py-8 text-brand-cream shadow-[0_24px_60px_rgba(92,38,23,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.6 }} viewport={viewport} whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream">
                  <Building2 className="h-4 w-4" />
                  {T(h.ctaEyebrow)}
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{T(h.ctaHeading)}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">{T(h.ctaText)}</p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/hotel-franchise-inquiry" variant="secondary">
                {T(h.applyNow)}
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
