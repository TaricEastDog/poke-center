import React from "react";
import { Background } from "./components";
import { Home, Signin, Signup, Welcome } from "./pages";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuthListener } from "./hooks";
import { AuthUserRedirect, ProtectedRoute } from "./helpers/routes";
import { NavbarContainer } from "./containers/navbar";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Background>
      <Router>
        {user ? <NavbarContainer /> : null}
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
    </Background>
  );
}
