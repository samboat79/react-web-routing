import React from 'react';
import logo from './logo.svg';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import './App.css';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>samuel kofi Boateng</h2>

      <NavLink exact activeClassName="active" to="/">Home</NavLink><br />
      <NavLink activeClassName="active" to="/about">About</NavLink><br />
      <NavLink activeClassName="active" to="/contact">Contact</NavLink><br />


    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>

    </div>
  </Router>
  );
}

export default App;
