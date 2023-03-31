import React, {useContext} from 'react';

//MUI components
import { Stack } from '@mui/system';
import { Divider, Typography } from '@mui/material';

// Context
import { MatchesContext } from '../../context/matchesContext';


export const TitlePage = ( {namePage} ) => {
    const { matches } = useContext( MatchesContext )
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
