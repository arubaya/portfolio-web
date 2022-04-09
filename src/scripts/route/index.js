import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Page from '../views/pages';
import Header from '../views/components/Header';

function Router() {
  return (
    <Switch>

      {/* Dashborard Page */}
      <Route exact path="/">
          <Header />
          <Page.AboutPage />
      </Route>

      {/* <Route exact path="*">
        <Redirect from="*" to="/dashboard" />
      </Route> */}
    </Switch>
  );
}

export default Router;
