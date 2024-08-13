"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface TranslationContextProps {
  t: (key: string) => string;
  c: (lang: string) => void;
  a: string[];
  l: string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

/**
 * Provides a translation context for the application.
 *
 * @param {React.ReactNode} children - The child components to be wrapped with the translation context.
 * @return {JSX.Element} The TranslationContext.Provider component with the translation context value.
 */

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const [l, setCurrentLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    c(storedLang);
  }, []);

  const loadTranslations = async (lang: string) => {
    const translations = await import(`../lang/${lang}.json`);
    setTranslations(translations.default);
  };

  const c = (lang: string) => {
    localStorage.setItem("language", lang);
    setCurrentLanguage(lang);
    loadTranslations(lang);
  };

  const a = ["en", "vi"];
  const t = (key: string) => translations[key] || key;

  return <TranslationContext.Provider value={{ t, c, a, l }}>{children}</TranslationContext.Provider>;
};

/**
 * Retrieves the translation context for the application.
 *
 * @return {TranslationContextProps} The translation context value.
 */

export const useLanguage = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useLanguage must be used within a TranslationProvider");
  }
  return context;
};
