// React
import React, { createContext, useReducer, useState } from 'react';

// React Router
import { RouterProvider } from 'react-router-dom';

// Router
import { router } from '../routes';

// Type
import {
  AppData,
  AppReducerPropType,
  APP_HANDLE_CASE,
} from '../types/components/appType';

// Context
import { RootData } from '../context';

const AppInitialState: AppData = {
  user: {
    name: null,
    class: null,
    phoneNumber: null,
    authenticated: false
  }
};

function reducer(state: AppData, { type, payload }: AppReducerPropType): AppData {
  switch (type) {
    case APP_HANDLE_CASE.USER.LOGIN:
      return {
        ...state,
        user: {
          name: payload.user?.name,
          class: payload.user?.class,
          phoneNumber: payload.user?.phoneNumber,
          authenticated: payload.user?.authenticated!
        }
      };

    default:
      return state;
  }
}

export default function App() {
  const [appData, setAppData] = useReducer(reducer, AppInitialState);
  return (
    <RootData.Provider value={{
      data: appData,
      dispatch: setAppData
    }}>
      <RouterProvider router={router} />
    </RootData.Provider>
  );
}
