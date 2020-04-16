import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('component:', Component);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('propsB4IF', props);
        if (localStorage.getItem('token')) {
          console.log('propsIF', props);
          return <Component {...props} />;
        } else {
          console.log('propsELSE', props);
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
