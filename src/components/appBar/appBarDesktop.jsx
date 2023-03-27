import React from "react";
import { NavLink } from "react-router-dom";

//Material UI components
import {
    AppBar,
    Box,
    ListItemText,
    IconButton,
    Badge,
    ListItemIcon,
} from '@mui/material';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// Styles
import { StyledToolbar, MenuList } from "../../styles/appBar";

// Logo
import logo from '../../resources/images/logo.png';

export const AppBarDesktop = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" elevation={0}>
                <StyledToolbar type="desktop" >
                    <Box
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <NavLink to="/">
                            <img src={ logo } />  
                        </NavLink>

                    </Box>

                    <MenuList
                        type="row"
                        variant="h5"
                        component="div"
                        sx={{ ml: 5 }}
                    >
                        <NavLink 
                            to="product_tizanas/"
                            className={({ isActive, isPending }) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : "none"
                            }
                        >
                            <ListItemText primary='Tizanas'sx={{ mr: 5 }}/>
                        </NavLink>
                        <NavLink 
                            to="product_paquetes/"
                            className={({ isActive, isPending }) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : "none"
                            }                           
                        >
                            <ListItemText primary='Paquetes'sx={{ mr: 5 }}/>
                        </NavLink>
                        <NavLink
                            to="product_accesorios/"
                            className={({ isActive, isPending }) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : "none"
                            }
                        >
                            <ListItemText primary='Accesorios'sx={{ mr: 5 }}/>
                        </NavLink>

                        <ListItemIcon>
                            <IconButton>
                                <SearchIcon />   
                            </IconButton>
                        </ListItemIcon>

                    </MenuList>

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
                        <IconButton size="large" aria-label="search" color="inherit">
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartCheckoutRoundedIcon />
                            </Badge>
                        </IconButton>
                    </NavLink>
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
                        <IconButton size="large" aria-label="search" color="inherit">
                            <Badge badgeContent={1} color="primary">
                                <FavoriteBorderRoundedIcon />
                            </Badge>
                        </IconButton>
                    </NavLink>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                    >
                        <PersonOutlineRoundedIcon />
                    </IconButton>
                </StyledToolbar>
            </AppBar> 
        </Box>
    )
}
