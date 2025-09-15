import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import es from './locales/es.json';
import az from './locales/az.json';
import tr from './locales/tr.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  az: { translation: az },
  tr: { translation: tr }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false // React already does escaping
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;