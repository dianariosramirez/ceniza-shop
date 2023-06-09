import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#white',
      main: '#437A28',
      dark: '#314A24',
      contrastText: 'white',
    },
    secondary: {
      light: '#e9d6af',
      main: 'white',
      dark: '#899aa1',
      contrastText: '#5f545c',
    },
    error: {
      light: '#5F9545',
      main: '#437A28',
      dark: '#314A24',
      contrastText: '#ffffdd',
    },
    warning: {
      light: '#e4e391',
      main: '#A1C88F',
      dark: '#314A24',
      contrastText: '#314A24',
    },
    success: {
      main: '#9b9b9b',
      contrastText: '#5f545c',
    },
    info:{
      light: '#A1C88F',
      main: '#437A28',
      dark: '#314A24',
    }
  },
  typography: {
    h5: {
      textAlign: 'center',
      fontSize:"1.5rem",
      '@media (max-width:400px)': {
        textAlign: 'justify',
        fontSize:'0.6rem'
      }
    },
    body2: {
        fontSize:'0.7rem',
      '@media (max-width:400px)': {
        fontSize:'0.4rem'
      }
    },
    body1: {
      '@media (max-width:400px)': {
        fontSize:'0.7rem'
      }
    },
    h3: {
      '@media (max-width:400px)': {
        fontSize:'1.5rem'
      }
    },
    h4: {
      '@media (max-width:400px)': {
        fontSize:'1.5rem'
      }
    },
    button: {
      '@media (max-width:400px)': {
        fontSize:'0.6rem'
      }
    },
    subtitle1: {
      textAlign: 'left',
      fontSize:"1.5rem",
      '@media (max-width:400px)': {
        fontSize:'0.8rem',
      }
    },
    subtitle2: {
      textAlign: 'left',
      fontSize:"1.2rem",
      fontFamily: "Roboto",
      '@media (max-width:400px)': {
        fontSize:'0.6rem'
      }
    }
  }
});


