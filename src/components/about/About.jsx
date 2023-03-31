import React, { useContext } from "react";

//MUI components
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// Context
import { MatchesContext } from "../../context/matchesContext";

export const About = () => {
    const { matches } = useContext( MatchesContext);
    return (
        <Box>
            <Typography variant={ matches ? "h4" : "h3" } textAlign="center" mb={2}>
                Sobre nosotros
            </Typography>
            <Grid container spacing={1}>
                <Grid 
                    xs={12} 
                    md={6}           
                    sx={{ 
                        display: 'flex', 
                        justifyContent: matches ?  'center' : 'flex-end',
                        margin: '10px'
                    }}
                >
                    <img 
                        src="https://scontent.fmtt1-1.fna.fbcdn.net/v/t1.6435-9/119239976_322153739124631_3740679417574945144_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=7uFcwuxJ5-oAX_4lhDI&_nc_ht=scontent.fmtt1-1.fna&oh=00_AfBf0fBwkJNbJMZpLpJqz-KVoPF8MBQaH7t1MWH38XFL4A&oe=644DCD05" 
                        alt="About us" 
                        style={{
                            width: matches ? "200px" : '400px',
                            height: matches ? "200px" : '400px',
                            borderRadius: matches ? "100px" : '200px'
                        }}
                    />
                </Grid>
                <Grid 
                    xs={12} 
                    md={4}
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