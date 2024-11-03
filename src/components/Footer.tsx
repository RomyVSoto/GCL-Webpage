import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-8 py-2">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-2 md:mb-0 text-center">
            <h3 className="text-xl font-bold mb-2">Global Communications Link</h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Connecting you globally'
                : 'Conectándote a nivel global'}
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-2 md:mb-0 text-center">
            <h4 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h4>
            <ul>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white"
                >
                  {language === 'en' ? 'About Us' : 'Sobre Nosotros'}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  {language === 'en' ? 'Services' : 'Servicios'}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-2 md:mb-0 text-center">
            <h4 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </h4>
            <p className="text-gray-400">info@gcommlink.com</p>
            <p className="text-gray-400">+1 (929) 384-2944</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-2 text-center text-gray-400">
          <p>&copy; 2024 Global Comunnications Link. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
