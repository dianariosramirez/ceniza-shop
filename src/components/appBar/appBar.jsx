import React from "react";

// MUI
import { useMediaQuery, useTheme } from "@mui/material";

//Components
import { AppBarDesktop } from "./appBarDesktop";
import { AppMobileBar } from "./appBarMobile";
import { BottomNav } from "../bottomNav/bottomNav";

export const ApplicationBar = () => {

    const theme = useTheme();
    const matches = useMediaQuery( theme.breakpoints.down('md'));

    return (
        <>
            { matches ? 
            <div>
                <AppMobileBar/>
                <BottomNav/>  
            </div>
            : <AppBarDesktop/> }
        </>
    )
}
