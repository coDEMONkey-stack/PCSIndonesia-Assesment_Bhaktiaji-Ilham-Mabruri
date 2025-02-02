import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  },
};

i18n
  .use(LanguageDetector) // Detects language from the browser
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    debug: true,
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;
