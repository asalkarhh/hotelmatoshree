import type { Branch } from "../../data/siteData";
import { SectionTitle } from "../common/SectionTitle";
import { BranchCard } from "./BranchCard";

type BranchSectionProps = {
  description: string;
  eyebrow: string;
  items: Branch[];
  title: string;
};

export function BranchSection({ description, eyebrow, items, title }: BranchSectionProps) {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {items.map((branch) => (
            <BranchCard branch={branch} key={branch.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
