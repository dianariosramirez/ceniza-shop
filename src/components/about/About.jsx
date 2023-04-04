import React from "react";

//MUI components
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


export const About = () => {
    return (
        <Box>
            <Typography variant="h4" textAlign="center" mb={2}>
                Sobre nosotros
            </Typography>
            <Grid container spacing={1}>
                <Grid 
                    xs={12} 
                    md={6}           
                    sx={ theme => ( {
                        display: 'flex', 
                        margin: '10px',
                        justifyContent: 'flex-end',
                        [theme.breakpoints.down('md')]: {
                            justifyContent:  'center'
                        }
                    })}
                >
                    <Box 
                        component="img"
                        alt="Sobre nosotros"
                        src="https://scontent.fmtt1-1.fna.fbcdn.net/v/t1.6435-9/122582028_351210052885666_470377248405607510_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9Ty0OkR_2gIAX_IdZpc&_nc_ht=scontent.fmtt1-1.fna&oh=00_AfAyB_zsDGBF8Xz0W6K6Re1iJUXycgsqUJFFBSkqDx1elg&oe=644EE597"
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
                    md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant="h6">
                        Somos una empresa 100% oaxaqueña, elaboramos tizanas 
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