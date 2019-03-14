import axios from "axios";
import { decorate, observable, action } from 'mobx';

const baseURL = "http://localhost:4000";

export default class AppStore {
  pokemons = [];
  totalCount = null;
  isError = false;
  isLoading = true;
  searchText = '';

  getPokemons = async (limit, page = 1, searchTxt = '', filter = '') => {
    try {
      const result = await axios.get(
        `${baseURL}/pokemon?_page=${page}&_limit=${limit}&name_like=${searchTxt}&type_like=${filter}`
      );

      this.pokemons = result.data;
      this.totalCount = parseInt(result.headers["x-total-count"]);
      this.isError = false;

    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }

  setSearchText = text => {
    this.searchText = text;
  }

  setIsLoading = isLoading => {
    this.isLoading = isLoading;
  }
}

decorate(AppStore, {
  pokemons: observable,
  totalCount: observable,
  isError: observable,
  isLoading: observable,
  searchText: observable,
  setSearchText: action,
  setIsLoading: action
});