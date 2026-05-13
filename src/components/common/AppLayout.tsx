import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { contactInfo } from "../../data/siteData";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton
        message="Namaskar Matoshree Group, mala franchise details pahijet."
        phoneNumber={contactInfo.whatsappNumber}
      />
    </div>
  );
}
