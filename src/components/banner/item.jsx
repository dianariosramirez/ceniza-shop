import React from "react";

// MUI components
import {
    Paper
} from '@mui/material';


export const Item = ({item}) => {

    return (
        <Paper 
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width:'100%'
            }}
        >
            <img 
                src={ item.image } 
                width='100%'
            />
        </Paper>
    )
}