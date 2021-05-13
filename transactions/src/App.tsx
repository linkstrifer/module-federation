import React from "react";
import { Switch, Route, Router, Link as RouterLink } from "react-router-dom";

import Transfer from "./components/Transfer";

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <h1>Typescript project</h1>
        <ul>
          <li>
            <RouterLink to="/">Root</RouterLink>
          </li>
          <li>
            <RouterLink to="/transfer">Transfer</RouterLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/transfer" component={Transfer} />
          <Route path="/" component={() => <div>Transactions Root</div>} />
        </Switch>
      </Router>
    </div>
  );
};
