import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const Header = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Logo and navigation items */}
        <div className="flex items-center space-x-6 ml-auto">
          {/* Logo and title with proper spacing */}
          <div className="flex items-center space-x-4 mr-8"> {/* Space between logo and title */}
            <img
              src={logo}
              alt="לוגו"
              className="h-10 w-10 ml-2"
            />
            <Link to="/" className="text-xl font-bold">
              דניאל אדרי עיצוב שיער
            </Link>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center space-x-6"> {/* Space between each link */}
            <Link to="/" className="hover:text-gray-300">
              בית
            </Link>
            <Link to="/services" className="hover:text-gray-300">
              שירותים
            </Link>
            <Link to="/gallery" className="hover:text-gray-300">
              גלריה
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              אודות
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              צור קשר
            </Link>
            </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-700">
          בית
        </Link>
        <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">
          שירותים
        </Link>
        <Link to="/gallery" className="block py-2 px-4 text-sm hover:bg-gray-700">
          גלריה
        </Link>
        <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">
          אודות
        </Link>
        <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">
          צור קשר
        </Link>
      </div>
    </header>
  );
};

export default Header;
