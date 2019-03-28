import React, { Component } from 'react'

// REACTSTRAP
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// MOBX
import { inject, observer } from 'mobx-react';

// TYPES
import { IAppStore } from '../../stores/AppStore';

type SortingOptions = {
  value: string,
  name: string
}

interface IProps {
  appStore?: IAppStore
}

interface IState {
  isOpen: boolean
}

class Dropdown extends Component<IProps, IState> {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(
    prevState => ({ isOpen: !prevState.isOpen })
  );

  onClickOption = (e: React.MouseEvent<HTMLElement>) => {
    const value: string = e.currentTarget.dataset.value!;

    this.props.appStore!.setOrderBy(value);
  };

  render () {
    const sortingOptions: SortingOptions[] = [
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
              active={this.props.appStore!.orderBy === option.value}
            >
              {option.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default inject('appStore')(observer(Dropdown));
