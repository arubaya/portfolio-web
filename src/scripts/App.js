import React from 'react';
import { ThemeProvider } from '@mui/material';

import theme from './utils/theme';
import Router from './route';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
