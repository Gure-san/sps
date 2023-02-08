// React
import React from 'react';

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from '../layouts/RootLayout';
import HomeLayout from '../layouts/HomeLayout';

// Views
import Login from '../views/Login';
import User from '../views/User';
import FormGroup from '../views/FormGroup';
import AttendanceHistory from '../views/AttendanceHistory';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login/>
  },
  {
    element: <RootLayout />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            path: 'presensi',
            element: <FormGroup />,
          },
          {
            path: 'riwayat',
            element: <AttendanceHistory />,
          },
        ],
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
