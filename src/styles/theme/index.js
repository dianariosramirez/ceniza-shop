import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffdd',
      main: '#eb7072',
      dark: '#384252',
      contrastText: 'white',
    },
    secondary: {
      light: '#e9d6af',
      main: 'white',
      dark: '#899aa1',
      contrastText: '#5f545c',
    },
    error: {
      light: '#ef5350',
      main: '#e25858',
      dark: '#8f244d',
      contrastText: '#ffffdd',
    },
    warning: {
      light: '#e4e391',
      main: '#f1ae2b',
      dark: '#2d1b33',
      contrastText: '#f4ddb4',
    },
    success: {
      main: '#a2caa5',
      contrastText: '#5f545c',
    },
  },
  typography: {
    h3: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      }
    }
  }
});
