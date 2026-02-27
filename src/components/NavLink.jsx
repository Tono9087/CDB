import React from 'react';

const NavLink = ({ to, setPage, isActive = false, onNavigate, children }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setPage(to);
    }

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




