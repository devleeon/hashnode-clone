import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../Pages/Home";

interface Props {}

function AppRouter({}: Props): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default AppRouter;
