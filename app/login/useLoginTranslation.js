// app/login/useLoginTranslation.js
import { useLanguage } from '../LanguageContext'; // استيراد هوك اللغة العام
import arTranslations from './locales/ar/login.json';
import enTranslations from './locales/en/login.json';

const translations = {
  ar: arTranslations,
  en: enTranslations,
};

export const useLoginTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return { t };
};
