import React, { useState, useEffect } from "react";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../../components/productCard/productCard";
import { TitlePage } from "../../components/titlePage/titlePage";

// Services
import { TizanasService } from "./services/tizanas.service";

export const TizanasPage = () => {
    const [ tizanas, setTizanas ] = useState([]);
    useEffect( () => {
        setTizanas( TizanasService.getTizanas() )
    }, [] )
    
    return(  
        <Box m={3}>
            <TitlePage namePage={"Tizanas"}/>
            <Grid container spacing={4}>
            {
                tizanas.map( tizana => {
                    return (
                        <Grid item xs={6} md={3} key={tizana.id}>
                            <ProductCard
                                name={tizana.name}
                                price={tizana.price}
                                imageUrl= {tizana.imageURL}
                                productDetail={`../product_tizanas/${tizana.id}`}
                            />
                        </Grid>
                    )
                })
            }
            </Grid>   
        </Box>

    )
}