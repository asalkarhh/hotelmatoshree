import { CheckCircle2 } from "lucide-react";
import { brandInformationCards, contactInfo, franchiseInquiryOptions, partnerJourney } from "../data/siteData";
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
          { label: "Main branch", value: "Dharashiv" },
          { label: "Owner", value: "Manoj Surwase" },
        ]}
        title="Choose the Matoshree franchise path you want to apply for."
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="panel-card texture-wash p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
              Official Brand Information
            </p>
            <h2 className="mt-3 font-display text-4xl text-brand-deep">
              हॉटेल धाराशिव चे मातोश्री उद्योग समूह
            </h2>
            <p className="body-copy mt-4 max-w-4xl">
              मुख्य शाखा {contactInfo.address}. {contactInfo.owner} यांच्या मार्गदर्शनाखाली Hotel Matoshree,
              Matoshree Chahawala आणि Hotel Matoshree franchise models साठी interested partners contact करू शकतात.
            </p>

            <div className="mt-8 grid justify-center gap-4 md:grid-cols-2">
              {brandInformationCards.map((card) => (
                <article className="soft-card mx-auto max-w-xl p-5 text-center" key={card.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/70">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-brand-deep">{card.title}</h3>
                  <p className="body-copy mt-3">{card.description}</p>
                  <ul className="mx-auto mt-4 max-w-md space-y-2 text-left">
                    {card.points.map((point) => (
                      <li className="flex gap-2 text-sm leading-6 text-brand-brown/76" key={point}>
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
