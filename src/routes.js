import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SignIn, Books } from './pages';
import { useAuth } from './hooks';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/sign-in', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <PrivateRoute path="/" component={Books} />
      <Route path="*" component={() => <div>Page not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
