import React from 'react'

// COMPONENTS
import PokemonType from '../../PokemonType/PokemonType';

// REACTSTRAP
import { Container, Row, Col } from 'reactstrap';

// TYPES
import { Pokemon } from '../../../types/pokemon';
import { TypeBadge } from '../../../types/typeBadge';

interface IProps {
  pokemon: Pokemon
}

const PokemonModalBody: React.FC<IProps> = ({ pokemon }) => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-center">
        <img
          className="pokemon-image p-0 align-self-center mb-3"
          src={pokemon.img}
          alt="pokemon"
        />
      </div>
      <Row className="mb-2">
        <Col xs="6">
          <h6>Type</h6>
          <ul className="list-unstyled d-flex justify-content-start flex-wrap m-0">
            {pokemon.type.map((el: TypeBadge, i: number) => (
              <PokemonType key={i} type={el} />
            ))}
          </ul>
        </Col>
        <Col xs="6">
          <h6>Weaknesses</h6>
          <ul className="list-unstyled d-flex justify-content-start flex-wrap m-0">
            {pokemon.weaknesses.map((el: TypeBadge, i: number) => (
              <PokemonType key={i} type={el} />
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="6">
          <h6>Height</h6>
          {pokemon.height}
        </Col>
        <Col xs="6">
          <h6>Weight</h6>
          {pokemon.weight}
        </Col>
      </Row>
      {pokemon.avg_spawns > 0 ? (
        <Row className="mb-2">
          <Col xs="6">
            <h6>Average spawns</h6>
            {pokemon.avg_spawns}
          </Col>
          <Col xs="6">
            <h6>Spawn time</h6>
            {pokemon.spawn_time}
          </Col>
        </Row>
      ) : null}
    </Container>
  )
}

export default PokemonModalBody;
