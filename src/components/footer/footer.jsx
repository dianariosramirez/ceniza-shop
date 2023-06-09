// Dependencies
import React, { useState } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// Form
import { validationSchemaFooter as validationSchema } from '../../resources/helpers/formikHelper';

// MUI components
import { Box, Button, Divider, Link, TextField, Typography, useMediaQuery } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Facebook, Instagram, LocalShipping, Lock, Store, TouchApp, WhatsApp } from '@mui/icons-material';
import { Stack } from '@mui/system';

export const Footer = () => {
  const isDesktop = useMediaQuery('(min-width:400px)');

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ email });
      setEmail('');
      enqueueSnackbar('🌵 ¡Gracias por suscribirte!', {
        anchorOrigin: {horizontal: 'center', vertical: 'bottom'},
        style: {
            backgroundColor: 'white',
            color: 'green',
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        }
      })
    } catch (error) {
      console.log('hubo un error')
    }
  }

  return (
    <Box sx={{ mt: 5, backgroundColor: "#437A28", color: "#A1C88F"}} >
      <SnackbarProvider />
      <Grid container spacing={0} >
        <Grid 
          xs={12} md={4} 
          sx={{
            padding: "2rem",
            paddingBottom: "0px"
          }}
        >
          <Typography variant='h6' align='center'>
            ¡Suscríbete a nuestro newsletter!
          </Typography>
          <Typography variant='body2' align='center'>
            Recibe ofertas, alertas de productos, recetas y más. Puedes
            anular tu suscripción en cualquier momento.
          </Typography>
        </Grid>
        <Grid 
          xs={12} md={6} 
          sx={{
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TextField
            focused
            value={email}
            type="email"
            label="Correo electrónico"
            variant="outlined"
            size="small"
            color="warning"
            onChange={handleChange}
            sx={{width:'80%', marginRight:'3%'}}
            InputProps={{
              sx: {
                color: "#A1C88F"
              }
            }}
          />
          <Button 
            disabled={!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)}
            type="submit" 
            variant="contained" 
            color="warning" 
            size='small' 
            sx={{
              width:'15%', 
              marginBottom:"1rem", 
              ":hover":{
                color:"#A1C88F"
              }
            }}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Grid>
        <Grid xs={12} md={12} 
          sx={{
            padding: "2rem",
            paddingBottom: "0px",
            paddingTop: "0px"
          }}
        >
          <Stack 
            marginBottom="2rem"
            direction="row" 
            alignItems="center"
            justifyContent="space-around"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box sx={{textAlign: "center"}}>
              <Lock fontSize= {isDesktop ? "large" : "small" }/>
              <Typography>Pagos seguros</Typography>
            </Box> 
            <Box sx={{textAlign: "center"}}>
              <TouchApp fontSize={isDesktop ? "large" : "small" } />
              <Typography>Compra fácil</Typography>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <LocalShipping fontSize={isDesktop ? "large" : "small" } />
              <Typography>Envíos a todo México</Typography>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <Store fontSize={isDesktop ? "large" : "small" } />
              <Typography>Tiendas físicas</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} md={6} >
          <Typography fontWeight="bold" textAlign="center">
            Huajuapan de León, Oax., México CP: 69000
          </Typography>
          <Typography textAlign="center">
            ceniza.juanpi@gmail.com
          </Typography>
          <Typography textAlign="center">
            +52 953 123 4258
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ margin: 2}}>
            <Link color="#A1C88F" component="button" href='https://www.facebook.com/ceniza.mx/'>
              <Facebook/>
            </Link>
            <Link color="#A1C88F" component="button" href='https://www.instagram.com/ceniza.mx/'>
              <Instagram/>
            </Link>
            <Link color="#A1C88F" component="button" href='https://api.whatsapp.com/send?phone=9531234258&text=Hola%20Ceniza%20Mx'>
              <WhatsApp/>
            </Link>
          </Stack>
        </Grid>
        <Grid 
          xs={6} 
          md={3} 
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Stack>
            <Typography fontWeight="bold" variant='body2'>Ceniza</Typography>
            <Divider/>
            <Typography variant='body2'>Nosotros</Typography>
            <Typography variant='body2'>Disfruta</Typography>
            <Typography variant='body2'>Nuestras tiendas</Typography>
            <Typography variant='body2'>Contacto</Typography>
            <Typography variant='body2'>Catálogo</Typography>
          </Stack>
        </Grid>
        <Grid 
          xs={6} 
          md={3} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom:"1rem"
          }}
        >
          <Stack>
            <Typography fontWeight="bold" variant='body2'>Atención al cliente</Typography>
            <Divider/>
            <Typography variant='body2'>Términos y condiciones</Typography>
            <Typography variant='body2'>Cambios y devoluciones</Typography>
            <Typography variant='body2'>Políticas de privacidad</Typography>
            <Typography variant='body2'>Legales</Typography>
            <Typography variant='body2'>Preguntas frecuentes</Typography>
          </Stack>
        </Grid>
        <Grid 
          xs={12} 
          md={12} 
          sx={{
            backgroundColor: 'white',
            color: 'gray',
          }}
        >
          <Typography variant='body2' marginTop='0.5rem' textAlign="center">
          Ceniza Mx 2023. Todos los derechos reservados | Web por: Diana Rios 
          </Typography>
        </Grid>
      </Grid>      
    </Box>
  );
};
