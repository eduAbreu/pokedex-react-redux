import React from 'react';
import { Link } from 'react-router';

export const Jumbotron = (props) => {
  const isLoading = props.loading ? 'loading' : '';
  return (
    <div className="jumbotron-container">
      <div className="container-fluid">
        <Link to='/'>
          <h1 className="text-center">Pokémons</h1>
        </Link>
        <img className={`img-responsive ${isLoading}`} src="/svgs/pokeball.svg" />
      </div>
    </div>
  );
}
