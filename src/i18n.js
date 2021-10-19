import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    debug: true,
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    react: {
      useSuspense: false,
      wait: true,
    },
  });
export default i18n;
