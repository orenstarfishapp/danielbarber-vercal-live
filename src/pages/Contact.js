import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen mx-auto px-4 md:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">צור קשר</h1>

      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-screen-md w-full">
          <h2 className="text-2xl font-semibold mb-4">פרטי התקשרות</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt text-blue-500 ml-2"></i>
              <span>יהונתן 6, הוד השרון</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone text-blue-500 ml-2"></i>
              <span>טלפון: 053-824-7434</span>
            </li>
            <li className="flex items-center">
              <i className="fab fa-instagram text-blue-500 ml-2"></i>
              <a
                href="https://www.instagram.com/daniel.edri.barber/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                @daniel.edri.barber
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">שעות פעילות</h3>
          <ul className="space-y-2">
            <li>ראשון - חמישי: 10:00 - 20:00</li>
            <li>שישי: 09:00 - 15:00</li>
            <li>שבת: סגור</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">מפה</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.4026619454216!2d34.89236661542727!3d32.150893120401296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3892aa0c95cb%3A0x3e40adf7a9f54a0c!2sYehonatan%20St%206%2C%20Hod%20HaSharon!5e0!3m2!1sen!2sil!4v1631123456789!5m2!1sen!2sil"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
