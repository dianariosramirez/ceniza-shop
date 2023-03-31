import React, { createContext } from "react";

// MUI
import { useMediaQuery, useTheme } from "@mui/material";

export const MatchesContext = createContext();

export const MatchesProvider = ({children}) => {
    const theme = useTheme();
    const matches = useMediaQuery( theme.breakpoints.down('md'));
    return (
        <MatchesContext.Provider value={{matches}}>
            { children }
        </MatchesContext.Provider>
    )
}
