import { CheckCircle2 } from "lucide-react";
import { brandInformationCards, contactInfo } from "../data/siteData";
import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { InquiryOptionCard } from "../components/forms/InquiryOptionCard";
import { PageHero } from "../components/common/PageHero";

export function FranchiseInquiryPage() {
  const T = useT();
  const p = translations.inquiryPage;

  const franchiseOptions = [
    {
      id: "hotel",
      title: T(p.hotelOptTitle),
      description: T(p.hotelOptDesc),
      highlights: [T(p.hotelH1), T(p.hotelH2), T(p.hotelH3)],
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
      to: "/hotel-franchise-inquiry",
      buttonLabel: T(p.hotelBtn),
      documents: [
        { id: "requirements", label: T(p.reqPdf),   description: T(p.reqDesc),   previewImage: brandInformationCards[0]?.points[0] ?? "", pageImages: [], viewUrl: "/assets/docs/hotel-franchise-requirements.pdf", downloadUrl: "/assets/docs/hotel-franchise-requirements.pdf" },
        { id: "rules",        label: T(p.rulesPdf), description: T(p.rulesDesc), previewImage: "", pageImages: [], viewUrl: "/assets/docs/hotel-franchise-rules.pdf",        downloadUrl: "/assets/docs/hotel-franchise-rules.pdf" },
        { id: "agreement",    label: T(p.agreePdf), description: T(p.agreeDesc), previewImage: "", pageImages: [], viewUrl: "/assets/docs/hotel-franchise-agreement.pdf",    downloadUrl: "/assets/docs/hotel-franchise-agreement.pdf" },
      ],
    },
    {
      id: "tea",
      title: T(p.teaOptTitle),
      description: T(p.teaOptDesc),
      highlights: [T(p.teaH1), T(p.teaH2), T(p.teaH3)],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
      to: "/tea-franchise-inquiry",
      buttonLabel: T(p.teaBtn),
      documents: [
        { id: "requirements", label: T(p.reqPdf),   description: T(p.reqDesc),   previewImage: "", pageImages: [], viewUrl: "/assets/docs/tea-franchise-requirements.pdf", downloadUrl: "/assets/docs/tea-franchise-requirements.pdf" },
        { id: "rules",        label: T(p.rulesPdf), description: T(p.rulesDesc), previewImage: "", pageImages: [], viewUrl: "/assets/docs/tea-franchise-rules.pdf",        downloadUrl: "/assets/docs/tea-franchise-rules.pdf" },
        { id: "agreement",    label: T(p.agreePdf), description: T(p.agreeDesc), previewImage: "", pageImages: [], viewUrl: "/assets/docs/tea-franchise-agreement.pdf",    downloadUrl: "/assets/docs/tea-franchise-agreement.pdf" },
      ],
    },
  ];

  const journeySteps = [
    { step: "01", title: T(translations.aboutPage.pj1Title), description: T(translations.aboutPage.pj1Desc) },
    { step: "02", title: T(translations.aboutPage.pj2Title), description: T(translations.aboutPage.pj2Desc) },
    { step: "03", title: T(translations.aboutPage.pj3Title), description: T(translations.aboutPage.pj3Desc) },
  ];

  return (
    <>
      <PageHero
        description={T(p.description)}
        eyebrow={T(p.eyebrow)}
        stats={[
          { label: T(p.statFormats), value: "Hotel + Tea" },
          { label: T(p.statLead),    value: "WhatsApp" },
          { label: T(p.statBranch),  value: "Dharashiv" },
          { label: T(p.statOwner),   value: "Manoj Surwase" },
        ]}
        title={T(p.title)}
      />

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="panel-card texture-wash p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{T(p.officialBrand)}</p>
            <h2 className="mt-3 font-display text-4xl text-brand-deep">हॉटेल धाराशिव चे मातोश्री उद्योग समूह</h2>
            <p className="body-copy mt-4 max-w-4xl">
              मुख्य शाखा {contactInfo.address}. {contactInfo.owner} यांच्या मार्गदर्शनाखाली Hotel Matoshree,
              Matoshree Chahawala आणि Hotel Matoshree franchise models साठी interested partners contact करू शकतात.
            </p>
            <div className="mt-8 grid justify-center gap-4 md:grid-cols-2">
              {brandInformationCards.map((card) => (
                <article className="soft-card mx-auto max-w-xl p-5 text-center" key={card.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red/70">{card.eyebrow}</p>
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
            {franchiseOptions.map((option) => (
              <InquiryOptionCard key={option.id} option={option as any} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-4">
        <div className="section-shell">
          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">{T(p.howItWorks)}</h2>
            <p className="body-copy mt-3">{T(p.howDesc)}</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {journeySteps.map((item) => (
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
