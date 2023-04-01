import React from 'react';

// MUI components
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

// Resources
import { tizanas } from '../../resources/productsData';
import { Box } from '@mui/system';

export const ShoppingList = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    { tizanas.map( tizana => (
                        <TableRow key={ tizana.id }>
                            <TableCell>
                                <Box 
                                    component="img" 
                                    src={tizana.image}
                                    sx={{
                                        width:"auto",
                                        height:"200px"
                                    }} 
                                />
                            </TableCell>
                            <TableCell>
                                <Typography>{tizana.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{tizana.price}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    ) 
}
