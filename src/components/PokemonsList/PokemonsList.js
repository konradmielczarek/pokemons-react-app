import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem/PokemonItem';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { getPokemon } from '../../api/requests';

class PokemonsList extends Component {
  state = {
    selectedPokemonId: '',
    selectedPokemonData: {},
    isLoading: true
  };

  /*
    Make API get request to retrieve
    the specific pokemon's data with given id
  */

  retrievePokemonData = async id => {
    this.setState({ isLoading: true });

    try {
      const result = await getPokemon(id);

      this.setState({ selectedPokemonData: result, isLoading: false });
    } catch (e) {
      console.error(e);
    }
  };

  /*
    Get pokemon id from event
    Pass the id to component's state
    Call the function making API get request
  */

  getPokemonId = e => {
    const pokemonId = e.currentTarget.id;

    this.setState({ selectedPokemonId: pokemonId });
    this.retrievePokemonData(pokemonId);
  };

  render() {
    const { pokemons } = this.props;
    const { selectedPokemonData, isLoading } = this.state;

    return (
      <>
        <PokemonDetails pokemon={selectedPokemonData} isLoading={isLoading} />
        <div className="row">
          {pokemons.map(pokemon => (
            <PokemonItem
              onClick={this.getPokemonId}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.img}
              types={pokemon.type}
              num={pokemon.num}
              id={pokemon.id}
            />
          ))}
        </div>
      </>
    );
  }
}

PokemonsList.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default PokemonsList;
