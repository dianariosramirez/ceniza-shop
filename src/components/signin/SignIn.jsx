import React from 'react'

// Form
import { useFormik } from 'formik';
import { initialValues, onSubmit, validationSchemaProv as validationSchema } from '../../resources/helpers/formikHelper';

// MUI components
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export const SignIn = () => {

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
          { ... getFieldProps('password') }
          helperText={
            errors.password && touched.password ? `${errors.password}` : null
          }
          type="password"
        />
        <>
          <Button 
            fullWidth
            variant="contained" 
            type="submit" 
            disabled={!(isValid && dirty)}
          >
            Continuar
          </Button>       
          <Typography textAlign="end" color="primary">
            Crear cuenta
          </Typography>
        </>       

      </Box>
    </Container>
    
  )
}
