import React, { Component } from 'react';
import { connect } from 'react-redux';

import PokemonList from '../../components/pokemon-list';
import SearchBar from '../../components/search';
import Pagination from '../../components/pagination';

const Jumbotron = (props) => {
  const isLoading = props.loading ? 'loading' : '';
  return (
    <div className="jumbotron-container">
      <div className="container-fluid">
        <h1 className="text-center">Pokémons</h1>
        <img className={`img-responsive ${isLoading}`} src="/svgs/pokeball.svg" />
      </div>
    </div>
  );
}

class HomePage extends Component {

  render() {
    return (
      <div>
        <Jumbotron loading={this.props.isFetching}/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <SearchBar />
              <PokemonList/>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    isFetching: state.pokemons.isFetching,
  };
}

export default connect(mapStateToProps, null)(HomePage);
