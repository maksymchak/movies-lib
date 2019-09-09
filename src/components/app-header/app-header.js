import React from 'react';

import './app-header.css';
import logo from './new-logo.png';

const AppHeader = () => {
  return(
    <header className="header">
      <a className="header-logo" href="#/">
        <img src={logo} className="img-responsive" alt="logo-movie"/>
      </a>
      <h1 className="header-title">Movies lib</h1>
    </header>
  );
};

export default AppHeader;