import axios from 'axios';

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';

function requestFetchPokemons() {
  return {
    type: FETCH_POKEMONS_REQUEST,
  }
}

function receiveFetchPokemons(result) {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: result
  }
}

function errorFetchPokemons(message) {
  return {
    type: FETCH_POKEMONS_ERROR,
    payload: message
  }
}

export function fetchPokemons() {
  return dispatch => {
    dispatch(requestFetchPokemons());

    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=5')
    .then(response => {
      Promise.all(
        response.data.results.map(pokemon =>
          new Promise(res => res(fetchPokemon(pokemon.url)))
        )
      ).then(pokemons => dispatch(receiveFetchPokemons(pokemons)));
    }).catch(error =>
      dispatch(errorFetchPokemons(error.message))
    );

  }
}

function fetchPokemon(url) {
  return axios.get(url).then(response => response.data).catch(error => 'Error');
}

export const SEARCH_POKEMON = 'SEARCH_POKEMON';

export function searchPokemon(value) {
  return {
    type: SEARCH_POKEMON,
    payload: value
  }
}
