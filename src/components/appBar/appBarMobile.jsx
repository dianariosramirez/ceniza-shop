import React, {useState} from "react";

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


export const AppMobileBar = () => {
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
                        <img src="/src/images/logo.png"/>
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
                        <MenuItem onClick={handleClose}>Tizanas</MenuItem>
                        <MenuItem onClick={handleClose}>Paquetes</MenuItem>
                        <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                    </Menu>
                </StyledToolbar>
            </AppBar>
        </Box>
    )
}
