import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "../../data/siteData";
import {
  buildHotelFranchiseInquiryMessage,
  buildWhatsAppLink,
  type HotelFranchiseInquiryValues,
} from "../../utils/whatsapp";
import { CTAButton } from "../common/CTAButton";

const initialValues: HotelFranchiseInquiryValues = {
  fullName: "",
  mobileNumber: "",
  whatsappNumber: "",
  city: "",
  preferredLocation: "",
  investmentBudget: "INR 25L to 40L",
  spaceSize: "",
  experience: "No",
  message: "",
};

export function HotelFranchiseInquiryForm() {
  const [values, setValues] = useState<HotelFranchiseInquiryValues>(initialValues);
  const [successUrl, setSuccessUrl] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildHotelFranchiseInquiryMessage(values);
    const url = buildWhatsAppLink(contactInfo.whatsappNumber, message);

    setSuccessUrl(url);
    // Frontend-only flow: show success locally and hand the lead off over WhatsApp.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="panel-card p-6 sm:p-8">
      <h2 className="section-title">Hotel Franchise Inquiry Form</h2>
      <p className="body-copy mt-3">
        Details bhara, nantar WhatsApp draft auto-open hoil.
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
              placeholder="Pune, Nashik, Kolhapur..."
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
              placeholder="Main road, market, highway..."
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
              <option>INR 25L to 40L</option>
              <option>INR 40L to 60L</option>
              <option>INR 60L+</option>
              <option>Need Discussion</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">Available Shop / Space Size</span>
            <input
              className="input-field"
              name="spaceSize"
              onChange={handleChange}
              placeholder="1200 sq. ft., 1800 sq. ft..."
              required
              type="text"
              value={values.spaceSize}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-brown/74">
              Previous hotel/restaurant experience?
            </span>
            <select className="input-field" name="experience" onChange={handleChange} value={values.experience}>
              <option>Yes</option>
              <option>No</option>
              <option>Some Experience</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-brown/74">Message</span>
          <textarea
            className="input-field min-h-36 resize-none"
            name="message"
            onChange={handleChange}
            placeholder="Catchment, timeline, partner background kiwa extra notes..."
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
            Thank you! Hotel Matoshree franchise inquiry submitted successfully.
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
