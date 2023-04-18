import React from "react";

// Components
import { Banner } from "../../components/Banner/Banner";
import { About } from "../../components/About/About";
import { Offset } from "../../styles/appBar";

export const HomePage = () => {
    return (
        <>
            <Banner/>
            <Offset/>
            <About/>
        </>

    )
}