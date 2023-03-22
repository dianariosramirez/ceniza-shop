import React from 'react';

// Styles
import { theme } from './styles/theme/index';

// Components
import { ApplicationBar } from './components/appBar/appBar';
import { Banner } from './components/banner/banner';

// Material UI components
import { ThemeProvider } from '@mui/material';
import { 
  Container 
} from '@mui/material';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl">
      <ApplicationBar/>
      <Banner/>
    </Container>
    </ThemeProvider>
    
  )
}

export default App
