import React from 'react';

// Form
import { useFormik } from 'formik';
import { initialValues, validationSchemaRegister as validationSchema } from '../../resources/helpers/formikHelper';

// MUI components
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {

  const onSubmit = ( values, {resetForm} ) => {
    localStorage.setItem('isLogged', 'true');
    console.log( values );
    resetForm( { values: '' } );
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
        <NavLink to="../signin">
          <Typography textAlign="end" color="primary" >
            Ya tengo una cuenta
          </Typography>          
        </NavLink>  
      </Box>
    </Container>

  )
}