import React from "react";
import { Outlet } from "react-router-dom";

// MUI
import { useMediaQuery } from "@mui/material";

//Components
import { AppBarDesktop } from "../components/appBar/appBarDesktop"
import { AppBarMobile } from "../components/appBar/appBarMobile";
import { BottomNav } from "../components/bottomNav/bottomNav";
import { Footer } from "../components/footer/footer";

export const ApplicationBar = () => {

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