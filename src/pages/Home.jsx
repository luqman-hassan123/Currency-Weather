
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { WiDayCloudyWindy } from "react-icons/wi";




const Home = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleCurrencyClick = () => {
    navigate("/currency"); // Navigate to the currency page
  };

  const handleWeatherClick = () =>{
    navigate("/weather");
  }

  return (
    <div className="container my-4">
      <h3 className="mb-4">Home Page</h3>
      <div className="row justify-content-center">
        {/* Currency Card */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <Card
            title="Currency Exchange"
            className="feature-card shadow-lg p-4 rounded pt-0"
            icon={<i className="fas fa-dollar-sign fs-1 mb-3 text-success" />}
            description="Stay up to date with the latest currency rates and convert your money with ease, real-time rates."
            buttonTitle="Explore Currency"
            onButtonClick={handleCurrencyClick} 
          />
        </div>

        {/* Weather cards */}
        <div className="col-12 col-md-6 col-lg-4 mb-4 ">
          <Card
            title="Weather Forecasting"
            className="feature-card shadow-lg p-4 rounded pt-0"
            // icon={<i className="fas fas fa-cloud-sun fs-1 mb-3 text-success" />}
            icon={<WiDayCloudyWindy />}

            description="Get accurate weather data for your location. forecasts, temperature, and real-time updates."
            buttonTitle="Explore weather"
            onButtonClick={handleWeatherClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
