import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

// Components
import router from './App'

// Styles
import './index.css'
import { theme } from './styles/theme/index';
import { ThemeProvider, responsiveFontSizes } from '@mui/material';

const themeResponsive = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={themeResponsive}>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
