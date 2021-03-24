import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './components/Add';
import List from './components/List';
import Edit from './components/Edit';

export default function App() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <div className="main-container">
        <h1 className="main-title">Services list:</h1>
        <Switch>
          <Route exact path='/services' render={() =>
            <>
              <Add />
              <List />
            </>
          } />
          <Route path="/services/:id([0-9]+)?" component={Edit} />
        </Switch>
      </div>
    </Router>

  );
}