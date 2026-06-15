import { HomeBranchPreview } from "../components/home/HomeBranchPreview";
import { HomeFeaturedItems } from "../components/home/HomeFeaturedItems";
import { HomeFranchiseCTA } from "../components/home/HomeFranchiseCTA";
import { HomeHero } from "../components/home/HomeHero";
import { HomeSocialProof } from "../components/home/HomeSocialProof";
import { HomeVerticalShowcase } from "../components/home/HomeVerticalShowcase";
import { HomeWhyMatoshree } from "../components/home/HomeWhyMatoshree";
import { PageSEO } from "../components/common/PageSEO";
import { useLanguage } from "./LanguageContext";

export function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <PageSEO 
        title={language === 'mr' ? "मुख्य पृष्ठ" : "Home"}
        description={language === 'mr' ? "धाराशिव मधील प्रसिद्ध हॉटेल मातोश्री - स्वादिष्ट चिकन दम बिर्याणी, मटन रान आणि चहा. महाराष्ट्रभर मातोश्री चहावाला फ्रँचायझी उपलब्ध." : "Famous Hotel Matoshree in Dharashiv - Delicious Chicken Dum Biryani, Mutton Raan, and Tea. Matoshree Teawala franchise available across Maharashtra."}
        keywords="Hotel Matoshree, Dharashiv Hotel, Chicken Dum Biryani, Matoshree Tea Franchise, Mutton Raan"
      />
      <HomeHero />
      <HomeVerticalShowcase />
      <HomeWhyMatoshree />
      <HomeFeaturedItems />
      <HomeBranchPreview />
      <HomeFranchiseCTA />
      <HomeSocialProof />
      
      <section className="seo-content">
        {language === 'mr' ? (
          <>
            <h1>हॉटेल धाराशिव चे मातोश्री</h1>
            <p>
              धाराशिव मधील प्रसिद्ध हॉटेल मातोश्री - जिजाऊ चौक, बार्शी नाका येथे
              स्वादिष्ट चिकन दम बिर्याणी, मटन रान, दवारा स्पेशल, चहा, नाश्ता,
              वडापाव, पोहे, साऊथ इंडियन पदार्थ आणि फ्रँचायझी सुविधा उपलब्ध.
            </p>
            <h2>मातोश्री चहावाला फ्रँचायझी</h2>
            <p>
              महाराष्ट्रभर मातोश्री चहावाला फ्रँचायझी उपलब्ध. संपर्क: 9175379695 / 7370503858
            </p>
          </>
        ) : (
          <>
            <h1>Hotel Matoshree of Dharashiv</h1>
            <p>
              Famous Hotel Matoshree in Dharashiv - located at Jijau Chowk, Barshi Naka. Delicious Chicken Dum Biryani, Mutton Raan, Davara Special, Tea, Breakfast, Vada Pav, Pohe, South Indian dishes and Franchise facilities available.
            </p>
            <h2>Matoshree Teawala Franchise</h2>
            <p>
              Matoshree Teawala franchise available all over Maharashtra. Contact: 9175379695 / 7370503858
            </p>
          </>
        )}

        <h2>{language === 'mr' ? 'खास पदार्थ' : 'Special Dishes'}</h2>
        <p>
          {language === 'mr' 
            ? 'चिकन दम बिर्याणी, मटण रान, चिकन रान, व्हेज आणि नॉन-व्हेज थाळी, चहा, पोहे, भजी, वडापाव.' 
            : 'Chicken Dum Biryani, Mutton Raan, Chicken Raan, Veg & Non-Veg Thali, Tea, Pohe, Bhaje, Vada Pav.'
          }
        </p>
      </section>
    </>
  );
}
