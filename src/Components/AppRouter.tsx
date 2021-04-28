import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router";
import About from "../Pages/About";
import Home from "../Pages/Home";

interface Props {}

function AppRouter({}: Props): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default AppRouter;
