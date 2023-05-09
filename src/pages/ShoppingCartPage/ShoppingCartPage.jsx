import React from "react";

// MUI components
import { Box } from "@mui/system";
import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Components
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";

// Store
import { useShoppingCartStore } from "../../store/shoppingCartStore";


export const ShoppingCartPage = () => {
    const { totalPrice } = useShoppingCartStore;
    console.log( totalPrice );

    return(
        <Box m={3}>
            <TitlePage namePage={"Carrito de compra"}/>
            <Grid container spacing={2}>
                <Grid xs={12} sm={12} md={8}>
                    <ShoppingList/>
                </Grid>
                <Grid xs={12} sm={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" textAlign="start">
                                Subtotal
                            </Typography>
                            <Divider/>
                            <Typography variant="h5" textAlign="end" mt={2}>
                               {totalPrice}
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