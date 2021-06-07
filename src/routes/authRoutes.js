import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

const AuthRoutes = ({ setRefreshCheckLogin }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth setRefreshCheckLogin={setRefreshCheckLogin} />
        </Route>
        <Route path="/forgot" exact component={ForgotPassword} />
        <Route path="/reset-password/:token" exact component={ResetPassword} />
        <Route path="*">
          <Auth setRefreshCheckLogin={setRefreshCheckLogin} />
        </Route>
      </Switch>
    </Router>
  );
};

export default AuthRoutes;
