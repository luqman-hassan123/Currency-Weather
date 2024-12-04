import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoutes from "./router/AppRoutes"; // Import the renamed component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header
          title="Currency Converter and Weather Application"
          subtitle="Track your finances and weather with ease"
        />
        <div className="App-content">
          <AppRoutes /> {/* Render the renamed Routes component */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
