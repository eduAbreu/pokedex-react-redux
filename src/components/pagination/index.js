import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './pagination.styl';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numPages: 2
    }
  }

  goToPage(page) {
    this.props.fetchPokemons(page);
		this.setState({ currentPage: page })
	}

  render() {
    const { currentPage } = this.state;
    const { isFetching } = this.props;

    return (
      <div
        className="pagination-component"
        disabled={isFetching}>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                disabled={currentPage === 0}
                onClick={event => this.goToPage(0)}>
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                disabled={currentPage === 1}
                onClick={event => this.goToPage(1)}>
              2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.pokemons.isFetching
  };
}

export default connect(mapStateToProps, actions)(Pagination);
