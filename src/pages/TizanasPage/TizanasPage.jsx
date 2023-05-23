import React, { useState, useEffect } from "react";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { TitlePage } from "../../components/titlePage/titlePage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { TizanasService } from "./services/tizanas.service";


export const TizanasPage = () => {
    const [ tizanas, setTizanas ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        TizanasService.getTizanas().then( tizanas => {
            setTizanas( tizanas );
            setLoading( false );
        });
    }, [] )
    
    return(  
        <Box m={3}>
            <TitlePage namePage={"Tizanas"}/>
            <Grid container spacing={4}>
            {
                loading === true 
                ? (
                    [ 1, 2, 3, 4].map( position => {
                        return (
                            <Grid item xs={6} md={3} key={position}>
                                <CardSkeleton/>
                            </Grid>
                        )
                    })
                )
                : (
                    tizanas.map( tizana => {
                    return (
                        <Grid item xs={6} md={3} key={tizana.id}>
                            <ProductCard
                                id={tizana.id}
                                name={tizana.name}
                                price={tizana.price}
                                imageURL= {tizana.imageURL}
                                productDetail={`../product_tizanas/${tizana.id}`}
                            />  
                        </Grid>
                    )
                    })
                )
                
            }
            </Grid>   
        </Box>
    )
}