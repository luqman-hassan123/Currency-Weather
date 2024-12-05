import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '5e8d32f2e85fe4350115b1352459a464'; // OpenWeatherMap API key
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a valid city name.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // Fetch temperature in Celsius
        },
      });
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather Information</h1>
      
      {/* Input Section */}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="form-control w-50"
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary ml-2"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Loading State */}
      {loading && <div className="text-center text-primary">Loading...</div>}

      {/* Weather Information */}
      {weather && !loading && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title text-center">{`Weather in ${weather.name}`}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Temperature:</strong> {weather.main.temp}°C
              </li>
              <li className="list-group-item">
                <strong>Condition:</strong> {weather.weather[0].description}
              </li>
              <li className="list-group-item">
                <strong>Humidity:</strong> {weather.main.humidity}%
              </li>
              <li className="list-group-item">
                <strong>Wind Speed:</strong> {weather.wind.speed} m/s
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
