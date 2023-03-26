import React from "react";

//MUI components
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../components/productCard/productCard";

export const Tizanas = ( { productData } ) => {
    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <Typography variant="h5" sx={{
                mb: '20px'
            }}>
                T i z a n a s :
            </Typography>
            <Grid container spacing={4}>
            {
                productData.map( tizana => {
                    return (
                        <Grid item xs={6} md={3}>
                            <ProductCard
                                key={tizana.id}
                                name={tizana.name}
                                price={tizana.price}
                                imageUrl= {tizana.image}
                            />
                        </Grid>
                    )
                })
            }
            </Grid>   
        </Box>

    )
}