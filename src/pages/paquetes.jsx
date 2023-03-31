import React from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../components/productCard/productCard";
import { TitlePage } from "../components/titlePage/titlePage";


export const Paquetes = ( { productData } ) => {
    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <TitlePage namePage={"Paquetes"}/>
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
