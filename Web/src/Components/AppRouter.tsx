import { useReactiveVar } from "@apollo/client";
import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router";
import { isLoggedInVar } from "../Apollo/localState";
import About from "../Pages/About";
import Auth from "../Pages/Auth";
import Bookmark from "../Pages/Bookmark";
import CreatePost from "../Pages/CreatePost";
import Explore from "../Pages/Explore";
import Feed from "../Pages/Feed";
import Home from "../Pages/Home";
import PostPage from "../Pages/PostPage";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import TagHome from "../Pages/TagHome";
import Tags from "../Pages/Tags";

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
      <Route path="/bookmarks" component={Auth} />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

const LoggedInPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />

      <Route path="/explore" component={Explore} />
      <Route path="/tags" component={Tags} />
      <Route path="/t/:tagName" component={TagHome} />
      <Route exact path="/p/create" component={CreatePost} />
      <Route path="/p/:postId" component={PostPage} />
      <Route path="/bookmarks" component={Bookmark} />
      <Route path="/search" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/u/:username" component={Profile} />

      <Redirect from="*" to="/" />
    </Switch>
  );
};
function AppRouter(): ReactElement {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return <>{isLoggedIn ? <LoggedInPage /> : <LoggedOutPage />}</>;
}

export default AppRouter;
