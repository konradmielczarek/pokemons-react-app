import React from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { inject, observer } from 'mobx-react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClickOption = e => {
    const { appStore } = this.props.store;
    const value = e.currentTarget.dataset.value;

    appStore.setOrderBy(value);
  }

  render() {
    const { appStore } = this.props.store;

    const sortingOptions = [
      {
        value: 'num',
        name: 'Sort by number'
      },
      {
        value: 'name',
        name: 'Sort by name'
      }
    ];

    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle caret outline color="primary">
          <i className="fas fa-sort-alpha-down"></i>
        </DropdownToggle>
        <DropdownMenu>
          {sortingOptions.map(option => (
            <DropdownItem
              key={option.value}
              data-value={option.value}
              onClick={this.onClickOption}
              active={appStore.orderBy === option.value}
            >
              {option.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default inject('store')(observer(Dropdown));
