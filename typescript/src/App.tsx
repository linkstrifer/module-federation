import React from "react";
import { History } from "history";
import { Switch, Route, Router, Link as RouterLink } from "react-router-dom";

import Transfer from "./components/Transfer";

export default ({ history }: { history: History }) => {
  return (
    <div>
      <Router history={history}>
        <h1>Typescript project</h1>
        <ul>
          <li>
            <RouterLink to="/transactions">Root</RouterLink>
          </li>
          <li>
            <RouterLink to="/transactions/transfer">Transfer</RouterLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/transactions/transfer" component={Transfer} />
          <Route
            path="/transactions"
            component={() => <div>Transactions Root</div>}
          />
        </Switch>
      </Router>
    </div>
  );
};
