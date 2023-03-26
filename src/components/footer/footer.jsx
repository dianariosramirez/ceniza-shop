import React from 'react';

// MUI components
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Facebook } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={0}>
        <Grid 
          item 
          xs={4} 
          md={6} 
          sx={{
            backgroundColor: '#D0ABD0'
          }}
        >
          <Typography 
            variant='h4' 
            sx={{
              mt:'10px',
              padding: '10px'
            }}
          >
            ¡Síguenos!
          </Typography>
          <IconButton>
            <Facebook/>
          </IconButton>
        </Grid>
        <Grid item xs={8} md={6} sx={{
          backgroundColor: 'white'
        }}>
          <h1>hi</h1>
        </Grid>
      </Grid>
    </Box>
  );
};
