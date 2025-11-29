"use client";

import { useLanguage } from "@/app/home/context/LanguageContext";
import { Home, Sparkles, ArrowRight } from "lucide-react";

export default function HomeButton() {
  const { language } = useLanguage();

  const label = language === "ar" ? "الرئيسية" : "Home";

  return (
    <a
      href="/home"
      className="
        group relative
        flex items-center justify-center gap-2
        px-6 py-3
        font-medium text-white
        rounded-xl
        overflow-hidden
        transform transition-all duration-500
        hover:scale-105 hover:-translate-y-1
        active:scale-95
      "
    >
      {/* الخلفية المتدرجة الأساسية */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600"></div>
      
      {/* طبقة التوهج الداخلية */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* تأثير الموجة الضوئية */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
      
      {/* الجسيمات المتحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-70 animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-70 animation-delay-400"></div>
      </div>
      
      {/* الظل الخارجي المتوهج */}
      <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
      
      {/* الأيقونة والنص */}
      <div className="relative z-10 flex items-center gap-2">
        <div className="relative">
          <Home size={18} className="transition-transform duration-300" />
          <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 opacity-0 transition-opacity duration-300 animate-pulse" />
        </div>
        <span className="relative">{label}</span>
        <span className="transition-all duration-300 transform translate-x-0">
          <ArrowRight className="w-4 h-4 opacity-100" />
        </span>
      </div>
      
      {/* تأثير النقر الموجي */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-100"></div>
      </div>
      
      {/* تأثير التوهج عند التحويم */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000"></div>
      </div>
      
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </a>
  );
}