
import React from "react";
import { Shield, Lightbulb, Link, FileText } from "lucide-react";

const SummarySection = () => {
  return (
    <section className="py-8 container mx-auto px-4 sm:px-6 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-ai-blue">סיכום הסדנה</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightBlue p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-ai-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">מה למדנו?</h3>
              <p className="text-gray-700 leading-relaxed">
                לצוות ריפוי בעיסוק מרכז רפואי שוהם, תודה רבה, מאוד נהנינו להעביר לכם את הסדנה.
                אנחנו מצרפים לכם כאן רשימת כלי AI וקישורים עליהם דיברנו בסדנה, וטבלה המסכמת 
                את שיטת מ.ת.פ.ק.ד.ת לכתיבת פרומפט איכותי.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightPurple p-3 rounded-full">
              <Shield className="h-6 w-6 text-ai-purple" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">רשימת כלים וקישורים</h3>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start">
                  <span className="font-semibold ml-2">צ׳אט GPT:</span>
                  <span className="text-gray-700">ניתן להתכתב, ליצור טקסט או תמונה. הרשמה והורדה של האפליקציה תפתח לכם יותר אפשרויות גם בחינם - </span>
                  <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>
                
                <li className="flex items-start">
                  <span className="font-semibold ml-2">קלוד (Claude):</span>
                  <span className="text-gray-700">צ׳אט שמאפשר ליצור טקסט, וגם ממשק לבניית אתר אינטרנט - </span>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>
                
                <li className="flex items-start">
                  <span className="font-semibold ml-2">סונו (Suno):</span>
                  <span className="text-gray-700">יצירה והלחנת שירים - </span>
                  <a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>
                
                <li className="flex items-start">
                  <span className="font-semibold ml-2">הייג׳ן (HeyGen):</span>
                  <span className="text-gray-700">פלטפורמה ליצירת סרטוני וידיאו, אווטר או תרגום סרטון - </span>
                  <a href="https://heygen.com" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>
                
                <li className="flex items-start">
                  <span className="font-semibold ml-2">רמיני (Remini):</span>
                  <span className="text-gray-700">תוכנה ליצירת תמונות אישיות (כתבו Remini בחנות האפליקציות)</span>
                </li>
                
                <li className="flex items-start">
                  <span className="font-semibold ml-2">גמה (Gamma):</span>
                  <span className="text-gray-700">כלי ליצירת מצגות - </span>
                  <a href="https://gamma.app/he" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">בייס44 (Base44):</span>
                  <span className="text-gray-700">כלי ליצירת אתרים בחינם - </span>
                  <a href="https://base44.com/" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                  <span className="text-gray-700 mr-1">מצורף סרטון הדרכה</span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">לאבבל (Lovable):</span>
                  <span className="text-gray-700">הפלטפורמה שבה נבנה האתר הזה - </span>
                  <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline mr-1">
                    לאתר
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightTeal p-3 rounded-full">
              <Link className="h-6 w-6 text-ai-teal" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">קישורים נוספים</h3>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start">
                  <span className="font-semibold ml-2">אינסטגרם מקצועי:</span>
                  <a href="https://www.instagram.com/rachel.haviv.ot" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline">
                    חשבון האינסטגרם של רייצ׳ל
                  </a>
                  <span className="text-gray-700 mr-2">שבו היא משתפת תכנים מקצועיים ומצחיקים בעולמות הריפוי בעיסוק וה-AI. מוזמנים לעקוב!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightBlue p-3 rounded-full">
              <FileText className="h-6 w-6 text-ai-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">נשמח לשמוע מכם</h3>
              <p className="text-gray-700 leading-relaxed">
                נשמח שתעזרו להנגיש את הידע הזה לקהלים נוספים, ותוכלו לכתוב לנו המלצה
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
