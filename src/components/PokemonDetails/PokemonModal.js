import React from 'react';
import PropTypes from 'prop-types';
// import PokemonEvolution from '../PokemonEvolution/PokemonEvolution';
import PokemonModalBody from './PokemonModalBody/PokemonModalBody';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const PokemonModal = ({ pokemon, isPokemonModalOpen, toggle }) => {
  const toggleFn = () => {
    toggle();
  }

  return (
    <Modal isOpen={isPokemonModalOpen} toggle={toggleFn} id="pokemonModal">
      <ModalHeader toggle={toggleFn}>
        {`#${pokemon.num} ${pokemon.name}`}
      </ModalHeader>
      <ModalBody >
        <PokemonModalBody pokemon={pokemon} />
      </ModalBody>
    </Modal>
  );
};

PokemonModal.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonModal;
