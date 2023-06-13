// Config
import { SERVER_URL } from "../../../config";

export class SigninService {

    static getUserLogged = async (email, password) => {
        const response = await fetch( `${SERVER_URL}/signin`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify( {
                email: email,
                password: password
            })
        });
        const responseJSON = await response.json();

        if(responseJSON.error){
            throw new Error('Usuario no encontrado o contraseña incorrecta');
        } else {
            return responseJSON;
        }
        
    }
}
