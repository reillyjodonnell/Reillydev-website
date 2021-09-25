import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkTheme() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    let mount = true;
    if (mount) {
      if (darkMode) {
        enableDarkMode();
      }
      if (!darkMode) {
        document.body.style.backgroundColor = "#6184D8";
      }
    }
  });

  var matching = "#3f3d56";
  function enableDarkMode() {
    document.body.style.backgroundColor = matching;
  }

  const values = { toggleDarkTheme, darkMode };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
