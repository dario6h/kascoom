'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/translations';

/**
 * Custom hook to access translated strings
 *
 * @example
 * // Simple text
 * const { t } = useTranslation();
 * <h1>{t('about.hero.title')}</h1>
 *
 * @example
 * // Arrays or complex objects
 * const { tObj, language } = useTranslation();
 * const stats = tObj('about.stats.items');
 * stats.map(s => <span>{s.label[language]}</span>)
 */
export function useTranslation() {
  const { language } = useLanguage();

  /**
   * Get translated text by dot-notation path
   * @param {string} path - Path to translation (e.g., 'about.hero.title')
   * @returns {string} Translated text in current language
   */
  const t = (path) => {
    const keys = path.split('.');
    let value = translations;

    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        console.warn(`Translation not found: ${path}`);
        return path;
      }
    }

    if (value && typeof value === 'object' && (value.en !== undefined || value.ar !== undefined)) {
      return value[language] || value.en || path;
    }

    console.warn(`Translation format error: ${path}`);
    return path;
  };

  /**
   * Get entire translation object (for arrays or complex nested data)
   * @param {string} path - Dot-notation path
   * @returns {any} Translation object/array
   */
  const tObj = (path) => {
    const keys = path.split('.');
    let value = translations;

    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        console.warn(`Translation object not found: ${path}`);
        return null;
      }
    }

    return value;
  };

  return { t, tObj, language };
}

export default useTranslation;
