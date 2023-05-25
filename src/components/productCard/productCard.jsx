import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

// MUI components
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography, useMediaQuery } from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Stack } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ProductCard = ({ id, name, price, imageURL, productDetail }) => {
  const matches = useMediaQuery('(min-width:400px)');

  const [ favoriteMark, setFavoriteMark] = useState( "notFav" );
  const { addToCart } = useShoppingCartStore();

  const onClickFav = () => {
    if ( favoriteMark === "notFav" ) {
      setFavoriteMark( 'isFav' );
    } else {
      setFavoriteMark( 'notFav' );
    }
  }

  return (
    <Card
        sx={{
          transition: "0.2s",
          "&:hover": {
              transform:"scale(1.05)"
          }
        }}
    >
      <Link to={ productDetail } underline="none">
        <CardMedia
        component="img"
        alt="Product photo"
        image={imageURL}
        title={name}
        />
      </Link>
     
      <CardContent sx={{paddingBottom: "1px"}}>
        <Stack 
          sx={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            justifyContent: matches ? "space-between" : "center",
            marginBottom: "0.3rem",
            paddingBottom: "none"
          }}
        >
          <Box>
            <Typography variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'green' }}>
              {`$${price}.00`}
            </Typography>
          </Box>
          <Box sx={{display: "flex"}}>
            <Button 
              startIcon={<AddShoppingCart/>} 
              size="small"
              onClick={() => addToCart({ id, name, price, imageURL, productDetail })}
            />
            <IconButton 
              onClick={ onClickFav } 
              color= { favoriteMark === "isFav" ? "primary" : "gray"}
            >
              <Favorite/>
            </IconButton>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};




