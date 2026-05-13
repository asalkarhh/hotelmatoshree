import { Camera, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { homeSocialProof } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { SectionTitle } from "../common/SectionTitle";

export function HomeSocialProof() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <SectionTitle
          description="This is a clean placeholder block for future Instagram reels, launch snippets, and social proof embeds."
          eyebrow="Instagram / Social Proof"
          title={homeSocialProof.title}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            className="panel-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
            viewport={viewport}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-brand-red p-3 text-brand-cream">
                <Camera className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
                Reels Placeholder
              </p>
            </div>
            <h3 className="mt-5 font-display text-4xl text-brand-deep">Latest Reels Coming Soon</h3>
            <p className="body-copy mt-4 max-w-2xl">{homeSocialProof.description}</p>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {/* Placeholder reel cards stay data-driven so real embeds can replace them later. */}
            {homeSocialProof.reels.map((reel) => (
              <motion.article
                className="panel-card flex items-center gap-4 p-5"
                initial={{ opacity: 0, y: 24 }}
                key={reel}
                transition={{ duration: 0.55 }}
                viewport={viewport}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="rounded-2xl bg-brand-saffron p-3 text-brand-deep">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-deep">{reel}</p>
                  <p className="mt-1 text-sm text-brand-brown/68">Coming soon on Instagram</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
