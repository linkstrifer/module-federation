import React, { lazy, Suspense } from "react";
import {
  HashRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";

const CustomerApp = lazy(() => import("./components/CustomerApp"));
const TransactionsApp = lazy(() => import("./components/TransactionsApp"));

import Header from "./components/Header";

export default () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/customer" component={CustomerApp} />
            <Route path="/transactions" component={TransactionsApp} />
            <Route path="/" component={() => <div>Root</div>} />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
};
