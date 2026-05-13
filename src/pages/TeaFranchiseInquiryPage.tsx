import { CheckCircle2, CupSoda } from "lucide-react";
import { PageHero } from "../components/common/PageHero";
import { TeaFranchiseInquiryForm } from "../components/forms/TeaFranchiseInquiryForm";

export function TeaFranchiseInquiryPage() {
  return (
    <>
      <PageHero
        description="Matoshree Tea franchise sathi separate form ready aahe. Low investment, quick setup, and daily footfall model sathi details share kara."
        eyebrow="Tea Franchise Inquiry"
        stats={[
          { label: "Format", value: "Tea Franchise" },
          { label: "Lead route", value: "WhatsApp" },
          { label: "Focus", value: "Compact outlet" },
          { label: "Backend", value: "No" },
        ]}
        title="Apply for Matoshree Tea franchise with a dedicated tea outlet form."
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">What to share</h2>
            <p className="body-copy mt-3">
              Tea outlet format fast launch ani local demand sathi aahe, mhanun location and space type details especially useful aahet.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Preferred city ani catchment area",
                "Available space type: shop, stall, highway kiwa college zone",
                "Budget and start timeline",
              ].map((item) => (
                <div className="soft-card flex items-start gap-3 px-4 py-4" key={item}>
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="body-copy">{item}</p>
                </div>
              ))}
            </div>

            <div className="warm-divider my-8" />

            <div className="rounded-[28px] border border-brand-brown/10 bg-white/70 p-5">
              <div className="inline-flex rounded-2xl bg-brand-saffron p-3 text-brand-deep">
                <CupSoda className="h-6 w-6" />
              </div>
              <p className="mt-4 text-lg font-semibold text-brand-deep">
                Dedicated tea inquiry keeps smaller-format franchise leads cleaner and faster.
              </p>
              <p className="body-copy mt-3">
                Submit nantar WhatsApp draft open hoil with formatted tea inquiry details for quick follow-up.
              </p>
            </div>
          </div>

          <TeaFranchiseInquiryForm />
        </div>
      </section>
    </>
  );
}
