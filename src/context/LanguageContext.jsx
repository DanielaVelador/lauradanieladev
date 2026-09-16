import React, { createContext, useState, useContext } from "react";

// 1. Creamos el contexto
const LanguageContext = createContext();

// 2. Creamos el proveedor que envolverá nuestra app
export const LanguageProvider = ({ children }) => {
  // Por defecto iniciamos en Inglés
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "EN" ? "ES" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Un hook personalizado para usarlo fácilmente en cualquier componente
export const useLanguage = () => useContext(LanguageContext);