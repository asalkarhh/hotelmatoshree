import { Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { FranchiseInquiryOption } from "../../data/siteData";
import { viewport } from "../../utils/motion";
import { CTAButton } from "../common/CTAButton";

type InquiryOptionCardProps = {
  option: FranchiseInquiryOption;
};

export function InquiryOptionCard({ option }: InquiryOptionCardProps) {
  return (
    <motion.article
      className="group panel-card overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55 }}
      viewport={viewport}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          alt={option.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          src={option.image}
        />
        <div className="image-overlay absolute inset-0" />
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-4xl text-brand-deep">{option.title}</h3>
        <p className="body-copy mt-4">{option.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {option.highlights.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 space-y-3">
          {option.documents.map((document) => (
            <div
              className="grid gap-3 rounded-2xl border border-brand-brown/10 bg-brand-cream/55 p-3 sm:grid-cols-[4.5rem_1fr]"
              key={document.label}
            >
              <img
                alt={document.label}
                className="h-20 w-full rounded-xl object-cover sm:h-full"
                loading="lazy"
                src={document.previewImage}
              />
              <div className="min-w-0">
                <div className="flex items-start gap-2">
                  <FileText className="mt-1 h-4 w-4 shrink-0 text-brand-red" />
                  <div>
                    <p className="text-sm font-semibold text-brand-deep">{document.label}</p>
                    <p className="mt-1 text-xs leading-5 text-brand-brown/68">{document.description}</p>
                  </div>
                </div>
                <Link
                  className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-3 text-xs font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
                  to={`/franchise-inquiry/${option.id}/${document.id}`}
                >
                  <Eye className="h-3.5 w-3.5" />
                  View {document.label.replace(" PDF", "")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <CTAButton className="mt-8 w-full" to={option.to}>
          {option.buttonLabel}
        </CTAButton>
      </div>
    </motion.article>
  );
}
