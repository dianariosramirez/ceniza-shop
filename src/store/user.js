import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create( 
    persist(
        (set) => ({
            name: "",
            email: "",
            city: "",
            state: "",
            userDataLogged: ( user ) => set( () => ({
                name: user.name,
                email: user.email,
                city: user.city,
                state: user.state
            })),
            userUnlogged: ( user ) => set( () => ({
                name: "",
                email: "",
                city: "",
                state: ""
            })),
        }),
        {
            name: 'userLogged', 
            getStorage: () => localStorage,
        }
    )
)