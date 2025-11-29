"use client";

import { useLanguage } from "../context/LanguageContext";
import footerAr from "../../../src/locales/ar/footer.json";
import footerEn from "../../../src/locales/en/footer.json";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = language === "ar" ? footerAr : footerEn;
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-yellow-300 text-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="p-6 rounded-lg shadow-md bg-yellow-200">
            <h3 className="text-xl font-bold mb-4">{language === "ar" ? "شركتنا" : "Our Company"}</h3>
            <p className="mb-4 text-gray-800 leading-relaxed">
              {language === "ar"
                ? "نحن شركة رائدة في مجال التكنولوجيا الصحية، نهدف إلى تقديم أفضل الحلول للمستشفيات والمراكز الطبية."
                : "We are a leading company in health technology, aiming to provide best solutions for hospitals and medical centers."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-700"><Github size={20} /></a>
              <a href="#" className="hover:text-gray-700"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-700"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-6 rounded-lg shadow-md bg-yellow-200">
            <h3 className="text-xl font-bold mb-4">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:underline">{footerText.home}</a></li>
              <li><a href="/about" className="hover:underline">{language === "ar" ? "من نحن" : "About Us"}</a></li>
              <li><a href="/services" className="hover:underline">{language === "ar" ? "خدماتنا" : "Our Services"}</a></li>
              <li><a href="/contact" className="hover:underline">{language === "ar" ? "اتصل بنا" : "Contact Us"}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="p-6 rounded-lg shadow-md bg-yellow-200">
            <h3 className="text-xl font-bold mb-4">{language === "ar" ? "معلومات الاتصال" : "Contact Info"}</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center"><MapPin size={18} className="mr-2" /> 
                {language === "ar" ? "123 شارع التكنولوجيا، الرياض" : "123 Tech Street, Riyadh"}
              </li>
              <li className="flex items-center"><Phone size={18} className="mr-2" /> +966 12 345 6789</li>
              <li className="flex items-center"><Mail size={18} className="mr-2" /> info@hologram-health.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="p-6 rounded-lg shadow-md bg-yellow-200">
            <h3 className="text-xl font-bold mb-4">{language === "ar" ? "النشرة البريدية" : "Newsletter"}</h3>
            <p className="text-gray-800 mb-4">
              {language === "ar" ? "اشترك في نشرتنا البريدية للحصول على آخر التحديثات." : "Subscribe to our newsletter for latest updates."}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "ar" ? "البريد الإلكتروني" : "Your Email"}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-gray-900 text-yellow-300 rounded hover:bg-gray-800 transition"
              >
                {language === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">{footerText.rights}</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-700 text-sm hover:underline">{footerText.privacy}</a>
            <a href="/terms" className="text-gray-700 text-sm hover:underline">{footerText.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
