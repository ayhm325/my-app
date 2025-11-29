"use client";

import { useLanguage } from "../context/LanguageContext";
import heroAr from "../../../src/locales/ar/hero.json";
import heroEn from "../../../src/locales/en/hero.json";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const heroText = language === "ar" ? heroAr : heroEn;
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) {
    return (
      <section className="text-center py-20 bg-gray-100 dark:bg-gray-900">
        <div className="h-12 w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg mb-6 animate-pulse"></div>
        <div className="h-6 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>
        <div className="h-12 w-40 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </section>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes holographic-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(79, 172, 254, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(79, 172, 254, 0.8);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(79, 172, 254, 0.8);
          }
        }
        
        .hero-container {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%);
          backdrop-filter: blur(10px);
        }
        
        .holographic-bg {
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(79, 172, 254, 0.1) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: holographic-shimmer 3s ease-in-out infinite;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.4;
          pointer-events: none;
        }
        
        .hero-title {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .cta-button {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          transition: all 0.3s ease;
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
        }
        
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .floating-icon:nth-child(3) {
          animation-delay: 1s;
        }
      `}</style>
      
      <section className="hero-container text-center py-20 relative min-h-screen flex items-center justify-center">
        {/* orbs for holographic effect */}
        <div 
          className="glow-orb w-96 h-96 bg-blue-400" 
          style={{
            top: `${mousePosition.y * 0.05}px`,
            left: `${mousePosition.x * 0.05}px`,
          }}
        ></div>
        <div 
          className="glow-orb w-64 h-64 bg-purple-400" 
          style={{
            bottom: `${-mousePosition.y * 0.03}px`,
            right: `${-mousePosition.x * 0.03}px`,
          }}
        ></div>
        
        <div className="holographic-bg absolute inset-0 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Icons floating above title */}
            <div className="flex justify-center mb-6 space-x-4">
              <div className="floating-icon">
                <Sparkles className="text-blue-500 w-8 h-8" />
              </div>
              <div className="floating-icon">
                <Zap className="text-purple-500 w-8 h-8" />
              </div>
            </div>
            
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroText.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {heroText.subtitle}
            </p>
            
            <button className="cta-button group px-8 py-4 text-white font-semibold rounded-full flex items-center justify-center mx-auto">
              {heroText.cta}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
        
        {/* Additional visual elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}