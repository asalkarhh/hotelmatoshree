import { UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { featuredShowcaseItems } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";

export function HomeFeaturedItems() {
  const T = useT();
  const f = translations.homeFeatured;

  const items = [
    { ...featuredShowcaseItems[0], name: T(f.biryaniName),      category: T(f.catFood), description: T(f.biryaniDesc) },
    { ...featuredShowcaseItems[1], name: T(f.thaliName),        category: T(f.catFood), description: T(f.thaliDesc) },
    { ...featuredShowcaseItems[2], name: T(f.tandooriName),     category: T(f.catFood), description: T(f.tandooriDesc) },
    { ...featuredShowcaseItems[3], name: T(f.specialChahaName), category: T(f.catTea),  description: T(f.specialChahaDesc) },
    { ...featuredShowcaseItems[4], name: T(f.basundiChahaName), category: T(f.catTea),  description: T(f.basundiChahaDesc) },
    { ...featuredShowcaseItems[5], name: T(f.coffeeName),       category: T(f.catTea),  description: T(f.coffeeDesc) },
  ];

  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description={T(f.description)}
          eyebrow={T(f.eyebrow)}
          title={T(f.title)}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <motion.article
              className="group panel-card overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              key={item.id}
              transition={{ duration: 0.55 }}
              viewport={viewport}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={item.image} />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
                  <UtensilsCrossed className="h-4 w-4" />
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-deep">{item.name}</h3>
                    <p className="body-copy mt-3">{item.description}</p>
                  </div>
                  <span className="rounded-full bg-brand-saffron px-3 py-1 text-xs font-semibold text-brand-deep">{item.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/menu" variant="secondary">{T(f.exploreMenu)}</CTAButton>
        </div>
      </div>
    </section>
  );
}
