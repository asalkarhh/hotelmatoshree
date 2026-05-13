import { Clock3, MapPin, Store } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch } from "../../data/siteData";
import { viewport } from "../../utils/motion";

type BranchCardProps = {
  branch: Branch;
};

export function BranchCard({ branch }: BranchCardProps) {
  return (
    <motion.article
      className="panel-card overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55 }}
      viewport={viewport}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img alt={branch.name} className="h-full w-full object-cover" loading="lazy" src={branch.image} />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
            {branch.city} | {branch.locality}
          </p>
          <h3 className="mt-2 font-display text-3xl">{branch.name}</h3>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start gap-3 text-sm text-brand-brown/76">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
          <span>{branch.address}</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-brown/76">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
          <span>{branch.timings}</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-brown/76">
          <Store className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
          <span>{branch.format}</span>
        </div>
        <p className="body-copy">{branch.note}</p>
        <div className="flex flex-wrap gap-2">
          <span className="chip">{branch.specialty}</span>
          <span className="chip">{branch.vertical === "hotel" ? "Hotel vertical" : "Tea vertical"}</span>
        </div>
      </div>
    </motion.article>
  );
}
