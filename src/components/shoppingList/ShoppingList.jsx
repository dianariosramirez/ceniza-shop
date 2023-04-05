import React from 'react';

// MUI components
import { Container, Divider, List, ListItem, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Add, Delete, Remove } from '@mui/icons-material';

// Resources
import { tizanas } from '../../resources/productsData';



export const ShoppingList = () => {
    return (
        <List sx={{ width: '100%'}}>
            {
                tizanas.map( tizana => {
                    return (
                        <>
                        <ListItem>
                            <Container 
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box 
                                    component="img" 
                                    src={tizana.image}
                                    width="200px"                               
                                />   
                                <Stack>
                                    <Typography>
                                        {tizana.name}
                                    </Typography>
                                    <ToggleButtonGroup 
                                        size='small'
                                    >
                                        <ToggleButton>
                                            <Remove/>
                                        </ToggleButton>
                                        <ToggleButton disabled>
                                            2
                                        </ToggleButton>
                                        <ToggleButton>
                                            <Add/>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Stack>
                                <Typography>
                                    {tizana.price}
                                </Typography>
                            </Container>                              
                        </ListItem>
                        <Divider />
                        </>

                    )
                })
            }

        </List>
        
    ) 
}
