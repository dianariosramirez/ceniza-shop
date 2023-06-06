import React, { useState, useEffect } from "react";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { TizanasService } from "./services/tizanas.service";


export const TizanasPage = () => {
    const [ tizanas, setTizanas ] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
        TizanasService.getTizanas().then( tizanas => {
            setTizanas( tizanas );
            
            const loadImage = async (tizana) => {
                const image = new Image();
                image.src = tizana.imageURL;
        
                await new Promise((res, rej) => {
                  image.onload = res;
                });
            };

            Promise.all( tizanas.map( tizana => loadImage(tizana)) )
                .then( () => {
                    setLoading(false)
                })
        });
    }, [] )
    
    return(  
        <Box m={3}>
            <HeaderPage namePage={"Tizanas"} />
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