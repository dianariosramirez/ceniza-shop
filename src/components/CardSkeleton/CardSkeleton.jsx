import React from 'react';

// MUI components
import { Card, CardContent, Skeleton, Stack, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const CardSkeleton = () => {

    const isDesktop = useMediaQuery('(min-width:400px)');

    return (
    <Card>
        <Skeleton
            variant='rectangular'
            height={isDesktop ? '360px' : '140px'}
        />
        <CardContent>
            <Stack spacing={1} >
                <Skeleton
                    variant='body1'
                    width='70%'
                />
                <Skeleton
                    variant='rectangular'
                    width='20%'
                    height={isDesktop ? '12px' : '9px' }
                />                
            </Stack>
        </CardContent>
    </Card>
    );
}

export const DetailSkeleton = () => {
    const isDesktop = useMediaQuery('(min-width:900px)');

    return(
        <Grid container>
            <Grid xs={12} md={6} 
                spacing={2} 
                sx={{
                    display: 'flex',
                    justifyContent: "center"
                }}
            >
               <Skeleton
                    variant='rectangular'
                    width={isDesktop ? "50%" : "60%"}
                    height={isDesktop ? "25rem" : "15rem"}
                /> 
            </Grid>
            <Grid xs={12} md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isDesktop ? 'flex-start' : 'center',
                    alignItems: isDesktop ? 'flex-start' : 'center'            
                }}
            >
                <Skeleton
                    variant='body1'
                    width={isDesktop ? "50%" : "60%"}
                    sx={{
                        marginTop: '1rem', 
                    }}
                />
                <Skeleton
                    variant='body1'
                    width={isDesktop ? "30%" : "40%"}
                    sx={{
                        marginTop: '1rem', 
                    }}
                />
                <Skeleton
                    variant='body1'
                    width={isDesktop ? "50%" : "60%"}
                    sx={{
                        marginTop: '1rem', 
                    }}
                />
            </Grid>                         
        </Grid>
        
    )
}
