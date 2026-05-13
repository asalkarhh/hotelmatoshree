import { Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { hotelBranches, teaBranches } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";
import { SectionTitle } from "../common/SectionTitle";

const previewGroups = [
  {
    title: "Hotel Branches",
    description: "Family dining and hotel branch presence across strong Maharashtra catchments.",
    image: hotelBranches[0].image,
    branches: hotelBranches.slice(0, 2),
  },
  {
    title: "Tea Branches",
    description: "Compact chai outlets designed for quick setup and high daily repeat visits.",
    image: teaBranches[0].image,
    branches: teaBranches.slice(0, 2),
  },
];

export function HomeBranchPreview() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="This preview keeps branch visibility high on the home page while leaving the full listing to the branches route."
          eyebrow="Branch Preview"
          title="Hotel and tea branches already shaping the Matoshree footprint."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {previewGroups.map((group) => (
            <motion.article
              className="panel-card overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              key={group.title}
              transition={{ duration: 0.55 }}
              viewport={viewport}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img alt={group.title} className="h-full w-full object-cover" loading="lazy" src={group.image} />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-vanilla">
                    Preview
                  </p>
                  <h3 className="mt-2 font-display text-4xl">{group.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-brand-cream/80">{group.description}</p>
                </div>
              </div>

              <div className="space-y-4 p-6">
                {group.branches.map((branch) => (
                  <div className="soft-card p-4" key={branch.id}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-semibold text-brand-deep">{branch.name}</h4>
                        <p className="mt-1 text-sm text-brand-red/72">
                          {branch.city} | {branch.locality}
                        </p>
                      </div>
                      <span className="chip">{branch.format}</span>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-brand-brown/74">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                        <span>{branch.timings}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton to="/branches">View All Branches</CTAButton>
        </div>
      </div>
    </section>
  );
}
