import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

// MUI components
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Stack } from '@mui/system';

// Store
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const ProductCard = ({ name, price, imageURL, productDetail }) => {

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
        height="40%"
        image={imageURL}
        title={name}
        />
      </Link>
     
      <CardContent sx={{ display: 'flex', justifyContent:'space-between'}}>
        <Stack>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p" sx={{ color: 'purple' }}>
            {price}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Button 
            startIcon={<AddShoppingCart/>} 
            size="small"
            onClick={() => addToCart({ name, price, imageURL, productDetail })}
          >
            Añadir
          </Button>
          {/* <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<AddShoppingCart />}
            variant="outlined"
          >
            Añadir
          </LoadingButton> */}
          <IconButton 
            onClick={ onClickFav } 
            color= { favoriteMark === "isFav" ? "primary" : "gray"}
          >
            <Favorite/>
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};


