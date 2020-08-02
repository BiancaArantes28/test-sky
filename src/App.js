import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './common/header/Header';
import HomeContainer from './pages/home/HomeContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
