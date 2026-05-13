import { UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { featuredShowcaseItems } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";

export function HomeFeaturedItems() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="Featured menu placeholders showcase how food and tea products can be highlighted with premium cards on the home page."
          eyebrow="Featured Food & Tea"
          title="Signature dishes and cups that make the Matoshree brand memorable."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredShowcaseItems.map((item) => (
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
                <img
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  src={item.image}
                />
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
                  <span className="rounded-full bg-brand-saffron px-3 py-1 text-xs font-semibold text-brand-deep">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton to="/menu" variant="secondary">
            Explore Full Menu
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
