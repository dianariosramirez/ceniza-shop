import React from "react";

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
                        <img src="/src/images/logo.png"/>
                    </Box>
                    <MenuList
                        type="row"
                        variant="h5"
                        component="div"
                        sx={{ ml: 5 }}
                    >
                        <ListItemText primary='Tizanas'sx={{ ml: 5 }}/>
                        <ListItemText primary='Paquetes' sx={{ ml:  0}}/>
                        <ListItemText primary='Accesorios' sx={{ ml: 0 }}/>
                        <ListItemIcon>
                            <IconButton>
                                <SearchIcon />   
                            </IconButton>
                        </ListItemIcon>
                    </MenuList>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartCheckoutRoundedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <Badge badgeContent={1} color="primary">
                            <FavoriteBorderRoundedIcon />
                        </Badge>
                    </IconButton>
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
