import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#678892",
    },
    secondary: {
      main: "#c59c5b",
    },
    error: {
      main: "#DA1E28",
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
    ].join(","),
  },
});

export default theme;
