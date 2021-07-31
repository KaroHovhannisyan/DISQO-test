import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./common/layouts/MainLayout";
import { MAIN_PATH, CREATE_NOTEPAD, NOTEPAD_BY_ID } from "./configs/constants";
import { Dashboard, Notepad } from "./modules/";

const Routes: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={MAIN_PATH} component={Dashboard} />
        <Route
          exact
          path={CREATE_NOTEPAD}
          render={() => <Notepad createMode={true} />}
        />
        <Route exact path={NOTEPAD_BY_ID} component={Notepad} />
      </Switch>
    </MainLayout>
  );
};

export default Routes;
