import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { state } = useContext(UserContext);
  console.log(rest, "rest");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.user.isAuthenticated) return <Component {...props} />;
        else
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
}
