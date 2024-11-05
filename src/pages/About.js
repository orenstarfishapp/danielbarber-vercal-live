import React from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Scissors,
  Clock,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Sparkles,
  Shield,
  Smile,
  ThumbsUp,
  ChevronLeft,
} from "lucide-react";

// Simplified color schemes with a more consistent palette
const iconColors = {
  primary: "from-blue-600 to-indigo-600",
  secondary: "from-indigo-500 to-blue-500",
  accent: "from-blue-500 to-blue-400"
};

const IconWrapper = ({ children, gradient = "primary", size = "default" }) => (
  <div className={`
    rounded-xl bg-gradient-to-br ${iconColors[gradient]} shadow-md
    ${size === "large" ? "p-4" : "p-3"}
  `}>
    {children}
  </div>
);

const AboutSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="flex items-center gap-4">
        {Icon && (
          <IconWrapper gradient="primary">
            <Icon className="w-8 h-8 text-white" />
          </IconWrapper>
        )}
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const IconBox = ({ icon: Icon, text, subtext }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
    <IconWrapper gradient="primary" size="large">
      <Icon className="w-7 h-7 text-white" />
    </IconWrapper>
    <h3 className="font-bold text-lg my-4 text-center text-gray-800">
      {text}
    </h3>
    {subtext && <p className="text-sm text-gray-600 text-center leading-relaxed font-medium">{subtext}</p>}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
    <div className="flex items-center gap-4 mb-4">
      <IconWrapper gradient="secondary">
        <Icon className="w-6 h-6 text-white" />
      </IconWrapper>
      <h3 className="font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed font-medium">{description}</p>
  </div>
);

// Component remains the same, just updating the usage of gradients and colors
const About = () => {
  const advantages = [
    {
      icon: Heart,
      text: "טיפול אישי ומסור",
      subtext: "שירות מותאם אישית המעניק חוויה ייחודית לכל לקוח"
    },
    {
      icon: Award,
      text: "מומחיות מקצועית",
      subtext: "צוות מיומן עם ניסיון רב בעיצוב שיער מודרני"
    },
    {
      icon: Smile,
      text: "חוויה נעימה לילדים",
      subtext: "סביבה ידידותית והתאמה מיוחדת לצרכי הילדים"
    },
    {
      icon: Shield,
      text: "סטנדרטים גבוהים",
      subtext: "שמירה קפדנית על היגיינה ושימוש בציוד מתקדם"
    },
  ];

  const services = [
    {
      icon: Scissors,
      title: "תספורות גברים",
      description: "עיצוב שיער מודרני המותאם לאופי ולסגנון האישי שלך"
    },
    {
      icon: Star,
      title: "עיצוב זקן",
      description: "טיפול מקצועי וסטיילינג מדויק לזקן בכל אורך ובכל סגנון"
    },
    {
      icon: Sparkles,
      title: "צביעת שיער",
      description: "שימוש בחומרים איכותיים לקבלת צבע עשיר ומראה טבעי"
    },
    {
      icon: ThumbsUp,
      title: "תספורות ילדים",
      description: "גישה סבלנית ומקצועית המותאמת במיוחד לילדים"
    },
  ];

  const businessHours = [
    { day: "ראשון - חמישי", hours: "09:00 - 20:00" },
    { day: "שישי", hours: "09:00 - 15:00" },
    { day: "שבת", hours: "סגור" },
  ];

  const contactInfo = {
    address: "רחוב הרצל 123, תל אביב",
    phone: "054-1234567",
    email: "daniel@adri.co.il",
    instagram: "@daniel_adri_hair",
    facebook: "Daniel Adri Hair Design",
  };

  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-12 max-w-7xl bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          דניאל אדרי
        </h1>
        <p className="text-xl text-gray-600 font-medium px-6 py-3 rounded-full bg-white shadow-md inline-block">
          המספרה המובילה לעיצוב שיער לגברים
        </p>
      </div>

      <AboutSection title="הסיפור שלנו" icon={Users}>
        <div className="space-y-6">
          <p className="leading-relaxed text-gray-600 font-medium">
            המספרה שלנו נוסדה מתוך תשוקה אמיתית לאמנות עיצוב השיער והחזון להעניק
            ללקוחותינו חוויית טיפוח יוצאת דופן. אצלנו, כל תספורת היא יצירת אמנות.
          </p>
          <p className="leading-relaxed text-gray-600 font-medium">
            הצוות המקצועי שלנו, בהובלתו של דניאל אדרי, מתמחה במגוון רחב של סגנונות
            ועיצובים, תוך שימת דגש על דיוק, איכות ושירות אישי לכל לקוח.
          </p>
          <p className="leading-relaxed text-gray-600 font-medium">
            אנו מאמינים שתספורת מושלמת היא שילוב של טכניקה מקצועית, הבנת הצרכים
            האישיים של הלקוח, ותשומת לב לפרטים הקטנים ביותר.
          </p>
        </div>
      </AboutSection>

      <AboutSection title="השירותים שלנו" icon={Scissors}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </AboutSection>

      <AboutSection title="היתרונות שלנו" icon={Award}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <IconBox key={index} {...advantage} />
          ))}
        </div>
      </AboutSection>

      <AboutSection title="שעות פעילות" icon={Clock}>
        <div className="space-y-4">
          {businessHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="font-bold text-gray-800">{schedule.day}</span>
              <span className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 rounded-lg font-medium">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </AboutSection>

      <div className="text-center mt-12">
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          קבע תור עכשיו
          <ChevronLeft className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default About;