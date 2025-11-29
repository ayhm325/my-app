"use client";

import { useLanguage } from "../context/LanguageContext";
import secTwoAr from "../../../src/locales/ar/secTwo.json";
import secTwoEn from "../../../src/locales/en/secTwo.json";
import { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  Heart, 
  Stethoscope, 
  ScanLine,
  Microscope,
  TestTube,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  Users,
  BrainCircuit,
  FileText
} from "lucide-react";

export default function SectionTwo() {
  const { language } = useLanguage();
  const text = language === "ar" ? secTwoAr : secTwoEn;
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // بيانات الأقسام
  const tabs = [
    {
      id: 0,
      title: language === "ar" ? "التحليل السريع" : "Rapid Analysis",
      icon: Zap,
      content: language === "ar" 
        ? "نظامنا يحلل صور الأشعة السينية في أقل من 5 ثوانٍ بدقة تصل إلى 99%، مما يتيح للأطباء اتخاذ قرارات سريعة."
        : "Our system analyzes X-ray images in less than 5 seconds with 99% accuracy, enabling doctors to make quick decisions."
    },
    {
      id: 1,
      title: language === "ar" ? "التعلم العميق" : "Deep Learning",
      icon: BrainCircuit,
      content: language === "ar"
        ? "نستخدم شبكات عصبية متقدمة تم تدريبها على آلاف الصور للكشف الدقيق عن علامات الالتهاب الرئوي."
        : "We use advanced neural networks trained on thousands of images for accurate detection of pneumonia signs."
    },
    {
      id: 2,
      title: language === "ar" ? "تقارير مفصلة" : "Detailed Reports",
      icon: FileText, // استخدم أيقونة بديلة موجودة مثل FileText
      content: language === "ar"
        ? "نولد تقارير شاملة توضح مناطق الالتهاب ونسبة الثقة، مع إمكانية مقارنة النتائج مع الفحوصات السابقة."
        : "We generate comprehensive reports showing inflammation areas and confidence levels, with the ability to compare results with previous examinations."
    }
  ];

  // بيانات الميزات
  const features = [
    {
      icon: Stethoscope,
      title: language === "ar" ? "مصمم للأطباء" : "Designed for Doctors",
      description: language === "ar"
        ? "واجهة سهلة الاستخدام مصممة خصيصاً للممارسين الطبيين."
        : "User-friendly interface specifically designed for medical practitioners."
    },
    {
      icon: Shield,
      title: language === "ar" ? "آمن وموثوق" : "Secure and Reliable",
      description: language === "ar"
        ? "نظام آمن يتوافق مع معايير حماية البيانات الطبية العالمية."
        : "Secure system compliant with global medical data protection standards."
    },
    {
      icon: Clock,
      title: language === "ar" ? "متاح على مدار الساعة" : "Available 24/7",
      description: language === "ar"
        ? "خدمة تعمل على مدار الساعة لدعم المستشفيات والعيادات في أي وقت."
        : "Service operates 24/7 to support hospitals and clinics at any time."
    },
    {
      icon: Users,
      title: language === "ar" ? "مدعوم من المجتمع الطبي" : "Supported by Medical Community",
      description: language === "ar"
        ? "طور بالتعاون مع أكثر من 500 طبيب وخبير في مجال الأشعة."
        : "Developed in collaboration with over 500 doctors and radiology experts."
    }
  ];

  // بيانات الإحصائيات
  const stats = [
    { value: "99.7%", label: language === "ar" ? "دقة التشخيص" : "Diagnostic Accuracy", icon: TrendingUp },
    { value: "< 5s", label: language === "ar" ? "وقت التحليل" : "Analysis Time", icon: Clock },
    { value: "50K+", label: language === "ar" ? "صورة محللة" : "Images Analyzed", icon: ScanLine },
    { value: "500+", label: language === "ar" ? "طبيب مشارك" : "Participating Doctors", icon: Users }
  ];

  useEffect(() => {
     // eslint-disable-next-line react-hooks/set-state-in-effect
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!isMounted) {
    return (
      <section className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <div className="text-center mb-12">
          <div className="h-10 w-64 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
          <div className="h-6 w-96 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes holographic-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.5); }
          50% { box-shadow: 0 0 40px rgba(79, 172, 254, 0.8); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .section-container {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .holographic-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(79, 172, 254, 0.1) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: holographic-shimmer 3s ease-in-out infinite;
        }
        
        .tab-container {
          position: relative;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          overflow: hidden;
        }
        
        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .feature-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: calc(var(--index) * 0.1s);
        }
        
        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
        
        .icon-wrapper {
          position: relative;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .icon-wrapper {
          transform: rotate(360deg);
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.4), rgba(0, 242, 254, 0.4));
        }
        
        .section-title {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
      
      <section ref={sectionRef} className="section-container py-20 px-8 text-gray-800">
        <div className="holographic-bg"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
              {text.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {text.description}
            </p>
          </div>

          {/* Tabs Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="tab-container p-8">
              <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`tab-button flex items-center px-6 py-3 font-medium ${
                        activeTab === tab.id ? 'text-blue-600 active' : 'text-gray-600'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon size={20} className="ml-2" />
                      {tab.title}
                    </button>
                  );
                })}
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                  {(() => {
                    const ActiveIcon = tabs[activeTab].icon;
                    return <ActiveIcon size={40} className="text-blue-600" />;
                  })()}
                </div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card bg-white rounded-2xl p-6 shadow-lg text-center"
                  style={{ '--index': index }}
                >
                  <div className="icon-wrapper w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card bg-white rounded-2xl p-6 shadow-lg text-center"
                  style={{ '--stat-index': index }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600 mr-2" />
                    <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}