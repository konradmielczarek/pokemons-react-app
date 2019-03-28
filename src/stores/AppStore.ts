import axios from "axios";
import baseURL from '../utils/baseURL';

import { decorate, observable, action } from 'mobx';

import { Pokemon } from '../types/pokemon';

export interface IAppStore {
  pokemons: Pokemon[];
  totalCount: number;

  isError: boolean;
  isLoading: boolean;

  searchText: string;
  orderBy: string;

  currentPage: number;
  limit: number;

  getPokemons(limit: number, page: number, searchTxt?: string, orderBy?: string ): void;
  setCurrentPage(page: number): void;
  setSearchText(text: string): void;
  setIsLoading(isLoading: boolean): void;
  setOrderBy(opiton: string): void;
}

export class AppStore implements IAppStore {
  public pokemons: Pokemon[] = [];
  public totalCount: number = 0;

  public isError: boolean = false;
  public isLoading: boolean = true;

  public searchText: string = '';
  public orderBy: string = 'num';

  public currentPage: number = 1;
  public limit: number = 20;

  getPokemons = async (limit: number, page: number = 1, searchTxt: string = '', orderBy: string = '') => {
    try {
      const result = await axios.get(
        `${baseURL}/pokemon?_page=${page}&_limit=${limit}&name_like=${searchTxt}&_sort=${orderBy}&_order=asc`
      );

      this.pokemons = result.data;
      this.totalCount = parseInt(result.headers["x-total-count"]);
      this.isLoading = false;
      this.isError = false;
    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }

  setCurrentPage = (page: number) => {
    this.currentPage = page;

    this.getPokemons(this.limit, page, this.searchText, this.orderBy);
  }

  setSearchText = (text: string) => {
    this.searchText = text;

    this.getPokemons(this.limit, 1, this.searchText, this.orderBy);
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  }

  setOrderBy = (option: string) => {
    this.orderBy = option;

    this.getPokemons(this.limit, this.currentPage, this.searchText, this.orderBy);
  }

  // reaction = reaction(
  //   () => this.searchText,
  //   text => {
  //     this.getPokemons(this.limit, 1, text, this.orderBy);
  //     console.log(text);
  //   }
  // );
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
  setOrderBy: action
});