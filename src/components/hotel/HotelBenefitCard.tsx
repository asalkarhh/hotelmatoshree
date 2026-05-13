import type { LucideIcon } from "lucide-react";
import type { FeatureCard } from "../../data/siteData";

type HotelBenefitCardProps = {
  benefit: FeatureCard;
  icon: LucideIcon;
};

export function HotelBenefitCard({ benefit, icon: Icon }: HotelBenefitCardProps) {
  return (
    <article className="panel-card p-6">
      <div className="inline-flex rounded-2xl bg-brand-red p-3 text-brand-cream">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-brand-deep">{benefit.title}</h3>
      <p className="body-copy mt-3">{benefit.description}</p>
    </article>
  );
}
