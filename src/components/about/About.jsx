import React from "react";

//MUI components
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


export const About = () => {
    return (
        <Box>
            <Typography variant="h3" textAlign="center">
                Sobre nosotros
            </Typography>
            <Grid container marginTop={2}>
                <Grid 
                    xs={12} 
                    md={6}           
                    sx={ theme => ( {
                        display: 'flex', 
                        justifyContent: 'flex-end',
                        [theme.breakpoints.down('md')]: {
                            justifyContent:  'center'
                        }
                    })}
                >
                    <Box 
                        component="img"
                        alt="Sobre nosotros"
                        src="https://i.ibb.co/bgvnF6t/about-image-min.png"
                        sx={ theme => ({
                            width: "400px",
                            height: "400px",
                            borderRadius: "200px",
                            [theme.breakpoints.down('md')]: {
                                width: "200px",
                                height: "200px",
                                borderRadius: "100px", 
                            }
                        })}
                    />
                </Grid>
                <Grid 
                    xs={12} 
                    md={5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding:"10px"
                    }}
                >
                    <Typography variant="h5">
                        Somos una empresa 100% oaxaqueña, elaboramos tisanas 
                        artesanales y naturales de la mejor calidad. Trabajamos
                        en infusiones que sean propias de ceniza.mx, con el objetivo 
                        de reencontrarnos con la naturaleza, recolectando 
                        plantas y frutos de la Mixteca oaxaqueña, consumiendo los 
                        productos de la mejor calidad de nuestros proveedores 
                        favoreciendo el crecimiento económico local y el cuidado 
                        del medio ambiente.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}