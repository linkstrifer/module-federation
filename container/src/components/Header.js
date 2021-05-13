import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Root</RouterLink>
        </li>
        <li>
          <RouterLink to="/customer">Customer</RouterLink>
        </li>
        <li>
          <RouterLink to="/transactions">Transactions</RouterLink>
        </li>
      </ul>
    </nav>
  );
};
