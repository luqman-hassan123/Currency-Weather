import React, { createContext, useState, useContext } from "react";

// Create Context
const HeaderContext = createContext();

// Custom hook to access the context
export const useHeader = () => useContext(HeaderContext);

// HeaderProvider component that will wrap your application
export const HeaderProvider = ({ children }) => {
  const [header, setHeader] = useState({
    title: "Currency Converter and Weather Application",
    subtitle: "Track your finances and weather with ease"
  });

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
