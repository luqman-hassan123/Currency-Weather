import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun, FaDollarSign } from 'react-icons/fa'; // Import icons for weather and currency

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="hero-section text-white text-center py-5" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x600)' }}>
        <div className="overlay d-flex align-items-center justify-content-center">
          <div className="hero-content">
            <h1 className="display-3 mb-3">Track Your Weather & Currency Data</h1>
            <p className="lead mb-4">Stay informed and plan ahead with accurate weather forecasts and live currency exchange rates.</p>
            <Link to="/weather" className="btn btn-light btn-lg mx-2">Weather Forecast</Link>
            <Link to="/currency" className="btn btn-light btn-lg mx-2">Currency Rates</Link>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="container text-center py-5">
        <h2 className="mb-4">Features of Our Application</h2>
        <div className="row">
          {/* Weather Feature */}
          <div className="col-md-6 mb-4">
            <div className="feature-card shadow-sm p-4 rounded">
              <FaCloudSun size={50} className="mb-3 text-primary" />
              <h4>Weather Forecasting</h4>
              <p>Get accurate weather data for your location. View forecasts, temperatures, and real-time updates.</p>
              <Link to="/weather" className="btn btn-primary">Explore Weather</Link>
            </div>
          </div>

          {/* Currency Feature */}
          <div className="col-md-6 mb-4">
            <div className="feature-card shadow-sm p-4 rounded">
              <FaDollarSign size={50} className="mb-3 text-success" />
              <h4>Currency Exchange</h4>
              <p>Stay up to date with the latest currency rates and convert your money with ease.</p>
              <Link to="/currency" className="btn btn-success">Explore Currency</Link>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
