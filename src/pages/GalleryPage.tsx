import { galleryItems } from "../data/siteData";
import { PageHero } from "../components/common/PageHero";
import { GalleryGrid } from "../components/gallery/GalleryGrid";

export function GalleryPage() {
  return (
    <>
      <PageHero
        description="Gallery layout brand ambience, product mood, and launch moments capture karnyasathi warm premium grid madhe set kelela aahe."
        eyebrow="Gallery"
        stats={[
          { label: "Image cards", value: `${galleryItems.length}` },
          { label: "Formats shown", value: "Hotel + Tea" },
          { label: "Motion", value: "Framer Motion" },
          { label: "Content type", value: "Dummy visuals" },
        ]}
        title="A visual gallery for ambience, products, and franchise energy."
      />
      <section className="page-section pt-4">
        <div className="section-shell">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
