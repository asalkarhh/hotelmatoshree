import { motion } from "framer-motion";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

export function HomeInquiryStrip() {
  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <motion.div
          className="panel-card texture-wash overflow-hidden p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="accent-badge">Franchise Ready</span>
              <h2 className="section-title mt-5 text-balance">
                Ready to build the next Matoshree outlet in your market?
              </h2>
              <p className="body-copy mt-4 max-w-2xl">
                Share your city, budget, and preferred vertical. We have kept the base simple so future real lead flow can plug in smoothly.
              </p>
            </div>
            <CTAButton className="w-full sm:w-auto" to="/franchise-inquiry">
              Start Inquiry
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
