/**
 * file to set up i18n
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';

/**
 * Object with lang files related
 */
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
