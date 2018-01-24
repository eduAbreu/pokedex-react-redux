import React, { Component } from 'react';
import { connect } from 'react-redux';

import PokemonList from '../../components/pokemon-list';
import SearchBar from '../../components/search';
import Pagination from '../../components/pagination';

class HomePage extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <SearchBar />
            <PokemonList/>
            <Pagination />
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
