import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../styles/theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
