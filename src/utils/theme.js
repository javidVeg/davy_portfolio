import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      50: "#F5F4FE",
      100: "#EDEAFD",
      200: "#DDD9FB",
      300: "#C3BAFB",
      400: "#A592F3",
      500: "#8E6FED",
      600: "#7646E1",
      700: "#6734CD",
      800: "#552BAC",
      900: "#48258D",
      950: "#2C165F",
      main: "#8E6FED",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d72a7d",
      light: "#e55a9d",
      dark: "#a31e60",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "IBM Plex Mono, monospace, sans-serif",
  },
});
