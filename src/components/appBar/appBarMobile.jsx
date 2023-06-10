// Dependencies
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// Components
import { DrawerMobile } from "../Drawer/DrawerMobile";
import { SearchDialog } from "../Search/Search";

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
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" elevation={0} >
                <StyledToolbar>
                    <IconButton onClick={handleOpenSearch}>
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
                        aria-controls={openDrawer ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openDrawer ? 'true' : undefined}
                        onClick={handleDrawerOpen}
                    >
                        <MenuRoundedIcon/>   
                    </IconButton>
                </StyledToolbar>
            </AppBar>
            <SearchDialog open={openSearch} handleClose={handleCloseSearch}/>
            <DrawerMobile
                open={openDrawer} 
                handleDrawerClose={handleDrawerClose}
            />
        </Box>
    )
}
