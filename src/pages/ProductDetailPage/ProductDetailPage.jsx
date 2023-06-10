import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';

//MUI components
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';

// Services
import { ProductService } from './services/product.service';
import { DetailSkeleton } from '../../components/CardSkeleton/CardSkeleton';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)

  const getProductType = () => {
    if (productId.charAt(0) === 't') {
      return "tisanas";
    } else if (productId.charAt(0) === 'p') {
      return "paquetes";
    } else {
      return "accesorios";
    }
  }

  const productType = getProductType();

  useEffect( () => {
    ProductService.getProduct(productType, productId).then( productData => {
        setProduct( productData );
        setLoading( false );
    });
  }, [productId, productType] )

  if (loading) {
    return(
      <DetailSkeleton/>
    ) 
  } else {
    return (
      <Grid  container mt={5}>
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
            src={ product.imageURL }
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ProductDetail 
            id={ product.id }
            name={ product.name } 
            price={ product.price }
            type={ product.type }
            info={ product.info }
            capacity={ product.capacity }
            imageURL={ product.imageURL }
          />       
        </Grid>
      </Grid>
    )
  }
}
