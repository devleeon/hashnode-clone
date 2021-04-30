import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router";
import About from "../Pages/About";
import Explore from "../Pages/Explore";
import Feed from "../Pages/Feed";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Tags from "../Pages/Tags";

interface Props {}

function AppRouter({}: Props): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/community" component={Feed} />
      <Route path="/search" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/tags" component={Tags} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default AppRouter;
