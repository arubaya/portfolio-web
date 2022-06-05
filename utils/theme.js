const theme = (mode) => ({
  palette: {
    mode: mode,
    ...(mode === 'light' ? {
      primary: {
        main: '#006D35',
        contrastText: '#fff',
      },
      secondary: {
        main: '#4F6352',
        contrastText: '#fff',
      },
      error: {
        main: '#BA1B1B',
        contrastText: '#fff',
      },
      info: {
        main: '#3A656F',
        contrastText: '#fff',
      },
      background: {
        default: '#FBFDF7',
        paper: '#FBFDF7',
      },
      divider: '#727971',
      text: {
        primary: '#1A1C1A',
        secondary: '#414941',
      },
    } : {
      primary: {
        main: '#4BE085',
        contrastText: '#003919',
      },
      secondary: {
        main: '#B7CCB8',
        contrastText: '#223526',
      },
      error: {
        main: '#FFB4A9',
        contrastText: '#680003',
      },
      info: {
        main: '#A2CED9',
        contrastText: '#02363F',
      },
      background: {
        default: '#1A1C1A',
        paper: '#414941',
      },
      divider: '#8B938A',
      text: {
        primary: '#E2E3DE',
        secondary: '#C1C9BF',
      },
    }),
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
      }
    }
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
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
      fontWeight: 300,
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
