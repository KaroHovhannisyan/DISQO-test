import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./common/layouts/MainLayout";
import { Dashboard, Notepad } from "./modules/";

const Routes: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/create" component={() => <h1>Create</h1>} />
        <Route exact path="/notepads/:id" component={Notepad} />
      </Switch>
    </MainLayout>
  );
};

export default Routes;
