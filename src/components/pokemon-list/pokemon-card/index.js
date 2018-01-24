import React, { Component } from 'react';

import './pokemon-card.styl';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      sprites,
      id,
      types
    } = this.props.pokemon;

    return (
      <div className="pokemon-card-component">
        <div className="pokemon-card-component_header">
          <img
            src={sprites.front_default}
            alt={name}
            className="pokemon-card-component_image" />
        </div>
        <div className="pokemon-card-component_body">
          <h4 className="pokemon-card-component_name">{name} - <span className="pokemon-card-component_number">#{id}</span></h4>
          <ul className="list pokemon-card-component_types">
            {
              types.map(type =>
                <li className={`pokemon-card-component_type pokemon-card-component_type-${type.type.name}`} key={`${name}-${type.type.name}`}>{type.type.name}</li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
