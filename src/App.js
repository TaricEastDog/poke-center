import React from "react";
import { Home, Signin, Signup, Welcome } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home user={user} />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
