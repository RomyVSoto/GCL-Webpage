import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessNotificationProps {
  message: string;
  onClose: () => void;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({ message, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onClose, 500); // Espera a que termine la animación de salida
    }, 2500); // Cierra la notificación automáticamente después de 2.5 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`absolute top-0 left-0 right-0 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center justify-between shadow-lg transform transition-transform duration-500 ease-out ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
      <div className="flex items-center">
        <CheckCircle className="text-green-500 w-8 h-8 mr-3" />
        <span className="text-lg font-semibold">{message}</span>
      </div>
      <button onClick={onClose} className="text-green-700 hover:text-green-900 text-xl">
        &times;
      </button>
    </div>
  );
};

export default SuccessNotification;
