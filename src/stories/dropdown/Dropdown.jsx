import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';
import DropdownHeader from './components/DropdownHeader';
import DropdownList from './components/DropdownLists';
import DropdownListItem from './components/DropdownListItem';

/**
 * Dropdowns are toggleable, contextual overlays for displaying lists of links and more.
 */
// eslint-disable-next-line import/prefer-default-export
export function Dropdown({
  // eslint-disable-next-line no-unused-vars
  variant, ...props
}) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const variantClass = `dropdown-${variant}`;

  const dropdownIsOpenHandler = () => {
    setDropdownIsOpen((prevState) => !prevState);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div
        className={['dropdown', `${variantClass}`].join(' ')}
        style={{ width: '200px' }}
      >
        <DropdownHeader
          dropdownIsOpen={dropdownIsOpen}
          dropdownIsOpenHandler={dropdownIsOpenHandler}
        >
          Dropdown
        </DropdownHeader>

        <DropdownList dropdownIsOpen={dropdownIsOpen}>
          <DropdownListItem>Lorem 1</DropdownListItem>
          <DropdownListItem>Lorem 2</DropdownListItem>
          <DropdownListItem>Lorem 3</DropdownListItem>
          <DropdownListItem>Lorem 4</DropdownListItem>
        </DropdownList>

        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </div>

    </>
  );
}

Dropdown.propTypes = {
  /**
   * Variant of Dropdown
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['dark', 'light']).isRequired,

};
