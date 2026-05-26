import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { contactInfo } from "../../data/siteData";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.hash, location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <div className="absolute top-0 left-0 right-0 bottom-28 sm:bottom-24 pointer-events-none z-50">
        <div
          className="sticky top-0 h-full max-h-screen pointer-events-none"
          style={{ maxHeight: "100dvh" }}
        >
          <WhatsAppButton
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-auto"
            message="Namaskar Matoshree Group, mala franchise details pahijet."
            phoneNumber={contactInfo.whatsappNumber}
          />
        </div>
      </div>
    </div>
  );
}
