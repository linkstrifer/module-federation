import React from "react";
import ReactDOM from "react-dom";
import {
  createMemoryHistory,
  createHashHistory,
  History,
  LocationListener,
} from "history";

import App from "./App";

const mount = (
  el: Element,
  {
    onNavigate,
    defaultHistory,
    initialPath,
  }: {
    onNavigate?: LocationListener;
    defaultHistory: History;
    initialPath?: string;
  }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath!],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_transactions-development-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createHashHistory() });
  }
}

export { mount };
