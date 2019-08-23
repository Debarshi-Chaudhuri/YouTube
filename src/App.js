import React from 'react';
import { Route,Switch,withRouter } from 'react-router-dom'
import './App.css';
import Home  from './components/Home.js';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/:id'  />
    </Switch>
  );
}

export default App;
