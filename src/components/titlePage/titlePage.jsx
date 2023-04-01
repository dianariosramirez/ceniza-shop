import React from 'react';

//MUI components
import { Stack } from '@mui/system';
import { Divider, Typography, useMediaQuery, useTheme } from '@mui/material';


export const TitlePage = ( {namePage} ) => {
  const theme = useTheme();
  const matches = useMediaQuery( theme.breakpoints.down('md'));
  return (
    <Stack mb={4}>
        <Divider />
        <Typography 
            variant={ matches ? "h4" : "h3" }
            textAlign="center"
            m={1}
        >
            { namePage }
        </Typography>
        <Divider/>

    </Stack>
  )
}
