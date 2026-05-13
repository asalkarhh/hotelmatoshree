import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "../../data/siteData";
import {
  buildTeaFranchiseInquiryMessage,
  buildWhatsAppLink,
  type TeaFranchiseInquiryValues,
} from "../../utils/whatsapp";
import { CTAButton } from "../common/CTAButton";

const initialValues: TeaFranchiseInquiryValues = {
  fullName: "",
  mobileNumber: "",
  whatsappNumber: "",
  city: "",
  preferredLocation: "",
  investmentBudget: "INR 12L to 22L",
  spaceType: "Shop",
  startTimeline: "Immediately",
  message: "",
};

export function TeaFranchiseInquiryForm() {
  const [values, setValues] = useState<TeaFranchiseInquiryValues>(initialValues);
  const [successUrl, setSuccessUrl] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildTeaFranchiseInquiryMessage(values);
    const url = buildWhatsAppLink(contactInfo.whatsappNumber, message);

    setSuccessUrl(url);
    // Frontend-only flow: success stays on page while WhatsApp handles the lead handoff.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="panel-card p-6 sm:p-8">
      <h2 className="section-title">Tea Franchise Inquiry Form</h2>
      <p className="body-copy mt-3">
        Simple form aahe. Submit kelyavar WhatsApp draft auto-open hoil.
      </p>

      <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
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
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Mobile Number</span>
            <input
              className="input-field"
              name="mobileNumber"
              onChange={handleChange}
              placeholder="+91 98xxxxxx"
              required
              type="tel"
              value={values.mobileNumber}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">WhatsApp Number</span>
            <input
              className="input-field"
              name="whatsappNumber"
              onChange={handleChange}
              placeholder="+91 98xxxxxx"
              required
              type="tel"
              value={values.whatsappNumber}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">City</span>
            <input
              className="input-field"
              name="city"
              onChange={handleChange}
              placeholder="Pune, Thane, Sambhajinagar..."
              required
              type="text"
              value={values.city}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Preferred Location</span>
            <input
              className="input-field"
              name="preferredLocation"
              onChange={handleChange}
              placeholder="Bus stand, office area, college zone..."
              required
              type="text"
              value={values.preferredLocation}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Investment Budget</span>
            <select
              className="input-field"
              name="investmentBudget"
              onChange={handleChange}
              value={values.investmentBudget}
            >
              <option>INR 12L to 22L</option>
              <option>INR 22L to 35L</option>
              <option>INR 35L+</option>
              <option>Need Discussion</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Available Space Type</span>
            <select className="input-field" name="spaceType" onChange={handleChange} value={values.spaceType}>
              <option>Shop</option>
              <option>Stall</option>
              <option>Highway</option>
              <option>College Area</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">When do you want to start?</span>
            <select className="input-field" name="startTimeline" onChange={handleChange} value={values.startTimeline}>
              <option>Immediately</option>
              <option>Within 1 month</option>
              <option>1 to 3 months</option>
              <option>Just Exploring</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-brown/74">Message</span>
          <textarea
            className="input-field min-h-36 resize-none"
            name="message"
            onChange={handleChange}
            placeholder="Area idea, timeline, existing business kiwa extra notes..."
            value={values.message}
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <CTAButton className="w-full sm:w-auto" icon={ArrowRight} type="submit">
            Submit & Open WhatsApp
          </CTAButton>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-brown/52">
            No backend
          </p>
        </div>
      </form>

      {successUrl ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-[26px] border border-emerald-400/25 bg-emerald-500/10 p-5"
          initial={{ opacity: 0, y: 12 }}
        >
          <p className="font-semibold text-emerald-700">
            Thank you! Matoshree Tea franchise inquiry submitted successfully.
          </p>
          <p className="mt-2 text-sm leading-7 text-emerald-900/70">
            WhatsApp draft open zala asel. Jar pahije asel tar punha open karu shakta.
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
