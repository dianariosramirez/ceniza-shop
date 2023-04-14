import React, { useEffect, useState } from "react";

// MUI components
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import { ProductCard } from "../../components/productCard/productCard";
import { TitlePage } from "../../components/titlePage/titlePage";

// Services
import { PaquetesService } from "./services/paquetes.service";



export const PaquetesPage = () => {

    const [ paquetes, setPaquetes ] = useState([]);
    useEffect( () => {
        setPaquetes( PaquetesService.getPaquetes() );
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
                }
            </Grid>   
        </Box>

    )
}
