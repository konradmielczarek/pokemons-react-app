import React from 'react';

// COMPONENTS
import PokemonType from '../PokemonType/PokemonType';

// REACTSTRAP
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

// TYPES
import { Pokemon } from '../../types/pokemon';
import { TypeBadge } from '../../types/typeBadge';

interface IProps {
  pokemon: Pokemon;
  toggleModalFn: () => void;
  onClickFn: any;
}

const PokemonItem: React.FC<IProps> = ({ pokemon, toggleModalFn, onClickFn }) => {
  return (
    <Col sm="6" md="4" lg="3" className="mb-4">
      <Card className="card pokemon-item" data-id={pokemon.id} onClick={(e) => { toggleModalFn(); onClickFn(e) }}>
        <CardImg
          className="pokemon-image align-self-center"
          src={pokemon.img}
          alt="pokemon"
        />
        <CardBody>
          <CardTitle className="text-center text-truncate">
            <h5>{`#${pokemon.num} ${pokemon.name}`}</h5>
          </CardTitle>
          <ul className="list-unstyled d-flex justify-content-center">
            {pokemon.type!.map((el: TypeBadge, i: number) => (
              <PokemonType key={i} type={el} />
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PokemonItem;
