import React from "react";

const servicesData = [
  {
    icon: "fas fa-cut",
    title: "תספורת גברים",
    description: "תספורת מקצועית המותאמת אישית לסגנון ולמבנה הפנים שלך.",
    price: "מחיר: ₪80",
  }, 
  {
    icon: "fas fa-beard",
    title: "עיצוב זקן",
    description: "עיצוב וטיפוח הזקן שלך לקבלת מראה מושלם ומסודר.",
    price: "מחיר: ₪50",
  },
  {
    icon: "fas fa-razor",
    title: "גילוח מסורתי",
    description: "גילוח מסורתי עם תער ומגבת חמה לחוויה מפנקת ומרגיעה.",
    price: "מחיר: ₪60",
  },
  {
    icon: "fas fa-spa",
    title: "טיפולי פנים",
    description: "טיפול פנים מרענן ומזין לשמירה על עור פנים בריא ורענן.",
    price: "מחיר: ₪100",
  },
  {
    icon: "fas fa-child",
    title: "תספורת ילדים",
    description: "תספורת מותאמת לילדים בסביבה ידידותית ונעימה.",
    price: "מחיר: ₪50",
  },
  {
    icon: "fas fa-paint-brush",
    title: "צביעת שיער",
    description: "צביעת שיער מקצועית בגוונים מגוונים לפי בחירתך.",
    price: "מחיר: החל מ-₪150",
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">השירותים שלנו</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <i className={`${service.icon} text-4xl text-blue-500 mb-4`}></i>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="font-bold">{service.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
        >
          קבע תור עכשיו
        </a>
      </div>
    </div>
  );
};

export default Services;
