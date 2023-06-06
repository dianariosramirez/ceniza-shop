// MUI components
import { InputBase, List, Toolbar, alpha } from "@mui/material";
import { Box, styled } from "@mui/system";


export const Offset = styled( 'div' )( ( { theme } ) => theme.mixins.toolbar);

export const StyledToolbar = styled( Toolbar )( ( { theme, type } ) => ({
    display: "flex",
    alignItems: type === 'desktop' ? 'flex-start' : 'center',
    justifyContent: type !== 'desktop' && 'space-around',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  }));

export const MenuList = styled( List )( ( { type }) => ( {
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end'
}));

export const IconsMenu = styled( Box )({
    display: 'flex',
    alignItems: 'flex-end'
});

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha('#437A28', 0.15),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

