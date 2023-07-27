import { createContext, useState } from "react";
const themes = {
  dark: {
    backgroundColor: "#344767",
    color: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    color: "#344767",
  },
};
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
