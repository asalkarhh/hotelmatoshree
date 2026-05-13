import { UtensilsCrossed } from "lucide-react";
import type { FeaturedShowcaseItem } from "../../data/siteData";

type HotelSignatureDishCardProps = {
  dish: FeaturedShowcaseItem;
};

export function HotelSignatureDishCard({ dish }: HotelSignatureDishCardProps) {
  return (
    <article className="group panel-card overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <img
          alt={dish.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          src={dish.image}
        />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream">
          <UtensilsCrossed className="h-4 w-4" />
          Signature Dish
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-brand-deep">{dish.name}</h3>
            <p className="body-copy mt-3">{dish.description}</p>
          </div>
          <span className="rounded-full bg-brand-saffron px-3 py-1 text-xs font-semibold text-brand-deep">
            {dish.price}
          </span>
        </div>
      </div>
    </article>
  );
}
