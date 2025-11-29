import { useLanguage } from '../LanguageContext';
import ar from './locales/ar/common.json';
import en from './locales/en/common.json';

export function useDoctorTranslation() {
  const { language } = useLanguage();
  const translations = language === 'ar' ? ar : en;
  return { t: (category, key) => translations[category]?.[key] || key };
}
