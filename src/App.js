import React from 'react';
import { ThemeProvider } from 'themes/themeProvider';
import { Router } from 'routes/router';

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default App;
