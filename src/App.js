import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './common/header/Header';
import HomeContainer from './pages/home/HomeContainer';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Redirect to="/" />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
