import React from 'react';

//MUI components
import { Stack } from '@mui/system';
import { Divider, Typography} from '@mui/material';


export const HeaderPage = ( {namePage} ) => {
  return (
    <Stack mb={4}>
        <Divider />
        <Typography 
            variant="h4"
            textAlign="center"
            m={1}
        >
            { namePage }
        </Typography>
        <Divider/>
    </Stack>
  )
}