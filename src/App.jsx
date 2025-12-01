import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Cuestionario from './Pages/Cuestionario';
import PhishingTypes from './Pages/PhishingTypes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    document.body.classList.add('index-page');

    const scrollTopButton = document.getElementById('scroll-top');
    if (scrollTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          scrollTopButton.classList.add('active');
        } else {
          scrollTopButton.classList.remove('active');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'PhishingTypes':
        return <PhishingTypes />;
      case 'Cuestionario':
        return <Cuestionario setPage={handlePageChange} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setPage={handlePageChange} currentPage={currentPage} />
      {renderPage()}
      <Footer setPage={handlePageChange} />

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Volver arriba"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </div>
  );
}

export default App;
