import { Building2, CupSoda } from "lucide-react";
import { hotelBranches } from "../data/hotelBranches.js";
import { teaBranches } from "../data/teaBranches.js";
import type { Branch } from "../data/siteData";
import { BranchesDirectory } from "../components/branches/BranchesDirectory";
import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";

export function BranchesPage() {
  const hotelBranchItems = hotelBranches as Branch[];
  const teaBranchItems = teaBranches as Branch[];

  return (
    <>
      <PageHero
        description="Hotel Matoshree आणि Matoshree Tea branches महाराष्ट्रभर"
        eyebrow="Branches"
        stats={[
          { label: "Hotel branches", value: `${hotelBranchItems.length}` },
          { label: "Tea branches", value: `${teaBranchItems.length}` },
          { label: "Search", value: "Name / City" },
          { label: "Formats", value: "Hotel + Tea" },
        ]}
        title="आमच्या शाखा | Our Branches"
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel-card p-5">
              <div className="inline-flex rounded-2xl bg-brand-red p-3 text-brand-cream">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-brand-deep">Hotel Branches</h2>
              <p className="body-copy mt-3">
                Family dining locations with premium food, biryani, and thali experience.
              </p>
            </div>
            <div className="panel-card p-5">
              <div className="inline-flex rounded-2xl bg-brand-saffron p-3 text-brand-deep">
                <CupSoda className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-brand-deep">Tea Branches</h2>
              <p className="body-copy mt-3">
                Compact tea outlets with repeat footfall, quick service, and warm chai energy.
              </p>
            </div>
          </div>
        }
      />

      <BranchesDirectory hotelBranches={hotelBranchItems} teaBranches={teaBranchItems} />

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#7f241b_0%,#a43d23_45%,#dc8532_100%)] px-6 py-8 text-brand-cream shadow-[0_24px_60px_rgba(92,38,23,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-cream">
                  Franchise CTA
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  तुमच्या शहरात Matoshree Franchise हवी आहे?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">
                  Hotel franchise असो kiwa Tea outlet, next branch tumchya market madhye launch karaychi asel tar inquiry flow ready aahe.
                </p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/franchise-inquiry" variant="secondary">
                Apply for Franchise
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
