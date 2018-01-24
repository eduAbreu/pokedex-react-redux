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

  renderPaginationLinks() {
    const { currentPage } = this.state;
    return [1, 2, 3, 4].map((el, index) =>
      <li
        key={`${el}-${index}`}
        className="page-item">
        <a
          className="page-link"
          href="#"
          disabled={currentPage === index}
          onClick={event => this.goToPage(index)}>
          {el}
        </a>
      </li>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      <div
        className="pagination-component"
        disabled={isFetching}>
        <nav>
          <ul className="pagination">
            {this.renderPaginationLinks()}
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
