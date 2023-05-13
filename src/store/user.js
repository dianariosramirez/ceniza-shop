import { create } from 'zustand';

export const useUserStore = create( set => ({
    name: "",
    email: "",
    city: "",
    state: "",
    userDataLogged: ( user ) => set( () => ({
        name: user.name,
        email: user.email,
        city: user.city,
        state: user.state
    }))
}))