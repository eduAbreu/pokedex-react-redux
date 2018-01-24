import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  SEARCH_POKEMON
} from '../actions/';

export default function(state = {
  pokemons: [],
  searchedPokemons: [],
  isFetching: false,
  error: ''
}, action) {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_POKEMONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        pokemons: action.payload
      });
    case FETCH_POKEMONS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      });
    case SEARCH_POKEMON:
      const searchValue = action.payload;
      let searchResult = state.pokemons.filter(p => p.name.includes(searchValue));
      if (searchValue.length > 0 && searchResult.length === 0)
        searchResult = 'Not found!';
      return Object.assign({}, state, {
        searchedPokemons: searchResult
      });
  }

  return state;
}
