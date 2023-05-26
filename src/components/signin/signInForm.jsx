import React, { useState } from 'react'

// Form
import { useFormik } from 'formik';
import { initialValuesToSignInForm as initialValues, validationSchemaSignIn as validationSchema } from '../../resources/helpers/formikHelper';

//Config
import { SERVER_URL } from "../../config";

// MUI components
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

//Store
import { useUserStore } from '../../store/user';

const errorMessageStyle = {
  fontSize: '0.6rem', 
  color: 'green'
};

export const SignInForm = () => {

  const [showPassword, setShowPassword] = useState( false );
  const navigate = useNavigate();
  const { userDataLogged } = useUserStore();
  const matches = useMediaQuery('(min-width:400px)');

  // Request
  const onSubmit = ( values ) => {
    fetch( `${SERVER_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify( {
        email: values.email,
        password: values.password
      })
    })
    .then( response => response.json() )
    .then( user => {
      if ( user.id ) {
        localStorage.setItem('isLogged', 'true');
        console.log( values );
        userDataLogged( user );
        navigate("../profile");
      }
    })
    .catch( () => {
      console.log( 'El usuario no existe' )
    });  
  }

  // Form
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  const { handleChange, handleSubmit, errors, touched, getFieldProps, dirty, isValid } = formik;

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container 
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box 
        component="form" 
        width={ matches ? "50%" : "80%"}
        mt={matches ? 2 : 1}
        onSubmit={handleSubmit}
        sx={{
          padding: "1.5rem",
          '& > :not(style)': { mb: matches ? 2 : 1 },
        }}
      >    
        <Typography variant="h4">
          Ingresar
        </Typography>

        <TextField
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="outlined"
          label="Correo electrónico"
          name="email"
          onChange={handleChange}
          { ... getFieldProps('email') }
          helperText={
            errors.email && touched.email ? (
              <div style={errorMessageStyle}>{errors.email}</div>
            ) : null
          }
          type="email"
        />

        <TextField 
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="outlined" 
          label="Contraseña"
          name="password" 
          onChange={handleChange}
          { ... getFieldProps('password') }
          helperText={
            errors.password && touched.password ? (
              <div style={errorMessageStyle}>{errors.password}</div>
            ) : null
          }
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small"/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button 
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="contained" 
          type="submit" 
          disabled={!(isValid && dirty)}
        >
          Continuar
        </Button>  

        <NavLink 
          to="../register"
          className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : "none"
          }
        >
          <Typography textAlign="end" color="primary">
            Crear cuenta
          </Typography>          
        </NavLink>  
  
      </Box>
    </Container>
    
  )
}
