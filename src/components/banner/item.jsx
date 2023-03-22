import React from "react";

// MUI components
import {
    Paper, 
    Button,  
    Typography
} from '@mui/material';


export const Item = ({item}) => {

    return (
        <Paper 
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width:'100%'
            }}
        >
            <img 
                src={ item.image } 
                width='100%'
            />
            <Typography variant="h2" sx={{ml:5}}>
                Ceniza
            </Typography>
        </Paper>
    )
}