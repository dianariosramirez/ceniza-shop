import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FFAAAA',
      main: '#801515',
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
      light: '#AA3939',
      main: '#801515',
      dark: '#AA3939',
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
    h6: {
      fontSize: '1.1rem',
      textAlign: 'center',
      '@media (min-width:900px)': {
        fontSize: '1.4rem',
        textAlign: 'justify'
      }
    }
  }
});
