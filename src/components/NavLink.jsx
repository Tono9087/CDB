import React from 'react';

/**
 * Componente NavLink reutilizable para links de navegación
 * @param {Object} props
 * @param {string} props.to - Página destino o hash
 * @param {Function} props.setPage - Función para cambiar de página
 * @param {boolean} props.isActive - Si el link está activo
 * @param {boolean} props.isExternal - Si es un link externo
 * @param {Function} props.onNavigate - Callback cuando se navega (para cerrar menú móvil)
 * @param {React.ReactNode} props.children - Contenido del link
 */
const NavLink = ({ to, setPage, isActive = false, isExternal = false, onNavigate, children }) => {
  const handleClick = (e) => {
    if (isExternal) {
      if (onNavigate) {
        onNavigate();
      }
      // Link externo, abrir en nueva pestaña
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    e.preventDefault();
    
    // Si es un hash (empieza con #), hacer scroll suave
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Cambiar de página
      setPage(to);
    }
    
    // Cerrar menú móvil si está abierto
    if (onNavigate) {
      onNavigate();
    }
  };

  const classes = isActive ? 'active' : '';

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
};

export default NavLink;



