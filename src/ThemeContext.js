
// import { createContext } from "react";

// const useThemeContext = createContext();

// export const ThemeProvider = ({ children }) => children;



// export const useTheme = () => ({ theme: "light" });
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// export const useTheme = () => useContext(ThemeContext);
export function useTheme() {
    return useContext(ThemeContext);
  }