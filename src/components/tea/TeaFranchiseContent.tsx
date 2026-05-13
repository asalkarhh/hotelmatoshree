import { franchiseOffers, teaBranches, teaMenuSections } from "../../data/siteData";
import { FranchiseOverview } from "../common/FranchiseOverview";

export function TeaFranchiseContent() {
  return (
    <FranchiseOverview
      branches={teaBranches}
      menuSections={teaMenuSections}
      offer={franchiseOffers.tea}
      vertical="tea"
    />
  );
}
