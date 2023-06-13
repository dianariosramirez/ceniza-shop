import React from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// MUI components
import { Box } from "@mui/system";
import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components

import { ShoppingList } from "../../components/ShoppingList/ShoppingList";

// Store
import { useShoppingCartStore } from "../../store/shoppingCartStore";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

// Utils
import { getTotalPrice } from "../../commons/utils/cart.util";


export const ShoppingCartPage = () => {
    const { productsCart } = useShoppingCartStore();

    const totalPrice = getTotalPrice(Object.values(productsCart));
    
    return(
        <Box m={3}>
            <SnackbarProvider/>
            <HeaderPage namePage={"Carrito de compra"}/>
            <Grid container spacing={2}>
                <Grid xs={12} sm={12} md={8}>
                    <ShoppingList/>
                </Grid>
                <Grid xs={12} sm={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" textAlign="start" fontWeight={'bold'}>
                                Subtotal
                            </Typography>
                            <Divider/>
                            <Typography variant="h6" textAlign="end" mt={1} color='primary'>
                               {`$${totalPrice}.00`}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                color="error"
                                size="large" 
                                variant="contained"
                                sx={{
                                    width:"100%"
                                }}
                                onClick={() => {
                                    enqueueSnackbar('Gracias por tu compra, ¡Sección en construcción! 🔧🪚', {
                                        variant:'info',
                                        anchorOrigin: {horizontal: 'center', vertical: 'bottom'},
                                        autoHideDuration: 6000,
                                        style: {
                                            backgroundColor: 'white',
                                            color: 'blue',
                                            fontFamily: 'sans-serif',
                                            fontWeight: 'bold'
                                        }
                                    })
                                }}
                            >
                                Finalizar pedido
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                </Grid>

        </Box>

    )
}