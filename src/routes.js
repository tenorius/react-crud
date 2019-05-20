import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const MainRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
      <Switch>
        <Route path="/callback" render={props => <Callback {...props} />} />
        <Route path="/" render={props => <Home auth={auth} {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
