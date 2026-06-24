import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'chamonix-lang';

const LanguageContext = createContext(null);

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'fr';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'fr' ? saved : 'fr';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

// Convenience hook: returns { t, lang, setLang, toggleLang }
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
