import { hotelBranches, teaBranches } from "../../data/siteData";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";
import { BranchCard } from "../branches/BranchCard";

const featuredBranches = [hotelBranches[0], hotelBranches[1], teaBranches[0], teaBranches[1]];

export function HomeBranchPreview() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="Current branches dummy content ahe, pan structure ready aahe for future real outlets, photos, and city-wise expansion updates."
          eyebrow="Branches Preview"
          title="See how both verticals can live on one polished website."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredBranches.map((branch) => (
            <BranchCard branch={branch} key={branch.id} />
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/branches" variant="secondary">
            Explore All Branches
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
