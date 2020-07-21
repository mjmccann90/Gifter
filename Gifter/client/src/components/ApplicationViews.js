import React, { useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts"
import Register from "./Register";
import Login from "./Login";

const ApplicationViews = () => {

  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      {/* The Switch component is going to look at the url and render the first route that is a match. */}
    <Switch>
        {/* path takes the user to the view */}
        {/* The exact attribute specifies that we only want to render this component then the url is exactly */}
      <Route path="/" exact>
        <Search />
        {isLoggedIn ? <PostList /> : <Redirect to="/login"/>}
      </Route>

      <Route path="/posts/add">
      {isLoggedIn ? <PostForm /> : <Redirect to="/login"/>}
      </Route>

            {/* The third route here is an example of a path with a route param: /posts/:id. 
                Using the colon, we can tell the react router that this will be some id parameter. */}
      <Route path="/posts/:id">
          {isLoggedIn ?<PostDetails /> : <Redirect to="/login"/>}
      </Route>

      <Route path="/users/:userProfileId">
          {isLoggedIn ?<UserPosts /> : <Redirect to="/login"/>}
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/register">
        <Register/>
      </Route>

    </Switch>
    </main>
  );
};

export default ApplicationViews;