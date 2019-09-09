import React from 'react';

import AppHeader from '../app-header';
import { HomePage } from '../pages';
import AddForm from '../add-form';

import './app.css';

const App = () => {
  return(
    <div className="app">
      <AppHeader/>
      <HomePage/>
      <AddForm/>
    </div>
  );
};

export default App;

