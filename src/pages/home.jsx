import React from "react";

// Components
import { Banner } from "../components/banner/banner";
import { About } from "../components/about/About";
import { Offset } from "../styles/appBar";

export const Home = () => {
    return (
        <>
            <Banner/>
            <Offset/>
            <About/>
        </>

    )
}