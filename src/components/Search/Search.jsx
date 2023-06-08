import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Typography } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styles/appBar';
import { SearchOutlined } from '@mui/icons-material';

const products = ['hi','uokg','uyfusyf'];

export const SearchDialog = ({open, handleClose}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Buscar</DialogTitle>
        <DialogContent>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={products}
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