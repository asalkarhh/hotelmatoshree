import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch, FranchiseOffer, FranchiseType, MenuSectionData } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "./CTAButton";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { BranchSection } from "../branches/BranchSection";
import { MenuSection } from "../menu/MenuSection";

type FranchiseOverviewProps = {
  branches: Branch[];
  inquiryRoute?: string;
  menuSections: MenuSectionData[];
  offer: FranchiseOffer;
  vertical: FranchiseType;
};

export function FranchiseOverview({
  branches,
  inquiryRoute,
  menuSections,
  offer,
  vertical,
}: FranchiseOverviewProps) {
  const verticalLabel = vertical === "hotel" ? "Hotel" : "Tea";
  const resolvedInquiryRoute =
    inquiryRoute ?? (vertical === "hotel" ? "/hotel-franchise-inquiry" : "/tea-franchise-inquiry");

  return (
    <>
      <PageHero
        actions={[
          { label: "Start Franchise Inquiry", to: resolvedInquiryRoute },
          { label: "View Menu", to: "/menu", variant: "primary" },
        ]}
        chips={offer.highlights}
        description={offer.description}
        eyebrow={offer.eyebrow}
        stats={[
          { label: "Investment", value: offer.investment },
          { label: "Area", value: offer.area },
          { label: "Payback", value: offer.payback },
          { label: "Sample branches", value: `${branches.length}+` },
        ]}
        title={offer.title}
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description={`${verticalLabel} format madhe unit economics, customer memory, ani launch readiness ya teen goshti carefully balanced aahet.`}
            eyebrow="Why It Works"
            title={`What makes the ${verticalLabel.toLowerCase()} franchise story practical and premium.`}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offer.highlights.map((highlight) => (
              <motion.article
                className="panel-card p-6"
                initial={{ opacity: 0, y: 24 }}
                key={highlight}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Sparkles className="h-8 w-8 text-brand-red" />
                <h3 className="mt-5 text-xl font-semibold text-brand-deep">{highlight}</h3>
                <p className="body-copy mt-3">
                  Structured support mule launch pasun daily execution paryant consistency maintain karta yete.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <motion.article
            className="panel-card p-6 sm:p-7"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionTitle
              description="Different catchments la different footprint suit hoto, mhanun rollout flexible thevla aahe."
              eyebrow="Format Options"
              title={`Choose the ${verticalLabel.toLowerCase()} setup that matches your market.`}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {offer.formats.map((format) => (
                <span className="chip" key={format}>
                  {format}
                </span>
              ))}
            </div>
            <div className="warm-divider my-8" />
            <h3 className="text-lg font-semibold text-brand-deep">Best suited for</h3>
            <div className="mt-4 space-y-3">
              {offer.audience.map((item) => (
                <div className="soft-card flex items-start gap-3 px-4 py-4" key={item}>
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="body-copy">{item}</p>
                </div>
              ))}
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
              description="Launch support madhe planning, training, creative rollout, ani post-open review donhi cover hote."
              eyebrow="Support Stack"
              title="What Matoshree Group supports after you say yes."
            />
            <div className="mt-6 space-y-3">
              {offer.support.map((item) => (
                <div className="soft-card flex items-start gap-3 px-4 py-4" key={item}>
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="body-copy">{item}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <BranchSection
        description={`Existing ${verticalLabel.toLowerCase()} outlets brand energy on-ground kasa disato te clear dakhavtat.`}
        eyebrow="Existing Presence"
        items={branches}
        title={`${verticalLabel} branches already shaping the Matoshree story.`}
      />

      <MenuSection
        description={`Signature products marketing creatives ani launch communication la direct story detat.`}
        eyebrow="Menu Hooks"
        sections={menuSections}
        title={`${verticalLabel} menu anchors that help the brand sell itself.`}
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <motion.div
            className="panel-card texture-wash overflow-hidden p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="accent-badge">Ready To Explore</span>
                <h2 className="section-title mt-5 text-balance">
                  Let us map the right Matoshree franchise model for your city.
                </h2>
                <p className="body-copy mt-4 max-w-2xl">
                  Budget, area, catchment, ani rollout timeline share kara. Team next step suggest karel.
                </p>
              </div>
              <CTAButton className="w-full sm:w-auto" to={resolvedInquiryRoute}>
                Book Franchise Discussion
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
