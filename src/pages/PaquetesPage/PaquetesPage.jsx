import React, { useEffect, useState } from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { PaquetesService } from "./services/paquetes.service";



export const PaquetesPage = () => {

    const [ paquetes, setPaquetes ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        PaquetesService.getPaquetes().then( paquetes => {
            setPaquetes( paquetes );
            setLoading( false );
        })
    }, [] )

    return(  
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px'
        }}>
            <TitlePage namePage={"Paquetes"}/>
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
                    paquetes.map( paquete => {
                    return (
                        <Grid item xs={6} md={3} key={paquete.id}>
                            <ProductCard
                                name={paquete.name}
                                price={paquete.price}
                                imageUrl= {paquete.imageURL}
                                productDetail={`../product_paquetes/${paquete.id}`}
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
