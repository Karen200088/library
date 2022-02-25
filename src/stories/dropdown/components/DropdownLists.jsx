import React from 'react';
import { CSSTransition } from 'react-transition-group';

// eslint-disable-next-line react/prop-types
function DropdownList({ children, dropdownIsOpen }) {
  return (
    <CSSTransition
      in={dropdownIsOpen}
      timeout={200}
      unmountOnExit
    >
      <ul className="dropdown-list">
        {children}
      </ul>
    </CSSTransition>
  );
}

export default DropdownList;
