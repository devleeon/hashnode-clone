import { CssBaseline, NoSsr, ThemeProvider } from "@material-ui/core";
import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../styles/theme";
import AppRouter from "./AppRouter";
import "../axiosconfig";
import axios from "axios";

interface Props {}

export type LoggedInType = {
  loggedIn: boolean;
  setLoggedIn: Function;
};

export const LoggedInContext = createContext<LoggedInType>({
  loggedIn: true,
  setLoggedIn: () => {},
});
export const useLoggedIn = () => useContext(LoggedInContext);

function App({}: Props): ReactElement {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [loggedIn, setLoggedIn] = useState(token ? true : false);
  return (
    <NoSsr>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            <AppRouter />
          </LoggedInContext.Provider>
        </Router>
      </ThemeProvider>
    </NoSsr>
  );
}

export default App;
