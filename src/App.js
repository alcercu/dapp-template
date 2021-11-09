import React from "react";
import { DAppProvider } from "@usedapp/core";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { lightTheme } from "./styles/themes";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";


const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <DAppProvider>
        <Router>
          <Routes />
        </Router>
      </DAppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
