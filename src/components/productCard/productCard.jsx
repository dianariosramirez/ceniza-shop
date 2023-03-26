import React from 'react'; 

// MUI components
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <Card
        sx={{
            transition: "0.2s",
            "&:hover": {
                transform:"scale(1.05)"
            }
        }}
    >
      <CardMedia
        component="img"
        alt="Product photo"
        height="40%"
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p" sx={{ color: 'purple' }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};


