"use client";

import { useLanguage } from "../app/home/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        relative flex items-center justify-center
        px-5 py-2 rounded-full
        bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
        text-white font-semibold shadow-lg
        transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        focus:outline-none focus:ring-4 focus:ring-purple-300
      "
    >
      {/* الأيقونة */}
      <span className="mr-2">
        {language === "ar" ? <Sun size={20} /> : <Moon size={20} />}
      </span>

      {/* النص */}
      <span className="uppercase tracking-wider">
        {language === "ar" ? "English" : "العربية"}
      </span>

      {/* تأثير خلفية هولوغرام خفيف */}
      <span className="
        absolute -inset-0.5 rounded-full
        bg-gradient-to-r from-purple-300 via-pink-300 to-red-300
        opacity-20 blur-xl
        animate-pulse
      "></span>
    </button>
  );
}