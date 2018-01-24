import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './search-bar.styl';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.searchPokemon(term);
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div
        className="search-bar-component"
        disabled={isFetching}>
        <input
          className="form-control"
          value={this.state.term}
          placeholder="Search Pokémon"
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.pokemons.isFetching,
  };
}

export default connect(mapStateToProps, actions)(SearchBar);
