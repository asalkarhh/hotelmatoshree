import { CTAButton } from "../components/common/CTAButton";
import { PageHero } from "../components/common/PageHero";

export function NotFoundPage() {
  return (
    <PageHero
      actions={[
        { label: "Back to Home", to: "/" },
        { label: "Open Inquiry", to: "/franchise-inquiry", variant: "secondary" },
      ]}
      description="Ha page sadhya available nahi, pan site shell ani routes properly wired aahet."
      eyebrow="404"
      title="Aapan shodhat aslela page ithe nahi."
      aside={
        <div className="panel-card p-6">
          <h2 className="text-xl font-semibold text-brand-deep">Need a faster route?</h2>
          <p className="body-copy mt-3">Use the main navigation or jump straight into the franchise inquiry flow.</p>
          <CTAButton className="mt-6" to="/contact" variant="ghost">
            Go to Contact
          </CTAButton>
        </div>
      }
    />
  );
}
