import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import PokemonCard from './pokemon-card';

import * as actions from '../../actions';
import './pokemon-list.styl';

class PokemonList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchPokemons();
  }

  printList(list) {
    return (
      list.map((pokemon, index) =>
        <li
          key={`${pokemon.name}-${index}`}
          className="pokemon-list-component_card">
          <Link to={`/pokemon/${pokemon.name}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        </li>
      )
    )
  }

  render() {
    const {
      pokemons,
      isFetching,
      searchResult
    } = this.props;

    if (isFetching) {
      return (<div></div>)
    }

    return (
      <div className="pokemon-list-component">
        <ul className="list">
          {
            typeof searchResult === 'string' ?
              <p className="search-not_found">{searchResult}</p> :
              (
                searchResult.length > 0 ?
                  this.printList(searchResult) :
                  this.printList(pokemons)
              )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons,
    isFetching: state.pokemons.isFetching,
    searchResult: state.pokemons.searchedPokemons
  };
}

export default connect(mapStateToProps, actions)(PokemonList);
