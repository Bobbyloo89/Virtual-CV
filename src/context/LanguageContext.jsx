

import { createContext, useState, useContext } from "react";

const LanguageContext = createContext(); // New context for language state

// LanguageProvider component, provides language state and setLanguage function to child components
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // State variable "language", default value en/English

  return (
    // Use LanguageContext.Provider to pass down "language" and "setLanguage" to child components
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook, allows components to consume the language context
export function useLanguage() {
  return useContext(LanguageContext);
}