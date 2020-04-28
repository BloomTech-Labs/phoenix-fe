import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import CTApage from './CTApage';
import Calendar from './Calendar/Calen.js';
import EventPage from './Event-Page.js';
import Dashboard from './Dashboard.js';

function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>,
        <PrivateRoute path="/dashboard" component={Dashboard} />,
        <Route path="/login">
          <Login />
        </Route>,
        <PrivateRoute path="/events" component={Calendar}></PrivateRoute>,
        <PrivateRoute
          path="/event/:id"
          component={EventPage}
        ></PrivateRoute>
        <Route path='/cta'>
            <CTApage />
        </Route>
      </Switch>
  )
}


export default Routes;
