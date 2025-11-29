import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecOne from "./components/SecOne";
import SecTwo from "./components/SecTwo";
import SecThree from "./components/SecThree";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <LanguageProvider>
      <main >
        
        <Header/>

        <section>
          <Hero/>
        </section>

        <section>
          <SecOne />
        </section>
       
        <section>
          <SecTwo />
        </section>
        
        <section>
          <SecThree />
        </section>
       
        <Footer />

      </main>
    </LanguageProvider>
  );
}