import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { store, history } from './redux/store';

import { getUser } from './redux/actions/actions';
import './assets/medium.css';

if (localStorage.Auth) {
  store.dispatch({ type: 'SET_USER', user: JSON.parse(localStorage.Auth) });

  const { _id } = JSON.parse(localStorage.Auth);
  getUser(_id).then((res) => {
    store.dispatch({ type: 'SET_USER', user: res });
  });
}

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'),
);
registerServiceWorker();
