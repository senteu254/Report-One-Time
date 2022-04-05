import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import login from "./components/login";
import signup from "./components/signup";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import "./dbconnect";


//import express from 'express';


function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Pamojour</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={login} />
            <Route path="/sign-in" component={login} />
            <Route path="/sign-up" component={signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
