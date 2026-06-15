import { Building2, CupSoda } from "lucide-react";
import { hotelBranches } from "../data/hotelBranches.js";
import { teaBranches } from "../data/teaBranches.js";
import type { Branch } from "../data/siteData";
import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { BranchesDirectory } from "../components/branches/BranchesDirectory";
import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";

export function BranchesPage() {
  const T = useT();
  const b = translations.branchesPage;
  const hotelBranchItems = hotelBranches as Branch[];
  const teaBranchItems = teaBranches as Branch[];

  return (
    <>
      <PageHero
        description={T(b.description)}
        eyebrow={T(b.eyebrow)}
        stats={[
          { label: T(b.statHotel),   value: `${hotelBranchItems.length}` },
          { label: T(b.statTea),     value: `${teaBranchItems.length}` },
          { label: T(b.statSearch),  value: "Name / City" },
          { label: T(b.statFormats), value: "Hotel + Tea" },
        ]}
        title={T(b.title)}
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel-card p-5">
              <div className="inline-flex rounded-2xl bg-brand-red p-3 text-brand-cream">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-brand-deep">{T(b.hotelCardTitle)}</h2>
              <p className="body-copy mt-3">{T(b.hotelCardDesc)}</p>
            </div>
            <div className="panel-card p-5">
              <div className="inline-flex rounded-2xl bg-brand-saffron p-3 text-brand-deep">
                <CupSoda className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-brand-deep">{T(b.teaCardTitle)}</h2>
              <p className="body-copy mt-3">{T(b.teaCardDesc)}</p>
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
                  {T(b.ctaEyebrow)}
                </span>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{T(b.ctaHeading)}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-cream/84 sm:text-base">{T(b.ctaText)}</p>
              </div>
              <CTAButton className="w-full sm:w-auto" to="/franchise-inquiry" variant="secondary">
                {T(b.applyBtn)}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
