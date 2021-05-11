import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router";
import { isLoggedInVar, meVar } from "../Apollo/localState";
import { useMeQuery } from "../generated/graphql";
import About from "../Pages/About";
import Auth from "../Pages/Auth";
import Bookmark from "../Pages/Bookmark";
import Explore from "../Pages/Explore";
import Feed from "../Pages/Feed";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Tags from "../Pages/Tags";

interface Props {}

const LoggedOutPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />

      <Route path="/explore" component={Explore} />
      <Route path="/community" component={Feed} />
      <Route path="/search" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/tags" component={Tags} />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

const LoggedInPage = () => {
  const { data, loading } = useMeQuery();
  if (loading) {
    return <></>;
  } else {
    meVar(data!.me);
    return (
      <Switch>
        <Route exact path="/" component={Feed} />

        <Route path="/explore" component={Explore} />
        <Route path="/tags" component={Tags} />
        <Route path="/bookmarks" component={Bookmark} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />

        <Redirect from="*" to="/" />
      </Switch>
    );
  }
};
function AppRouter({}: Props): ReactElement {
  const isLoggedIn = isLoggedInVar();
  return <>{isLoggedIn ? <LoggedInPage /> : <LoggedOutPage />}</>;
}

export default AppRouter;
