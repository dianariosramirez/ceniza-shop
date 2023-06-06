import React from 'react';
import { NavLink } from 'react-router-dom';
// MUI Components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Badge } from '@mui/material';

// Icons
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useShoppingCartStore } from '../../store/shoppingCartStore';

export const BottomNav = () => {

  const { totalProducts } = useShoppingCartStore();

  return (
    <BottomNavigation sx={{ width: '100%' }}>
      <BottomNavigationAction
        label="Carrito de compra"
        value="carrito de compra"
        icon={
          <Badge badgeContent={totalProducts} color="primary">
            <NavLink
              to="shopping_cart/"
              className={({ isActive, isPending }) =>
                  isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : "none"
              }  
            >
              <ShoppingCartCheckoutRoundedIcon />
            </NavLink>
          </Badge>
        }
      />
      <BottomNavigationAction
        label="Favoritos"
        value="favoritos"
        icon={
          <Badge badgeContent={3} color="primary">
            <NavLink
              to="favorites/"
              className={({ isActive, isPending }) =>
                isActive
                ? "active"
                : isPending
                ? "pending"
                : "none"
              }  
            >
              <FavoriteBorderRoundedIcon />
            </NavLink>
          </Badge>        
        }
      />
      <BottomNavigationAction
        label="Perfil"
        value="perfil"
        icon={
          <NavLink
              to="profile/"
              className={({ isActive, isPending }) =>
                isActive
                ? "active"
                : isPending
                ? "pending"
                : "none"
              }  
          >
            <PersonOutlineRoundedIcon />
          </NavLink>
        }
      />
    </BottomNavigation>
  );
}
