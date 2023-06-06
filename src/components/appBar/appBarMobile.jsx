// Dependencies
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// Components
import { DrawerMobile } from "../Drawer/DrawerMobile";

//Material UI components
import { AppBar, Box, Divider, IconButton, List, ListItem, ListItemText, Popover, TextField, Typography } from '@mui/material';

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
    const [open, setOpen] = useState(false);
    const [searchAnchorEl, setSearchAnchorEl] = useState(null);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearchClick = (event) => {
        setSearchAnchorEl(event.currentTarget);
    };
      
    const handleSearchClose = () => {
    setSearchAnchorEl(null);
    };

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
          handleSearchClose();
        }
    };

    const isSearchOpen = Boolean(searchAnchorEl);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" elevation={0} >
                <StyledToolbar>
                    <IconButton onClick={handleSearchClick}>
                        <SearchIcon />   
                    </IconButton>
                    <Popover
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 200, left: 400 }}
                        open={isSearchOpen}
                        anchorEl={searchAnchorEl}
                        onClose={handleSearchClose}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                    >
                        <Box
                            onClick={handleBackgroundClick}
                            sx={{
                                bgcolor:'green',
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box p={2} bgcolor="background.paper" borderRadius={4}>
                                <TextField label="Buscar" variant="outlined" />
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Opción 1" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Opción 2" />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Popover>
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
                        onClick={handleDrawerOpen}
                    >
                        <MenuRoundedIcon/>   
                    </IconButton>
                </StyledToolbar>
            </AppBar>
            <DrawerMobile
                open={open} 
                handleDrawerClose={handleDrawerClose}
            />
        </Box>
    )
}
