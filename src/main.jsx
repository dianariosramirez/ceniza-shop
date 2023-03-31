import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

// Components
import router from './App'

// Context
import { MatchesProvider } from './context/matchesContext';

// Styles
import './index.css'
import { theme } from './styles/theme/index';
import { ThemeProvider } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MatchesProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MatchesProvider>
  </React.StrictMode>
);
