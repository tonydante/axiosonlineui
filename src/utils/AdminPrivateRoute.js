import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AdminPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('adminAccessToken')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/admin/signin', state: { from: props.location } }} />
  )} />
)