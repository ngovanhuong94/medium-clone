import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducer';

export const history = createHistory();

// const myRouterMiddleware = routerMiddleware(history);

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
