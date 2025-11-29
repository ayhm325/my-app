"use client";

import { useLanguage } from "../../LanguageContext";
import heroAr from "../../../src/locales/ar/hero.json";
import heroEn from "../../../src/locales/en/hero.json";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const heroText = language === "ar" ? heroAr : heroEn;

  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // إعداد المكون
  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) {
    return (
      <section className="text-center py-20 bg-gray-100 dark:bg-gray-900 animate-pulse">
        <div className="h-12 w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
        <div className="h-6 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg mb-8"></div>
        <div className="h-12 w-40 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* خلفيات متدرجة وجسيمات */}
      <div 
        className="absolute rounded-full blur-3xl opacity-40 pointer-events-none bg-blue-400 w-96 h-96"
        style={{ top: mousePosition.y * 0.05, left: mousePosition.x * 0.05 }}
      />
      <div 
        className="absolute rounded-full blur-3xl opacity-40 pointer-events-none bg-purple-400 w-64 h-64"
        style={{ bottom: mousePosition.y * -0.03, right: mousePosition.x * -0.03 }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent animate-[holographic-shimmer_3s_ease-in-out_infinite]"></div>

      {/* محتوى */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="flex justify-center mb-6 space-x-4">
          <Sparkles className="text-blue-500 w-8 h-8 animate-[float_3s_ease-in-out_infinite]" />
          <Zap className="text-purple-500 w-8 h-8 animate-[float_3s_ease-in-out_infinite_delay-500ms]" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-[text-glow_3s_ease-in-out_infinite] mb-6 leading-tight">
          {heroText.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {heroText.subtitle}
        </p>

        <button className="group relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden transition-transform hover:-translate-y-1 hover:scale-105 shadow-lg">
          {heroText.cta}
          <ArrowRight className="inline ml-2 transition-transform group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
        </button>
      </div>

      {/* مؤشر التمرير */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes text-glow { 0%,100%{text-shadow:0 0 10px rgba(79,172,254,0.5);}50%{text-shadow:0 0 20px rgba(79,172,254,0.8);} }
        @keyframes holographic-shimmer { 0%{background-position:-200%}100%{background-position:200%} }
      `}</style>
    </section>
  );
}
