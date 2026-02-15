import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, ...rest }) => {
  
  const { user } = useSelector((state) => state.client);

  
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (user && user.token) || token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
