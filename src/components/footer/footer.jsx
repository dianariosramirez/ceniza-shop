import React from 'react';

// MUI components
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Stack } from '@mui/system';

// Logo
import logo from '../../resources/images/logo2.png';


export const Footer = () => {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#eb7072"}} >
      <Grid container spacing={0} >
        <Grid 
          item xs={12} 
          md={12} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 2
          }}
        >
          <Typography sx={{fontStyle: 'italic'}}>
            "Todo en la vida es mejor con tizanas"
          </Typography>
          <Divider/>
        </Grid>
        

        <Grid 
          item 
          xs={6} 
          md={6} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center' 
          }}
        >
          <img src={ logo } width='100px'/>
          <Stack sx={{ margin: 2}}>
            <Typography>
              Contáctanos:
            </Typography>
            <Typography>
              +00 000 000 0000
            </Typography>
          </Stack>
        </Grid>

        <Grid 
          item xs={6} 
          md={6} 
          sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <Typography variant='h5'>
            ¡Síguenos!
          </Typography>
          <IconButton>
            <Facebook/>
          </IconButton>
          <IconButton>
            <Instagram/>
          </IconButton>
        </Grid>

        <Grid 
          item 
          xs={12} 
          md={12} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            color: 'gray'
          }}
        >
          <Typography>
            Ceniza.mx | Web por: Diana Rios 
          </Typography>
        </Grid>

      </Grid>      
    </Box>
  );
};
