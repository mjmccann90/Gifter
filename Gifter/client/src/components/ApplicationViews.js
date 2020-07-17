import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import Search from "./Search";

const ApplicationViews = () => {
  return (
      // The Switch component is going to look at the url and render the first route that is a match.
    <Switch>
        
        {/* path takes the user to the view */}
        {/* The exact attribute specifies that we only want to render this component then the url is exactly */}
      <Route path="/" exact>
        <Search />
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

            {/* The third route here is an example of a path with a route param: /posts/:id. 
                Using the colon, we can tell the react router that this will be some id parameter. */}
      <Route path="/posts/:id">
         <PostDetails />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;