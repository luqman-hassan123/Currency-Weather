import React from 'react';

const Header = ({ title, subtitle, logo }) => {
  return (
    <header className="text-center bg-light py-3">
      <img src={logo} alt="Logo" className="mb-2" style={{ height: '60px' }} />
      <h1 className="m-0">{title}</h1>
      <p className="m-0">{subtitle}</p>
    </header>
  );
};

export default Header;
