import React, { useState, useEffect } from "react";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { TisanasService } from "./services/tisanas.service";


export const TisanasPage = () => {
    const [ tisanas, setTisanas ] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
        TisanasService.getTisanas().then( tisanas => {
            setTisanas( tisanas );
            
            const loadImage = async (tisana) => {
                const image = new Image();
                image.src = tisana.imageURL;
        
                await new Promise((res, rej) => {
                  image.onload = res;
                });
            };

            Promise.all( tisanas.map( tisana => loadImage(tisana)) )
                .then( () => {
                    setLoading(false)
                })
        });
    }, [] )
    
    return(  
        <Box m={3}>
            <HeaderPage namePage={"Tisanas"} />
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
                    tisanas.map( tisana => {
                    return (
                        <Grid item xs={6} md={3} key={tisana.id}>
                            <ProductCard
                                id={tisana.id}
                                name={tisana.name}
                                price={tisana.price}
                                imageURL= {tisana.imageURL}
                                productDetail={`../product_tisanas/${tisana.id}`}
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