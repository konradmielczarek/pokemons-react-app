import React from 'react';
import logoImage from '../../assets/images/pokemon-logo.svg.png';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Form, Input } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
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

NavBar.propTypes = {
  handleSearchFn: PropTypes.func.isRequired,
}

export default NavBar;
