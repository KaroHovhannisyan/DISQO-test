import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, Notepad } from "./modules/";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/create" component={() => <h1>Create</h1>} />
      <Route exact path="/notepads/:id" render={Notepad} />
    </Switch>
  );
};

export default Routes;
