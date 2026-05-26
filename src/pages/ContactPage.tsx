import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";
import { ContactMethods } from "../components/forms/ContactMethods";

export function ContactPage() {
  return (
    <>
      <PageHero
        description="Contact page franchise inquiry, direct brand chat, and social touchpoints ya saglya paths la one clear hub provide karto."
        eyebrow="Contact"
        stats={[
          { label: "Channels", value: "4+" },
          { label: "Response route", value: "Call / Mail / WA" },
          { label: "Verticals", value: "Hotel + Tea" },
          { label: "Main branch", value: "Dharashiv" },
        ]}
        title="Talk to the Matoshree team through the channel that suits you."
      />

      <section className="page-section pt-4">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <ContactMethods />

          <div className="panel-card p-6 sm:p-8">
            <h2 className="section-title">Quick next steps</h2>
            <p className="body-copy mt-3">
              Jar tumhala franchise details pahijet astil tar direct inquiry route best aahe. Brand overview pahije asel tar vertical pages ready aahet.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">Hotel Franchise</h3>
                <p className="body-copy mt-3">
                  Biryani, thali, veg-nonveg dining आणि family restaurant model साठी dedicated page ready आहे.
                </p>
                <CTAButton className="mt-5" to="/hotel-franchise" variant="secondary">
                  Explore Hotel Model
                </CTAButton>
              </div>

              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">Tea Franchise</h3>
                <p className="body-copy mt-3">
                  Chaha, vadapav, pohe आणि compact breakfast outlet model साठी details पाहू शकता.
                </p>
                <CTAButton className="mt-5" to="/tea-franchise" variant="secondary">
                  Explore Tea Model
                </CTAButton>
              </div>

              <div className="soft-card p-5">
                <h3 className="text-lg font-semibold text-brand-deep">Franchise Inquiry</h3>
                <p className="body-copy mt-3">
                  Requirement, rules आणि agreement documents पाहून direct inquiry submit करा.
                </p>
                <CTAButton className="mt-5" to="/franchise-inquiry">
                  Open Inquiry Flow
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
