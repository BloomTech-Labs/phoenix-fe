import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import Calendar from './Calendar/Calen.js';
import EventPage from './Event-Page.js';

const routes = [
  <Switch>
    <Route key={0} exact path="/">
      <LandingPage />
    </Route>
    <Route key={1} path="/login">
      <Login />
    </Route>
    ,<PrivateRoute key={2} path="/events" component={Calendar}></PrivateRoute>,
    <PrivateRoute
      key={3}
      path="/event/:id"
      component={EventPage}
    ></PrivateRoute>
  </Switch>,
];

export default routes;
