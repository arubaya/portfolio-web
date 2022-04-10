import React from 'react';
import * as Material from '@mui/material';
import * as recoil from 'recoil';

import theme from './utils/theme';
import Router from './route';
import * as store from './recoil/store';

function App() {
  const colorMode = recoil.useRecoilValue(store.colorModeState)

  return (
    <Material.ThemeProvider theme={Material.createTheme(theme(colorMode))}>
      <Material.Box 
        sx={{
          width: '100%',
          height: 'fit-content',
          backgroundColor: 'background.default',
          color: 'text.primary',
          position: 'absolute'
        }}
      >
        <Router />
      </Material.Box>
    </Material.ThemeProvider>
  );
}

export default App;
