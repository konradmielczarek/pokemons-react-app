import React, { Component } from 'react';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Pagination from './Pagination/Pagination';
import Error from './Error/Error';
import Navbar from './Navbar/Navbar';

import { Container } from 'reactstrap';

import { inject, observer } from 'mobx-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      limit: 20,
    }
  }

  async componentDidMount() {
    const { appStore } = this.props.store;

    await appStore.getPokemons(appStore.limit, 1);

    appStore.setIsLoading(false);
  }

  handleSearch = async e => {
    const { appStore } = this.props.store;

    appStore.setSearchText(e.target.value);
    this.setState({ currentPage: 1 });

    await appStore.getPokemons(this.state.limit, 1, appStore.searchText);
  };

  handleClick = async e => {
    let result;
    const { appStore } = this.props.store;
    const page = parseInt(e.currentTarget.dataset.page);

    this.setState({ currentPage: page });
    appStore.setIsLoading(true);

    if (!appStore.searchText) {
      result = await appStore.getPokemons(this.state.limit, page);
    } else {
      result = await appStore.getPokemons(this.state.limit, page, appStore.searchText);
    }

    appStore.setIsLoading(false);
  };

  render() {
    const { appStore } = this.props.store;

    if (appStore.isError) {
      return (
        <Container className="mt-5">
          <Error />
        </Container>
      );
    }

    return (
      <>
        <Navbar handleSearchFn={this.handleSearch} />
        <Container className="mt-5">
          {appStore.isLoading ? (
            <div className="main-spinner-wrapper">
              <LoadingSpinner />
            </div>
          ) : (
              <>
                {!appStore.totalCount ? (
                  <p>No results</p>
                ) : (
                    <PokemonsList />
                  )}
                {appStore.totalCount > 0 && (
                  <Pagination
                    totalCount={appStore.totalCount}
                    limit={this.state.limit}
                    currentPage={this.state.currentPage}
                    handleClickFn={this.handleClick}
                  />
                )}
              </>
            )}
        </Container>
      </>
    );
  }
}

export default inject('store')(observer(App));
