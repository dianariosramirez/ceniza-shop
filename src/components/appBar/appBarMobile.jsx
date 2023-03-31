import React, {useState} from "react";
import { NavLink } from "react-router-dom";
//Material UI components
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Styles
import { StyledToolbar } from "../../styles/appBar";

// Logo
import logo from '../../resources/images/logo.png';

// Constants
import { REPO_BASE_NAME } from '../../commons/constants';

export const AppBarMobile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" elevation={0}>
                <StyledToolbar>
                    <IconButton>
                        <SearchIcon />   
                    </IconButton>
                    <Box
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <NavLink to={ REPO_BASE_NAME }>
                            <img src={ logo }/>
                        </NavLink>
                        
                    </Box>
                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuRoundedIcon/>   
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
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
                            <MenuItem onClick={handleClose}>Tizanas</MenuItem>
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
                            <MenuItem onClick={handleClose}>Paquetes</MenuItem>
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
                            <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                        </NavLink>   
                    </Menu>
                </StyledToolbar>
            </AppBar>
        </Box>
    )
}
