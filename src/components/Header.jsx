import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

/**
 * Header principal del sitio
 * Replica el header del template original, adaptado a React.
 *
 * Props:
 * - setPage(page: string): cambia la página actual dentro de App
 * - currentPage: página actual seleccionada
 */
const Header = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Manejar cambio de fondo del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar clases para el menú móvil
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setPage('Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileNav();
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top bg-blue ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo / Nombre del sitio */}
        <a href="#hero" className="logo d-flex align-items-center me-auto" onClick={handleLogoClick}>
          <h1 className="sitename">Ciberseguridad del bienestar</h1>
        </a>

        {/* Menú de navegación */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink
                to="Home"
                setPage={setPage}
                isActive={currentPage === 'Home'}
                onNavigate={closeMobileNav}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="#about" 
                setPage={setPage}
                onNavigate={closeMobileNav}
              >
                Sobre nuestro objetivo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="#why-us" 
                setPage={setPage}
                onNavigate={closeMobileNav}
              >
                Prevenciones
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="https://cdb-simulation.vercel.app/" 
                setPage={setPage}
                isExternal
                onNavigate={closeMobileNav}
              >
                Simulacro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Cuestionario"
                setPage={setPage}
                isActive={currentPage === 'Cuestionario'}
                onNavigate={closeMobileNav}
              >
                Cuestionario
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Botón de menú móvil */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${
            isMobileNavOpen ? 'bi-x' : 'bi-list'
          }`}
          aria-label="Toggle navigation menu"
          onClick={toggleMobileNav}
          role="button"
          tabIndex={0}
        ></i>
      </div>
    </header>
  );
};

export default Header;


