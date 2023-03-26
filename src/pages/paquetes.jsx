import React from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

// Components
import { ProductCard } from "../components/productCard/productCard";


export const Paquetes = ( { productData } ) => {
    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <Typography variant="h5" sx={{
                mb: '20px'
            }}>
                P a q u e t e s :
            </Typography>
            <Grid container spacing={4}>
                {
                    productData.map( paq => {
                        return (
                            <Grid item xs={6} md={3}>
                                <ProductCard
                                    key={paq.id}
                                    name={paq.name}
                                    price={paq.price}
                                    imageUrl= {paq.image}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>   
        </Box>

    )
}
