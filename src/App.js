import React from "react";
import { Home, Signin, Signup, Welcome } from "./pages";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuthListener } from "./hooks";
import { AuthUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <AuthUserRedirect user={user} loggedPath="/welcome" path="/" exact>
          <Home />
        </AuthUserRedirect>

        <AuthUserRedirect
          user={user}
          loggedPath="/welcome"
          path="/signin"
          exact
        >
          <Signin />
        </AuthUserRedirect>

        <AuthUserRedirect
          user={user}
          loggedPath="/welcome"
          path="/signup"
          exact
        >
          <Signup />
        </AuthUserRedirect>

        <ProtectedRoute path="/welcome" exact user={user}>
          <Welcome />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
