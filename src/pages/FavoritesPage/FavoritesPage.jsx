import React, { useState, useEffect } from "react";

//MUI components
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

// Components
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

// Services
import { FavoritesService } from "./services/favorites.service";



export const FavoritesPage = () => {
    const [ favorites, setFavorites ] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect( () => {
    //     FavoritesService.getFavorites().then( favorites => {
    //         setFavorites( favorites );
    //         setLoading( false );
    //     });
    // }, [] )
    
    return(  
        <div>
            <HeaderPage namePage={"Mis Favoritos"}/>
            <h2 style={{textAlign: "center"}}>Página en construcción 🔧🪛🪚</h2> 
        </div>
        
        // <Box m={3}>
        //     <TitlePage namePage={"Mis Favoritos"}/>
        //     <Grid container spacing={4}>
        //     {
        //         loading === true 
        //         ? (
        //             [ 1, 2, 3, 4].map( position => {
        //                 return (
        //                     <Grid item xs={6} md={3} key={position}>
        //                         <CardSkeleton/>
        //                     </Grid>
        //                 )
        //             })
        //         )
        //         : (
        //             favorites.map( favorite => {
        //             return (
        //                 <Grid item xs={6} md={3} key={favorite.id}>
        //                     <ProductCard
        //                         name={favorite.name}
        //                         price={favorite.price}
        //                         imageURL= {favorite.imageURL}
        //                         productDetail={`../${favorite.page}/${favorite.id}`}
        //                     />  
        //                 </Grid>
        //             )
        //             })
        //         )
                
        //     }
        //     </Grid>   
        // </Box>
    )
}