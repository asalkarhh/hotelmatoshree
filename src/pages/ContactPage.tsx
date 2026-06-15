import { translations } from "../data/translations";
import { useT } from "./LanguageContext";
import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";
import { ContactMethods } from "../components/forms/ContactMethods";

export function ContactPage() {
  const T = useT();
  const c = translations.contactPage;

  return (
    <>
      <PageHero
        description={T(c.description)}
        eyebrow={T(c.eyebrow)}
        stats={[
          { label: T(c.statChannels),  value: "4+" },
          { label: T(c.statResponse),  value: "Call / Mail / WA" },
          { label: T(c.statVerticals), value: "Hotel + Tea" },
          { label: T(c.statBranch),    value: "Dharashiv" },
        ]}
        title={T(c.title)}
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <ContactMethods />

          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">{T(c.quickSteps)}</h2>
            <p className="body-copy mt-3">{T(c.quickDesc)}</p>

            <div className="mt-8 grid gap-4">
              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">{T(c.hotelTitle)}</h3>
                <p className="body-copy mt-3">{T(c.hotelDesc)}</p>
                <CTAButton className="mt-5" to="/hotel-franchise" variant="secondary">{T(c.exploreHotel)}</CTAButton>
              </div>
              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">{T(c.teaTitle)}</h3>
                <p className="body-copy mt-3">{T(c.teaDesc)}</p>
                <CTAButton className="mt-5" to="/tea-franchise" variant="secondary">{T(c.exploreTea)}</CTAButton>
              </div>
              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">{T(c.inquiryTitle)}</h3>
                <p className="body-copy mt-3">{T(c.inquiryDesc)}</p>
                <CTAButton className="mt-5" to="/franchise-inquiry">{T(c.openInquiry)}</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
