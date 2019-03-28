import axios from "axios";
import baseURL from '../utils/baseURL';

import { decorate, observable, action } from 'mobx';

import { Pokemon } from "../types/pokemon";

export interface IPokemonItemStore {
  pokemonId: number;
  pokemonData: Pokemon;
  isError: boolean;
  isLoading: boolean;

  getPokemon: (id: number) => void;
  setPokemonId: (id: number) => void;
}

export class PokemonItemStore implements IPokemonItemStore {
  pokemonId: number = 0;
  pokemonData = {} as Pokemon;
  isError: boolean = false;
  isLoading: boolean = false;

  getPokemon = async (id: number) => {
    this.isLoading = true;

    try {
      const result = await axios.get(`${baseURL}/pokemon/${id}`);

      if (result.status === 200) {
        this.pokemonData = result.data;
        this.isError = false;
        setTimeout(() => this.isLoading = false, 600);
      }
    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }

  setPokemonId = (id: number) => {
    this.pokemonId = id;

    this.getPokemon(this.pokemonId);
  }
}

decorate(PokemonItemStore, {
  pokemonId: observable,
  pokemonData: observable,
  isError: observable,
  isLoading: observable,
  setPokemonId: action
});