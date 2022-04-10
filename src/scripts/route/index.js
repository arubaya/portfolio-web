import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Page from '../views/pages';
import * as Component from '../views/components';

function Router() {
  return (
    <Switch>
      {/* About Page */}
      <Route exact path="/">
          <Component.Header />
          <Page.AboutPage />
      </Route>

      {/* Projects Page */}
      <Route exact path="/projects">
          <Component.Header />
          <Page.ProjectPage />
      </Route>

      {/* Experience Page */}
      <Route exact path="/experience">
          <Component.Header />
          <Page.ExperiencePage />
      </Route>

      {/* <Route exact path="*">
        <Redirect from="*" to="/dashboard" />
      </Route> */}
    </Switch>
  );
}

export default Router;
