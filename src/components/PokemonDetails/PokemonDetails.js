import React from "react";
import PropTypes from "prop-types";
import PokemonType from "../PokemonType/PokemonType";
// import PokemonEvolution from "../PokemonEvolution/PokemonEvolution";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PokemonDetails = ({ pokemon, isLoading }) => {
  const renderBody = () => {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <img
            className="pokemon-image p-0 align-self-center mb-3"
            src={pokemon.img}
            alt="pokemon"
          />
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <h6>Type</h6>
            <ul className="list-unstyled d-flex justify-content-start flex-wrap m-0">
              {pokemon.type.map((el, i) => (
                <PokemonType key={i} type={el} />
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h6>Weaknesses</h6>
            <ul className="list-unstyled d-flex justify-content-start flex-wrap m-0">
              {pokemon.weaknesses.map((el, i) => (
                <PokemonType key={i} type={el} />
              ))}
            </ul>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <h6>Height</h6>
            {pokemon.height}
          </div>
          <div className="col-6">
            <h6>Weight</h6>
            {pokemon.weight}
          </div>
        </div>
        {pokemon.avg_spawns > 0 ? (
          <div className="row mb-2">
            <div className="col-6">
              <h6>Average spawns</h6>
              {pokemon.avg_spawns}
            </div>
            <div className="col-6">
              <h6>Spawn time</h6>
              {pokemon.spawn_time}
            </div>
          </div>
        ) : null}
        {/* <div className="row">{renderEvolutions()}</div> */}
      </div>
    );
  };

  return (
    <div className="modal fade" id="pokemonModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {isLoading ? null : `#${pokemon.num} ${pokemon.name}`}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {isLoading ? (
              <div className="d-flex justify-content-center m-5">
                <LoadingSpinner />
              </div>
            ) : (
              renderBody()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default PokemonDetails;
