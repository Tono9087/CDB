import React from 'react';
import NavLink from './NavLink';

const Footer = ({ setPage }) => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a
              href="#hero"
              className="d-flex align-items-center"
              onClick={(e) => {
                e.preventDefault();
                setPage('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="sitename">Ciberseguridad del bienestar</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Chihuahua, Chihuahua</p>
              <p className="mt-3"><strong>Teléfono:</strong> <span>+52 614 *** *****</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Enlaces útiles</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <NavLink to="Home" setPage={setPage}>Inicio</NavLink>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage('Home');
                    setTimeout(() => {
                      const element = document.querySelector('#about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a
                  href="#why-us"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage('Home');
                    setTimeout(() => {
                      const element = document.querySelector('#why-us');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Prevenciones
                </a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <NavLink to="Cuestionario" setPage={setPage}>Cuestionario</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Síguenos</h4>
            <p>Pronto verás más redes</p>
            <div className="social-links d-flex">

            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Ciberseguridad del bienestar</strong> <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;



