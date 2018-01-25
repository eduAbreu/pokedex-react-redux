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

export function fetchPokemons(page = 0) {
  return dispatch => {
    dispatch(requestFetchPokemons());

    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=6&offset=${page * 10}`)
    .then(response => {
      const getAllPokemon = response.data.results.map(pokemon => getPokemon(pokemon.url));
      Promise.all(
        response.data.results.map(pokemon => getPokemon(pokemon.url))
      ).then(pokemons => dispatch(receiveFetchPokemons(pokemons)))
      .catch(error => dispatch(errorFetchPokemons(error.message)));
    }).catch(error =>
      dispatch(errorFetchPokemons(error.message))
    );

  }
}

function getPokemon(url) {
  return axios.get(url)
              .then(response => response.data)
              .catch(error => 'Error');
}

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

function requestFetchPokemon() {
  return {
    type: FETCH_POKEMON_REQUEST,
  }
}

function receiveFetchPokemon(pokemon, evolution) {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: {
      pokemon,
      evolution
    }
  }
}

function errorFetchPokemon(message) {
  return {
    type: FETCH_POKEMON_ERROR,
    payload: message
  }
}

function getPokemonEvolution(url) {
  return axios.get(url)
              .then(response => response.data)
              .catch(error => 'Error');
}

function getPokemonSpecies(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
              .then(response => getPokemonEvolution(response.data.evolution_chain.url))
              .catch(error => 'Error');
}

export function fetchPokemon(id) {
  return dispatch => {
    dispatch(requestFetchPokemon());

    getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resPokemon => {
      getPokemonSpecies(resPokemon.id)
      .then(resEvolution => {
        dispatch(receiveFetchPokemon(resPokemon, resEvolution));
      })
      .catch(error => {
        dispatch(errorFetchPokemon(error.message));
      });
    }).catch(error => {
      dispatch(errorFetchPokemon(error.message));
    });;
  }
}

export const SEARCH_POKEMON = 'SEARCH_POKEMON';

export function searchPokemon(value) {
  return {
    type: SEARCH_POKEMON,
    payload: value
  }
}
