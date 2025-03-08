import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import SuccessNotification from './SuccessNotification';
import Input from 'react-phone-number-input/input'

import logo_wname from '../images/GCL-logo-wname.png';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    requestType: '',
    language: language,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form submitted:', formData);

    try {
      const response = await fetch("https://gcl-backend.onrender.com/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3500);
      } else {
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg h-full max-h-screen max-w-md w-full mx-4 overflow-y-auto">
        <div className="relative">
          {showSuccess && (
            <SuccessNotification
              message={language === 'en' ? '¡Request sent successfully!' : '¡Solicitud enviada exitosamente!'}
              onClose={() => setShowSuccess(false)}

            />
          )}
          <form onSubmit={handleSubmit} className="mt-8">
            <img src={logo_wname} alt="GCL" className="h-28 sm:h-32 lg:h-40 w-auto mx-auto mb-8" />
            <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
              {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </h1>
            <div className="mb-6">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                {language === 'en' ? 'First Name' : 'Nombre'}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                {language === 'en' ? 'Last Name' : 'Apellido'}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                {language === 'en' ? 'Phone Number' : 'Número de Teléfono'}
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                country="US"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value || '' })}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                {language === 'en' ? 'Email' : 'Correo Electrónico'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="requestType" className="block text-gray-700 font-bold mb-2">
                {language === 'en' ? 'Request Type' : 'Tipo de Solicitud'}
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">
                  {language === 'en' ? 'Select a type' : 'Seleccione un tipo'}
                </option>
                <option value={language === 'en' ? 'Installation' : 'Instalación'}>
                  {language === 'en' ? 'Installation' : 'Instalación'}
                </option>
                <option value={language === 'en' ? 'Cleaning' : 'Limpieza'}>
                  {language === 'en' ? 'Cleaning' : 'Limpieza'}
                </option>
                <option value={language === 'en' ? 'Security Camera Installation' : 'Instalación de Cámaras de Seguridad'}>
                  {language === 'en' ? 'Security Camera Installation' : 'Instalación de Cámaras de Seguridad'}
                </option>
                <option value={language === 'en' ? 'Reparation, Restoration or Maintenance' : 'Reparación, Restauración o Mantenimiento'}>
                  {language === 'en' ? 'Reparation, Restoration or Maintenance' : 'Reparación, Restauración o Mantenimiento'}
                </option>
                <option value={language === 'en' ? 'Personal' : 'Personal'}>
                  {language === 'en' ? 'Personal' : 'Personal'}
                </option>
              </select>
            </div>
            <div className="mt-2 flex justify-center">
              <p className="text-sm text-gray-400 mb-2 text-center max-w-sm">{language === 'en' ? 'A messsage with your request will be sent to our team.' : 'Un mensaje con su solicitud será enviado a nuestro equipo.'}</p>
            </div>
            <div className="flex justify-end mt-10">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
              >
                {language === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
              >
                {language === 'en' ? 'Submit' : 'Enviar'}
                {isLoading && (
                  <div className="flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
