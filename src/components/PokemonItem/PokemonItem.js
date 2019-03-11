import React from 'react';
import PropTypes from 'prop-types';
import PokemonType from '../PokemonType/PokemonType';

const PokemonItem = ({ onClick, name, image, types, num, id }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card pokemon-item"
        id={id}
        onClick={onClick}
        data-toggle="modal"
        data-target="#pokemonModal"
      >
        <img
          className="card-img-top pokemon-image align-self-center"
          src={image}
          alt="pokemon"
        />
        <div className="card-body">
          <h5 className="card-title text-center text-truncate">{`#${num} ${name}`}</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            {types.map((el, i) => (
              <PokemonType key={i} type={el} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  num: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default PokemonItem;
