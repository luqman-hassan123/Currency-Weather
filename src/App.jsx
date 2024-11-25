import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './router/AppRoutes'; // Import the renamed component
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <AppRoutes /> {/* Render the renamed Routes component */}
        <Footer/>
      </>
    </Router>
  );
}

export default App;
