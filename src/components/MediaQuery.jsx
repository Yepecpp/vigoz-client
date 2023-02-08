import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 1024,
      desktop: 1280,
    },
  },
});
