import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/common/AppLayout";
import { AboutPage } from "../pages/AboutPage";
import { BranchesPage } from "../pages/BranchesPage";
import { ContactPage } from "../pages/ContactPage";
import { FranchiseInquiryPage } from "../pages/FranchiseInquiryPage";
import { GalleryPage } from "../pages/GalleryPage";
import { HomePage } from "../pages/HomePage";
import { HotelFranchisePage } from "../pages/HotelFranchisePage";
import { MenuPage } from "../pages/MenuPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { TeaFranchisePage } from "../pages/TeaFranchisePage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/hotel-franchise", element: <HotelFranchisePage /> },
      { path: "/tea-franchise", element: <TeaFranchisePage /> },
      { path: "/branches", element: <BranchesPage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/franchise-inquiry", element: <FranchiseInquiryPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
