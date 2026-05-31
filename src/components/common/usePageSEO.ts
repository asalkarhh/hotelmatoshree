import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
};

export function usePageSEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update the document title
    document.title = `${title} | Matoshree Group`;

    // Update or create the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }
    
    // Cleanup function can be added here if you want to revert to a default state
    // when the component unmounts, though usually not necessary for SPAs.
  }, [title, description]);
}