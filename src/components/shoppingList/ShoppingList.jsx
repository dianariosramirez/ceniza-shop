import React from 'react';

// MUI components
import { Container, Divider, List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const ShoppingList = () => {
    const isDesktop = useMediaQuery('(min-width:400px)');
    const { productsCart } = useShoppingCartStore();

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
                                <Grid xs={9} md={10} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems:'left',
                                        justifyContent:'space-around',
                                        bgcolor:'pink'
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
                                            <Typography>Hi</Typography>
                                            <Typography color='primary'>Quitar</Typography>
                                        </Stack>
                                        <Typography variant='h6'>
                                            {`$${product.productData.price}.00`}
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
