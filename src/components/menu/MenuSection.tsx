import { motion } from "framer-motion";
import type { MenuSectionData } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { SectionTitle } from "../common/SectionTitle";
import { MenuCard } from "./MenuCard";

type MenuSectionProps = {
  description: string;
  eyebrow: string;
  sections: MenuSectionData[];
  title: string;
};

export function MenuSection({ description, eyebrow, sections, title }: MenuSectionProps) {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {sections.map((section) => (
            <motion.article
              className="panel-card p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              key={section.id}
              transition={{ duration: 0.55 }}
              viewport={viewport}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                {section.kicker}
              </p>
              <h3 className="mt-3 font-display text-3xl text-brand-deep">{section.title}</h3>
              <p className="body-copy mt-3">{section.summary}</p>
              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <MenuCard item={item} key={`${section.id}-${item.name}`} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
