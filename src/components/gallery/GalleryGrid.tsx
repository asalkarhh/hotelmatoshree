import { motion } from "framer-motion";
import type { GalleryItem } from "../../data/siteData";
import { viewport } from "../../utils/motion";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.article
          className={`group overflow-hidden rounded-[28px] border border-brand-brown/10 bg-white ${
            item.layout === "strip" ? "sm:col-span-2 xl:col-span-3" : "relative"
          }`}
          initial={{ opacity: 0, y: 24 }}
          key={item.id}
          transition={{ duration: 0.55, delay: index * 0.04 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {item.layout === "strip" ? (
            <>
              <div className="bg-brand-cream/35 p-2 sm:p-3">
                <img
                  alt={item.title}
                  className="w-full object-contain transition duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  src={item.image}
                />
              </div>
              <div className="border-t border-brand-brown/10 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                  {item.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-deep">{item.title}</h3>
                <p className="body-copy mt-2 max-w-2xl">{item.caption}</p>
              </div>
            </>
          ) : (
            <>
              <img
                alt={item.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                src={item.image}
              />
              <div className="image-overlay absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                  {item.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-7 text-brand-cream/80">{item.caption}</p>
              </div>
            </>
          )}
        </motion.article>
      ))}
    </div>
  );
}
