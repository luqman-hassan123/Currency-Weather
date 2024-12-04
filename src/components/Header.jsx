import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center bg-light py-3">
      <h1 className="m-0">{title}</h1>
      <p className="m-0">{subtitle}</p>
    </header>
  );
};

export default Header;
