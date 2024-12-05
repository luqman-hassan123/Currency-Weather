import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHeader } from "../context/HeaderContext"; // Import the custom hook

const Header = () => {
  const location = useLocation(); // Get the current route location
  const { header, setHeader } = useHeader(); // Access header state from context

  useEffect(() => {
    // Update the header based on the current path
    if (location.pathname === "/currency") {
      setHeader({
        title: "Currency Converter",
        subtitle: "Convert currencies and track exchange rates"
      });
    } else if (location.pathname === "/weather") {
      setHeader({
        title: "Weather Tracker",
        subtitle: "Get real-time weather updates"
      });
    } else {
      setHeader({
        title: "Currency Converter and Weather Application",
        subtitle: "Track your finances and weather with ease"
      });
    }
  }, [location.pathname, setHeader]); // Re-run whenever the location changes

  return (
    <header className="text-center bg-light py-3">
      <h1 className="m-0 fs-3">{header.title}</h1>
      <p className="m-0">{header.subtitle}</p>
    </header>
  );
};

export default Header;
