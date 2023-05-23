// MUI components
import { List, Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";


export const Offset = styled( 'div' )( ( { theme } ) => theme.mixins.toolbar);

export const StyledToolbar = styled( Toolbar )( ( { theme, type } ) => ({
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


