import React from 'react'
import PropTypes from 'prop-types';
import PokemonType from '../../PokemonType/PokemonType';

import { Container, Row, Col } from 'reactstrap';

const PokemonModalBody = ({ pokemon }) => {
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
            {pokemon.type.map((el, i) => (
              <PokemonType key={i} type={el} />
            ))}
          </ul>
        </Col>
        <Col xs="6">
          <h6>Weaknesses</h6>
          <ul className="list-unstyled d-flex justify-content-start flex-wrap m-0">
            {pokemon.weaknesses.map((el, i) => (
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

PokemonModalBody.propTypes = {
  pokemon: PropTypes.object.isRequired,
};


export default PokemonModalBody;
