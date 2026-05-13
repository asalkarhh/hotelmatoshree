import { CheckCircle2, Store } from "lucide-react";
import { PageHero } from "../components/common/PageHero";
import { HotelFranchiseInquiryForm } from "../components/forms/HotelFranchiseInquiryForm";

export function HotelFranchiseInquiryPage() {
  return (
    <>
      <PageHero
        description="Hotel Matoshree franchise sathi dedicated inquiry form. Family restaurant, biryani, thali, ani larger-format restaurant business sathi details share kara."
        eyebrow="Hotel Franchise Inquiry"
        stats={[
          { label: "Format", value: "Hotel Franchise" },
          { label: "Lead route", value: "WhatsApp" },
          { label: "Focus", value: "Restaurant scale" },
          { label: "Backend", value: "No" },
        ]}
        title="Apply for Hotel Matoshree franchise with a dedicated investor form."
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">What to share</h2>
            <p className="body-copy mt-3">
              Hotel format larger investment and larger footprint sathi asto, mhanun location, budget, and experience details important aahet.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Preferred city ani location type",
                "Available shop kiwa space size",
                "Investment budget and previous restaurant experience",
              ].map((item) => (
                <div className="soft-card flex items-start gap-3 px-4 py-4" key={item}>
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="body-copy">{item}</p>
                </div>
              ))}
            </div>

            <div className="warm-divider my-8" />

            <div className="rounded-[28px] border border-brand-brown/10 bg-white/70 p-5">
              <div className="inline-flex rounded-2xl bg-brand-red p-3 text-brand-cream">
                <Store className="h-6 w-6" />
              </div>
              <p className="mt-4 text-lg font-semibold text-brand-deep">
                Dedicated hotel inquiry means better-qualified restaurant leads.
              </p>
              <p className="body-copy mt-3">
                Submit zalyavar formatted WhatsApp inquiry open hoil, so growth team ला direct context milto.
              </p>
            </div>
          </div>

          <HotelFranchiseInquiryForm />
        </div>
      </section>
    </>
  );
}
