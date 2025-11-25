'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export function LanguageAttributes() {
  const { language, isRTL } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  return null;
}
