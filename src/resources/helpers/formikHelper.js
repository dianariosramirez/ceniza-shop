import * as Yup from 'yup';

export const initialValuesToSignInForm = {
    email:'',
    password: ''
}
export const initialValuesToRegisterForm = {
    name: '',
    email:'',
    password: '',
    city: '',
    state:''
}

export const validationSchemaSignIn = Yup.object( {
    email: Yup.string()
        .email( 'Formato inválido' )
        .required( 'Campo obligatorio' ),
    password: Yup.string()
        .required( 'Campo obligatorio' )
}   )

export const validationSchemaRegister = Yup.object( {
    name: Yup.string()
        .required( 'Campo obligatorio' )
        .min(3, 'Nombre demasiado corto'),
    email: Yup.string()
        .email( 'Formato inválido' )
        .required( 'Campo obligatorio' ),
    password: Yup.string()
        .min( 5, 'Demasiado fácil!' )
        .max( 15, 'Contraseña muy larga' )
        .required( 'Campo obligatorio' ),
    city: Yup.string()
        .required( 'Campo obligatorio' ),
    state: Yup.string()
        .required( 'Campo obligatorio' )
})