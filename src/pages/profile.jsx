import React from "react";

// Components
import { TitlePage } from "../components/titlePage/titlePage";

// MUI components
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Box, Button, Card, Chip, Divider, IconButton, List, ListItem, Stack, Switch, Typography } from "@mui/material";
import { Edit, LocationOn } from "@mui/icons-material";

export const Profile = () => {
    return(
        <>
            <TitlePage namePage={"Mi perfil"}/>
            <Grid 
                container 
                spacing={6} 
                sx={{
                    padding: "30px",
                    '& > :not(style)': { mb: 2},
                }}
            >
                <Grid xs={12} md={12} textAlign="end">
                    <Button> Cerrar sesión </Button>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography variant="h5">
                        Detalles de la cuenta
                    </Typography>
                    <Divider/>
                    <Box sx={{ p: 2, display: 'flex'}}>
                        <Avatar variant="rounded" sx={{mr: "20px"}}/>
                        <Stack>
                            <Typography textAlign="left" variant="h6" fontWeight={700}>Diana Rios</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Oaxaca, Mexico
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