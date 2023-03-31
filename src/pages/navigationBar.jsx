import React, {useContext} from "react";
import { Outlet } from "react-router-dom";

//Components
import { AppBarDesktop } from "../components/appBar/appBarDesktop"
import { AppBarMobile } from "../components/appBar/appBarMobile";
import { BottomNav } from "../components/bottomNav/bottomNav";
import { Footer } from "../components/footer/footer";

// Context
import { MatchesContext } from "../context/matchesContext";

export const ApplicationBar = () => {
    const { matches } = useContext( MatchesContext);
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