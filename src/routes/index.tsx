import React from 'react';
import { useRoutes } from 'react-router';
import Home from '../views/Home';
import Login from '../views/Login';
import User from '../views/User';

export function RouterElement() {
  const RoutesElement = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'user',
      element: <User />,
    },
  ]);

  return RoutesElement
}


