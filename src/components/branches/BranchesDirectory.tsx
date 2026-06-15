import { useState } from "react";
import { Building2, Briefcase, CupSoda, Search, Store, X } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch } from "../../data/siteData";
import { translations } from "../../data/translations";
import { useT } from "../../pages/LanguageContext";
import { cn } from "../../utils/cn";
import { viewport } from "../../utils/motion";
import { BranchCard } from "./BranchCard";

type BranchesDirectoryProps = { hotelBranches: Branch[]; teaBranches: Branch[] };

export function BranchesDirectory({ hotelBranches, teaBranches }: BranchesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<"all" | "hotel" | "tea">("all");
  const [search, setSearch] = useState("");
  const T = useT();
  const d = translations.branchDir;

  const tabs = [
    { key: "all"   as const, label: T(d.tabAll),   icon: Store    },
    { key: "hotel" as const, label: T(d.tabHotel), icon: Building2 },
    { key: "tea"   as const, label: T(d.tabTea),   icon: CupSoda  },
  ];

  const normalizedSearch = search.trim().toLowerCase();
  const filterFn = (branch: Branch) =>
    !normalizedSearch ||
    branch.name.toLowerCase().includes(normalizedSearch) ||
    branch.city.toLowerCase().includes(normalizedSearch);

  const filteredHotelBranches = hotelBranches.filter(filterFn);
  const filteredTeaBranches = teaBranches.filter(filterFn);

  const totalCount =
    activeTab === "all" ? filteredHotelBranches.length + filteredTeaBranches.length
    : activeTab === "hotel" ? filteredHotelBranches.length
    : filteredTeaBranches.length;

  const headingText =
    activeTab === "all"   ? T(d.allHeading)
    : activeTab === "hotel" ? T(d.hotelHeading)
    : T(d.teaHeading);

  const labelText =
    activeTab === "all"   ? T(d.allLabel)
    : activeTab === "hotel" ? T(d.hotelLabel)
    : T(d.teaLabel);

  return (
    <section className="page-section pt-4">
      <div className="section-shell">
        <motion.div
          className="panel-card p-5 sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex rounded-full border border-brand-brown/10 bg-white/70 p-1">
              {tabs.map((tab) => (
                <button
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition",
                    activeTab === tab.key
                      ? "bg-brand-red text-brand-cream shadow-[0_10px_20px_rgba(141,48,37,0.18)]"
                      : "text-brand-brown/70 hover:text-brand-red",
                  )}
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative block w-full sm:w-64 lg:max-w-sm">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-brown/44" />
                <input
                  className="input-field pl-11 pr-10"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={T(d.searchPlaceholder)}
                  type="text"
                  value={search}
                />
                {search ? (
                  <button
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-brand-brown/44 transition-colors hover:bg-brand-brown/5 hover:text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-1"
                    onClick={() => setSearch("")}
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
              </div>

              <a
                href="#franchise-inquiry"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-sm font-semibold text-brand-cream shadow-md transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
              >
                <Briefcase className="h-4 w-4" />
                {T(d.franchiseInquiry)}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/72">{labelText}</p>
            <h2 className="mt-2 font-display text-3xl text-brand-deep">{headingText}</h2>
          </div>
          <p className="rounded-full border border-brand-brown/10 bg-white/75 px-4 py-2 text-sm font-semibold text-brand-brown/72">
            {totalCount} {totalCount === 1 ? T(d.branchFoundOne) : T(d.branchFound)}
          </p>
        </div>

        {activeTab === "all" || activeTab === "hotel" ? (
          <div className={activeTab === "all" ? "mb-12" : ""}>
            {activeTab === "all" && filteredHotelBranches.length > 0 && (
              <h3 className="mb-6 mt-10 font-display text-2xl text-brand-deep">
                {T(d.hotelHeading)}
              </h3>
            )}
            <div className={activeTab === "all" && filteredHotelBranches.length > 0 ? "grid gap-6 lg:grid-cols-2 xl:grid-cols-3" : "mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"}>
              {filteredHotelBranches.map((branch) => (
                <BranchCard branch={branch} key={branch.id} showActions />
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "all" || activeTab === "tea" ? (
          <div>
            {activeTab === "all" && filteredTeaBranches.length > 0 && (
              <h3 className="mb-6 mt-10 font-display text-2xl text-brand-deep">
                {T(d.teaHeading)}
              </h3>
            )}
            <div className={activeTab === "all" && filteredTeaBranches.length > 0 ? "grid gap-6 lg:grid-cols-2 xl:grid-cols-3" : "mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"}>
              {filteredTeaBranches.map((branch) => (
                <BranchCard branch={branch} key={branch.id} showActions />
              ))}
            </div>
          </div>
        ) : null}

        {totalCount === 0 ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="panel-card mt-8 p-8 text-center"
            initial={{ opacity: 0, y: 16 }}
          >
            <p className="text-lg font-semibold text-brand-deep">{T(d.noResults)}</p>
            <p className="body-copy mt-3">{T(d.noResultsSub)}</p>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
