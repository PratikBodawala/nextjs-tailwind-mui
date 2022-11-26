import { createTheme } from '@mui/material/styles';

// Check here for more configurations https://material-ui.com/customization/default-theme/
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  }
});

export default theme;