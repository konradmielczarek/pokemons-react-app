import React, { Component } from 'react';
import PokemonsList from './PokemonsList/PokemonsList';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Pagination from './Pagination/Pagination';
import Error from './Error/Error';
import Navbar from './Navbar/Navbar';
import ActionBar from './ActionBar/ActionBar';

import { Container } from 'reactstrap';

import { inject, observer } from 'mobx-react';

class App extends Component {
  async componentDidMount() {
    const { appStore } = this.props.store;

    await appStore.getPokemons(appStore.limit, 1);

    appStore.setIsLoading(false);
  }

  handleSearch = async e => {
    const { appStore } = this.props.store;

    appStore.setSearchText(e.target.value);
    appStore.setCurrentPage(1);
  };

  handleClick = async e => {
    const { appStore } = this.props.store;
    const page = parseInt(e.currentTarget.dataset.page);

    appStore.setCurrentPage(page);
    appStore.setIsLoading(true);

    await appStore.getPokemons(appStore.limit, page, appStore.searchText, appStore.orderBy);

    appStore.setIsLoading(false);
  };

  togglePokemonModal = () => {
    this.setState(({ isPokemonModalOpen: !this.state.isPokemonModalOpen }));
  }

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
          <ActionBar />
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
                    limit={appStore.limit}
                    currentPage={appStore.currentPage}
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
