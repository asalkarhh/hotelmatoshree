import { Building2, Rocket, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { homeBenefits } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { SectionTitle } from "../common/SectionTitle";

const iconMap = {
  "regional-brand": ShieldCheck,
  "multiple-branches": Building2,
  "franchise-ready": Rocket,
  "customer-trust": Users,
};

export function HomeWhyMatoshree() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="This section highlights the core reasons why Matoshree can be positioned as a strong regional franchise brand."
          eyebrow="Why Matoshree"
          title="Built for local trust, repeat demand, and franchise growth."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {homeBenefits.map((benefit) => {
            const Icon = iconMap[benefit.id as keyof typeof iconMap];

            return (
              <motion.article
                className="panel-card p-6"
                initial={{ opacity: 0, y: 24 }}
                key={benefit.id}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex rounded-2xl bg-brand-red p-3 text-brand-cream">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-deep">{benefit.title}</h3>
                <p className="body-copy mt-3">{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
