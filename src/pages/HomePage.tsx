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
      <section className="seo-content">
        <h1>हॉटेल धाराशिव चे मातोश्री</h1>

        <p>
          धाराशिव मधील प्रसिद्ध हॉटेल मातोश्री - जिजाऊ चौक, बार्शी नाका येथे
          स्वादिष्ट चिकन दम बिर्याणी, मटन रान, दवारा स्पेशल, चहा, नाश्ता,
          वडापाव, पोहे, साऊथ इंडियन पदार्थ आणि फ्रँचायझी सुविधा उपलब्ध.
        </p>

        <h2>मातोश्री चहावाला फ्रँचायझी</h2>
        <p>
          महाराष्ट्रभर मातोश्री चहावाला फ्रँचायझी उपलब्ध. संपर्क: 9175379695 /
          7370503858
        </p>

        <h2>Special Dishes</h2>
        <p>
          Chicken Dum Biryani, Mutton Raan, Chicken Raan, Veg & Non-Veg Thali,
          Tea, Pohe, Bhaje, Vada Pav.
        </p>
      </section>
    </>
  );
}
