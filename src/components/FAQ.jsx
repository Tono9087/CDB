import React, { useState } from 'react';

/**
 * Componente FAQ - Acordeón interactivo
 * @param {Object} props
 * @param {string} props.title - Título del FAQ
 * @param {React.ReactNode} props.children - Contenido del FAQ
 * @param {boolean} props.defaultOpen - Si el FAQ debe estar abierto por defecto
 */
const FAQ = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'faq-active' : ''}`}>
      <h3 onClick={toggleFAQ} style={{ cursor: 'pointer' }}>
        <span>{title}</span>
      </h3>
      <div className="faq-content">
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
          {children}
        </div>
      </div>
      <i 
        className={`faq-toggle bi bi-chevron-right ${isOpen ? 'rotated' : ''}`}
        onClick={toggleFAQ}
        style={{ cursor: 'pointer' }}
        aria-label={isOpen ? 'Cerrar' : 'Abrir'}
      ></i>
    </div>
  );
};

export default FAQ;



