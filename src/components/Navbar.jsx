import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import logo from '../assets/images/logo.png'; // Adjust the path based on your folder structure


const Navbar = () => {
  return (
    <>
     

      {/* Navbar Section */}
      <nav className="navbar navbar-dark bg-dark text-light navbar-expand-lg">
        <div className="container-fluid">
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
       {/* Header Section */}
       <Header
        title="Currency Converter and Weather Application"
        subtitle="Track your finances and weather with ease"
        logo={logo}
      />
    </>
  );
};

export default Navbar;
