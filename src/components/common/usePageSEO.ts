import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export function usePageSEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // --- SEO: Update the document title ---
    document.title = `${title} | Matoshree Group`;

    // --- SEO: Update or create the meta description tag ---
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }
    
    // --- SEO: Update or create the meta keywords tag ---
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }
  }, [title, description, keywords]);
}