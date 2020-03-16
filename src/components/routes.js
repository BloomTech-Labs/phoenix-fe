import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login.js';

const routes = [
        <Route
            path='/login' 
            render={props => (
                <Login
                    {...props}
                />
            )}
        />
    ]

export default routes;