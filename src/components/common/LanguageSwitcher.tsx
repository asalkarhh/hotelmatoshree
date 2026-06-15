import { useLanguage } from "../../pages/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className={`text-sm font-semibold px-3 py-1.5 rounded-full border border-brand-brown/20 text-brand-brown hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors ${className}`}
      type="button"
    >
      {language === 'mr' ? 'English' : 'मराठी'}
    </button>
  );
}
