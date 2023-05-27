import React from 'react';

// MUI components
import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Facebook, Instagram, LocalShipping, Lock, Store, TouchApp, WhatsApp } from '@mui/icons-material';
import { Stack } from '@mui/system';

export const Footer = () => {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#437A28", color: "#A1C88F"}} >
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
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyItems: "center"
          }}
        >
          <TextField
              type="email"
              label="Correo electrónico"
              variant="filled"
              size="small"
              sx={{width:'80%', marginRight:'3%'}}
          />
          <Button type="submit" variant="contained" color="primary" size='small' sx={{width:'15%', marginBottom:"1rem", height:"95%"}}>
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
              <Lock fontSize="large" />
              <Typography>Pagos seguros</Typography>
            </Box> 
            <Box sx={{textAlign: "center"}}>
              <TouchApp fontSize="large" />
              <Typography>Compra fácil</Typography>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <LocalShipping fontSize="large" />
              <Typography>Envíos a todo México</Typography>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <Store fontSize="large" />
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
