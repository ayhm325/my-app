
"use client";
import { createContext, useState, useContext } from "react";

// إنشاء الـ Context
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar"); // العربية بشكل افتراضي

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook للاستخدام أسهل
export const useLanguage = () => useContext(LanguageContext);
