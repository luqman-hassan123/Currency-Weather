import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './router/AppRoutes'; // Import the renamed component
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header classNmae="ccccccc"/>
        <Navbar/>
        <AppRoutes /> {/* Render the renamed Routes component */}
      </div>
    </Router>
  );
}

export default App;
