"use client";

import { useLanguage } from "../context/LanguageContext";
import secOneAr from "../../../src/locales/ar/secOne.json";
import secOneEn from "../../../src/locales/en/secOne.json";
import { useState, useEffect, useRef } from "react";
import { 
  Upload, 
  BrainCircuit, 
  FileCheck, 
  UserCheck, 
  Activity, 
  Zap, 
  Target,
  ScanLine
} from "lucide-react";

export default function SectionOne() {
  const { language } = useLanguage();
  const text = language === "ar" ? secOneAr : secOneEn;
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ accuracy: 0, speed: 0, scans: 0, doctors: 0 });
  const sectionRef = useRef(null);

  // بيانات خطوات العملية
  const processSteps = [
    {
      icon: Upload,
      title: language === "ar" ? "رفع الصورة الشعاعية" : "Upload X-Ray",
      description: language === "ar" 
        ? "قم برفع صورة الصدر الشعاعية بكل سهولة وأمان."
        : "Easily and securely upload the chest X-ray image."
    },
    {
      icon: BrainCircuit,
      title: language === "ar" ? "تحليل ذكاء اصطناعي" : "AI Analysis",
      description: language === "ar"
        ? "تقوم خوارزمياتنا المتقدمة بتحليل الصورة بدقة فائقة."
        : "Our advanced algorithms analyze the image with high precision."
    },
    {
      icon: FileCheck,
      title: language === "ar" ? "نتائج فورية" : "Instant Results",
      description: language === "ar"
        ? "احصل على تقرير مفصل حول وجود الالتهاب الرئوي في ثوانٍ."
        : "Get a detailed report on pneumonia presence in seconds."
    },
    {
      icon: UserCheck,
      title: language === "ar" ? "مراجعة الطبيب" : "Doctor Review",
      description: language === "ar"
        ? "يتمكن الأطباء من مراجعة النتائج واتخاذ القرار المناسب."
        : "Doctors can review results and make informed decisions."
    }
  ];

  // بيانات الإحصائيات
  const statsData = [
    { target: 99, suffix: "%", label: language === "ar" ? "دقة التشخيص" : "Diagnostic Accuracy", icon: Target },
    { target: 5, suffix: "s", label: language === "ar" ? "سرعة التحليل" : "Analysis Speed", icon: Zap },
    { target: 50000, suffix: "+", label: language === "ar" ? "صورة محللة" : "Scans Analyzed", icon: ScanLine },
    { target: 500, suffix: "+", label: language === "ar" ? "طبيب موثوق" : "Trusted Doctors", icon: Activity }
  ];

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // أنيميشن الأرقام عند الظهور
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      accuracy: 99 / steps,
      speed: 5 / steps,
      scans: 50000 / steps,
      doctors: 500 / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedStats({
        accuracy: Math.min(99, Math.floor(increment.accuracy * currentStep)),
        speed: Math.min(5, (increment.speed * currentStep).toFixed(1)),
        scans: Math.min(50000, Math.floor(increment.scans * currentStep)),
        doctors: Math.min(500, Math.floor(increment.doctors * currentStep))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isMounted) {
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-900"></div>;
  }

  return (
    <>
      <style jsx>{`
        @keyframes holographic-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes neural-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-container {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
          color: white;
        }

        .neural-bg {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 219, 112, 0.2) 0%, transparent 50%);
          animation: neural-pulse 4s ease-in-out infinite;
        }

        .holographic-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: holographic-shimmer 10s linear infinite;
        }

        .process-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: calc(var(--index) * 0.15s);
        }

        .process-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .icon-glow {
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }

        .process-card:hover .icon-glow {
          transform: rotate(360deg) scale(1.1);
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.4), rgba(0, 242, 254, 0.4));
        }

        .stat-card {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s ease-out;
          transition-delay: calc(var(--stat-index) * 0.1s);
        }

        .stat-card.visible {
          opacity: 1;
          transform: scale(1);
        }

        .section-title {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #ff6b6b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: holographic-shimmer 3s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="section-container py-24 px-8 relative">
        <div className="neural-bg"></div>
        <div className="holographic-grid"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="section-title text-5xl md:text-6xl font-bold mb-6">
              {text.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {text.description}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-card bg-white/5 backdrop-filter backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10"
                  style={{ '--index': index }}
                >
                  <div className="icon-glow w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              const statValue = stat.target === 99 ? animatedStats.accuracy :
                               stat.target === 5 ? animatedStats.speed :
                               stat.target === 50000 ? animatedStats.scans :
                               animatedStats.doctors;
              
              return (
                <div
                  key={index}
                  className="stat-card text-center"
                  style={{ '--stat-index': index }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon size={24} className="text-blue-400 mr-2" />
                    <span className="text-4xl font-bold text-white">
                      {statValue}{stat.suffix}
                    </span>
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
              {language === "ar" ? "جرب النظام الآن" : "Try the System Now"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}