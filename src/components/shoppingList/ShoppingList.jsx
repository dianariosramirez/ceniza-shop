import React from 'react';

// MUI components
import { Button, Divider, IconButton, List, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

export const ShoppingList = () => {
    const isDesktop = useMediaQuery('(min-width:400px)');
    const { productsCart, addProduct, removeProduct, removeToCart } = useShoppingCartStore();

    const productsIntoCart = Object.values( productsCart );

    return (
        <List sx={{ width: '100%'}}>
            {
                productsIntoCart.map( product => {
                    return (
                        <div key={product.productData.name}>
                            <Grid container>
                                <Grid xs={3} md={2}>
                                    <Box 
                                        component="img" 
                                        src={product.productData.imageURL}
                                        width={ isDesktop ? "10rem" : '100%' }                              
                                    />
                                </Grid>
                                <Grid xs={9} md={10} 
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems:'left',
                                        justifyContent:'space-around'
                                    }} 
                                >
                                    <Typography >
                                        {product.productData.name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display:'flex',
                                            justifyContent:'space-between'                                    
                                        }}
                                    >
                                        <Stack>
                                            <Stack 
                                                direction={'row'}
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <IconButton 
                                                    onClick={() => removeProduct(product.productData.id, product.productData.price)}
                                                    sx={{
                                                        right: "0.5rem",
                                                        width: isDesktop ? "2rem" : "1.5rem",
                                                        height: isDesktop ? "2rem" : "1.5rem",
                                                        color: "#A1C88F",
                                                        ":hover": {
                                                            color: '#437A28'
                                                        }
                                                    }}
                                                >
                                                    <RemoveCircle fontSize={isDesktop ? 'medium' : 'small'}/>
                                                </IconButton>
                                                <Typography>{product.count}</Typography>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => addProduct(product.productData.id, product.productData.price)}
                                                    sx={{
                                                        left: "0.5rem",
                                                        width: isDesktop ? "2rem" : "1.5rem",
                                                        height: isDesktop ? "2rem" : "1.5rem",
                                                        color: "#A1C88F",
                                                        ":hover": {
                                                            color: '#437A28'
                                                        }
                                                    }}
                                                >
                                                    <AddCircle fontSize={isDesktop ? 'medium' : 'small'}/>
                                                </IconButton>
                                            </Stack>
                                            <Button onClick={() => removeToCart(product.productData.id, product.productData.price)}>
                                                <Typography variant='caption' color='primary'>Quitar</Typography>
                                            </Button>
                                        </Stack>
                                        <Typography variant='h6'>
                                            {`$${product.productData.price * product.count}.00`}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider />
                        </div>
                    )
                })
            }
        </List>    
    ) 
}
