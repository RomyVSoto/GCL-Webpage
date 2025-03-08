import React, { useContext } from "react";
import { LanguageContext } from '../contexts/LanguageContext';

import logo_wname from '../images/GCL-logo-wname.png'
import osha_logo from '../images/OSHA-logo.png';
import swac_logo from '../images/SWAC-logo.png';
import sti_logo from '../images/STI-logo.png';

import grid_image_1 from '../images/grid-image-1.png';
import grid_image_2 from '../images/grid-image-2.png';
import grid_image_3 from '../images/grid-image-3.png';

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <main className="container mx-auto px-6 py-10 max-w-10xl mb-8" id="home">
      <div className="bg-gray-50 min-h-screen py-12 px-12 rounded-2xl shadow-2xl">
        <img src={logo_wname} alt="GCL" className="h-40 md:h-52 lg:h-60 mx-auto mb-16 mt-20" />
        <div className="flex flex-col text-justify text-center max-w-4xl mx-auto">
          <p className="text-xl mt-4 text-gray-800 font-semibold text-center">
            {language === 'es' ? 'Desde 2016, Global Communications Link ha estado desarrollando nuevas y innovadoras formas de apoyar los productos de próxima generación para dispositivos de video de alta definición, conmutadores y gestión de señales.' : 'Since 2016, Global Communications Link has been developing new and innovate ways to support next generation products for high definition video extenders, switches and signal management.'}
          </p>
          <p className="text-xl mt-4 text-gray-800 font-semibold text-center">
            {language === 'es' ? 'Nuestra tecnología se implementa a nivel mundial por organizaciones públicas, privadas y gubernamentales.' : 'Our technology is deployed worldwide by public, private and governmental organizations.'}
          </p>
          <p className="text-xl mt-8 text-gray-800 font-semibold text-center">
            {language === 'es' ? 'Global Communications Link es una empresa privada y tiene su sede en Bronx, Nueva York.' : 'Global Communications Link is privately held and headquartered in Bronx, New York.'}
          </p>
        </div>
        <div className="flex flex-row md:flex-row sm:flex-row flex-wrap justify-center max-w-4xl mx-auto mt-32 gap-10">
          <img src={osha_logo} className="h-20 w-30 mx-auto" alt="OSHA" />
          <img src={swac_logo} className="h-24 w-30 mx-auto" alt="SWAC" />
          <img src={sti_logo} className="h-20 w-30 mx-auto" alt="STI" />
        </div>

        <div className="flex flex-col justify-center items-center max-w-lg mx-auto text-center mt-8 gap-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-40 mb-[-50px] text-center text-gray-800">
              {language === 'es' ? 'Algunos de nuestros servicios:' : 'Some of our services:'}
            </h1>
            <div className="flex flex-col justify-center items-center mx-auto text-center gap-2 md:gap-16 mt-24">
              <div className="relative group w-full hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                <img src={grid_image_1} className="w-full h-auto mx-auto rounded-lg"/>
                <p className="absolute bottom-0 left-0 right-0 py-2 rounded-b-lg bg-gray-50 text-gray-800 text-center font-bold opacity-85 md:opacity-0 group-hover:opacity-85 transition-opacity duration-500">
                  {language === 'es' ? 'Instalación y reemplazo de cableado' : 'Wiring Placement and Replacement'}
                </p>
              </div>
              <div className="relative group w-full mt-4 md:mt-0 hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                <img src={grid_image_2} className="w-full h-auto mx-auto rounded-lg"/>
                <p className="absolute bottom-0 left-0 right-0 py-2 rounded-b-lg bg-gray-50 text-gray-800 text-center font-bold opacity-85 md:opacity-0 group-hover:opacity-85 transition-opacity duration-500">
                  {language === 'es' ? 'Instalación de cámaras de seguridad' : 'Security Cameras Installation'}
                </p>
              </div>
              <div className="relative group w-full mt-4 md:mt-0 hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                <img src={grid_image_3} className="w-full h-auto mx-auto rounded-lg"/>
                <p className="absolute bottom-0 left-0 right-0 py-2 rounded-b-lg bg-gray-50 text-gray-800 text-center font-bold opacity-85 md:opacity-0 group-hover:opacity-85 transition-opacity duration-500">
                  {language === 'es' ? 'Diseño y construcción de cableado' : 'Wiring design and construction.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-12 mt-16">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-12 text-center text-gray-800">
              {language === 'es' ? 'Mientras instalamos cableado, nos adherimos a los siguientes códigos y estándares:' : 'While installing wiring, we adhere to the following codes and standards:'}
            </h1>
          </div>
          <div className="flex flex-col justify-center max-w-lg mx-auto text-center">
            <p className="text-gray-600 bg-gray-200 mt-1 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(NEC) National Electric Code</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(NYCEC) New York City Electric Code</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(ICBO) International Conference of Building Officials</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(OSHA) Occupational Safety Health Administration</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(NFPA) National Fire Protection Association</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(ANSI) American National Standards Institute</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(ASA) American Standards Association</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(ISO) International Standards Organization</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(IEEE) Institute of Electrical Electronics Engineers</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(TIA-EIA) Telecommunications Industries Association - Electrical Industries Association</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(UL) Underwriters' Laboratories</p>
            <p className="text-gray-600 bg-gray-200 mt-5 border-b-2 border-gray-600 px-2 py-2 hover:py-4 rounded-md hover:bg-gray-800 transition-all duration-500 hover:text-white">(BICSI) Building Industry Consulting Service International</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
