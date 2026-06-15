import { Building2, Rocket, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { homeBenefits } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { viewport } from "../../utils/motion";
import { SectionTitle } from "../common/SectionTitle";

const iconMap = {
  "regional-brand": ShieldCheck,
  "multiple-branches": Building2,
  "franchise-ready": Rocket,
  "customer-trust": Users,
};

export function HomeWhyMatoshree() {
  const T = useT();
  const w = translations.homeWhy;

  const benefits = [
    { ...homeBenefits[0], title: T(w.b1Title), description: T(w.b1Desc) },
    { ...homeBenefits[1], title: T(w.b2Title), description: T(w.b2Desc) },
    { ...homeBenefits[2], title: T(w.b3Title), description: T(w.b3Desc) },
    { ...homeBenefits[3], title: T(w.b4Title), description: T(w.b4Desc) },
  ];

  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description={T(w.description)}
          eyebrow={T(w.eyebrow)}
          title={T(w.title)}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
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
