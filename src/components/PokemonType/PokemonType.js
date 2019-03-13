import React from 'react';
import PropTypes from 'prop-types';

const PokemonType = ({ type }) => {
  return (
    <li className={`badge badge-${type.toLowerCase()} mr-1 mb-1`}>{type}</li>
  );
};

PokemonType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PokemonType;
