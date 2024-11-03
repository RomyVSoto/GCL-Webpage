import { ArrowRight } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import logo from '../images/GCL-logo.png';

import image1 from '../images/carousel-image-1.jpg';
import image2 from '../images/carousel-image-2.jpg';
import image3 from '../images/carousel-image-3.jpg';
import image4 from '../images/carousel-image-4.jpg';

const Carousel: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-h-1/3 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <section className="hero py-20 mt-[-150px] absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center bg-transparent p-8 rounded-lg">
          <img src={logo} alt="GCL" className="h-40 mx-auto mb-20" />
          <h1 className="text-5xl font-bold mb-4 text-white [text-shadow:_0_7px_5px_black]">{language === 'en' ? 'Welcome to Global Communications Link' : 'Bienvenido a Global Communications Link'}</h1>
          <p className="text-xl mb-14 text-white [text-shadow:_0_5px_5px_black]">{language === 'en' ? 'Connecting you globally' : 'Conectándote a nivel global'}</p>
          <button
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center shadow-md"
          >
            {language === 'en' ? 'Get Started' : 'Comenzar'}
            <ArrowRight className="ml-3 mt-1" size={25} />
          </button>
        </div>
      </section>
      <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-b from-transparent to-gray-100"/>
    </div>
  );
};

export default Carousel;
