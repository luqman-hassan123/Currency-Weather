import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import Header from './Header';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Header className="Currency Convertor and Weather Application "/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Using NavLink to navigate */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/currency" activeClassName="active">
                Currency
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/weather" activeClassName="active">
                Weather
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
