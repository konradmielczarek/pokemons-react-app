import React from 'react';

// TYPES
import { TypeBadge } from '../../types/typeBadge';

interface IProps {
  type: TypeBadge
}

const PokemonType: React.FC<IProps> = ({ type }) => {
  return (
    <li className={`badge badge-${type.toLowerCase()} mr-1 mb-1`}>{type}</li>
  );
};

export default PokemonType;
