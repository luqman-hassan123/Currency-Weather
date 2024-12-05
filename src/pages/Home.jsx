import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun, FaDollarSign } from 'react-icons/fa'; // Import icons for weather and currency

const Home = () => {
  return (
    <div className="container-fluid p-0">
   
      {/* Information Section */}
      <div className="container text-center py-5">
        <h2 className="mb-4">Features of Our Application</h2>
        <div className="row justify-content-center">
          {/* Weather Feature */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="feature-card shadow-lg p-4 rounded">
              <FaCloudSun size={50} className="mb-3 text-primary" />
              <h4>Weather Forecasting</h4>
              <p>Get accurate weather data for your location. View forecasts, temperatures, and real-time updates.</p>
              <Link to="/weather" className="btn btn-primary">Explore Weather</Link>
            </div>
          </div>

          {/* Currency Feature */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="feature-card shadow-lg p-4 rounded">
              <FaDollarSign size={50} className="mb-3 text-success" />
              <h4>Currency Exchange</h4>
              <p>Stay up to date with the latest currency rates and convert your money with ease, real time rate </p>
              <Link to="/currency" className="btn btn-success">Explore Currency</Link>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
