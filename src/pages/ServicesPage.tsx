import React, { useContext, useState } from 'react';
import { Cable, Ruler, ArrowUpDown, ReplaceAll, Hammer, Cctv } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';// Asegúrate de importar tu contexto de idioma

import logo_wname from '../images/GCL-logo-wname.png'

const ServicesPage: React.FC = () => {
  const { language } = useContext(LanguageContext); // Usa el contexto para obtener el idioma actual// Estado para controlar la visibilidad

  const [showWarranty, setShowWarranty] = useState(false); // Estado para controlar la visibilidad

  const toggleWarranty = () => {
    setShowWarranty(!showWarranty);
  };

  const services = [
    { icon: Ruler, title: language === 'es' ? 'Construcción' : 'Design-Build', description: language === 'es' ? 'Proyectos de ingeniería, topografía y dibujo.' : 'Engineering, Survey & Drafting Projects.' },
    { icon: ArrowUpDown, title: language === 'es' ? 'Pruebas de Transferencia de Datos' : 'Data Transfer Testing', description: language === 'es' ? 'Pruebas de transferencia de datos de extremo a extremo, pruebas de cable, pruebas de medidor de potencia, pruebas de fuente de láser y más.' : 'End-to-end, Reel Testing, Splice, Power Meter Testing, Laser Source Testing and more.' },
    { icon: Cable, title: language === 'es' ? 'Cableado de datos de instalaciones' : 'Facility Data Wiring', description: language === 'es' ? 'Instalación de cableado de alta calidad para una conexión eficiente y segura.' : 'High-quality Cat6, Cat6a, Cat5, Cat5e, Cat3 cabling installation for efficient and secure connectivity.' },
    { icon: ReplaceAll, title: language === 'es' ? 'Colocación de cables' : 'Cable Placement', description: language === 'es' ? 'Instalación de cableado de alta calidad en ductos, ductos internos, pozos y microductos.' : 'High-quality cabling installation of Duct/Cable Plowing, Inner Duct, Manholes and Micro Duct Placement.' },
    { icon: Hammer, title: language === 'es' ? 'Reparación y restauración' : 'Repair and Restoration', description: language === 'es' ? 'Reparación y restauración de cables Cat6, Cat6a, Cat5, Cat5e, Cat3.' : 'Repair and restoration of Cat6, Cat6a, Cat5, Cat5e, Cat3 cables.' },
    { icon: Cctv, title: language === 'es' ? 'Cámaras de seguridad' : 'Security Cameras', description: language === 'es' ? 'Instalación y pruebas de cámaras de seguridad de alta calidad para una conexión eficiente y segura.' : 'High-quality security cameras installation and testing for efficient and secure connectivity.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 mt-12">
        <img src={logo_wname} alt="GCL" className="h-36 mx-auto mb-20" />
        <h1 className="text-4xl font-bold mb-24 text-center text-gray-800">{language === 'es' ? 'Servicios que ofrecemos a nuestros clientes' : 'Services that we provide to our clients'}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="mx-auto mt-4 flex flex-col items-center">
              <button onClick={toggleWarranty} className="text-blue-600 flex items-center">
                {language === 'es' ? 'Ver garantía de trabajo...' : 'Work Warranty...'}
                <ArrowUpDown className="w-4 h-4 ml-2" />
              </button>

              {showWarranty && (
                <div className="container mx-auto px-4 text-center">
                  <p className="mb-2 text-gray-600 mt-2 max-w-xl text-justify mx-auto">
                    {language === 'en'
                      ? 'CDIS provides a warranty for ALL of our cabling installation work to assure our costumers that they continue to conduct their bussiness operations effectively. CDIS is licensed to operate in several states and we are fully insured.'
                      : 'CDIS proporciona una garantía para TODA nuestra instalación de cableado para asegurar que nuestros clientes continúen realizando sus operaciones comerciales de manera efectiva. CDIS está licenciado para operar en varios estados y estamos totalmente asegurados.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
