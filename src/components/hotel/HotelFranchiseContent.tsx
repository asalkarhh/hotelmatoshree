import { franchiseOffers, hotelBranches, hotelMenuSections } from "../../data/siteData";
import { FranchiseOverview } from "../common/FranchiseOverview";

export function HotelFranchiseContent() {
  return (
    <FranchiseOverview
      branches={hotelBranches}
      menuSections={hotelMenuSections}
      offer={franchiseOffers.hotel}
      vertical="hotel"
    />
  );
}
