import React, { useState, createContext } from 'react';
import { ThemeProvider as ThemeProviderMUI, createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from 'themes/lightTheme';
import { darkTheme } from 'themes/darkTheme';

const ThemeContext = createContext(null);
export const ThemeContextConsumer = ThemeContext.Consumer;

export const ThemeProvider = ({ children }) => {
  const isDarkThemeFromLocalStorage = localStorage.getItem('isDarkTheme') === 'true';
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeFromLocalStorage);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const getTheme = () => createMuiTheme(isDarkTheme ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProviderMUI theme={getTheme()}>
        {children}
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  );
};
