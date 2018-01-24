import React from 'react'

import App from './components/layout';

import HomePage from './view/home';
import PokemonProfile from './view/pokemon/profile';

import { Route, Router, IndexRoute } from 'react-router';

export default (
  <Route component={App} path="/">
    <IndexRoute component={HomePage} />
    <Route path="/pokemon/:id" component={PokemonProfile}/>
  </Route>
);
