import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { spacing } from '@mui/system';

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