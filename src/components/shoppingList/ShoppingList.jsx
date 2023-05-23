import React from 'react';

// MUI components
import { Container, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ShoppingList = () => {

    const { productsCart } = useShoppingCartStore();

    const productsIntoCart = Object.values( productsCart );

    return (
        <List sx={{ width: '100%'}}>
            {
                productsIntoCart.map( product => {
                    return (
                        <div key={product.productData.name}>
                        <ListItem >
                            <Container 
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box 
                                    component="img" 
                                    src={product.productData.imageURL}
                                    width="200px"                               
                                />   
                                <Stack>
                                    <Typography>
                                        {product.productData.name}
                                    </Typography>
                                </Stack>
                                <Typography>
                                    {`$${product.productData.price}.00`}
                                </Typography>
                            </Container>                              
                        </ListItem>
                        <Divider />
                        </div>
                    )
                })
            }
        </List>    
    ) 
}
