import React from "react";
import { Outlet } from "react-router-dom";

// MUI
import { useMediaQuery } from "@mui/material";

//Components
import { AppBarDesktop } from "../../components/AppBar/AppBarDesktop"
import { AppBarMobile } from "../../components/AppBar/AppBarMobile";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Footer } from "../../components/Footer/Footer";

export const NavigationPage = () => {

    const matches = useMediaQuery( theme => theme.breakpoints.down('md'));

    return (
        <>
            { matches ? 
            <div>
                <AppBarMobile/>
                <BottomNav/>  
            </div>
            : <AppBarDesktop/> }
            <Outlet/>
            <Footer/>
        </>
    )
}