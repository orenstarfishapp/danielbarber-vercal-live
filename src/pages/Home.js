// src/Home.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { Carousel } from "../Carousel/Carousel";
import { VideoComponent } from "../VideoComponent";
import HeroSection from "../layout/ImprovedHeroSection.tsx";
// import {HeroSection} from "../layout/ImprovedHeroSection";

const Home = () => {
  return (
    <div className={` py-8 md:py-[32px] px-[1rem]  md:px-[150px]`}>
      <HeroSection/>
      {/* <div className="hero-section  bg-black text-white py-20 px-6 rounded-lg mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">
          ברוכים הבאים לדניאל אדרי עיצוב שיער
        </h1>
        <p className="text-xl mb-8 text-center">
          חוויית עיצוב שיער מקצועית ואישית
        </p>
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block text-lg font-semibold"
          >
            <span dir="ltr">(+972)53-824-7434</span>
          </Link>
        </div>
      </div> */}
      <div className={` mb-16`}>
        <Carousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">השירותים שלנו</h2>
          <ul className="list-disc list-inside space-y-2 pr-4">
            <li>תספורות גברים וילדים</li>
            <li>קווים נקיים, דירוגים, פייד</li>
            <li>עיצוב זקן משתלב עם התספורת</li>
            <li>צביעת שיער</li>
            <li>תספורות מדליקות לילדים</li>
          </ul>
          <Link
            to="/services"
            className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            לכל השירותים
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">שעות פעילות</h2>
          <ul className="list-none space-y-2">
            <li>
              <span className="font-semibold">ראשון - חמישי:</span> 10:00 -
              20:00
            </li>
            <li>
              <span className="font-semibold">שישי:</span> 09:00 - 15:00
            </li>
            <li>
              <span className="font-semibold">שבת:</span> סגור
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            קבע תור
          </Link>
        </div>
      </div>

      {/* Video Caraousel */}
      <VideoComponent />

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          למה לבחור בנו?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 ml-4">
              <i className="fas fa-heart text-2xl text-red-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                טיפול ושירות מכל הלב
              </h3>
              <p>אנו מקדישים את מלוא תשומת הלב לכל לקוח ולקוח.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 ml-4">
              <i className="fas fa-cut text-2xl text-blue-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                תספורת בקו האופנה העדכני
              </h3>
              <p>תמיד מעודכנים בטרנדים האחרונים בעולם עיצוב השיער.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 ml-4">
              <i className="fas fa-child text-2xl text-green-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">גישה חיובית לילדים</h3>
              <p>יוצרים חוויה נעימה ומהנה לילדים בזמן התספורת.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 ml-4">
              <i className="fas fa-spray-can text-2xl text-purple-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                מכשור עובר סטריליזציה
              </h3>
              <p>שומרים על היגיינה ובטיחות ברמה הגבוהה ביותר.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          מה הלקוחות שלנו אומרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">
              "השירות הכי טוב שקיבלתי! דניאל מקצועי ותמיד יודע בדיוק מה אני
              רוצה."
            </p>
            <p className="font-semibold">- יוסי כהן</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">
              "הבן שלי תמיד שמח לבוא להסתפר אצל דניאל. אווירה נעימה ותוצאה
              מעולה!"
            </p>
            <p className="font-semibold">- רונית לוי</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">"מקום מקצועי עם יחס אישי. ממליץ בחום!"</p>
            <p className="font-semibold">- אבי ישראלי</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">דירוג העסק שלנו</h2>
        <div className="text-5xl font-bold text-yellow-500 mb-2">9.3</div>
        <div className="flex justify-center">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star-half-alt text-yellow-500"></i>
        </div>
        <p className="mt-2">מתוך 10 בדירוג הלקוחות שלנו</p>
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/daniel.edri.barber/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 inline-block transition duration-300 ease-in-out transform hover:scale-105"
        >
          <i className="fab fa-instagram ml-2"></i>עקבו אחרינו באינסטגרם
        </a>
      </div>
    </div>
  );
};

export default Home;
