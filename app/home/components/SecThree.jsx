"use client";

import { useLanguage } from "../../LanguageContext";
import secThreeAr from "../../../src/locales/ar/secThree.json";
import secThreeEn from "../../../src/locales/en/secThree.json";
import { useState, useEffect, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SectionThree() {
  const { language } = useLanguage();
  const text = language === "ar" ? secThreeAr : secThreeEn;
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  // بيانات شهادات الأطباء
  const testimonials = [
    {
      id: 1,
      name: language === "ar" ? "د. سارة أحمد" : "Dr. Sara Ahmed",
      title: language === "ar" ? "أخصائية أشعة" : "Radiology Specialist",
      hospital: language === "ar" ? "مستشفى الملك فهد التخصصي" : "King Fahad Specialist Hospital",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      quote: language === "ar"
        ? "هذا النظام ثور في مجال تشخيص الأمراض الصدرية. الدقة والسرعة غير مسبوقة، وقد ساعدنا في توفير وقت ثمين وتقديم رعاية أفضل لمرضانا."
        : "This system is a revolution in chest disease diagnosis. The accuracy and speed are unprecedented, and it has helped us save valuable time and provide better care for our patients."
    },
    {
      id: 2,
      name: language === "ar" ? "د. محمد علي" : "Dr. Mohammed Ali",
      title: language === "ar" ? "استشاري طب طوارئ" : "Emergency Medicine Consultant",
      hospital: language === "ar" ? "المركز الطبي الدولي" : "International Medical Center",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      quote: language === "ar"
        ? "في قسم الطوارئ، كل ثانية تهم. هذا النظام يمنحنا نتائج فورية تساعدنا في اتخاذ قرارات حاسمة بسرعة وثقة. أداة لا غنى عنها."
        : "In the emergency department, every second counts. This system gives us instant results that help us make critical decisions quickly and confidently. An indispensable tool."
    },
    {
      id: 3,
      name: language === "ar" ? "د. فاطمة يوسف" : "Dr. Fatima Youssef",
      title: language === "ar" ? "طبيبة أطفال" : "Pediatrician",
      hospital: language === "ar" ? "مستشفى الأطفال التخصصي" : "Children's Specialty Hospital",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote: language === "ar"
        ? "الكشف المبكر عن الالتهاب الرئوي عند الأطفال حيوي. هذا النظام يوفر لنا دقة عالية في تشخيص الحالات الصعبة، مما يحسن بشكل كبير من نتائج العلاج."
        : "Early detection of pneumonia in children is vital. This system provides us with high accuracy in diagnosing difficult cases, significantly improving treatment outcomes."
    }
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

  // الانتقال للشريحة التالية
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  // الانتقال للشريحة السابقة
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // الانتقال لشريحة معينة
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!isMounted) {
    return (
      <section className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <div className="text-center mb-12">
          <div className="h-10 w-64 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
          <div className="h-6 w-96 mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto h-96 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </section>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .section-container {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          overflow: hidden;
        }

        .holographic-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 4s ease-in-out infinite;
        }

        .testimonial-card {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .dot-indicator {
          transition: all 0.3s ease;
        }

        .dot-indicator.active {
          width: 2rem;
            background: white;
        }

        .quote-icon {
          position: absolute;
          opacity: 0.1;
          transform: rotate(180deg);
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .section-title {
          background: linear-gradient(90deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <section ref={sectionRef} className="section-container py-20 px-8">
        <div className="holographic-overlay"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
              {text.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {text.description}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="carousel-container relative">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full shrink-0 px-4">
                    <div className="testimonial-card bg-white/10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 text-center">
                      <Quote className="quote-icon top-4 left-4" size={60} />
                      <Quote className="quote-icon bottom-4 right-4" size={60} />
                      
                      <div className="relative z-10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white/30"
                          unoptimized
                        />
                        
                        <div className="flex items-center justify-center mb-2">
                          <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                          <CheckCircle size={20} className="mr-2 text-green-400" />
                        </div>
                        
                        <p className="text-gray-300 mb-1">{testimonial.title}</p>
                        <p className="text-gray-400 text-sm mb-4">{testimonial.hospital}</p>
                        
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl text-gray-100 leading-relaxed italic">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="nav-button left-4 p-3 rounded-full text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="nav-button right-4 p-3 rounded-full text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot-indicator w-2 h-2 rounded-full bg-white/50 ${
                    currentSlide === index ? 'active' : ''
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}