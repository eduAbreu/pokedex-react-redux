import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import './profile.styl';

class PokemonProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPokemon(this.props.params.id);
  }

  renderEvolutions() {
    const { evolution } = this.props;
    let evolutions = [evolution.chain.species.name];

    if (evolution.chain.evolves_to.length > 0) {
      evolutions.push(evolution.chain.evolves_to[0].species.name);
      if (evolution.chain.evolves_to[0].evolves_to.length > 0) {
        evolutions.push(evolution.chain.evolves_to[0].evolves_to[0].species.name);
      }
    }

    if (evolutions.length > 1) {
      return (
        <div className="pokemon-profile-evolutions">
          <h4>Evolutions</h4>
          <ul className="list evolution-details">
            {
              evolutions.map((ev, index) => {
                  return (
                    <li key={`${ev}-${index}`}>
                      {
                        (index < evolutions.length - 1) ?
                          (
                            <p>
                              <span>{ev}</span>
                              <span className="glyphicon glyphicon-chevron-down"></span>
                            </p>
                          ) : (
                            <span>{ev}</span>
                          )
                      }
                    </li>
                  )
              })
            }
          </ul>
        </div>
      )
    }
  }

  render() {
    const {
      name,
      sprites,
      id,
      weight,
      height,
      types
    } = this.props.pokemon;
    const image = sprites ? sprites.front_default : '';
    if (this.props.isFetching) {
      return (<div></div>)
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4 pokemon-profile-card">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h1>{name} - <span>{id}</span></h1>
                <img src={image} />
              </div>
              <div className="col-xs-12">
                <div className="pokemon-profile-details">
                  <p>{`Weight: ${weight} / Height: ${height}`}</p>
                  <ul className="list pokemon_types">
                    {
                      typeof types !== 'undefined' ? types.map(type =>
                        <li className={`pokemon_type pokemon_type-${type.type.name}`} key={`${name}-${type.type.name}`}>{type.type.name}</li>
                      ) : null
                    }
                  </ul>
                </div>
                {
                  !_.isEmpty(this.props.evolution) ? this.renderEvolutions() : null
                }
              </div>
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
    pokemon: state.pokemons.pokemon,
    evolution: state.pokemons.evolution
  };
}

export default connect(mapStateToProps, actions)(PokemonProfile);
