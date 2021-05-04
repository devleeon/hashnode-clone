import { createMuiTheme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2962ff",
    },
    secondary: {
      main: "#B7BABE",
      light: "#F4F7FA",
      dark: "#4C535D",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default theme;
