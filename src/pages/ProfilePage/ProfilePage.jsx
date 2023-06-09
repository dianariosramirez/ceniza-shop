import React from "react";

//Routing
import { useNavigate } from "react-router-dom";

// Components
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

// MUI components
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Box, Button, Divider, List, ListItem, Stack, Typography } from "@mui/material";

// Store
import { useUserStore } from "../../store/user";



export const ProfilePage = () => {

    const { name, city, state, userUnlogged  } = useUserStore();
    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.setItem('isLogged', 'false');
        userUnlogged();
        navigate("../signin");
    }

    return(
        <>
            <HeaderPage namePage={"Mi perfil"}/>
            <Grid 
                container 
                spacing={1} 
                sx={{
                    paddingLeft: "30px",
                    paddingRight: "30px"
                }}
            >
                <Grid xs={12} md={12} textAlign="end">
                    <Button onClick={onLogOut}> Cerrar sesión </Button>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography variant="h5">
                        Detalles de la cuenta
                    </Typography>
                    <Divider/>
                    <Box sx={{ p: 2, display: 'flex'}}>
                        <Avatar variant="rounded" sx={{mr: "20px"}}/>
                        <Stack>
                            <Typography textAlign="left" variant="body1" fontWeight={500}>{ name }</Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                                { `${city}, ${state}` }
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid xs={12} md={8}>
                    <Typography variant="h5">
                        Mis pedidos
                    </Typography>
                    <Divider/>
                    <List>
                        <ListItem>
                            <Typography>
                                Sin pedidos aún
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    )
}