import React from 'react';

// MUI components
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Facebook, Instagram } from '@mui/icons-material';
import { Stack } from '@mui/system';

export const Footer = () => {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#801515", color: "#D46A6A"}} >
      <Grid container spacing={0} >
        <Grid 
          xs={12} 
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
        </Grid>
        <Grid 
          xs={6} 
          md={6} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center' 
          }}
        >
          <Stack sx={{ margin: 2}}>
            <Typography>
              Contáctanos:
            </Typography>
            <Divider/>
            <Typography>
              +00 000 000 0000
            </Typography>
          </Stack>
        </Grid>

        <Grid 
          xs={6} 
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
