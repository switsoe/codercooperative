import React, { Component } from "react";
import './App.css';
import API from './utils/API';
import Homepage from "./pages/homepage";
import Developers from './pages/developers';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


class App extends Component {
  state = {
    userSignedIn: false
  }

  // componentDidMount() {
  //   API.currentUser();
  // }
  
  render() {
    return (
      <Router>
    <div>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/developers" component={Developers} />
        <Route path="/books/:id" component={Homepage} />
        {/* <Route component={Homepage} /> */}
      </Switch>
    </div>
  </Router>
    );
  };
  
};

export default App;

