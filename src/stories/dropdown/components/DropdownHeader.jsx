import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
function DropdownHeader({ dropdownIsOpen, dropdownIsOpenHandler, children }) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="dropdown-header" onClick={dropdownIsOpenHandler}>
      <p>
        { children }
        <span>
          {dropdownIsOpen ? <FaAngleUp /> : <FaAngleDown /> }
        </span>
      </p>
    </div>
  );
}

export default DropdownHeader;
