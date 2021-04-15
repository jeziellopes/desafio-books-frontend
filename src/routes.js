import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Auth from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={() => <div>Login</div>} />
      <PrivateRoute path="/" component={() => <div>App</div>} />
      <Route path="*" component={() => <div>Page not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;