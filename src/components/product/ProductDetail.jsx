import React from 'react';

//MUI components
import { Box, Button, Divider, IconButton, Stack, Typography} from '@mui/material';
import { Favorite } from '@mui/icons-material';

export const ProductDetail = ({ name, type, price, info, capacity }) => {
  return (
    <Stack margin={10}>
        <Typography 
        variant='h4' 
        sx={ theme => ({
            marginBottom: '10px',
            fontWeight: '600',
            [theme.breakpoints.down('md')]: {
                textAlign: 'center'
            }
        })}
        >
        { name }
        </Typography>
        <Typography 
            variant='h6'
            color='primary'
            sx={{
                marginBottom: '15px',
            }}
        >
        { type }
        </Typography>
        <Divider/>
        <Typography 
            variant='h4'
            sx={ theme => ({
                marginBottom: '25px',
                marginTop: '15px',
                fontWeight: '300',
                [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                }
            })}
        >
        { price }
        </Typography>
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between'
            }}
        >
            <IconButton 
                // onClick={onClickFav} 
                // color= { favoriteMark === "isFav" ? "primary" : "gray"}
            >
                <Favorite/>
            </IconButton>
            <Button variant='contained' sx={{ width: '90%'}}>
                Agregar al carrito
            </Button>
        </Box>
        <Typography 
            variant='h6'
            sx={ theme => ({
                marginBottom: '25px',
                marginTop: '50px',
                fontWeight: '300',
                [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                }
            })}
        >
        { info }
        </Typography>
        <Typography 
            variant='h7'
            sx={ theme => ({
                marginBottom: '20px',
                marginTop: '10px',
                fontWeight: '400',
                fontStyle: 'italic',
                textAlign: 'end'
            })}
        >
        Capacidad: { capacity }
        </Typography>
    </Stack> 
  )
}
