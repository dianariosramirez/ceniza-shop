import React from 'react';

// Form
import { useFormik } from 'formik';
import { initialValuesToRegisterForm as initialValues,
   validationSchemaRegister as validationSchema } 
from '../../resources/helpers/formikHelper';

// MUI components
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

// Config
import { SERVER_URL } from '../../config';
// Store
import { useUserStore } from '../../store/user';

export const RegisterForm = () => {

  const navigate = useNavigate();
  const { userDataLogged } = useUserStore();

  const onSubmit = ( values ) => {
    fetch( `${SERVER_URL}/register`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify( {
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.city,
        state: values.state
      })
    })
    .then( response => response.json() )
    .then( user => {
      if ( user ) {
        localStorage.setItem('isLogged', 'true');
        console.log( user );
        userDataLogged( user );
        navigate("../profile");

      }
    })
    .catch( () => {
      console.log( 'error' );
    });
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  const { handleChange, handleSubmit, errors, touched, getFieldProps, dirty, isValid } = formik;

  return (
    <Container 
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box 
        component="form" 
        width="50%"
        mt={5}
        onSubmit={handleSubmit}
        sx={{
          padding: "30px",
          '& > :not(style)': { mb: 2},
        }}
      >    
        <Typography variant="h4">
          Registro
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          label="Nombre"
          name="name"
          onChange={handleChange}
          { ... getFieldProps('name') }
          helperText={
            errors.name && touched.name ? `${errors.name}` : null
          }
          type="text"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Ciudad"
          name="city"
          onChange={handleChange}
          { ... getFieldProps('city') }
          helperText={
            errors.city && touched.city ? `${errors.city}` : null
          }
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Estado"
          name="state"
          onChange={handleChange}
          { ... getFieldProps('state') }
          helperText={
            errors.state && touched.state ? `${errors.state}` : null
          }
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Correo electrónico"
          name="email"
          onChange={handleChange}
          { ... getFieldProps('email') }
          helperText={
            errors.email && touched.email ? `${errors.email}` : null
          }
          type="email"
        />

        <TextField 
          fullWidth
          variant="outlined" 
          label="Contraseña"
          name="password" 
          onChange={handleChange}
          { ... getFieldProps('password') }
          helperText={
            errors.password && touched.password ? `${errors.password}` : null
          }
          type="password"
        />
        <Button 
          fullWidth
          variant="contained" 
          type="submit" 
          disabled={!(isValid && dirty)}
        >
          Continuar
        </Button>     
        <NavLink 
          to="../signin"
          className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : "none"
          }
        >
          <Typography textAlign="end" color="primary" sx={{textDecoration: "none"}}>
            Ya tengo una cuenta
          </Typography>          
        </NavLink>  
      </Box>
    </Container>

  )
}