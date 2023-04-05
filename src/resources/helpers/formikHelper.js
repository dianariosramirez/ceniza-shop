import * as Yup from 'yup';

export const initialValues = {
    email:'',
    password: ''
}


export const onSubmit = ( values, {resetForm} ) => {
    alert( 'Usuario aceptado' );
    console.log( values );
    resetForm( { values: '' } );
  }

export const validationSchemaProv = Yup.object( {
    email: Yup.string()
        .email( 'Formato inválido' )
        .required( 'Campo obligatorio' ),
    password: Yup.string()
        .min( 5 , 'Demasiado fácil!' )
        .max( 15, 'Contraseña muy larga' )
        .required( 'Campo obligatorio' )
} )