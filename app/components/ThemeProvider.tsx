"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface ThemeProviderProps {
  children: any;
}

export const ThemeContext = createContext<string>("light");
export const ThemeUpdateContext = createContext<any>(null);

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const localTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme");
    }
  }

  const [theme, setTheme] = useState<string>(localTheme() || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider  value={theme}>
      <ThemeUpdateContext.Provider value={() => setTheme((t) => (t === "dark") ? "light" : "dark")}>
        <div
          className="bg-bkg transition-colors duration-500 ease-out"
          data-theme={theme}
        >
          {children}
        </div>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
