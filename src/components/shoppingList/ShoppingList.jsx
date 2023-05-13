import React from 'react';

// MUI components
import { Container, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ShoppingList = () => {

    const { productsCart } = useShoppingCartStore();

    return (
        <List sx={{ width: '100%'}}>
            {
                productsCart.map( product => {
                    return (
                        <div key={product.name}>
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
                                    src={product.imageURL}
                                    width="200px"                               
                                />   
                                <Stack>
                                    <Typography>
                                        {product.name}
                                    </Typography>
                                </Stack>
                                <Typography>
                                    {`$${product.price}.00`}
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
