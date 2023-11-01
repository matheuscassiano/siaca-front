import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../styles/theme";
import { UserProvider } from "@/contexts/UserContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
