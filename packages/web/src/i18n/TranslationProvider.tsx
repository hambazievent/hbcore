'use client';

import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';
import enTranslations from './locales/en.json';
import faTranslations from './locales/fa.json';
import type { TranslationSchema } from './types';

export type Language = 'fa' | 'en';

type Translations = TranslationSchema;

interface TranslationContextType {
  language: Language;
  translations: Translations;
  changeLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const STORAGE_KEY = 'hbcore-language';

function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'fa';

  const browserLang = navigator.language || navigator.languages?.[0] || '';
  const langCode = browserLang.split('-')[0].toLowerCase();

  if (langCode === 'fa' || langCode === 'en') {
    return langCode;
  }

  return 'fa';
}

// Type assertion to ensure JSON files match the schema
const translationResources: Record<Language, Translations> = {
  fa: faTranslations as Translations,
  en: enTranslations as Translations,
};

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  // Always start with default language to prevent hydration mismatch
  // Server and client must render the same initial state
  const [language, setLanguage] = useState<Language>('fa');

  useEffect(() => {
    // After hydration, check for saved language or detect browser language
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fa' || saved === 'en') {
      setLanguage(saved);
    } else {
      const detected = detectBrowserLanguage();
      setLanguage(detected);
      localStorage.setItem(STORAGE_KEY, detected);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const value: TranslationContextType = {
    language,
    translations: translationResources[language],
    changeLanguage,
  };

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
}
