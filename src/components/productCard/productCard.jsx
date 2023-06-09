// Dependencies
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// MUI components
import { Box, Card, CardContent, IconButton, Typography, useMediaQuery } from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Stack } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ProductCard = ({ id, name, price, imageURL, productDetail }) => {

  const isDesktop = useMediaQuery('(min-width:400px)');

  const [ favoriteMark, setFavoriteMark] = useState( "notFav" );
  const { addToCart } = useShoppingCartStore();

  const onClickFav = (e) => {
    e.stopPropagation();
    if ( favoriteMark === "notFav" ) {
      setFavoriteMark( 'isFav' );
    } else {
      setFavoriteMark( 'notFav' );
    }
  }

  const onClickAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, name, price, imageURL, productDetail });
    enqueueSnackbar('¡Añadido al carrito!', {
      variant:'success',
      anchorOrigin: {horizontal: 'rigth', vertical: 'bottom'},
      style: {
          backgroundColor: 'white',
          color: 'green',
          fontFamily: 'sans-serif',
          fontWeight: 'bold'
      }
    }) 
  }

  const navigate = useNavigate();

  return (
    <>
      <SnackbarProvider/>
      <Card
          onClick={() => {
            navigate(productDetail)
          }}
          sx={{
            transition: "0.2s",
            "&:hover": {
                transform:"scale(1.05)"
            }
          }}
      >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src={imageURL}
              alt="Product photo"
              style={{
                width: "100%",
              }}
            />
            <IconButton
              onClick={onClickFav}
              color={favoriteMark === "isFav" ? "primary" : "success"}
              sx={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                width: isDesktop ? "2rem" : "1.5rem",
                height: isDesktop ? "2rem" : "1.5rem",
                backgroundColor:"white"
              }}
            >
              <Favorite fontSize={isDesktop ? 'medium' : 'small'}/>
            </IconButton>
          </Box>
        <CardContent sx={{paddingBottom: "1px"}}>
          <Stack 
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "0.3rem",
              paddingBottom: "none"
            }}
          >
            <Box>
              <Typography variant="subtitle2">
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'green', fontWeight:'bold' }}>
                {`$${price}.00`}
              </Typography>
            </Box>
            <Box>
              <IconButton 
                onClick={onClickAddToCart}
                sx={{
                  ":hover": {
                    color: 'green'
                  }
                }}
              >
                <AddShoppingCart fontSize={isDesktop ? 'medium' : 'small'}/>
              </IconButton>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};




