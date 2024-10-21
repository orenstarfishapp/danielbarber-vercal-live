import React, { useState, useEffect } from 'react';
import { Scissors, Star, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { icon: Scissors, text: 'עיצוב שיער מקצועי' },
    { icon: Star, text: 'שירות ברמה גבוהה' },
    { icon: Users, text: 'צוות מנוסה ומיומן' },
    { icon: Zap, text: 'טכניקות חדשניות' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-24 px-6 rounded-lg mb-12 shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
          ברוכים הבאים ל
          <span className="text-yellow-400">דניאל אדרי</span>
          <br />עיצוב שיער
        </h1>
        <p className="text-2xl mb-8 text-gray-300">חווית עיצוב שיער מקצועית ויצירתית</p>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-300 ${
                index === activeFeature ? 'scale-110 text-yellow-400' : 'scale-100 text-white'
              }`}
            >
              <feature.icon size={32} className="mb-2" />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            onClick={() => window.location.href = '/contact'}
          >
           📞 053-824-7434
          </button>
          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-75 hover:text-purple-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.location.href = '/gallery'}
          >
            גלריית עבודות
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
