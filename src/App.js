import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";
import { GlobalStyle } from "./config/style";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </ThemeProvider>
    </>
  );
}

export default App;
