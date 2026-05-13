import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "../../data/siteData";
import { cn } from "../../utils/cn";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-brown/8 bg-brand-cream/90 backdrop-blur-xl">
      <nav className="section-shell px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Logo compact />

          <div className="hidden items-center gap-1 xl:flex">
            {navigationLinks.map((item) => (
              <NavLink
                className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
                end={item.to === "/"}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden xl:block">
            <CTAButton to="/franchise-inquiry">Franchise Inquiry</CTAButton>
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
                {navigationLinks.map((item) => (
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
                  >
                    {item.label}
                  </NavLink>
                ))}
                <CTAButton className="mt-2 w-full" to="/franchise-inquiry">
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
