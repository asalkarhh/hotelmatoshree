import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "../../data/siteData";
import {
  buildInquiryMessage,
  buildWhatsAppLink,
  type InquiryFormValues,
} from "../../utils/whatsapp";
import { CTAButton } from "../common/CTAButton";

const initialValues: InquiryFormValues = {
  franchiseType: "Hotel Franchise",
  fullName: "",
  phone: "",
  city: "",
  budget: "INR 12L to 25L",
  message: "",
};

export function InquiryForm() {
  const [values, setValues] = useState<InquiryFormValues>(initialValues);
  const [successUrl, setSuccessUrl] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildInquiryMessage(values);
    const url = buildWhatsAppLink(contactInfo.whatsappNumber, message);

    setSuccessUrl(url);
    // Frontend-only handoff for now: route inquiry details through WhatsApp.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="panel-card p-6 sm:p-8">
      <h2 className="section-title">Share your details</h2>
      <p className="body-copy mt-3">
        No backend yet. Form submit zalyavar WhatsApp draft auto-open hoil.
      </p>

      <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Franchise Type</span>
            <select
              className="input-field"
              name="franchiseType"
              onChange={handleChange}
              value={values.franchiseType}
            >
              <option>Hotel Franchise</option>
              <option>Tea Franchise</option>
              <option>Both Formats</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Budget Range</span>
            <select className="input-field" name="budget" onChange={handleChange} value={values.budget}>
              <option>INR 12L to 25L</option>
              <option>INR 25L to 40L</option>
              <option>INR 40L to 70L</option>
              <option>Need Discussion</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Full Name</span>
            <input
              className="input-field"
              name="fullName"
              onChange={handleChange}
              placeholder="Tumcha nav"
              required
              type="text"
              value={values.fullName}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Phone</span>
            <input
              className="input-field"
              name="phone"
              onChange={handleChange}
              placeholder="+91 98xxxxxx"
              required
              type="tel"
              value={values.phone}
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-brown/74">Preferred City</span>
          <input
            className="input-field"
            name="city"
            onChange={handleChange}
            placeholder="Pune, Nashik, Nagpur..."
            required
            type="text"
            value={values.city}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-brown/74">Message / Note</span>
          <textarea
            className="input-field min-h-36 resize-none"
            name="message"
            onChange={handleChange}
            placeholder="Timeline, area preference, background, kiwa custom question..."
            value={values.message}
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <CTAButton className="w-full sm:w-auto" icon={ArrowRight} type="submit">
            Submit & Open WhatsApp
          </CTAButton>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-brown/52">
            Dummy form flow
          </p>
        </div>
      </form>

      {successUrl ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-[26px] border border-emerald-400/25 bg-emerald-500/10 p-5"
          initial={{ opacity: 0, y: 12 }}
        >
          <p className="font-semibold text-emerald-700">Inquiry ready</p>
          <p className="mt-2 text-sm leading-7 text-emerald-900/70">
            WhatsApp draft open zala asel. Jar pahije asel tar punha button varun open kara.
          </p>
          <div className="mt-4">
            <CTAButton href={successUrl} target="_blank" variant="secondary">
              Open WhatsApp Again
            </CTAButton>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
