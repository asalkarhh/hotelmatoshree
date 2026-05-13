import { HomeBranchPreview } from "../components/home/HomeBranchPreview";
import { HomeGalleryPreview } from "../components/home/HomeGalleryPreview";
import { HomeHero } from "../components/home/HomeHero";
import { HomeInquiryStrip } from "../components/home/HomeInquiryStrip";
import { HomeMenuPreview } from "../components/home/HomeMenuPreview";
import { HomeVerticalShowcase } from "../components/home/HomeVerticalShowcase";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeVerticalShowcase />
      <HomeBranchPreview />
      <HomeMenuPreview />
      <HomeGalleryPreview />
      <HomeInquiryStrip />
    </>
  );
}
