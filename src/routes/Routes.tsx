import React from 'react';
import { useRoutes } from 'react-router';
import Home from '../views/Home';
import Login from '../views/Login';
import User from '../views/User';

const RoutesElement = useRoutes([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path:
      }
    ]
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'user',
    element: <User/>
  }
]);
