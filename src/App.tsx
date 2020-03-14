import React from "react";
import "./App.css";
import LoginPage from "../container/LoginPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "../container/HomePage";
import { createBrowserHistory } from "history";
import { iconList } from "../utils";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { RestrictedRoute } from "../components/Authentication/RestrictedRoute";
import "antd/dist/antd.css";

library.add(iconList);

export const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <RestrictedRoute
          path="/login"
          component={LoginPage}
          onlyAllow={RestrictedRoute.LOGGED_OUT_USERS}
        />
        <RestrictedRoute
          path="/home"
          component={HomePage}
          onlyAllow={RestrictedRoute.LOGGED_IN_USERS}
        />
      </Switch>
    </Router>
  );
};

export default App;
