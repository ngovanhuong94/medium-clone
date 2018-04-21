import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleView from './components/ArticleView';
import Editor from './components/Editor';
import Feed from './components/Feed';
import Header from './components/Header';
import Profile from './components/Profile';
import requireAuthentication from './utils/requireAuth';
import SignInWith from './components/SignInWith';

const App = () => {
  const { pathname } = window.location;
  return (
    <div>
      { !pathname.includes('editor') ? <Header /> : '' }
      <SignInWith />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/articleview/:id" component={ArticleView} />
        <Route path="/editor" component={requireAuthentication(Editor)} />
        <Route path="**" component={Feed} />
      </Switch>
    </div>
  );
};

export default App;
