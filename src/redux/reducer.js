import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';

export default combineReducers({
  articles,
  authUser,
  common,
  router: routerReducer,
});
