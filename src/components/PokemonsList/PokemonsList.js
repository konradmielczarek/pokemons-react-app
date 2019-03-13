import React, { Component } from 'react';
import PokemonType from '../PokemonType/PokemonType';
import PokemonModal from '../PokemonDetails/PokemonModal';

import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

import { inject, observer } from 'mobx-react';

class PokemonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemonData: {},
      isPokemonModalOpen: false,
    };
  }

  togglePokemonModal = () => {
    this.setState(({ isPokemonModalOpen: !this.state.isPokemonModalOpen }));
  }

  render() {
    const { pokemons } = this.props.store.appStore;
    const { selectedPokemonData, isPokemonModalOpen } = this.state;

    return (
      <>
        <PokemonModal
          pokemon={selectedPokemonData}
          isPokemonModalOpen={isPokemonModalOpen}
          toggle={this.togglePokemonModal}
        />
        <Row>
          {pokemons.map(pokemon => (
            <Col sm="6" md="4" lg="3" className="mb-4" key={pokemon.id}>
              <Card className="card pokemon-item" onClick={() => { this.togglePokemonModal(); this.setState({ selectedPokemonData: pokemon }); }}>
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
                    {pokemon.type.map((el, i) => (
                      <PokemonType key={i} type={el} />
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default inject('store')(observer(PokemonsList));
