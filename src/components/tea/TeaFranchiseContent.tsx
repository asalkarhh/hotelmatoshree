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
  teaConceptPoints,
  teaFranchiseBenefits,
  teaIdealLocations,
  teaInvestmentPlaceholder,
  teaSignatureProducts,
} from "../../data/siteData";
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
  const proofBranches = teaBranches.slice(0, 3);

  return (
    <>
      <PageHero
        actions={[
          { label: "Apply for Tea Franchise", to: "/tea-franchise-inquiry" },
          { label: "View Tea Branches", to: "/branches", variant: "secondary" },
        ]}
        chips={["Low Investment", "Daily Repeat Customers", "Quick Setup", "Compact Format"]}
        description="कमी investment मध्ये high-demand tea outlet business"
        eyebrow="Matoshree Tea"
        title="Matoshree Tea Franchise सुरू करा"
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
                  Tea Outlet Business
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Compact tea format with repeat footfall, simpler operations, and a premium local chai story.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Branch proof
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{teaBranches.length}+</p>
              </div>
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Format
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">Compact Outlet</p>
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
                  About Tea Concept
                </p>
                <h2 className="mt-3 font-display text-4xl">A compact chai-first business with daily local demand.</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-brand-cream/82">
                  Matoshree Tea is shaped as an approachable outlet model for small and medium investors looking for faster, habit-driven beverage business.
                </p>
              </div>
            </div>
          </motion.article>

          <div>
            <SectionTitle
              description="Tea franchise concept samjun ghyaycha asel tar format simplicity, repeat customers, ani quick rollout he core points aahet."
              eyebrow="About Tea Concept"
              title="Why the Matoshree Tea model is simple, scalable, and investor-friendly."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {teaConceptPoints.map((point) => (
                <motion.article
                  className="soft-card p-5"
                  initial={{ opacity: 0, y: 24 }}
                  key={point.title}
                  transition={{ duration: 0.55 }}
                  viewport={viewport}
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
            description="Tea products section gives investors a clearer idea of what the outlet can sell as signature daily movers and add-ons."
            eyebrow="Tea Products"
            title="Core products that make the Matoshree Tea outlet feel warm, premium, and repeat-worthy."
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
            description="Small and medium investors la tea format attractive वाटतो कारण launch complexity kami ani repeat demand stronger aste."
            eyebrow="Why Tea Franchise"
            title="Advantages that make the tea franchise a practical entry into F&B."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {teaFranchiseBenefits.map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                key={benefit.title}
                transition={{ duration: 0.55 }}
                viewport={viewport}
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
              description="Tea outlets strongest perform kartat jithe quick stop traffic, habit visits, and visibility strong aste."
              eyebrow="Ideal Location"
              title="Catchments where a Matoshree Tea outlet can naturally fit."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {teaIdealLocations.map((location, index) => {
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
              description="Investment note intentionally placeholder thevla aahe so actual format fit discussion nantar share karta yeil."
              eyebrow="Investment Details Placeholder"
              title="Discussion-led tea investment flow."
            />

            <div className="mt-6 rounded-[28px] border border-brand-saffron/24 bg-brand-saffron/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red/74">
                Note
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-deep">
                {teaInvestmentPlaceholder}
              </p>
              <p className="body-copy mt-3">
                Final numbers can depend on location, outlet size, frontage, and launch requirement in the selected area.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description="Dummy tea branch proof keeps the page grounded and shows how the compact outlet story can already look on-ground."
            eyebrow="Tea Branch Preview"
            title="Sample Matoshree Tea branches from the current dummy portfolio."
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
                  Tea Franchise CTA
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  तुमच्या area मध्ये Matoshree Tea Outlet सुरू करायचं आहे?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">
                  Low investment, repeat customer habit, ani compact setup sobat tea franchise discussion aajach start kara.
                </p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/tea-franchise-inquiry" variant="secondary">
                Apply Now
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
