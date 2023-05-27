// Dependencies
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// Components
import { DrawerMobile } from "../Drawer/DrawerMobile";

//Material UI components
import { AppBar, Box, IconButton } from '@mui/material';

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

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" elevation={0} >
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
