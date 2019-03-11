import React, { Component } from 'react';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Pagination from './Pagination/Pagination';
import Error from './Error/Error';
import Navbar from './Navbar/Navbar';
import { getPokemons, searchPokemons } from '../api/requests';

class App extends Component {
  state = {
    pokemons: [],
    isLoading: true,
    isError: false,
    totalCount: null,
    searchText: '',
    currentPage: 1,
    limit: 20
  };

  handleSearch = async e => {
    const { limit } = this.state;

    this.setState({
      searchText: e.target.value,
      currentPage: 1,
      isError: false
    });

    try {
      const result = await searchPokemons(e.target.value, limit);

      this.setState({
        pokemons: result.data,
        totalCount: result.totalCount
      });
    } catch (e) {
      console.error(e);
      this.setState({ isError: true });
    }
  };

  handleClick = async e => {
    const { limit, searchText } = this.state;

    this.setState({
      isLoading: true,
      isError: false,
      currentPage: parseInt(e.currentTarget.id)
    });

    try {
      let result;

      if (!searchText) {
        result = await getPokemons(limit, e.currentTarget.id);
      } else {
        result = await searchPokemons(searchText, limit, e.currentTarget.id);
      }

      this.setState({
        pokemons: result.data,
        totalCount: result.totalCount,
        isLoading: false
      });
    } catch (e) {
      console.error(e);
      this.setState({ isError: true });
    }
  };

  async componentDidMount() {
    try {
      const { limit } = this.state;
      const result = await getPokemons(limit, 1);

      this.setState({
        pokemons: result.data,
        isLoading: false,
        totalCount: result.totalCount
      });
    } catch (e) {
      console.error(e);
      this.setState({ isError: true });
    }
  }

  render() {
    const { pokemons, totalCount, limit, currentPage, isError } = this.state;

    if (isError) {
      return (
        <div className="container mt-5">
          <Error />
        </div>
      );
    }

    return (
      <>
        <Navbar handleSearchFn={this.handleSearch} />
        <div className="container mt-5">
          {this.state.isLoading ? (
            <div className="main-spinner-wrapper">
              <LoadingSpinner />
            </div>
          ) : (
              <>
                {!totalCount ? (
                  <p>No results</p>
                ) : (
                    <PokemonsList pokemons={pokemons} />
                  )}
                {totalCount > 0 && (
                  <Pagination
                    totalCount={totalCount}
                    limit={limit}
                    currentPage={currentPage}
                    handleClickFn={this.handleClick}
                  />
                )}
              </>
            )}
        </div>
      </>
    );
  }
}

export default App;
