import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import logo from '../images/GCL-logo.png';

const NotFoundPage: React.FC = () => {
    const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
        <div className="mt-[-200px] text-center ">
          <img src={logo} alt="GCL" className="h-32 mx-auto mb-8" />
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl text-gray-800 mb-8">{language === 'en' ? 'Page not found' : 'Página no encontrada'}</h2>

        <a href="/" className="text-gray-800 border-b-2 border-blue-600 rounded-xl px-2 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">{language === 'en' ? 'Homepage' : 'Página principal'}</a>
        </div>
    </div>
  );
};

export default NotFoundPage;
