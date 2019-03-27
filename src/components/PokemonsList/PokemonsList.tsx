import React, { Component } from 'react';

// COMPONENTS
import PokemonType from '../PokemonType/PokemonType';
import CustomModal from '../CustomModal/CustomModal';
import PokemonModalBody from '../CustomModal/ModalsBodies/PokemonModalBody';

// REACTSTRAP
import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

// MOBX
import { inject, observer } from 'mobx-react';

// TYPES
import { IAppStore } from '../../stores/AppStore';
import { Pokemon } from '../../types/pokemonType';

interface IProps {
  appStore?: IAppStore
}

interface IState {
  pokemonData: Pokemon,
  isPokemonModalOpen: boolean
}

class PokemonsList extends Component<IProps, IState> {
  state = {
    pokemonData: {} as Pokemon,
    isPokemonModalOpen: false
  };

  togglePokemonModal = (): void => {
    this.setState(({ isPokemonModalOpen: !this.state.isPokemonModalOpen }));
  }

  render() {
    const { pokemons } = this.props.appStore!;
    const { pokemonData, isPokemonModalOpen } = this.state;

    return (
      <>
        <CustomModal
          header={`#${pokemonData.num} ${pokemonData.name}`}
          body={<PokemonModalBody pokemon={pokemonData} />}
          isPokemonModalOpen={isPokemonModalOpen}
          toggle={this.togglePokemonModal}
        />
        <Row>
          {pokemons.map(pokemon  => (
            <Col sm="6" md="4" lg="3" className="mb-4" key={pokemon.id}>
              <Card className="card pokemon-item" onClick={() => { this.togglePokemonModal(); this.setState({ pokemonData: pokemon }); }}>
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
                    {pokemon.type!.map((el: string, i: number) => (
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

export default inject('appStore')(observer(PokemonsList));
