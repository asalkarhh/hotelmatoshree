import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "../../data/siteData";
import { cn } from "../../utils/cn";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 w-full z-50 border-b border-brand-brown/8 bg-brand-cream/90 backdrop-blur-xl">
      <nav className="section-shell px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Logo compact />

          <div className="hidden items-center gap-1 xl:flex">
            {navigationLinks
              .filter((item) => !item.isButton)
              .map((item) => {
                if (item.children) {
                  const isOpen = activeDropdown === item.label;
                  return (
                    <div
                      className="relative"
                      key={item.label}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="nav-link flex items-center gap-1" type="button">
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {isOpen ? (
                          <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute left-0 top-full flex w-48 flex-col gap-1 rounded-2xl border border-brand-brown/8 bg-white p-2 shadow-xl"
                            exit={{ opacity: 0, y: 10 }}
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.children.map((child) => (
                              <NavLink
                                className={({ isActive }) =>
                                  cn(
                                    "rounded-xl px-4 py-2.5 text-sm font-medium text-brand-brown/75 transition hover:bg-brand-red/5 hover:text-brand-red",
                                    isActive && "bg-brand-red/5 text-brand-red",
                                  )
                                }
                                key={child.to}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  if (location.pathname === child.to) {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                }}
                                to={child.to}
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <NavLink
                    className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
                    end={item.to === "/"}
                    key={item.to}
                    to={item.to}
                    onClick={() => {
                      (document.activeElement as HTMLElement)?.blur();
                      if (location.pathname === item.to) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
          </div>

          <div className="hidden xl:block">
            <CTAButton
              onClick={() => {
                if (location.pathname === "/franchise-inquiry") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              to="/franchise-inquiry"
            >
              Franchise Inquiry
            </CTAButton>
          </div>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-brown/12 bg-white/80 text-brand-deep xl:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              className="overflow-hidden xl:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
            >
              <div className="mt-4 flex flex-col gap-2 border-t border-brand-brown/8 pt-4">
                {navigationLinks
                  .filter((item) => !item.isButton)
                  .map((item) => {
                    if (item.children) {
                      return (
                        <div className="flex flex-col gap-2" key={item.label}>
                          <div className="px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red/70">
                            {item.label}
                          </div>
                          {item.children.map((child) => (
                            <NavLink
                              className={({ isActive }) =>
                                cn(
                                  "ml-4 rounded-2xl px-4 py-3 text-sm font-medium text-brand-brown/75 transition hover:bg-white hover:text-brand-red",
                                  isActive && "bg-brand-red text-brand-cream",
                                )
                              }
                              end={child.to === "/"}
                              key={child.to}
                              to={child.to}
                              onClick={() => {
                                setMenuOpen(false);
                                if (location.pathname === child.to) {
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                              }}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <NavLink
                        className={({ isActive }) =>
                          cn(
                            "rounded-2xl px-4 py-3 text-sm font-medium text-brand-brown/75 transition hover:bg-white hover:text-brand-red",
                            isActive && "bg-brand-red text-brand-cream",
                          )
                        }
                        end={item.to === "/"}
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setMenuOpen(false);
                          if (location.pathname === item.to) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                      >
                        {item.label}
                      </NavLink>
                    );
                  })}
                <CTAButton
                  className="mt-2 w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    if (location.pathname === "/franchise-inquiry") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  to="/franchise-inquiry"
                >
                  Franchise Inquiry
                </CTAButton>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
