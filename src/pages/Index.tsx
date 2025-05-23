
import React from "react";
import { ArrowLeft, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import SummarySection from "@/components/SummarySection";
import PromptGuide from "@/components/PromptGuide";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ai-blue/90 to-ai-purple/80 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            תודה שהשתתפתם ביום העיון שלנו על בינה מלאכותית במקצועות הבריאות!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-10">
            אנו מודים לכם על ההשתתפות, הסקרנות וההקשבה. אם נהניתם ולמדתם – נשמח מאוד לקבל מכם המלצה אישית קצרה. זה עוזר לנו להמשיך ולשתף ידע עם עוד מטפלים ומרפאים.
          </p>
          <Button size="lg" asChild className="bg-white text-ai-blue hover:bg-gray-100 group">
            <a 
              href="https://forms.gle/your-google-form-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse"
            >
              <span>כתבו לנו המלצה</span>
              <ArrowLeft className="h-5 w-5 mr-1 transition-transform group-hover:-translate-x-1" />
              <Heart className="h-4 w-4 text-red-500 ml-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Summary Content */}
      <SummarySection />
      
      {/* Prompt Method */}
      <PromptGuide />
      
      {/* Call to Action */}
      <section className="py-12 bg-ai-lightBlue">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-ai-blue">
            רוצים ללמוד עוד?
          </h2>
          <p className="text-lg mb-6">
            בדף הסרטונים תמצאו מדריכים שיעזרו לכם להתחיל לעבוד עם כלי AI בצורה מעשית
          </p>
          <Button asChild>
            <a href="/videos">צפו בסרטוני ההדרכה</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} AI במקצועות הבריאות - כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
