import { ArrowLeft, Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { menuImageCollections } from "../data/siteData";

export function MenuCardPage() {
  const { collectionId } = useParams();
  const collection = menuImageCollections.find((item) => item.id === collectionId);

  if (!collection) {
    return (
      <section className="page-section">
        <div className="section-shell">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
            to="/menu#menu-cards"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Link>
          <div className="panel-card mt-8 p-6 sm:p-8">
            <h1 className="font-display text-4xl text-brand-deep">Menu card not found.</h1>
            <p className="body-copy mt-3">Please return to the menu page and choose an available menu card.</p>
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
            to="/menu#menu-cards"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">
            {collection.vertical === "hotel" ? "Hotel Matoshree Menu" : "Matoshree Tea Menu"}
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-deep sm:text-5xl">{collection.title}</h1>
          <p className="body-copy mt-4 max-w-3xl">{collection.description}</p>
        </div>

        <div className="grid gap-6">
          {collection.images.map((item) => (
            <article className="panel-card overflow-hidden" key={`${collection.id}-${item.label}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-brown/10 p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-brand-deep">{item.label}</h2>
                <a
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-brand-red px-4 text-xs font-semibold text-brand-cream transition hover:-translate-y-0.5 hover:bg-brand-deep"
                  download
                  href={item.image}
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </div>
              <div className="bg-brand-cream/45 p-3 sm:p-5">
                <img
                  alt={item.label}
                  className="mx-auto max-h-[78vh] w-full rounded-2xl bg-white object-contain p-2 shadow-sm"
                  src={item.image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
