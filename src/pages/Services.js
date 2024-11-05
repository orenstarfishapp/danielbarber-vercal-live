import React from "react";
import {
  Scissors,
  MessageCircle,
  Ruler,
  Scan,
  UserCheck,
  PaintBucket,
  ChevronLeft,
  Clock
} from "lucide-react";

const servicesData = [
  {
    icon: Scissors,
    title: "תספורת גברים",
    description: "תספורת מקצועית המותאמת אישית לסגנון ולמבנה הפנים שלך, כולל שטיפה וסטיילינג.",
    price: "₪80",
    duration: "45 דקות"
  },
  {
    icon: Ruler,
    title: "עיצוב זקן",
    description: "עיצוב וטיפוח הזקן שלך לקבלת מראה מושלם ומסודר, כולל טיפול בשמנים איכותיים.",
    price: "₪50",
    duration: "30 דקות"
  },
  {
    icon: MessageCircle,
    title: "גילוח מסורתי",
    description: "גילוח מסורתי עם תער ומגבת חמה לחוויה מפנקת ומרגיעה, כולל טיפול עור הפנים.",
    price: "₪60",
    duration: "35 דקות"
  },
  {
    icon: Scan,
    title: "טיפולי פנים",
    description: "טיפול פנים מרענן ומזין לשמירה על עור פנים בריא ורענן, כולל עיסוי פנים.",
    price: "₪100",
    duration: "50 דקות"
  },
  {
    icon: UserCheck,
    title: "תספורת ילדים",
    description: "תספורת מותאמת לילדים בסביבה ידידותית ונעימה, עם גישה סבלנית ומקצועית.",
    price: "₪50",
    duration: "30 דקות"
  },
  {
    icon: PaintBucket,
    title: "צביעת שיער",
    description: "צביעת שיער מקצועית בגוונים מגוונים לפי בחירתך, כולל טיפול מקדים ומייצב צבע.",
    price: "החל מ-₪150",
    duration: "90-120 דקות"
  }
];

const ServiceCard = ({ icon: Icon, title, description, price, duration }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-1 border border-gray-100 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md group-hover:shadow-lg transition-all duration-300">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    
    <p className="text-gray-600 mb-6 leading-relaxed font-medium">{description}</p>
    
    <div className="border-t border-gray-100 pt-4 mt-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 font-medium">מחיר:</span>
        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {price}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">משך זמן:</span>
        <div className="flex items-center gap-2 font-medium text-gray-800">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-12 max-w-7xl bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          השירותים שלנו
        </h1>
        <p className="text-xl text-gray-600 font-medium px-6 py-3 rounded-full bg-white shadow-md inline-block">
          טיפוח ועיצוב שיער ברמה הגבוהה ביותר
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-16 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">מוכנים לשדרג את המראה שלכם?</h2>
          <p className="text-gray-600 font-medium">אנחנו כאן כדי להעניק לכם את החוויה המושלמת</p>
        </div>
        
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

export default Services;
