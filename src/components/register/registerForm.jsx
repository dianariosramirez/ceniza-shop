import React, {useState} from 'react';

// Form
import { useFormik } from 'formik';
import { initialValuesToRegisterForm as initialValues,
   validationSchemaRegister as validationSchema } 
from '../../resources/helpers/formikHelper';

// MUI components
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Config
import { SERVER_URL } from '../../config';

// Store
import { useUserStore } from '../../store/user';

const errorMessageStyle = {
  fontSize: '0.6rem', 
  color: 'green'
};

export const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState( false );
  const navigate = useNavigate();
  const { userDataLogged } = useUserStore();
  const matches = useMediaQuery('(min-width:400px)');

  // Request 
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
          '& > :not(style)': { mb: matches ? 2 : 1},
        }}
      >    
        <Typography variant="h4">
          Registro
        </Typography>

        <TextField
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="outlined"
          label="Nombre"
          name="name"
          onChange={handleChange}
          { ... getFieldProps('name') }
          helperText={
            errors.name && touched.name ? (
              <div style={errorMessageStyle}>{errors.name}</div>
            ) : null
          }
          type="text"
        />

        <TextField
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="outlined"
          label="Ciudad"
          name="city"
          onChange={handleChange}
          { ... getFieldProps('city') }
          helperText={
            errors.city && touched.city ? (
              <div style={errorMessageStyle}>{errors.city}</div>
            ) : null
          }
        />

        <TextField
          fullWidth
          size={ matches ? 'normal' : 'small'}
          variant="outlined"
          label="Estado"
          name="state"
          onChange={handleChange}
          { ... getFieldProps('state') }
          helperText={
            errors.state && touched.state ? (
              <div style={errorMessageStyle}>{errors.state}</div>
            ) : null
          }
        />

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
          to="../signin"
          className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : "none"
          }
        >
          <Typography textAlign="end" color="primary">
            Ya tengo una cuenta
          </Typography>          
        </NavLink>  
      </Box>
    </Container>

  )
}