import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import Calendar from './Cal2/Calen.js';

const routes = [
        <Switch>
            <Route key={2} exact path='/'>
                <LandingPage />
            </Route>
            <Route key={0} path='/login'>
                <Login />
            </Route>,
            <Route key={1} path='/events'>
                <Calendar />
            </Route>,
        </Switch>
    ]

export default routes;