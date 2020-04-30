import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import LandingPage from '../Landing/LandingPage.js';
import Login from '../Authorized/Login.js';
import CTApage from '../Landing/CTApage';
import Calendar from '../Calendar/Calen.js';
import EventPage from '../Nav/Event-Page.js';
import Dashboard from '../RegisteredDash/Dashboard.js';
import Event from '../RegisteredEvents/AllEvents'

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
        <Route path='/list' component={Event}></Route>
      </Switch>
  )
}


export default Routes;
