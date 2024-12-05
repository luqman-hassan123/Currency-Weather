import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HeaderProvider } from "./context/HeaderContext";  // Correct relative path


function App() {
  return (
    <HeaderProvider> {/* Wrap the entire app in HeaderProvider */}
      <Router>
        <div className="App">
          <Navbar />
          <Header /> {/* Render Header without props */}
          <div className="App-content">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </HeaderProvider>
  );
}

export default App;
