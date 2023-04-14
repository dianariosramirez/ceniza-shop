import React, { useEffect, useState } from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../../components/productCard/productCard";
import { TitlePage } from "../../components/titlePage/titlePage";

// Services
import { AccesoriosService } from "./services/accesorios.service";



export const AccesoriosPage = () => {

    const [ accesorios, setAccesorios ] = useState([]);
    useEffect( () => {
        setAccesorios( AccesoriosService.getAccesorios() )
    }, [] )

    return(  
        <Box m={3}>
            <TitlePage namePage={"Accesorios"}/>
            <Grid container spacing={4}>
                {
                    accesorios.map( accesorio => {
                        return (
                            <Grid item xs={6} md={3} key={accesorio.id}>
                                <ProductCard
                                    name={accesorio.name}
                                    price={accesorio.price}
                                    imageUrl= {accesorio.imageURL}
                                    productDetail={`../product_accesorios/${accesorio.id}`}
                                />                                
                            </Grid>
                        )
                    })
                }
            </Grid>   
        </Box>

    )
}
