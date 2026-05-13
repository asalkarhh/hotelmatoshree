import { galleryItems } from "../../data/siteData";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";
import { GalleryGrid } from "../gallery/GalleryGrid";

export function HomeGalleryPreview() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="Visual storytelling hotel, tea, launch, and ambience ya saglya sections sathi already wired aahe."
          eyebrow="Gallery Preview"
          title="A premium food brand should feel alive before the first inquiry even lands."
        />
        <div className="mt-10">
          <GalleryGrid items={galleryItems.slice(0, 4)} />
        </div>
        <div className="mt-8">
          <CTAButton to="/gallery" variant="secondary">
            Open Full Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
