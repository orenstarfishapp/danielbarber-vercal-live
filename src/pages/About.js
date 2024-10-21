import React from "react";

const About = () => {
  return (
    <div className="container mx-auto  px-4 md:px-[50px] py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        אודות דניאל אדרי עיצוב שיער
      </h1>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">הסיפור שלנו</h2>
        <p className="mb-4">
          דניאל אדרי עיצוב שיער הוקם מתוך אהבה לאמנות עיצוב השיער והרצון להעניק
          ללקוחות חוויית טיפוח ברמה הגבוהה ביותר.
        </p>
        <p className="mb-4">
          אנו מתמחים בתספורות גברים וילדים, עם דגש על קווים נקיים, דירוגים ופייד
          מושלמים. בנוסף, אנו מציעים שירותי עיצוב זקן המשתלבים בצורה מושלמת עם
          התספורת, וכן שירותי צביעת שיער.
        </p>
        <p>
          הצוות שלנו מורכב מספרים מנוסים ומוכשרים, שתמיד מתעדכנים בטרנדים
          האחרונים ובטכניקות החדשות ביותר בעולם עיצוב השיער.
        </p>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">המשימה שלנו</h2>
        <p className="mb-4">
          המשימה שלנו היא להעניק לכל לקוח חוויה אישית ומותאמת, תוך שימוש
          בטכניקות מתקדמות ומוצרים איכותיים. אנו שואפים ליצור אווירה נעימה
          ומזמינה, שבה כל אחד ירגיש בנוח ויצא מרוצה ובטוח בעצמו.
        </p>
        <p>
          אנו מחויבים לספק שירות מעולה, לשמור על סטנדרטים גבוהים של היגיינה,
          ולהתייחס לכל לקוח בכבוד ובמקצועיות.
        </p>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">היתרונות שלנו</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>טיפול ושירות מכל הלב</li>
          <li>תספורת בקו האופנה העדכני</li>
          <li>גישה חיובית לילדים</li>
          <li>מכשור עובר סטריליזציה</li>
        </ul>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">הצוות שלנו</h2>
        <p className="mb-4">
          הצוות שלנו מורכב מספרים מקצועיים ומנוסים, בהובלתו של דניאל אדרי. כל
          אחד מאנשי הצוות מביא איתו ניסיון עשיר וידע מקצועי, המאפשרים לנו להעניק
          ללקוחותינו את השירות הטוב ביותר.
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
        >
          צור קשר
        </a>
      </div>
    </div>
  );
};

export default About;
