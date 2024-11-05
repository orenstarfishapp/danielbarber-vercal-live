import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../Carousel/Carousel";
import { VideoComponent } from "../VideoComponent";
import HeroSection from "../layout/ImprovedHeroSection.tsx";
import {
  Heart,
  Scissors,
  Baby,
  Spray,
  Star,
  Clock,
  ChevronLeft,
  Instagram,
  Phone,
  CheckCircle,
  ShieldCheck
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, color = "blue" }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md`}>
      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 font-medium">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ content, author }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <p className="mb-4 text-gray-600 font-medium leading-relaxed">{content}</p>
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-full bg-blue-50">
        <CheckCircle className="w-5 h-5 text-blue-600" />
      </div>
      <p className="font-bold text-gray-800">{author}</p>
    </div>
  </div>
);

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "טיפול ושירות מכל הלב",
      description: "אנו מקדישים את מלוא תשומת הלב לכל לקוח ולקוח, מבינים את הצרכים האישיים ומעניקים חווית שירות מושלמת."
    },
    {
      icon: Scissors,
      title: "תספורת בקו האופנה העדכני",
      description: "תמיד מעודכנים בטרנדים האחרונים בעולם עיצוב השיער, משלבים טכניקות חדשניות עם מקצועיות."
    },
    {
      icon: Baby,
      title: "גישה חיובית לילדים",
      description: "יוצרים חוויה נעימה ומהנה לילדים בזמן התספורת, עם סבלנות והבנה לצרכים המיוחדים שלהם."
    },
    {
      icon: ShieldCheck,
      title: "סטריליזציה והיגיינה",
      description: "שומרים על סטנדרטים גבוהים של היגיינה ובטיחות, עם ציוד מתקדם ותהליכי חיטוי קפדניים."
    }
  ];

  const barberInfo = {
    vision: {
      commitment: "החזון המקצועי שלנו הוא להצליח בכל מה שאנו עושים ולהפוך את החווית ללקוח לחווית מושלמת."
    },
    professionalValues: [
      {
        title: "הכשרה מקצועית",
        description: "אנו מקדישים את מלוא תשומת הלב לכל לקוח ולקוח, מבינים את הצרכים האישיים ומעניקים חווית שירות מושלמת."
      },
      {
        title: "היגיינה ובטיחות",
        description: "שומרים על סטנדרטים גבוהים של היגיינה ובטיחות, עם ציוד מתקדם ותהליכי חיטוי קפדניים."
      },
      {
        title: "התמחויות",
        description: "אנו מקדישים את מלוא תשומת הלב לכל לקוח ולקוח, מבינים את הצרכים האישיים ומעניקים חווית שירות מושלמת."
      }
    ],
    experience: {
      training: [
        "הכשרה מקצועית בטכניקות שיער",
        "הכשרה בטכניקות שיער מקצועיות",
        "הכשרה בטכניקות שיער מקצועיות"
      ],
      specialties: [
        "שיער מקצועי",
        "שיער מקצועי",
        "שיער מקצועי"
      ]
    }
  };

  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-12 max-w-7xl bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      <HeroSection />
      
      <div className="mb-16">
        <Carousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
              <Scissors className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">השירותים שלנו</h2>
          </div>
          <ul className="space-y-3 mb-8">
            {["תספורות גברים וילדים", "קווים נקיים, דירוגים, פייד", "עיצוב זקן משתלב עם התספורת", "צביעת שיער", "תספורות מדליקות לילדים"].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold shadow-md hover:shadow-lg"
          >
            לכל השירותים
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
              <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">שעות פעילות</h2>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              { day: "ראשון - חמישי", hours: "10:00 - 20:00" },
              { day: "שישי", hours: "09:00 - 15:00" },
              { day: "שבת", hours: "סגור" }
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center text-gray-600 font-medium p-3 bg-gray-50 rounded-lg">
                <span className="font-bold">{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold shadow-md hover:shadow-lg"
          >
            קבע תור
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <VideoComponent />

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            החזון המקצועי שלנו
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            {barberInfo.vision.commitment}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barberInfo.professionalValues.map((value, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            ניסיון והכשרה
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">הכשרה מקצועית</h3>
            <ul className="space-y-3">
              {barberInfo.experience.training.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">התמחויות</h3>
            <ul className="space-y-3">
              {barberInfo.experience.specialties.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          למה לבחור בנו?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          מה הלקוחות שלנו אומרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            content="השירות הכי טוב שקיבלתי! דניאל מקצועי ותמיד יודע בדיוק מה אני רוצה."
            author="יוסי כהן"
          />
          <TestimonialCard 
            content="הבן שלי תמיד שמח לבוא להסתפר אצל דניאל. אווירה נעימה ותוצאה מעולה!"
            author="רונית לוי"
          />
          <TestimonialCard 
            content="מקום מקצועי עם יחס אישי. ממליץ בחום!"
            author="אבי ישראלי"
          />
        </div>
      </div>

      <div className="text-center mb-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          דירוג העסק שלנו
        </h2>
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-4">
          9.3
        </div>
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Star key={index} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 font-medium">מתוך 10 בדירוג הלקוחות שלנו</p>
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/daniel.edri.barber/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <Instagram className="w-6 h-6" />
          עקבו אחרינו באינסטגרם
        </a>
      </div>
    </div>
  );
};

export default Home;