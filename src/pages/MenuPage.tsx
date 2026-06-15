import { hotelMenuSections, menuImageCollections, teaMenuSections } from "../data/siteData";
import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { MenuImageViewer } from "../components/menu/MenuImageViewer";
import { MenuSection } from "../components/menu/MenuSection";

export function MenuPage() {
  const T = useT();
  const m = translations.menuPage;

  return (
    <>
      <PageHero
        description={T(m.description)}
        eyebrow={T(m.eyebrow)}
        stats={[
          { label: T(m.statHotel),   value: `${hotelMenuSections.length}` },
          { label: T(m.statTea),     value: `${teaMenuSections.length}` },
          { label: T(m.statVisual),  value: "Premium cards" },
          { label: T(m.statContent), value: "Dummy for now" },
        ]}
        title={T(m.title)}
      />
      <MenuSection
        description={T(m.hotelDesc)}
        eyebrow={T(m.hotelEyebrow)}
        sections={hotelMenuSections}
        title={T(m.hotelTitle)}
      />
      <MenuSection
        description={T(m.teaDesc)}
        eyebrow={T(m.teaEyebrow)}
        sections={teaMenuSections}
        title={T(m.teaTitle)}
      />
      <MenuImageViewer collections={menuImageCollections} />
    </>
  );
}
