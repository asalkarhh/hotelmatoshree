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
          className={`group relative overflow-hidden rounded-[28px] border border-brand-brown/10 ${
            index === 0 ? "sm:col-span-2 xl:row-span-2" : ""
          }`}
          initial={{ opacity: 0, y: 24 }}
          key={item.id}
          transition={{ duration: 0.55, delay: index * 0.04 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img
            alt={item.title}
            className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
              index === 0 ? "h-[30rem]" : "h-80"
            }`}
            loading="lazy"
            src={item.image}
          />
          <div className="image-overlay absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
              {item.label}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-7 text-brand-cream/80">{item.caption}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
