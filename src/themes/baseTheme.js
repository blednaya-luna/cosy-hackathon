import cyan from '@material-ui/core/colors/cyan';
import yellow from '@material-ui/core/colors/yellow';

export const baseTheme = {
  palette: {
    primary: cyan,
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: yellow[500],
      },
    },
  },
};
