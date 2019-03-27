import React from 'react';

interface IProps {
  type: string
}

const PokemonType: React.FC<IProps> = ({ type }) => {
  return (
    <li className={`badge badge-${type.toLowerCase()} mr-1 mb-1`}>{type}</li>
  );
};

export default PokemonType;
