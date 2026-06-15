import React, { createContext, useContext, useState } from 'react';

export type Language = 'mr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved === 'mr' || saved === 'en') ? saved : 'mr';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'mr' ? 'en' : 'mr';
      localStorage.setItem('app-language', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useT() {
  const { language } = useLanguage();
  return function T(leaf: { mr: string; en: string }): string {
    return leaf[language];
  };
}
