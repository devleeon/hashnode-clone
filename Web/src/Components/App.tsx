import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import client from "../Apollo/client";
import theme from "../styles/theme";
import AppRouter from "./AppRouter";

interface Props {}

function App({}: Props): ReactElement {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
