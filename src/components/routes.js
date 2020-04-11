import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import Calendar from './Cal2/Calen.js';
<<<<<<< HEAD
// import CalendarSearch from './Calendar/CalendarSearch.js';
// import EReg from './EReg/EReg.js';
=======
import EReg from './EReg/EReg.js';
>>>>>>> b0b7a6db54fd45040b45ce6f115ba1b23b4c5496

const routes = [
        <Switch>
            <Route key={0} exact path='/'>
                <LandingPage />
            </Route>
            <Route key={1} path='/login'>
                <Login />
            </Route>,
            <Route key={2} path='/events'>
                <Calendar />
            </Route>
            {/* <Route key={4} path='/events'>
                <EReg/>
            </Route> */}
        </Switch>
    ]

export default routes;