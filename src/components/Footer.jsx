import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <h5 className="mb-3">Currency and Weather App</h5>
            <p>
              Track weather forecasts and currency rates with ease. Stay informed and updated anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">© 2024 Currency and Weather App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
