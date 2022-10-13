import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../components/P_Professores/nav/nav'

const Main = () => (
  <div className="bg-red-800 h-screen flex items-center">
    <Nav />
    <Outlet />
    Main comp
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
