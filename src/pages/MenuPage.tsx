import { hotelMenuSections, menuImageCollections, teaMenuSections } from "../data/siteData";
import { PageHero } from "../components/common/PageHero";
import { MenuImageViewer } from "../components/menu/MenuImageViewer";
import { MenuSection } from "../components/menu/MenuSection";

export function MenuPage() {
  return (
    <>
      <PageHero
        description="Menu page dual-vertical structure sathi ready aahe, jithe hotel dishes and tea pairings separately but consistently present hotat."
        eyebrow="Menu"
        stats={[
          { label: "Hotel sections", value: `${hotelMenuSections.length}` },
          { label: "Tea sections", value: `${teaMenuSections.length}` },
          { label: "Visual style", value: "Premium cards" },
          { label: "Content", value: "Dummy for now" },
        ]}
        title="Signature food and chai menu previews for both franchise stories."
      />
      <MenuSection
        description="He cards future real dishes, photos, and pricing updates sathi plug-and-play structure detat."
        eyebrow="Hotel Menu"
        sections={hotelMenuSections}
        title="Hotel franchise menu blocks"
      />
      <MenuSection
        description="Tea page section repeat habit business ani snack upsell story visually support karto."
        eyebrow="Tea Menu"
        sections={teaMenuSections}
        title="Tea franchise menu blocks"
      />
      <MenuImageViewer collections={menuImageCollections} />
    </>
  );
}
