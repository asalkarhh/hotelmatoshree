import { CheckCircle2 } from "lucide-react";
import { franchiseInquiryOptions, partnerJourney } from "../data/siteData";
import { InquiryOptionCard } from "../components/forms/InquiryOptionCard";
import { PageHero } from "../components/common/PageHero";

export function FranchiseInquiryPage() {
  return (
    <>
      <PageHero
        description="Matoshree Group madhe don separate franchise businesses aahet. Tumhala suit honara format choose kara ani direct inquiry form var ja."
        eyebrow="Franchise Inquiry"
        stats={[
          { label: "Formats", value: "Hotel + Tea" },
          { label: "Lead channel", value: "WhatsApp" },
          { label: "Backend", value: "Not added" },
          { label: "Next step", value: "Choose vertical" },
        ]}
        title="Choose the Matoshree franchise path you want to apply for."
      />

      <section className="page-section scroll-mt-28 pt-4" id="franchise-documents">
        <div className="section-shell">
          <div className="grid gap-6 xl:grid-cols-2">
            {franchiseInquiryOptions.map((option) => (
              <InquiryOptionCard key={option.id} option={option} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">How this inquiry flow works</h2>
            <p className="body-copy mt-3">
              General page varun right franchise select kara, मग dedicated form madhun specific details share kara.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
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
          </div>
        </div>
      </section>
    </>
  );
}
