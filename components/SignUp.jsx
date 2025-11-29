"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageContext";
import { AtSign, ArrowRight } from "lucide-react";

export default function HomeButton() {
  const { language } = useLanguage();
  const label = language === "ar" ? "التسجيل" : "Sign Up";

  return (
    <Link
      href="/signup"
      className="
        group relative flex items-center gap-3
        px-6 py-3
        bg-gradient-to-r from-cyan-500/20 to-blue-600/20
        text-white font-semibold
        rounded-xl border border-cyan-400/30
        shadow-[0_0_15px_rgba(0,255,255,0.3)]
        transition-all duration-300
        hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-600/30
        hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        hover:scale-105
        overflow-hidden
      "
    >
      {/* خلفية تدرج شفافة عند التحويم */}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>

      {/* أيقونة التسجيل */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 transition-colors duration-300 z-10">
        <AtSign size={18} className="text-cyan-400" />
      </span>

      {/* النص */}
      <span className="relative z-10">{label}</span>

      {/* أيقونة السهم */}
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={16} className="text-cyan-400" />
      </span>

      {/* تأثير الضوء العلوي */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 rounded-xl"></span>
    </Link>
  );
}
