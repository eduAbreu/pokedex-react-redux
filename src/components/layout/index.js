import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Jumbotron } from '../jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron loading={this.props.isFetching}/>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.pokemons.isFetching,
  };
}

export default connect(mapStateToProps, null)(App);
