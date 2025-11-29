"use client";

import HeaderSignUp from "./HeaderSignup";
import SignUpForm from "./SignUpForm";
import SideDecor from "./SideDecor";
import { LanguageProvider } from "../home/context/LanguageContext";

export default function SignUpPage() {
  return (
    <LanguageProvider>
      <HeaderSignUp />

      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-full bg-white rounded-lg shadow-lg overflow-hidden"

           style={{background: "linear-gradient(135deg, #a18cd1 20%, #3f8efc 100%)",}}
        >



          {/* الجزء الخاص بالديكور */}
          <section className="hidden md:flex w-1/2 items-center justify-center bg-purple-200">
            <SideDecor />
          </section>

          {/* جزء الفورم */}
          <section className="w-full md:w-1/2 flex items-center justify-center p-8">
            <SignUpForm />
          </section>

        </div>
      </main>
    </LanguageProvider>
  );
}
