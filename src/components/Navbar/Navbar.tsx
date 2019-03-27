import React, { Component } from 'react';

// IMAGE
import logoImage from '../../assets/images/pokemon-logo.svg.png';

// REACTSTRAP
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Form, Input } from 'reactstrap';

interface IProps {
  handleSearchFn: any
}

interface IState {
  isOpen: boolean
}

class NavBar extends Component<IProps, IState> {
  state = {
    isOpen: false
  };

  toggleNavbar = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="navbar-expand-sm" color="primary" dark>
        <NavbarBrand href="/">
          <img src={logoImage} alt="Pokemons" className="logo" />
        </NavbarBrand >
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Form inline className="my-2 my-lg-0 ml-auto">
            <Input
              type="search"
              placeholder="Search"
              onChange={this.props.handleSearchFn}
            />
          </Form>
        </Collapse>
      </Navbar>
    );
  }
};

export default NavBar;
