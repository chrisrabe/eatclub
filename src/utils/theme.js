import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import colors from './colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.dark,
    },
    background: {
      main: colors.light,
    },
    text: {
      primary: colors.dark,
      secondary: colors.light,
    },
  },
});

export const muiTheme = responsiveFontSizes(theme);
