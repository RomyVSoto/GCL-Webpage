import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import logo_wname from '../images/GCL-logo-wname.png'

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo_wname} alt="GCL" className="h-12" />
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex items-center transition-all duration-300 ${isMenuOpen ? 'block' : ''}`}>
          <a
            href="/about"
            className="mx-3 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'About Us' : 'Sobre Nosotros'}
          </a>
          <a
            href="/services"
            className="mx-3 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'Services' : 'Servicios'}
          </a>
          <button
            onClick={onContactClick}
            className="mx-3 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'Contact' : 'Contacto'}
          </button>
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-blue-600 text-white py-1 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
      <div className={`bg-white shadow-md md:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-3 flex flex-col items-center">
          <a
            href="/about"
            className="my-2 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'About Us' : 'Sobre Nosotros'}
          </a>
          <a
            href="/services"
            className="my-2 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'Services' : 'Servicios'}
          </a>
          <button
            onClick={onContactClick}
            className="my-2 text-gray-600 hover:text-blue-500"
          >
            {language === 'en' ? 'Contact' : 'Contacto'}
          </button>
          <button
            onClick={toggleLanguage}
            className="mt-4 bg-blue-500 text-white py-1 px-4 rounded-xl hover:bg-blue-600"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
