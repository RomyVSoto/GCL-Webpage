import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { BadgeCheck } from 'lucide-react';

import logo from '../images/GCL-logo.png';


const AboutPage: React.FC = () => {
  const { language } = useContext(LanguageContext);


  return (
    <div className="bg-gray-200 min-h-screen">
      <section className="py-20 mt-10">
        <div className="container mx-auto px-4">
          <img src={logo} alt="GCL" className="h-32 mx-auto mb-8" />  
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
            {language === 'en' ? 'About Global Communications Link' : 'Sobre Global Communications Link'}
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8 text-gray-600 text-justify">
              {language === 'en'
                ? 'GLOBAL COMMUNICATIONS LINK LLC is a full-service voice, data, imaging and monitoring systems cabling company. Since 2016, our employees have been dedicated to providing quality products, services and educating client in current industry standards and practices.'
                : 'Global Communications Link es una empresa líder en tecnología dedicada a superar los límites de la innovación. Con una pasión por las soluciones de vanguardia, nos esforzamos por crear un mundo más inteligente y conectado.'}
            </p>
          </div>
          <div className="mt-28 mb-12 grid grid-cols-1 md:grid-cols-2 gap-36 mx-auto text-center max-w-4xl text-justify">
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-gray-800 text-center">
                {language === 'en' ? 'Our Mission' : 'Nuestra Misión'}
              </h2>
              <p className="text-gray-500">
                {language === 'en'
                  ? 'To empower businesses and individuals with innovative technology solutions that drive growth, efficiency, and positive change in the world.'
                  : 'Empoderar a empresas e individuos con soluciones tecnológicas innovadoras que impulsen el crecimiento, la eficiencia y el cambio positivo en el mundo.'}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-gray-800 text-center">
                {language === 'en' ? 'Our Vision' : 'Nuestra Visión'}
              </h2>
              <p className="text-gray-500">
                {language === 'en'
                  ? 'To be the global leader in transformative technology, shaping a future where innovation enhances every aspect of life and business.'
                  : 'Ser el líder global en tecnología transformadora, moldeando un futuro donde la innovación mejore cada aspecto de la vida y los negocios.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-800">{language === 'es' ? 'Certificaciones' : 'Certifications'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md-lg:grid-cols-2 lg:grid-cols-4 gap-28 justify-items-center">
            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-48">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">SST</h3>
              <p className="text-xl italic text-gray-700">Site Safety Training</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">PCT</h3>
              <p className="text-xl italic text-gray-700 mb-1 text-center">Panduit Certified Technician</p>
              <p className="text-lg italic text-gray-700 text-center">Fiber Version 1.0V</p>
              <p className="text-lg italic text-gray-700 text-center">Copper Version 1.0V</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">FSM-16S</h3>
              <p className="text-xl italic text-gray-700 text-center">Fujikura Splicing Certification</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">FOT</h3>
              <p className="text-xl italic text-gray-700 text-center">MOD Tech 5 Certification</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">NOYES</h3>
              <p className="text-xl italic text-gray-700">M700 Certification</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">3M</h3>
              <p className="text-xl italic text-gray-700">Instalation Certification</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center">Confined Space Awareness</h3>
              <p className="text-xl italic text-gray-700">Per OSHA 1910.146</p>
            </div>

            <div className="bg-gradient-to-t hover:from-gray-200 transition-shadow duration-300 rounded-lg hover:shadow-lg p-4 flex flex-col items-center w-72 h-64">
              <BadgeCheck className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center"></h3>
              <p className="text-xl italic text-gray-700">Instalation Certification</p>
            </div>
          </div>
        </div>


      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{language === 'es' ? 'Nuestro Equipo' : 'Our Team'}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {[
              { name: 'Manuel Almonte', role: 'President', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
              { name: 'Dariel Soto', role: 'CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
            ].map((member, index) => (
              <div key={index} className="text-center mx-auto mt-8">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
