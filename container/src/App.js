import React, { lazy, Suspense } from "react";
import {
  HashRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";

const JavascriptApp = lazy(() => import("./components/JavascriptApp"));
const TypescriptApp = lazy(() => import("./components/TypescriptApp"));

import Header from "./components/Header";

export default () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/customer" component={JavascriptApp} />
            <Route path="/transactions" component={TypescriptApp} />
            <Route path="/" component={() => <div>Root</div>} />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
};
