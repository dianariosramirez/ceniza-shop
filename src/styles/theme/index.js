import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#D0ABD0',
      dark: '#613A61',
      contrastText: '#000',
    },
    secondary: {
      light: '#FEF1FE',
      main: '#FFFFFF',
      dark: '#D0ABD0',
      contrastText: '#000',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
      contrastText: '#000',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
      contrastText: '#000',
    },
    success: {
      main: '#604260',
      contrastText: '#000',
    },
  },
});
