import { HomeBranchPreview } from "../components/home/HomeBranchPreview";
import { HomeFeaturedItems } from "../components/home/HomeFeaturedItems";
import { HomeFranchiseCTA } from "../components/home/HomeFranchiseCTA";
import { HomeHero } from "../components/home/HomeHero";
import { HomeSocialProof } from "../components/home/HomeSocialProof";
import { HomeVerticalShowcase } from "../components/home/HomeVerticalShowcase";
import { HomeWhyMatoshree } from "../components/home/HomeWhyMatoshree";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeVerticalShowcase />
      <HomeWhyMatoshree />
      <HomeFeaturedItems />
      <HomeBranchPreview />
      <HomeFranchiseCTA />
      <HomeSocialProof />
    </>
  );
}
