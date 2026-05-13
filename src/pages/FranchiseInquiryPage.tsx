import { CheckCircle2 } from "lucide-react";
import { partnerJourney } from "../data/siteData";
import { PageHero } from "../components/common/PageHero";
import { InquiryForm } from "../components/forms/InquiryForm";

export function FranchiseInquiryPage() {
  return (
    <>
      <PageHero
        description="Inquiry route completely frontend-only aahe, mhanun aatach backend shivay WhatsApp handoff vaprun lead flow simulate karta yeil."
        eyebrow="Franchise Inquiry"
        stats={[
          { label: "Lead channel", value: "WhatsApp" },
          { label: "Backend", value: "Not added" },
          { label: "Use case", value: "Hotel / Tea / Both" },
          { label: "Status", value: "Base ready" },
        ]}
        title="A clean inquiry flow for future franchise leads."
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">What happens next</h2>
            <p className="body-copy mt-3">
              Simple dummy form aahe, pan future real team workflow kasa asel te already communicate karto.
            </p>
            <div className="mt-8 space-y-4">
              {partnerJourney.slice(0, 3).map((item) => (
                <div className="soft-card flex items-start gap-3 px-4 py-4" key={item.step}>
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <div>
                    <p className="text-sm font-semibold text-brand-deep">{item.title}</p>
                    <p className="body-copy mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="warm-divider my-8" />

            <div className="space-y-3">
              {[
                "Hotel, Tea, kiwa Both format choose kara",
                "City and budget share kara",
                "WhatsApp draft send karun team la start signal dya",
              ].map((item) => (
                <div className="chip inline-flex" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}
