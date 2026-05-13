import { hotelBranches, teaBranches } from "../data/siteData";
import { PageHero } from "../components/common/PageHero";
import { BranchSection } from "../components/branches/BranchSection";

export function BranchesPage() {
  return (
    <>
      <PageHero
        description="Branches page madhe hotel ani tea vertical donhi ekach brand experience madhe list hotat, with room for future filter or city-based expansion."
        eyebrow="Branches"
        stats={[
          { label: "Hotel branches", value: `${hotelBranches.length}` },
          { label: "Tea branches", value: `${teaBranches.length}` },
          { label: "Cities covered", value: "7" },
          { label: "Format mix", value: "2 verticals" },
        ]}
        title="Operational branch showcases for both Matoshree franchise formats."
      />
      <BranchSection
        description="Family dining, delivery readiness, and premium hospitality touchpoints ya section madhe highlight kelet aahet."
        eyebrow="Hotel Vertical"
        items={hotelBranches}
        title="Hotel branches"
      />
      <BranchSection
        description="Repeat footfall, compact setup, ani adda-friendly energy tea branch cards madhun reflect hote."
        eyebrow="Tea Vertical"
        items={teaBranches}
        title="Tea branches"
      />
    </>
  );
}
