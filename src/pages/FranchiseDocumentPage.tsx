import { ArrowLeft, Download, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { franchiseInquiryOptions } from "../data/siteData";

export function FranchiseDocumentPage() {
  const { documentId, franchiseId } = useParams();
  const option = franchiseInquiryOptions.find((item) => item.id === franchiseId);
  const document = option?.documents.find((item) => item.id === documentId);

  if (!option || !document) {
    return (
      <section className="page-section">
        <div className="section-shell">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
            to="/franchise-inquiry#franchise-documents"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Franchise Inquiry
          </Link>
          <div className="panel-card mt-8 p-6 sm:p-8">
            <h1 className="font-display text-4xl text-brand-deep">Document not found.</h1>
            <p className="body-copy mt-3">Please return to the franchise inquiry page and choose an available document.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="section-shell">
        <div className="sticky top-24 z-20 mb-6 flex justify-start">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-brand-cream shadow-[0_18px_35px_rgba(141,48,37,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            to="/franchise-inquiry#franchise-documents"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inquiry
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
            {option.title}
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-deep sm:text-5xl">
            {document.label.replace(" PDF", "")}
          </h1>
          <p className="body-copy mt-4 max-w-3xl">{document.description}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-brown/12 bg-white px-5 text-sm font-semibold text-brand-brown transition hover:-translate-y-0.5 hover:border-brand-saffron/40"
            href={document.viewUrl}
            rel="noreferrer"
            target="_blank"
          >
            <FileText className="h-4 w-4" />
            Open PDF
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
            download
            href={document.downloadUrl}
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        <div className="grid gap-6">
          {document.pageImages.map((image, index) => (
            <article className="panel-card overflow-hidden" key={image}>
              <div className="border-b border-brand-brown/10 p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-brand-deep">
                  Page {index + 1}
                </h2>
              </div>
              <div className="bg-brand-cream/45 p-3 sm:p-5">
                <img
                  alt={`${document.label} page ${index + 1}`}
                  className="mx-auto max-h-[78vh] w-full rounded-2xl bg-white object-contain p-2 shadow-sm"
                  src={image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
