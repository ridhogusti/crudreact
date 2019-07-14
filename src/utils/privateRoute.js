import React from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_AUTH } from "../utils/constants";
import NotFound from "../containers/NotFound";
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
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        } else if (allowedRoles.includes(isAuthFromStorage.role)) {
          return <Component {...props} />;
        } else if (allowedRoles.includes(isAuthFromStorage.role)) {
          return <Component {...props} />;
        } else {
          return NotFound;
        }
      }}
    />
  );
}

export default PrivateRoute;
