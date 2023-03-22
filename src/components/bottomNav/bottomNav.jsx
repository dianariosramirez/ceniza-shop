import * as React from 'react';

// MUI Components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Badge } from '@mui/material';

// Icons
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';


export const BottomNav = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Carrito de compra"
        value="carrito de compra"
        icon={
          <Badge badgeContent={1} color="primary">
            <ShoppingCartCheckoutRoundedIcon />
          </Badge>
        }
      />
      <BottomNavigationAction
        label="Favoritos"
        value="favoritos"
        icon={
          <Badge badgeContent={1} color="primary">
            <FavoriteBorderRoundedIcon />
          </Badge>        
      }
      />
      <BottomNavigationAction
        label="Perfil"
        value="perfil"
        icon={<PersonOutlineRoundedIcon />}
      />
    </BottomNavigation>
  );
}
