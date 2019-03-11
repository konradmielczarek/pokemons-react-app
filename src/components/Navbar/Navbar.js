import React from "react";
import logoImage from "../../assets/images/pokemon-logo.svg.png";

const Navbar = ({ handleSearchFn }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <img src={logoImage} alt="Pokemons" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            onChange={handleSearchFn}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
