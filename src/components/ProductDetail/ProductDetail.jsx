// Dependencies
import React, { useState } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

//MUI components
import { Box, Button, Divider, IconButton, Stack, Typography, useMediaQuery} from '@mui/material';
import { Favorite } from '@mui/icons-material';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ProductDetail = ({ id, name, type, price, info, capacity, imageURL}) => {
    const [ favoriteMark, setFavoriteMark] = useState( "notFav" );

    const { addToCart } = useShoppingCartStore();

    const onClickAddToCart = () => {
        addToCart({ id, name, price, imageURL });
        enqueueSnackbar('¡Añadido al carrito!', {
            variant:'success',
            anchorOrigin: {horizontal: 'center', vertical: 'bottom'},
            style: {
                backgroundColor: 'white',
                color: 'green',
                fontFamily: 'sans-serif',
                fontWeight: 'bold'
            }
        })      
    }

    const onClickFav = (e) => {
        e.stopPropagation();
        if ( favoriteMark === "notFav" ) {
            setFavoriteMark( 'isFav' );
        } else {
            setFavoriteMark( 'notFav' );
        }
    }

    return (
    <>
        <SnackbarProvider/>
        <Stack margin={5}>
            <Typography 
            variant='h4' 
            sx={ theme => ({
                marginBottom: '10px',
                fontWeight: '600',
                [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                }
            })}
            >
            { name }
            </Typography>
            <Typography 
                variant='h6'
                color='primary'
                sx={ theme => ({
                    textAlign: 'left',
                    marginBottom: '15px',
                    [theme.breakpoints.down('md')]: {
                        textAlign: 'center'
                    }
                })}
            >
                { type }
            </Typography>
            <Divider/>
            <Typography 
                variant='h4'
                sx={ theme => ({
                    marginBottom: '25px',
                    marginTop: '15px',
                    fontWeight: '300',
                    [theme.breakpoints.down('md')]: {
                        textAlign: 'center'
                    }
                })}
            >
            { `$${price}.00` }
            </Typography>
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between'
                }}
            >
                <IconButton 
                    onClick={onClickFav}
                    color={favoriteMark === "isFav" ? "primary" : "success"}
                >
                    <Favorite/>
                </IconButton>
                <Button 
                    variant='contained' 
                    color='primary' 
                    sx={{ width: '90%'}}
                    onClick={onClickAddToCart}
                >
                    Agregar al carrito
                </Button>
            </Box>
            <Typography 
                variant='body1'
                sx={ theme => ({
                    marginBottom: '2rem',
                    marginTop: '2rem',
                    fontWeight: '300',
                    [theme.breakpoints.down('md')]: {
                        textAlign: 'center'
                    }
                })}
            >
            { info }
            </Typography>
            {
                capacity !== '' && (
                    <Typography 
                        variant='body1'
                        sx={ theme => ({
                            marginBottom: '20px',
                            marginTop: '10px',
                            textAlign: 'end'
                        })}
                    >
                        Capacidad: { capacity }
                    </Typography>
                )
            }
        </Stack> 
    </>
  )
}
