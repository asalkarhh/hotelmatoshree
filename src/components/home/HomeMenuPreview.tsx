import { hotelMenuSections, teaMenuSections } from "../../data/siteData";
import { CTAButton } from "../common/CTAButton";
import { MenuSection } from "../menu/MenuSection";

export function HomeMenuPreview() {
  return (
    <>
      <MenuSection
        description="Menu sections ready aahet so tumhi later real dishes, pricing, and campaign categories easy update karu shakta."
        eyebrow="Signature Menu"
        sections={[hotelMenuSections[0], teaMenuSections[0]]}
        title="Preview cards for hotel plates and chai bestsellers."
      />
      <section className="page-section pt-2">
        <div className="section-shell">
          <CTAButton to="/menu">Browse Full Menu Page</CTAButton>
        </div>
      </section>
    </>
  );
}
