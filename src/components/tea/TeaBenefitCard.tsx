import type { LucideIcon } from "lucide-react";
import type { FeatureCard } from "../../data/siteData";

type TeaBenefitCardProps = {
  benefit: FeatureCard;
  icon: LucideIcon;
};

export function TeaBenefitCard({ benefit, icon: Icon }: TeaBenefitCardProps) {
  return (
    <article className="panel-card p-6">
      <div className="inline-flex rounded-2xl bg-brand-brown p-3 text-brand-cream">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-brand-deep">{benefit.title}</h3>
      <p className="body-copy mt-3">{benefit.description}</p>
    </article>
  );
}
