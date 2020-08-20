import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ThemeContextConsumer } from 'themes/themeProvider';

export const ChangeThemeButton = () => (
  <ThemeContextConsumer>
    {({ isDarkTheme, toggleTheme }) => (
      <IconButton
        color="inherit"
        onClick={() => {
          toggleTheme();
          localStorage.setItem('isDarkTheme', !isDarkTheme);
        }}
      >
        {isDarkTheme ? <Brightness5Icon /> : <Brightness4Icon />}
      </IconButton>
    )}
  </ThemeContextConsumer>
);
