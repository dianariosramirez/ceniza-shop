import * as Yup from 'yup';

export const initialValues = {
    email:'',
    password: ''
}

export const validationSchemaSignIn = Yup.object( {
    email: Yup.string()
        .email( 'Formato inválido' )
        .required( 'Campo obligatorio' ),
    password: Yup.string()
        .required( 'Campo obligatorio' )
}   )

export const validationSchemaRegister = Yup.object( {
    name: Yup.string().
        required( 'Campo obligatorio' )
        .min(3, 'Nombre demasiado corto'),
    email: Yup.string()
        .email( 'Formato inválido' )
        .required( 'Campo obligatorio' ),
    password: Yup.string()
        .min( 5, 'Demasiado fácil!' )
        .max( 15, 'Contraseña muy larga' )
        .required( 'Campo obligatorio' )
}   )