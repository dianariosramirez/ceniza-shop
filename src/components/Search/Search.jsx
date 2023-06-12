// Dependencies
import React, { useEffect, useState } from 'react';

// MUI components
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styles/appBar';
import { SearchOutlined } from '@mui/icons-material';

// Service
import { ProductsService } from './services/searchProducts.service';
import { useNavigate } from 'react-router-dom';
import { REPO_BASE_NAME } from '../../commons/constants';

export const SearchDialog = ({open, handleClose}) => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
              onChange={(e, newOption) => {
                navigate(`${REPO_BASE_NAME}${newOption.page}/${newOption.id}`); 
                handleClose();
              }}
              renderOption={(props, option) => (
                <Box 
                  component="li" 
                  sx={{ '& > img': { mr: 2, flexShrink: 0 }, height: '60px' }} 
                  {...props}
                >
                    <img
                      loading="lazy"
                      width="50"
                      src={option.imageURL}
                      alt=""
                    />
                  <Typography height="50">
                    {option.name}
                  </Typography>
                </Box>
              )}
              renderInput={(params) => (
                // <TextField 
                //   {...params}
                //   label="Search input"
                //   InputProps={{
                //     ...params.InputProps,
                //     type: 'search',
                // }}/>
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