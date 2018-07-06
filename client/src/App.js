import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Homepage from './components/Hompage';
import Info from './components/info';
import Work from './components/work';
import Form from './components/form';

const App = () => (
  <div>
    <Homepage />
    <Jumbotron />
    <Info />
    <Work />
    <Form />
  </div>
);

export default App;
