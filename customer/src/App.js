import React from "react";
import { Switch, Route, Router, Link as RouterLink } from "react-router-dom";

import SignIn from "./components/SignIn";

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <h1>Javascript project</h1>
        <ul>
          <li>
            <RouterLink to="/customer">Root</RouterLink>
          </li>
          <li>
            <RouterLink to="/customer/sign-in">Sign in</RouterLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/customer/sign-in" component={SignIn} />
          <Route path="/customer" component={() => <div>Customer Root</div>} />
        </Switch>
      </Router>
    </div>
  );
};
