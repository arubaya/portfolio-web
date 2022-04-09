import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24B78B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0068FF',
      contrastText: '#fff',
    },
    text: {
      primary: '#212b36',
      secondary: '#637381',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 15,
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'capitalize',
    },
    overline: {
      fontWeight: 600,
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
    },
  },
});

export default theme;
