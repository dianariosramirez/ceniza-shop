import React from 'react'

// Form
import { useFormik } from 'formik';
import { initialValuesToSignInForm as initialValues, validationSchemaSignIn as validationSchema } from '../../resources/helpers/formikHelper';

//Config
import { SERVER_URL } from "../../config";

// MUI components
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

//Store
import { useUserStore } from '../../store/user';

export const SignInForm = () => {

  const { userDataLogged } = useUserStore();

  const navigate = useNavigate();

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
          '& > :not(style)': { mb: 5},
        }}
      >    
        <Typography variant="h4">
          Ingresar
        </Typography>

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
          { ...getFieldProps( 'password' ) }
          helperText={
            errors.password && touched.password ? `${ errors.password }` : null
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
        <NavLink to="../register">
          <Typography textAlign="end" color="primary">
            Crear cuenta
          </Typography>          
        </NavLink>  
  
      </Box>
    </Container>
    
  )
}
