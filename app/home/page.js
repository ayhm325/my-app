"use client";

import { LanguageProvider } from "../LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecOne from "./components/SecOne";
import SecTwo from "./components/SecTwo";
import SecThree from "./components/SecThree";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex flex-col min-h-screen">
      
        {/* رأس الصفحة */}
        <Header />

        {/* أقسام الصفحة */}
        <section id="hero" className="w-full">
          <Hero />
        </section>

        <section id="sec-one" className="w-full py-12">
          <SecOne />
        </section>

        <section id="sec-two" className="w-full py-12">
          <SecTwo />
        </section>

        <section id="sec-three" className="w-full py-12">
          <SecThree />
        </section>

        {/* تذييل الصفحة */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}
