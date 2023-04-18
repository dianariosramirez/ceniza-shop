import React, { useEffect, useState } from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { AccesoriosService } from "./services/accesorios.service";



export const AccesoriosPage = () => {

    const [ accesorios, setAccesorios ] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect( () => {
        AccesoriosService.getAccesorios().then( accesorios => {
            setAccesorios( accesorios );
            setLoading( false );
        })
    }, [] )

    return(  
        <Box m={3}>
            <TitlePage namePage={"Accesorios"}/>
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
                )
            }
            </Grid>   
        </Box>

    )
}
