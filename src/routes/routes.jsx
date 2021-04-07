import React from "react";
import routing from "./configRoutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = ({showModal,setShowModal}) => {
  return (
    <Router>
      <Switch>
        {routing.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page showModal={showModal} setShowModal={setShowModal}/>
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default routes;
