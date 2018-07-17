import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Homepage from "../pages/homepage";
import Developers from '../pages/developers';
import Header from './Header';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/developers" component={Developers} />
            <Route path="/books/:id" component={Homepage} />
          </div>
        </BrowserRouter>
      
    );
  };
};

export default connect(null, actions)(App);

