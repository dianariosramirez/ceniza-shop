import React from "react";

// MUI components
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";

export const NotFoundPage = () => {
    return (
        <Grid container>
            <Grid xs={6}>
                <Box
                    component='img'
                    src= 'http://www.clipartbest.com/cliparts/jcx/LdK/jcxLdKpRi.gif'
                    width= '100%'
                />
            </Grid>
            <Grid xs={6}>
                    <Typography 
                        color="primary"
                        sx={ theme => ({
                            fontSize: '200px',
                            fontWeight:'500',
                            [ theme.breakpoints.down('md')]: {
                                fontSize: '100px'
                            }
                        })}
                    >
                        404
                    </Typography>
                    <Typography 
                        sx={ theme => ({
                            fontSize: '50px',
                            fontWeight:'500',
                            marginTop: '20px',
                            [ theme.breakpoints.down('lg')]: {
                                fontSize: '25px'
                            }
                        })}
                    >
                        Opps! La página no fue encontrada...
                    </Typography>
            </Grid>
        </Grid>
    );
};
