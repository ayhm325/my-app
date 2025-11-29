// app/useTranslation.js
import { useLanguage } from './LanguageContext'; // استيراد هوك اللغة
import arTranslations from './signup/locales/ar/signup.json';
import enTranslations from './signup/locales/en/signup.json';

const translations = {
  ar: arTranslations,
  en: enTranslations,
};

export const useTranslation = () => {
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