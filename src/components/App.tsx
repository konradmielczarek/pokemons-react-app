import React, { Component } from 'react';

// COMPONENTS
import PokemonsList from './PokemonsList/PokemonsList';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Pagination from './Pagination/Pagination';
import Error from './Error/Error';
import Navbar from './Navbar/Navbar';
import ActionBar from './ActionBar/ActionBar';

// REACTSTRAP
import { Container } from 'reactstrap';

// MOBX
import { inject, observer } from 'mobx-react';

// TYPES
import { IAppStore } from '../stores/AppStore';

interface IProps {
  appStore?: IAppStore;
}

class App extends Component<IProps, {}> {
  async componentDidMount() {
    const { appStore } = this.props;

    await appStore!.getPokemons(appStore!.limit, 1);
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { appStore } = this.props;
    const text: string = e.target.value;

    appStore!.setSearchText(text);
    appStore!.setCurrentPage(1);
  };

  handlePageChange = (e: React.MouseEvent<HTMLElement>): void => {
    const { appStore } = this.props;
    const page: number = parseInt(e.currentTarget.dataset.page!);

    appStore!.setIsLoading(true);
    appStore!.setCurrentPage(page);
  };

  render() {
    const { appStore } = this.props;

    if (appStore!.isError) {
      console.log('error');
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
          {appStore!.isLoading ? (
            <div className="main-spinner-wrapper">
              <LoadingSpinner />
            </div>
          ) : (
              <>
                {!appStore!.totalCount ? (
                  <p>No results</p>
                ) : (
                    <PokemonsList />
                  )}
                {appStore!.totalCount > 0 && (
                  <Pagination
                    totalCount={appStore!.totalCount}
                    limit={appStore!.limit}
                    currentPage={appStore!.currentPage}
                    handleClickFn={this.handlePageChange}
                  />
                )}
              </>
            )}
        </Container>
      </>
    );
  }
}

export default inject('appStore')(observer(App));
