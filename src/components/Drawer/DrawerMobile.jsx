// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { ChevronRightOutlined, CoffeeMakerOutlined, EmojiFoodBeverageOutlined, TakeoutDiningOutlined } from "@mui/icons-material";

// MUI Components
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


export const DrawerMobile = ({open, handleDrawerClose}) => {
  return (
    <Drawer
        className="drawer"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
    >
        <Box
            sx={{ width:  300}}
            role="presentation"
        >
            <div>
            <IconButton onClick={handleDrawerClose}>
                <ChevronRightOutlined/>
            </IconButton>
            </div>
            <List>
                <NavLink
                    to="product_tisanas/"
                    className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "none"
                    }                        
                >
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <EmojiFoodBeverageOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={"Tisanas"} />
                        </ListItemButton>
                    </ListItem>
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
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <TakeoutDiningOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={"Paquetes"} />
                        </ListItemButton>
                    </ListItem>
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
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleDrawerClose}>
                            <ListItemIcon>
                                <CoffeeMakerOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={"Accesorios"} />
                        </ListItemButton>
                    </ListItem>
                </NavLink> 
            </List>
        </Box>
    </Drawer>
  )
}
