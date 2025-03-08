import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (showContactForm) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showContactForm]);

  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar onContactClick={() => setShowContactForm(true)} />
          <Routes>
            <Route path="/" element={<><Carousel /><HomePage /></>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Ruta 404 */}
          </Routes>
          <Footer />
          {showContactForm && (
            <ContactForm onClose={() => setShowContactForm(false)} />
          )}
          {!showContactForm && (
            <ScrollToTopButton/>
          )}
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
