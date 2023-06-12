import React, { useMemo } from 'react';
import { Navigate } from 'react-router-dom';

export const SecureRoute = ( { children } ) => {
    const isLogged = useMemo( () => {
        return localStorage.getItem('isLogged') === 'true' ? true : false;
    }, []);

    return isLogged ? children : <Navigate to='/signin'/>;
}



