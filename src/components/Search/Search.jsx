// Dependencies
import React, { useEffect, useState } from 'react';

// MUI components
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Box } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styles/appBar';
import { SearchOutlined } from '@mui/icons-material';

// Service
import { ProductsService } from './services/searchProducts.service';
import { NavLink } from 'react-router-dom';

export const SearchDialog = ({open, handleClose}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsService.getProducts().then( products => {
      setProducts( products )
    })

  }, [])
  

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Buscar</DialogTitle>
          <DialogContent>
            <Autocomplete
              id="custom-input-demo"
              options={products}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <NavLink 
                  to={`${option.page}/${option.id}`}
                  className={({ isActive, isPending }) =>
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : "none"
                  }
                  onClick={() => handleClose()}
                >
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="50"
                      src={option.imageURL}
                      alt=""
                    />
                    {option.name} 
                  </Box>
                </NavLink>
              )}
              renderInput={(params) => (
                <Search ref={params.InputProps.ref}>
                  <SearchIconWrapper>
                    <SearchOutlined fontSize='small'/>
                  </SearchIconWrapper>
                  <StyledInputBase
                    {...params.inputProps}
                    placeholder="Buscar..."       
                  />
                </Search>
              )}
            />
          </DialogContent>
      </Dialog>
    </div>
  );
}