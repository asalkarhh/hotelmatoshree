import {
  BookOpen,
  Building2,
  Camera,
  MapPin,
  Megaphone,
  Rocket,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  galleryItems,
  hotelBranches,
  hotelConceptPoints,
  hotelFranchiseBenefits,
  hotelIdealLocations,
  hotelInvestmentPlaceholder,
  hotelSignatureDishes,
} from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { BranchCard } from "../branches/BranchCard";
import { CTAButton } from "../common/CTAButton";
import { PageHero } from "../common/PageHero";
import { SectionTitle } from "../common/SectionTitle";
import { HotelBenefitCard } from "./HotelBenefitCard";
import { HotelSignatureDishCard } from "./HotelSignatureDishCard";

const benefitIcons = [ShieldCheck, UtensilsCrossed, Megaphone, BookOpen, Rocket, Camera];

export function HotelFranchiseContent() {
  const proofBranches = hotelBranches.slice(0, 3);

  return (
    <>
      <PageHero
        actions={[
          { label: "Apply for Hotel Franchise", to: "/hotel-franchise-inquiry" },
          { label: "View Branches", to: "/branches", variant: "secondary" },
        ]}
        chips={["Family Restaurant", "Veg + Non-Veg", "Biryani & Thali", "Maharashtra Footprint"]}
        description="महाराष्ट्रभर वाढणारा trusted food brand — Biryani, Thali आणि Family Restaurant concept"
        eyebrow="Hotel Matoshree"
        title="Hotel Matoshree Franchise सुरू करा"
        aside={
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] border border-brand-brown/10">
              <img
                alt="Hotel Matoshree dining concept"
                className="h-72 w-full object-cover"
                loading="lazy"
                src={galleryItems[5].image}
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                  Trusted Food Brand
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Family dining, biryani, thali, and premium Marathi hospitality under one format.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Branch proof
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">{hotelBranches.length}+</p>
              </div>
              <div className="stat-tile">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  Concept
                </p>
                <p className="mt-3 font-display text-3xl text-brand-deep">Family Dining</p>
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
                alt="Hotel Matoshree concept"
                className="h-full w-full object-cover"
                loading="lazy"
                src={hotelBranches[0].image}
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-brand-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                  About Hotel Concept
                </p>
                <h2 className="mt-3 font-display text-4xl">A Maharashtra-first family restaurant format.</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-brand-cream/82">
                  Hotel Matoshree is presented as a trusted food franchise with veg and non-veg depth, strong meal anchors, and a clear regional dining identity.
                </p>
              </div>
            </div>
          </motion.article>

          <div>
            <SectionTitle
              description="Investor la concept quickly samajhawa mhanun hotel model chi core strength points clear blocks madhe dakhavli aahet."
              eyebrow="About Hotel Concept"
              title="Why the Hotel Matoshree format feels familiar, scalable, and marketable."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hotelConceptPoints.map((point) => (
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
            description="Food-heavy visuals help the franchise pitch feel stronger because signature dishes make the brand easier to imagine and sell."
            eyebrow="Signature Dishes"
            title="Core dishes that define the Hotel Matoshree menu story."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {/* Signature dish cards stay data-driven for easy future updates. */}
            {hotelSignatureDishes.map((dish) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                key={dish.id}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <HotelSignatureDishCard dish={dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description="Hotel franchise investor sathi support stack ani brand-readiness clear asel tar decision friction kami hote."
            eyebrow="Franchise Benefits"
            title="Support advantages that make the hotel model easier to launch."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {hotelFranchiseBenefits.map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                key={benefit.title}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <HotelBenefitCard benefit={benefit} icon={benefitIcons[index]} />
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
              description="Location fit hotel format sathi khup important aahe, especially family traffic and visibility sathi."
              eyebrow="Ideal Location"
              title="Catchments where Hotel Matoshree can naturally attract stronger footfall."
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {hotelIdealLocations.map((location) => (
                <div className="chip inline-flex items-center gap-2" key={location}>
                  <MapPin className="h-4 w-4 text-brand-red" />
                  {location}
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
              description="The page keeps investment discussion intentionally open-ended for now, so future real business conversation can take over naturally."
              eyebrow="Investment Details Placeholder"
              title="Discussion-led investment flow."
            />

            <div className="mt-6 rounded-[28px] border border-brand-saffron/24 bg-brand-saffron/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red/74">
                Note
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-deep">
                {hotelInvestmentPlaceholder}
              </p>
              <p className="body-copy mt-3">
                Site selection, format, footprint, and rollout plan vary by city, so final numbers can be shared after discovery discussion.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <SectionTitle
            description="Dummy branch proof helps investors see the regional restaurant story in a more concrete way."
            eyebrow="Hotel Branch Proof"
            title="Existing hotel branch examples from the Matoshree portfolio."
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
            className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#7f241b_0%,#a43d23_45%,#dc8532_100%)] px-6 py-8 text-brand-cream shadow-[0_24px_60px_rgba(92,38,23,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream">
                  <Building2 className="h-4 w-4" />
                  Hotel Franchise CTA
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  तुमच्या शहरात Hotel Matoshree सुरू करायचं आहे?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">
                  Trusted food brand, family restaurant appeal, ani strong Maharashtra identity sobat franchise discussion start kara.
                </p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/hotel-franchise-inquiry" variant="secondary">
                Apply Now
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
