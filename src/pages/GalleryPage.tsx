import { galleryItems } from "../data/siteData";
import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { GalleryGrid } from "../components/gallery/GalleryGrid";

export function GalleryPage() {
  const T = useT();
  const g = translations.galleryPage;

  return (
    <>
      <PageHero
        description={T(g.description)}
        eyebrow={T(g.eyebrow)}
        stats={[
          { label: T(g.statImages),  value: `${galleryItems.length}` },
          { label: T(g.statFormats), value: "Hotel + Tea" },
          { label: T(g.statMotion),  value: "Framer Motion" },
          { label: T(g.statContent), value: "Dummy visuals" },
        ]}
        title={T(g.title)}
      />
      <section className="page-section pt-4">
        <div className="section-shell">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
