// React
import React from 'react';

// React Router
import { Outlet } from 'react-router-dom';

// Components
import { Header } from '../components/Header';
import { Wrapper } from '../components/Wrapper';

// Type
import { deviceSizeHeaderComponent } from '../types/headerType';

export default function RootLayout() {
  return (
    <React.Fragment>
      <Header size={deviceSizeHeaderComponent.MOBILE} />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </React.Fragment>
  );
}
