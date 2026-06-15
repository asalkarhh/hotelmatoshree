import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../pages/LanguageContext";

export type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export function PageSEO({ title, description, keywords }: SEOProps) {
  const { language } = useLanguage();

  return (
    <Helmet>
      <html lang={language} />
      <title>{title} | Matoshree Group</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}