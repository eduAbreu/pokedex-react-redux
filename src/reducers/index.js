import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pokemonsReducer from './pokemons';

const rootReducer = combineReducers({
  routing: routerReducer,
  pokemons: pokemonsReducer
});

export default rootReducer;
