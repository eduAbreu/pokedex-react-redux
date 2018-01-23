import React from 'react'

import App from './components/layout';

import HomePage from './view/home';
import { Route, Router, IndexRoute } from 'react-router';

export default (
  <Route component={App} path="/">
    <IndexRoute component={HomePage} />
  </Route>
);
