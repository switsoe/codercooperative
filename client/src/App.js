import React from "react";
import './App.css';
import Homepage from "./pages/homepage";
import Developers from './pages/developers';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


const App = () => (
  <Router>
    <div>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/developers" component={Developers} />
        <Route path="/books/:id" component={Homepage} />
        <Route path="/" exact component={Homepage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default App;

