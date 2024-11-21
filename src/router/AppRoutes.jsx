import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Correct relative path
import Currency from '../pages/Currency';
import Weather from '../pages/Weather';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/currency" element={<Currency />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default AppRoutes;
