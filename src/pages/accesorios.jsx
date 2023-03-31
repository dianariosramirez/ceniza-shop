import React from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../components/productCard/productCard";
import { TitlePage } from "../components/titlePage/titlePage";


export const Accesorios = ( { productData } ) => {
    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <TitlePage namePage={"Accesorios"}/>
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
