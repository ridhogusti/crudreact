import React from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_AUTH } from "../utils/constants";
function PrivateRoute({ component: Component, allowedRoles, ...rest }) {
  return (
    <Route
      exact
      {...rest}
      render={props => {
        const isAuthFromStorage = JSON.parse(localStorage.getItem(USER_AUTH));
        if (!isAuthFromStorage) {
          return (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location }
              }}
            />
          );
        } else if (allowedRoles.includes(isAuthFromStorage.role)) {
          return <Component {...props} />;
        } else {
          return <h1>No page for you!</h1>;
        }
      }}
    />
  );
}

export default PrivateRoute;
