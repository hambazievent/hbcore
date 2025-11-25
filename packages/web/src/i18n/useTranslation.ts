import type { Language } from './TranslationProvider';
import { useTranslationContext } from './TranslationProvider';
import type { TranslationKey } from './types';

export function useTranslation() {
  const { language, translations, changeLanguage } = useTranslationContext();

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'fa' ? 'en' : 'fa';
    changeLanguage(newLang);
  };

  return {
    t,
    language,
    changeLanguage,
    toggleLanguage,
    isRTL: language === 'fa',
  };
}
