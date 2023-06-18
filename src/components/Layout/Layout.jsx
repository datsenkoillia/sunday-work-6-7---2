import React from 'react';
import { Outlet } from 'react-router-dom';
// import { StyledNavLink } from './Layout.styled';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

