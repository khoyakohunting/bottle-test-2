import React from 'react';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import More from './component/moreinfo';
import Final from './component/final';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/more'} className="nav-link">Contact</Link></li>
        <li><Link to={'/final'} className="nav-link">About</Link></li>
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/more' component={More} />
          <Route path='/final' component={Final} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
