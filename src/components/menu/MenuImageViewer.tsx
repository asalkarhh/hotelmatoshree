import { Eye, Images } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { MenuImageCollection } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { SectionTitle } from "../common/SectionTitle";

type MenuImageViewerProps = {
  collections: MenuImageCollection[];
};

export function MenuImageViewer({ collections }: MenuImageViewerProps) {
  return (
    <section className="page-section scroll-mt-28 pt-4" id="menu-cards">
      <div className="section-shell">
        <SectionTitle
          description="Saved menu creatives can be opened as a clean same-tab menu card or downloaded directly."
          eyebrow="Full Menu Images"
          title="View saved menu cards."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {collections.map((collection) => (
            <motion.article
              className="panel-card overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              key={collection.id}
              transition={{ duration: 0.55 }}
              viewport={viewport}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                    <Images className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                      {collection.vertical === "hotel" ? "Hotel Menu" : "Tea Menu"}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-brand-deep">{collection.title}</h3>
                    <p className="body-copy mt-3">{collection.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
                    to={`/menu/${collection.id}`}
                  >
                    <Eye className="h-4 w-4" />
                    View Menu Card
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
