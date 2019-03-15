import axios from "axios";
import baseURL from '../utils/baseURL';

import { decorate, observable, action } from 'mobx';

export default class AppStore {
  pokemons = [];
  totalCount = null;
  isError = false;
  isLoading = true;
  searchText = '';
  orderBy = 'num';
  currentPage = 1;
  limit = 20;

  getPokemons = async (limit, page = 1, searchTxt = '', orderBy = '') => {
    try {
      const result = await axios.get(
        `${baseURL}/pokemon?_page=${page}&_limit=${limit}&name_like=${searchTxt}&_sort=${orderBy}&_order=asc`
      );

      this.pokemons = result.data;
      this.totalCount = parseInt(result.headers["x-total-count"]);
      this.isError = false;

    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }

  setCurrentPage = async page => {
    this.currentPage = page;
  }

  setSearchText = async text => {
    this.searchText = text;

    await this.getPokemons(this.limit, 1, this.searchText, this.orderBy);
  }

  setIsLoading = isLoading => {
    this.isLoading = isLoading;
  }

  setOrderBy = async option => {
    this.orderBy = option;

    await this.getPokemons(this.limit, this.currentPage, this.searchText, this.orderBy);
  }
}

decorate(AppStore, {
  pokemons: observable,
  totalCount: observable,
  isError: observable,
  isLoading: observable,
  searchText: observable,
  orderBy: observable,
  currentPage: observable,
  limit: observable,
  getPokemons: action,
  setCurrentPage: action,
  setSearchText: action,
  setIsLoading: action,
  setOrderBy: action,
});