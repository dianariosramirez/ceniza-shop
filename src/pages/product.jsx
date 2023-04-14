import React from 'react';
import { useParams } from 'react-router-dom';

// Resources
import { tizanas, paquetes, accesorios } from '../resources/productsData';

// Components
import { ProductDetail } from '../components/product/ProductDetail';

//MUI components
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';

export const Product = () => {

  const products = tizanas.concat( paquetes, accesorios);
  const { productId } = useParams();
  const productSelected = products.find( product => product.id === productId );

  return (
    <Grid  container mt={10}>
      <Grid 
        xs={12} 
        md={6}
        sx={ theme => ( {
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            justifyContent: 'end'
          }
        })}
      >
        <Box 
          width='70%'
          component='img'
          src={ productSelected.imageURL }
        />
      </Grid>
      <Grid xs={12} md={6}>
        <ProductDetail 
          name={ productSelected.name } 
          price={ productSelected.price }
          type={ productSelected.type }
          info={ productSelected.info }
          capacity={ productSelected.capacity }
        />       
      </Grid>
    </Grid>
  )
}
