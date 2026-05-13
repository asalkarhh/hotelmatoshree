import type { MenuItem } from "../../data/siteData";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="soft-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-brand-deep">{item.name}</h4>
          <p className="body-copy mt-3">{item.description}</p>
        </div>
        <span className="rounded-full bg-brand-saffron px-3 py-1 text-xs font-semibold text-brand-deep">
          {item.price}
        </span>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/70">
        {item.badge}
      </p>
    </article>
  );
}
