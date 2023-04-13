import React from "react";
import { Link } from "react-router-dom";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../components/productCard/productCard";
import { TitlePage } from "../components/titlePage/titlePage";


export const Tizanas = ( { productData } ) => {
    return(  
        <Box m={3}>
            <TitlePage namePage={"Tizanas"}/>
            <Grid container spacing={4}>
            {
                productData.map( tizana => {
                    return (
                        <Grid item xs={6} md={3}>
                            <Link to={`../product_tizanas/${tizana.id}`}>
                                <ProductCard
                                    key={tizana.id}
                                    name={tizana.name}
                                    price={tizana.price}
                                    imageUrl= {tizana.image}
                                />
                            </Link>
                        </Grid>
                    )
                })
            }
            </Grid>   
        </Box>

    )
}