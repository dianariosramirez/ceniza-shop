import React from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

// Components
import { ProductCard } from "../components/productCard/productCard";


export const Accesorios = ( { productData } ) => {
    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <Typography variant="h5" sx={{
                mb: '20px'
            }}>
                A c c e s o r i o s :
            </Typography>
            <Grid container spacing={4}>
                {
                    productData.map( accesorio => {
                        return (
                            <Grid item xs={6} md={3}>
                                <ProductCard
                                    key={accesorio.id}
                                    name={accesorio.name}
                                    price={accesorio.price}
                                    imageUrl= {accesorio.image}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>   
        </Box>

    )
}
