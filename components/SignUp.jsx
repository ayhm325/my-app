"use client";

import Link from "next/link";
import { useLanguage } from "@/app/home/context/LanguageContext";
import { AtSign, ArrowRight } from "lucide-react";

export default function HomeButton() {
  const { language } = useLanguage();
  const label = language === "ar" ? "التسجيل" : "Sign Up";

  return (
    <Link
      href="/signup"
      className="
        group relative
        flex items-center justify-center gap-2
        px-6 py-3
        bg-linear-to-r from-cyan-500/20 to-blue-600/20
        text-white font-semibold
        rounded-xl
        border border-cyan-400/30
        shadow-[0_0_15px_rgba(0,255,255,0.3)]
        hover:bg-linear-to-r hover:from-cyan-500/30 hover:to-blue-600/30
        hover:border-cyan-400/50
        hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        hover:scale-105
        transition-all duration-300
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-600/10 opacity-0 transition-opacity duration-300"></div>

      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 transition-colors duration-300">
        <AtSign size={18} className="text-cyan-400" />
      </div>

      <span className="relative z-10">{label}</span>

      <span className="relative ml-1 transition-all duration-300 transform translate-x-0">
        <ArrowRight size={16} className="text-cyan-400" />
      </span>

      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
    </Link>
  );
}
