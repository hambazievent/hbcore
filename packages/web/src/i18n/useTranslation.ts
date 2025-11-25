import type { Language } from './TranslationProvider';
import { useTranslationContext } from './TranslationProvider';
import type { Translations } from './types';

/**
 * Builds a nested translation object from a flat translations object
 * Uses Proxy to create lazy-evaluated nested structure
 */
function buildTranslationObject(translations: Translations): Translations {
  return new Proxy(translations, {
    get(target, prop: string | symbol) {
      if (typeof prop !== 'string') {
        return undefined;
      }

      const value = (target as Record<string, unknown>)[prop];

      if (value === undefined || value === null) {
        return '';
      }

      // If it's a string, return it directly
      if (typeof value === 'string') {
        return value;
      }

      // If it's an object, recursively create a proxy for it
      if (typeof value === 'object') {
        return buildTranslationObject(value as Translations);
      }

      return value;
    },
  });
}

export function useTranslation() {
  const { language, translations, changeLanguage } = useTranslationContext();

  const t = buildTranslationObject(translations);

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
