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
        return (
            <div className="search-bar-component">
                <input
                    className="form-control"
                    value={this.state.term}
                    placeholder="Search Pokémon"
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default connect(null, actions)(SearchBar);
